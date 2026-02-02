import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Github, Lightbulb, Rocket, ChevronLeft, ChevronRight } from "lucide-react";
import { Project } from "@/types/project";
import { Button } from "./ui/button";
import { useState } from "react";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden";
      setCurrentMediaIndex(0);
      
      // Focus the modal for better accessibility and ensure it's in view
      setTimeout(() => {
        if (modalRef.current) {
          modalRef.current.focus();
          modalRef.current.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'center',
            inline: 'center'
          });
        }
      }, 100);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [project]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  if (!project) return null;

  const nextMedia = () => {
    setCurrentMediaIndex((prev) => (prev + 1) % project.media.length);
  };

  const prevMedia = () => {
    setCurrentMediaIndex((prev) => (prev - 1 + project.media.length) % project.media.length);
  };

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="project-modal-overlay bg-background/80 backdrop-blur-md"
          onClick={onClose}
        >
          <motion.div
            ref={modalRef}
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="project-modal-content bg-card rounded-2xl border border-border shadow-2xl scrollbar-thin"
            onClick={(e) => e.stopPropagation()}
            tabIndex={-1}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-background/80 backdrop-blur-sm border border-border hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <X className="w-5 h-5 text-primary hover:text-primary-foreground" />
            </button>

            {/* Media Gallery */}
            <div className="relative aspect-video bg-secondary">
              <AnimatePresence mode="wait">
                {project.media[currentMediaIndex]?.type === "video" ? (
                  <motion.video
                    key={currentMediaIndex}
                    src={project.media[currentMediaIndex]?.url}
                    className="w-full h-full object-cover"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    controls
                    autoPlay
                    muted
                    loop
                  />
                ) : project.media[currentMediaIndex]?.type === "powerbi" ? (
                  <motion.div
                    key={currentMediaIndex}
                    className="w-full h-full"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <iframe
                      title="Power BI Dashboard"
                      src={project.media[currentMediaIndex]?.iframeUrl}
                      className="w-full h-full border-0 rounded-lg"
                      allowFullScreen
                      loading="lazy"
                    />
                  </motion.div>
                ) : (
                  <motion.img
                    key={currentMediaIndex}
                    src={project.media[currentMediaIndex]?.url}
                    alt={project.media[currentMediaIndex]?.alt || project.title}
                    className="w-full h-full object-cover"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </AnimatePresence>

              {project.media.length > 1 && (
                <>
                  <button
                    onClick={prevMedia}
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/80 backdrop-blur-sm border border-border hover:bg-secondary transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={nextMedia}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/80 backdrop-blur-sm border border-border hover:bg-secondary transition-colors"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {project.media.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setCurrentMediaIndex(i)}
                        className={`w-2 h-2 rounded-full transition-colors ${
                          i === currentMediaIndex ? "bg-primary" : "bg-background/60"
                        }`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Content */}
            <div className="p-6 md:p-8 space-y-8">
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div>
                  <h2 className="text-primary md:text-3xl font-bold mb-2">{project.title}</h2>
                  <p className="text-muted-foreground">{project.shortDescription}</p>
                </div>
                <div className="flex gap-2">
                  {project.links?.github && (
                    <Button size="sm" asChild>
                      <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        GitHub
                      </a>
                    </Button>
                  )}
                  {project.links?.demo && (
                    <Button size="sm" asChild>
                      <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Demo
                      </a>
                    </Button>
                  )}
                  {project.links?.dashboard && (
                    <Button size="sm" asChild>
                      <a href={project.links.dashboard} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Dashboard
                      </a>
                    </Button>
                  )}
                </div>
              </div>

              {/* Tech Stack */}
              <div>
                <h3 className="text-sm font-mono text-primary mb-3">// technology stack</h3>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Challenge & Solution */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-4 rounded-xl bg-secondary/50 border border-border">
                  <h3 className="font-semibold mb-2 flex items-center gap-2 text-white">
                    <span className="w-2 h-2 rounded-full bg-destructive" />
                    Challenge
                  </h3>
                  <p className="text-sm text-muted-foreground">{project.challenge}</p>
                </div>
                <div className="p-4 rounded-xl bg-secondary/50 border border-border">
                  <h3 className="font-semibold mb-2 flex items-center gap-2 text-white">
                    <span className="w-2 h-2 rounded-full bg-green-500" />
                    Solution
                  </h3>
                  <p className="text-sm text-muted-foreground">{project.solution}</p>
                </div>
              </div>

              {/* Full Description */}
              <div>
                <h3 className="text-sm font-mono text-primary mb-3">// about</h3>
                <p className="text-muted-foreground leading-relaxed">{project.fullDescription}</p>
              </div>

              {/* Insights */}
              <div className="p-6 rounded-xl bg-accent border border-primary/20">
                <h3 className="font-semibold mb-4 flex items-center gap-2 text-white">
                  <Lightbulb className="w-5 h-5 text-primary" />
                  Insights
                </h3>
                <ul className="space-y-3">
                  {project.insights.map((insight, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm">
                      <span className="font-mono text-primary mt-0.5">{String(i + 1).padStart(2, "0")}.</span>
                      <span className="text-muted-foreground">{insight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Improvements V2.0 */}
              <div className="p-6 rounded-xl bg-secondary border border-border">
                <h3 className="font-semibold mb-4 flex items-center gap-2 text-white">
                  <Rocket className="w-5 h-5 text-primary" />
                  Future Improvements
                </h3>
                <ul className="space-y-2">
                  {project.improvements.map((improvement, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      <span className="text-muted-foreground">{improvement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
