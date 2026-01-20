import { useEffect } from "react";
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

  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden";
      setCurrentMediaIndex(0);
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
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-md"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto bg-card rounded-2xl border border-border shadow-2xl scrollbar-thin"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-background/80 backdrop-blur-sm border border-border hover:bg-secondary transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Media Gallery */}
            <div className="relative aspect-video bg-secondary">
              <AnimatePresence mode="wait">
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
                  <h2 className="text-2xl md:text-3xl font-bold mb-2">{project.title}</h2>
                  <p className="text-muted-foreground">{project.shortDescription}</p>
                </div>
                <div className="flex gap-2">
                  {project.links?.github && (
                    <Button variant="outline" size="sm" asChild>
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
                </div>
              </div>

              {/* Tech Stack */}
              <div>
                <h3 className="text-sm font-mono text-primary mb-3">// stack tecnológico</h3>
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
                  <h3 className="font-semibold mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-destructive" />
                    O Desafio
                  </h3>
                  <p className="text-sm text-muted-foreground">{project.challenge}</p>
                </div>
                <div className="p-4 rounded-xl bg-secondary/50 border border-border">
                  <h3 className="font-semibold mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-500" />
                    A Solução
                  </h3>
                  <p className="text-sm text-muted-foreground">{project.solution}</p>
                </div>
              </div>

              {/* Full Description */}
              <div>
                <h3 className="text-sm font-mono text-primary mb-3">// sobre o projeto</h3>
                <p className="text-muted-foreground leading-relaxed">{project.fullDescription}</p>
              </div>

              {/* Insights */}
              <div className="p-6 rounded-xl bg-accent border border-primary/20">
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  <Lightbulb className="w-5 h-5 text-primary" />
                  Diário de Bordo
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
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  <Rocket className="w-5 h-5 text-primary" />
                  Melhorias Futuras (V2.0)
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
