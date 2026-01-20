import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import { Project } from "@/types/project";

import dashboardImg from "@/assets/project-dashboard.jpg";
import eventsImg from "@/assets/project-events.jpg";
import automationImg from "@/assets/project-automation.jpg";
import sentimentImg from "@/assets/project-sentiment.jpg";

const projects: Project[] = [
  {
    id: "1",
    title: "Dashboard de Vendas Interativo",
    category: "data",
    thumbnail: dashboardImg,
    shortDescription: "Painel analítico para visualização de métricas de vendas em tempo real.",
    fullDescription: "Um dashboard completo desenvolvido para análise de performance de vendas, com filtros dinâmicos, gráficos interativos e exportação de relatórios.",
    challenge: "A equipe comercial precisava de uma forma visual e rápida de acompanhar KPIs sem depender de planilhas manuais.",
    solution: "Desenvolvi um dashboard conectado diretamente ao banco de dados, com atualização automática e visualizações customizadas para cada necessidade.",
    techStack: ["Python", "SQL", "Power BI", "PostgreSQL"],
    media: [
      { type: "image", url: dashboardImg, alt: "Dashboard principal" },
    ],
    insights: [
      "A escolha do Power BI permitiu entregas incrementais e rápidas",
      "Queries otimizadas reduziram o tempo de carregamento em 60%",
      "Usuários preferem gráficos de linha para tendências temporais",
    ],
    improvements: [
      "Implementar cache para queries mais pesadas",
      "Adicionar alertas automáticos via email",
      "Criar versão mobile-friendly",
    ],
    links: {
      demo: "#",
    },
  },
  {
    id: "2",
    title: "Sistema de Gestão de Eventos",
    category: "web",
    thumbnail: eventsImg,
    shortDescription: "Plataforma completa para gerenciamento de eventos culturais.",
    fullDescription: "Sistema web para controle de eventos, desde o planejamento até a execução, incluindo gestão de equipes, cronogramas e orçamentos.",
    challenge: "Produtores culturais precisavam centralizar informações dispersas em múltiplas ferramentas e planilhas.",
    solution: "Criei uma aplicação web responsiva que integra todas as etapas da produção cultural em um único lugar, com colaboração em tempo real.",
    techStack: ["React", "TypeScript", "Node.js", "MongoDB", "Tailwind CSS"],
    media: [
      { type: "image", url: eventsImg, alt: "Tela de dashboard" },
    ],
    insights: [
      "A experiência em produção cultural foi essencial para entender as dores dos usuários",
      "Componentes reutilizáveis aceleraram o desenvolvimento em 40%",
      "Feedback contínuo dos usuários moldou as prioridades do roadmap",
    ],
    improvements: [
      "Adicionar integração com calendários externos (Google, Outlook)",
      "Implementar notificações push",
      "Criar módulo de relatórios financeiros",
    ],
    links: {
      github: "#",
      demo: "#",
    },
  },
  {
    id: "3",
    title: "Automação de Processos com n8n",
    category: "management",
    thumbnail: automationImg,
    shortDescription: "Workflows automatizados para otimização de processos internos.",
    fullDescription: "Conjunto de automações desenvolvidas para eliminar tarefas repetitivas e integrar sistemas diferentes, economizando horas de trabalho manual.",
    challenge: "Equipes perdiam tempo excessivo em tarefas manuais como transferência de dados entre sistemas e envio de relatórios.",
    solution: "Implementei workflows no n8n conectando APIs, bancos de dados e serviços de email, automatizando processos end-to-end.",
    techStack: ["n8n", "API REST", "JavaScript", "PostgreSQL", "Slack API"],
    media: [
      { type: "image", url: automationImg, alt: "Workflow principal" },
    ],
    insights: [
      "Documentação clara dos workflows é tão importante quanto sua criação",
      "Começar com automações simples gera quick wins e buy-in da equipe",
      "Tratamento de erros robusto evita dores de cabeça futuras",
    ],
    improvements: [
      "Adicionar logs mais detalhados para debugging",
      "Criar dashboard de monitoramento de execuções",
      "Implementar testes automatizados para os workflows",
    ],
    links: {
      demo: "#",
    },
  },
  {
    id: "4",
    title: "Análise de Sentimentos - Redes Sociais",
    category: "data",
    thumbnail: sentimentImg,
    shortDescription: "Pipeline de NLP para análise de menções em redes sociais.",
    fullDescription: "Sistema de coleta e análise de dados de redes sociais, utilizando técnicas de processamento de linguagem natural para classificar sentimentos.",
    challenge: "Marcas precisavam entender a percepção do público em tempo real, mas não tinham ferramentas acessíveis para isso.",
    solution: "Desenvolvi um pipeline que coleta dados de APIs sociais, processa com modelos de NLP e apresenta insights em dashboards intuitivos.",
    techStack: ["Python", "NLTK", "Pandas", "Streamlit", "Twitter API"],
    media: [
      { type: "image", url: sentimentImg, alt: "Dashboard de sentimentos" },
    ],
    insights: [
      "Pré-processamento de texto é crucial para resultados precisos",
      "Modelos pré-treinados em português brasileiro são limitados",
      "Visualizações em tempo real engajam mais os stakeholders",
    ],
    improvements: [
      "Treinar modelo customizado com dados do domínio",
      "Expandir para outras plataformas (Instagram, TikTok)",
      "Adicionar alertas para variações bruscas de sentimento",
    ],
    links: {
      github: "#",
    },
  },
];

const categories = [
  { id: "all", label: "Todos" },
  { id: "web", label: "Dev Web" },
  { id: "data", label: "Análise de Dados" },
  { id: "management", label: "Gestão de Projetos" },
];

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const filteredProjects = projects.filter(
    (p) => activeFilter === "all" || p.category === activeFilter
  );

  return (
    <section id="projects" className="section-padding" ref={ref}>
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-sm font-mono text-primary mb-4 block">// projetos</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Cases Selecionados
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Uma seleção de projetos que demonstram minha jornada entre dados, tecnologia e gestão.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={`filter-btn ${activeFilter === cat.id ? "active" : ""}`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 gap-6 lg:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <ProjectCard
                  project={project}
                  onClick={() => setSelectedProject(project)}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};

export default ProjectsSection;
