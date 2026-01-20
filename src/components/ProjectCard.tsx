import { motion } from "framer-motion";
import { ArrowUpRight, Code2, BarChart3, FolderKanban } from "lucide-react";
import { Project } from "@/types/project";

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

const categoryConfig = {
  web: { icon: Code2, label: "Dev Web", color: "text-blue-500" },
  data: { icon: BarChart3, label: "Análise de Dados", color: "text-green-500" },
  management: { icon: FolderKanban, label: "Gestão", color: "text-purple-500" },
};

const ProjectCard = ({ project, onClick }: ProjectCardProps) => {
  const category = categoryConfig[project.category];
  const CategoryIcon = category.icon;

  return (
    <motion.article
      onClick={onClick}
      className="group cursor-pointer card-glow rounded-2xl bg-card border border-border overflow-hidden"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Thumbnail */}
      <div className="relative aspect-video overflow-hidden bg-secondary">
        <img
          src={project.thumbnail}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
        
        {/* Category badge */}
        <div className="absolute top-4 left-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-background/90 backdrop-blur-sm text-xs font-mono">
            <CategoryIcon className={`w-3.5 h-3.5 ${category.color}`} />
            {category.label}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between gap-4 mb-3">
          <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
        </div>

        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {project.shortDescription}
        </p>

        {/* Tech stack preview */}
        <div className="flex flex-wrap gap-2">
          {project.techStack.slice(0, 4).map((tech) => (
            <span key={tech} className="tech-badge">
              {tech}
            </span>
          ))}
          {project.techStack.length > 4 && (
            <span className="tech-badge">+{project.techStack.length - 4}</span>
          )}
        </div>
      </div>
    </motion.article>
  );
};

export default ProjectCard;
