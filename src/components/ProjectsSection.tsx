import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import { Project } from "@/types/project";
import AnimatedBackground from "./AnimatedBackground";
import automationImg from "@/assets/project-automation.jpg";
import mtgImg from "@/assets/mtgdeckbuilder.jpg";
import minuciasImg from "@/assets/minuciasportfolio.jpg";
import rotaImobiliariaImg from "@/assets/videografos.mp4";
import culturalImg from "@/assets/protfoliogestaodeprojetosculturais.jpg";
import powerbiDashboardImg from "@/assets/dashboardpowerbi.jpg";
import medicalShopVideo from "@/assets/fullstackmern.mp4";
import stockPipelineVideo from "@/assets/datapipeline.mp4";

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
    id: "6",
    title: "End-to-End Marketplace Analytics Dashboard",
    category: "data",
    thumbnail: powerbiDashboardImg,
    shortDescription: "A full Power BI analytics solution built end-to-end, transforming raw marketplace data into executive-level insights through Power Query, advanced DAX, and interactive visual storytelling.",
    fullDescription: "This project represents my first complete, end-to-end data analytics solution using Power BI. Developed as the final outcome of an intensive Power BI training program, the dashboard covers the entire analytics lifecycle — from raw data ingestion to decision-ready insights. Working with a real-world marketplace dataset, I designed a robust data model, applied complex data transformations in Power Query, and built advanced DAX measures to accurately reflect business performance. The result is a highly interactive dashboard that enables stakeholders to analyze revenue, discounts, profitability, and performance trends across multiple business dimensions.",
    challenge: "To transform a complex and unstructured marketplace dataset into a reliable analytical model capable of supporting strategic decision-making across commercial, financial, and operational perspectives.",
    solution: "I implemented a structured BI workflow starting with data cleaning, normalization, and enrichment in Power Query. I then designed a star-schema data model optimized for performance and scalability. Using DAX, I created key business measures such as gross revenue, discount impact, year-over-year comparisons, and profit margin. Finally, I built an interactive dashboard with multiple drill-down levels and dynamic filters, enabling deep analysis by brand, category, subcategory, product, region, and time.",
    techStack: ["Power BI", "Power Query", "DAX", "Data Modeling", "Star Schema", "Business Intelligence", "Data Visualization", "Analytical Thinking"],
    media: [
      { 
        type: "powerbi", 
        url: powerbiDashboardImg, 
        alt: "Marketplace Analytics Dashboard in Power BI",
        iframeUrl: "https://app.powerbi.com/view?r=eyJrIjoiM2E1NTc2NjMtMDExYy00ZTkwLWIzMGYtYWI1MTk2YzZjNTU4IiwidCI6Ijc3MzQzNWU5LWM4NDMtNDVjOS1iYzY0LTUxNzZkMzE3ZTg2MyJ9"
      },
    ],
    insights: [
      "Learned how to structure an end-to-end BI solution, connecting data engineering, modeling, and visualization into a single analytical product.",
      "Discovered critical performance drivers such as discount sensitivity and margin behavior across brands and product categories.",
      "Enabled year-over-year analysis to quickly identify growth trends and underperforming segments.",
    ],
    improvements: [
      "Integrate incremental data refresh and performance optimization techniques for large datasets.",
      "Publish the dashboard to Power BI Service with row-level security (RLS) for multi-user access.",
      "Extend the solution with forecasting measures and advanced time intelligence in DAX.",
    ],
    links: {
      dashboard: "https://app.powerbi.com/view?r=eyJrIjoiM2E1NTc2NjMtMDExYy00ZTkwLWIzMGYtYWI1MTk2YzZjNTU4IiwidCI6Ijc3MzQzNWU5LWM4NDMtNDVjOS1iYzY0LTUxNzZkMzE3ZTg2MyJ9",
    },
  },
  {
    id: "7",
    title: "Medical Shop — Fullstack MERN E-commerce",
    category: "web",
    thumbnail: medicalShopVideo,
    thumbnailType: "video",
    shortDescription: "Fullstack e-commerce application built with the MERN stack, featuring JWT authentication, cart management, order creation, and PayPal integration via REST API.",
    fullDescription: "Medical Shop is a fullstack e-commerce application built with MongoDB, Express, React, and Node.js. The frontend uses React and Redux to manage global state such as user authentication, product catalog, cart, and orders, communicating with the backend through a REST API using Axios. The backend is structured with Express routes, controllers, and middleware, handling business logic, authentication via JWT, and data validation. Data is persisted in MongoDB using Mongoose schemas for users, products, and orders, with references and population to enrich responses. The core user flow covers registration/login, product browsing, cart management, checkout, payment, and order creation.",
    challenge: "Designing a complete purchase flow with clear separation of concerns between frontend, backend, and database layers, while ensuring secure authentication, consistent state management, and reliable order persistence without relying solely on client-side validation.",
    solution: "I implemented a client–server architecture with a React/Redux frontend and an Express-based REST API. The backend issues JWTs during authentication and protects sensitive routes with middleware. Orders, users, and products are modeled as separate collections in MongoDB with proper references. The checkout flow integrates PayPal for payments and ensures that cart data, user identity, and order state remain consistent from the frontend to the database.",
    techStack: ["React", "Redux", "Axios", "React Router", "Tailwind CSS", "Vite", "Node.js", "Express", "MongoDB", "Mongoose", "JWT", "bcrypt", "PayPal SDK"],
    media: [
      {
        type: "video",
        url: medicalShopVideo,
        alt: "Medical Shop demo showing login, cart, checkout, and order creation flow"
      }
    ],
    insights: [
      "Backend validation is mandatory; frontend validation is mainly for user experience",
      "Redux provides a predictable data flow: action → API → reducer → UI",
      "JWT combined with Express middleware simplifies authorization across routes",
      "Using MongoDB references and populate enables richer order and user views"
    ],
    improvements: [
      "Add an admin dashboard for product, order, and inventory management",
      "Implement PayPal webhooks for payment verification and reconciliation",
      "Improve observability with structured logging and monitoring",
      "Add automated tests for backend routes and frontend components"
    ],
    links: {
      github: "https://github.com/ClubedoBituca/Medical-Shop-Professional-Healthcare-E-Commerce-Platform"
    }
  },
  {
    id: "8",
    title: "Real-Time Stock Market Data Pipeline",
    category: "data",
    thumbnail: stockPipelineVideo,
    thumbnailType: "video",
    shortDescription: "End-to-end data pipeline for near real-time stock market data, combining streaming ingestion, data lake storage, analytical warehousing, and business-ready transformations.",
    fullDescription: "This project implements a modern end-to-end data pipeline for near real-time stock market data. Market events are ingested from an external financial API and published to Kafka, enabling scalable and decoupled streaming ingestion. The raw events are persisted to an S3-compatible data lake using MinIO, ensuring historical storage and reprocessability. Snowflake is used as the analytical data warehouse, where data is organized following the Medallion Architecture (Raw, Cleaned, and Gold layers). Transformations are handled with dbt, applying versioned SQL models to convert raw market data into business-ready analytical tables. The pipeline is orchestrated with Airflow, and the final datasets are consumed in Power BI for visualization and analysis.",
    challenge: "Designing a reliable and reproducible pipeline that integrates multiple unfamiliar technologies while preserving data correctness, historical traceability, and clear separation between ingestion, storage, transformation, and consumption layers.",
    solution: "I designed a modular architecture where Kafka handles event streaming, MinIO acts as a durable data lake, and Snowflake provides scalable analytical processing. dbt is used to implement structured transformations and business logic in SQL, producing Gold-level datasets such as daily OHLC candles, latest price snapshots, and volatility metrics. Airflow orchestrates the execution order and dependencies, and Docker is used to containerize the entire infrastructure, ensuring a consistent and reproducible environment.",
    techStack: ["Kafka", "Zookeeper", "MinIO (S3-compatible storage)", "Snowflake", "dbt", "Airflow", "Docker", "PostgreSQL", "Power BI", "Python", "SQL"],
    media: [
      {
        type: "video",
        url: stockPipelineVideo,
        alt: "Architecture walkthrough and demo of the real-time stock market data pipeline"
      }
    ],
    insights: [
      "Streaming systems shift the mindset from batch tables to event-driven data flows",
      "Separating state (latest snapshot) from history (candles) simplifies analytics and modeling",
      "The Medallion Architecture helps enforce clarity between raw data, cleaned data, and business logic",
      "dbt enables treating SQL transformations with the same rigor as application code",
      "Dockerized infrastructure makes complex data stacks reproducible and easier to reason about"
    ],
    improvements: [
      "Add incremental dbt models for improved performance and scalability",
      "Implement data quality tests and freshness checks in dbt",
      "Introduce rolling-window features for advanced analytics and ML",
      "Deploy the pipeline to a cloud environment (AWS or GCP)",
      "Integrate real-time feature serving for downstream ML models"
    ],
    links: {
      github: "https://github.com/ClubedoBituca/Real-Time-Stock-Market-Data-Pipeline"
    }
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
  { id: "web", label: "Web Dev" },
  { id: "data", label: "Data Analisys" },
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
      <AnimatedBackground variant="projects" />
      
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
