import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import { Project } from "@/types/project";
import automationImg from "@/assets/project-automation.jpg";
import mtgImg from "@/assets/mtgdeckbuilder.jpg";
import minuciasImg from "@/assets/minuciasportfolio.jpg";
import rotaImobiliariaImg from "@/assets/videografos.mp4";
import culturalImg from "@/assets/protfoliogestaodeprojetosculturais.jpg";

const projects: Project[] = [
  {
    id: "1",
    title: "Route Optimization Pipeline for Real Estate Data Collection",
    category: "data",
    thumbnail: rotaImobiliariaImg,
    thumbnailType: "video",
    shortDescription:
      "Automated pipeline for optimizing field data collection routes using graph algorithms and operational cost analysis.",
    fullDescription:
      "A data-driven system designed to optimize routes for real estate field data collection. The project models the urban road network as a weighted graph and solves the Chinese Postman Problem (CPP) using the Edmonds–Johnson algorithm. It supports multiple agents working in parallel and generates interactive maps, route animations, and detailed operational metrics.",
    challenge:
      "Real estate data collection was performed manually, with no reliable estimation of time, cost, or workforce requirements, leading to inefficient planning and higher operational costs.",
    solution:
      "I developed an automated pipeline that combines distance and service time per property into weighted edges, computes optimal Eulerian routes, distributes workloads among multiple agents, and outputs geospatial visualizations and cost reports to support decision-making.",
    techStack: [
      "Python",
      "Pandas",
      "NumPy",
      "NetworkX",
      "Graph Algorithms",
      "Dijkstra",
      "Edmonds–Johnson Algorithm",
      "Folium",
      "MoviePy"
    ],
    media: [
      {
        type: "video",
        url: rotaImobiliariaImg,
        alt: "Interactive map showing optimized real estate data collection routes"
      }
    ],
    insights: [
      "Using the Chinese Postman Problem is more suitable than TSP for full street coverage scenarios",
      "Parallelizing routes across two agents reduced total execution time by nearly 50% with minimal cost increase",
      "Incorporating service time per property significantly impacts route optimization results",
      "Geospatial visualizations improved communication with non-technical stakeholders"
    ],
    improvements: [
      "Add dynamic workload balancing between agents",
      "Integrate real-time traffic or terrain data",
      "Develop a web-based interface for execution and visualization",
      "Persist results in a spatial database such as PostGIS"
    ],
    links: {
      github: "https://github.com/ClubedoBituca/Coleta-de-Dados-Imobili-rios"
    }
  },
  {
      id: "2",
      title: "Magic Deck Builder",
      category: "web",
      thumbnail: mtgImg,
      shortDescription: "A web application for Magic: The Gathering collectors and players. Integrated with the Scryfall API, it features advanced card search with grid visualization and a modular structure.",
      fullDescription: "Real-time card search results. User login and authentication. Deck creation and management. Deck export to PDF. Modern, responsive grid layout. Full mobile support.",
      challenge: "The high cost of physical cards prevents budget-constrained users from building their dream decks.",
      solution: "I developed a responsive web application that allows users to build decks and generate print-ready PDFs with actual card dimensions.",
      techStack: ["React", "TypeScript", "Node.js", "Vite", "Tailwind CSS"],
      media: [
        { type: "image", url: mtgImg, alt: "Magic Deck Builder Interface" },
      ],
      insights: [
        "This service uses fetch to retrieve data on cards, sets, and symbols. It allows for easy expansion to new API endpoints.",
        "Reusable components accelerated the development process.",
        "Modular and organized code designed for scalability.",
      ],
      improvements: [
        "Deck sharing between users",
        "Export formats for MTG Arena or Cockatrice",
        "Expanded language support",
      ],
      links: {
        github: "https://github.com/ClubedoBituca/ProjetoFinal",
        demo: "https://manavaultbuilder.vercel.app/",
      },
  },
  {
      id: "3",
      title: "AI-Powered Smart Sales Assistant",
      category: "management",
      thumbnail: automationImg,
      shortDescription: "WhatsApp customer service automation using n8n, Z-API, and OpenAI with a Human-in-the-loop architecture.",
      fullDescription: "Development of an autonomous conversational agent for 'Raíssa's Shoe Store'. The system orchestrates customer service, managing everything from lead qualification to the automatic population of operational spreadsheets. The solution utilizes a hybrid approach, prioritizing a static knowledge base (Google Sheets) for rapid responses and cost efficiency, triggering the LLM (ChatGPT) only for complex interactions and sentiment analysis.",
      challenge: "The client faced bottlenecks in WhatsApp customer support due to a high volume of repetitive inquiries, resulting in the loss of qualified leads and a lack of standardization in recording orders and delivery details.",
      solution: "I implemented an automation pipeline in n8n that integrates WhatsApp (via Z-API) into the store's ecosystem. The workflow intercepts incoming messages, queries a frequent response database (token reduction strategy), and, if necessary, utilizes OpenAI to generate contextualized answers. The system features human intervention detection (automatic halt when an agent starts typing), alerts for high-value tickets (VIP), and automatic logging of orders and payments into control spreadsheets.",
      techStack: [
        "n8n (Workflow Orchestration)",
        "Z-API (WhatsApp Gateway)",
        "OpenAI API (GPT-4o/Mini)",
        "Google Sheets (Database/CMS)",
        "JavaScript (Business Logic)",
        "Webhooks"
      ],
      media: [
        { type: "image", url: automationImg, alt: "n8n Automation Workflow" },
      ],
      insights: [
        "Implementing a robust 'Human Handoff' is critical to maintaining a fluid user experience",
        "Using a caching layer (Google Sheets) before the AI reduces API costs by up to 40%",
        "Structuring input data (lead qualification) at the top of the funnel improves logistics efficiency",
      ],
      improvements: [
        "Implement a Vector Store for more precise semantic search on products",
        "Create a real-time dashboard to monitor conversion rates and customer sentiment",
        "Integrate a payment gateway for direct checkout within WhatsApp",
      ],
      links: {
        demo: "#",
      },
    },
  {
      id: "4",
      title: "Projeto Minúcias",
      category: "web",
      thumbnail: minuciasImg,
      shortDescription: "Digital catalog for the Minúcias exhibition by artist Gustavo Machado.",
      fullDescription: "Projeto Minúcias invites the observer to re-evaluate their relationship with urban space and elements of the contemporary visual landscape. By shifting focus to overlooked details—stains, cracks, textures—it reveals the hidden beauty in everyday life.",
      challenge: "To create a centralized digital catalog that preserves the aesthetic integrity and atmospheric essence of the physical exhibition within a browser environment.",
      solution: "I developed a highly immersive, responsive web application designed to translate the exhibition's photography into a digital experience. The core technical feature is an interactive WebGL/Three.js background utilizing custom shaders that respond dynamically to mouse movement. The UI is built with a dark visual identity (primary blue, secondary purple) using Tailwind CSS, featuring an animated loading screen with progress tracking and a gradient-animated 'ENTER' button. The UX focuses on fluidity, utilizing smooth scrolling, a fixed header, and sophisticated micro-interactions (hover effects and soft transitions). Additionally, I integrated a complete audio layer for accessibility and immersion, including audio descriptions for the artworks and user-controlled ambient sound.",
      techStack: ["React", "TypeScript", "Node.js", "Vite", "Tailwind CSS", "Three.js", "WebGL"],
      media: [
        { type: "image", url: minuciasImg, alt: "Minúcias Project Interface" },
      ],
      insights: [
        "Achieved a fluid web experience with smooth transitions that enhances rather than distracts from the photography.",
        "Composed and implemented the entire sound design, creating specific phonograms inspired by each artwork to add auditory texture.",
        "Leveraged local culture by promoting a southern Minas Gerais artist through a modern digital lens.",
      ],
      improvements: [
        "Implement analytics to track visitor traffic and engagement within the online gallery.",
        "Further deepen the immersive capabilities of the WebGL layer to allow for 3D manipulation of specific visual elements.",
      ],
      links: {
        demo: "https://minucias.github.io/",
        github: "https://github.com/minucias/minucias.github.io",
      },
  },
  {
    id: "5",
    title: "Cultural Project Management",
    category: "management",
    thumbnail: culturalImg,
    shortDescription: "Management of over R$ 1 Million in raised funds, orchestrating cross-functional teams to deliver diverse cultural projects from conception to financial audit.",
    fullDescription: "Before transitioning to technology, I dedicated my career to making art viable. I managed a portfolio of projects spanning music festivals, literature, documentaries, and technical training. This role wasn't just about production; it was about end-to-end project lifecycle management. I acted as the bridge between creative vision and bureaucratic reality, writing technical proposals for public/private funding, ensuring strict financial compliance, and promoting social impact through accessibility.",
    challenge: "To secure funding and execute complex, multi-stakeholder initiatives amidst strict regulatory frameworks, tight budgets, and the need for rigorous financial accountability.",
    solution: "I implemented a rigorous management methodology combining technical grant writing with precise financial auditing. I built and led agile, cross-functional teams (uniting artists, designers, video makers, and accessibility interpreters) to execute projects with precision. My approach ensured that intangible artistic dreams were converted into tangible, legally compliant deliverables, securing over R$ 1 Million in resources via incentive laws.",
    techStack: ["Project Management", "Financial Auditing", "Grant Writing", "Team Leadership", "Logistics", "Stakeholder Management", "Public Speaking"],
    media: [
      { type: "image", url: culturalImg, alt: "R$ 1 Million Milestone" },
    ],
    insights: [
      "Transferred the ability to manage complex, ambiguous requirements from the cultural sector to software requirements engineering.",
      "Developed a 'customer-first' mindset by ensuring all projects met strict accessibility and social impact KPIs.",
      "Mastered the art of resource allocation—delivering high-quality results often with limited budgets and strict deadlines.",
    ],
    improvements: [
      "Integrate data visualization to map the social impact of these past projects.",
      "Apply these management methodologies to future agile software development lifecycles.",
    ],
    links: {
    },
  },
];

const categories = [
  { id: "all", label: "All" },
  { id: "web", label: "Dev Web" },
  { id: "data", label: "Data Analysis" },
  { id: "management", label: "Project Management" },
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
    <section id="projects" className="section-padding relative overflow-hidden" ref={ref}>
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ 
            x: [0, 100, 0],
            y: [0, -60, 0],
            rotate: [0, 90, 0]
          }}
          transition={{ 
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-10 right-10 w-24 h-24 border-2 border-primary/10 rounded-lg rotate-45"
        />
        
        <motion.div
          animate={{ 
            x: [0, -50, 0],
            y: [0, 80, 0],
            scale: [1, 1.3, 1]
          }}
          transition={{ 
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-20 left-10 w-16 h-16 bg-primary/5 rounded-full blur-lg"
        />
        
        <motion.div
          animate={{ 
            rotate: [0, 360],
            x: [0, 30, 0]
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/2 left-1/4 w-8 h-8 border border-primary/15 rotate-12"
        />
      </div>
      
      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-sm font-mono text-primary mb-4 block">// projects</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-primary">
            Selected Cases
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of projects that showcase my journey across data, technology, and management.
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
