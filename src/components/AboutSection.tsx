import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, BarChart3, FolderKanban, Users, Lightbulb, Zap, Target, MessageCircle } from "lucide-react";
import AnimatedBackground from "./AnimatedBackground";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skills = [
    { icon: Code2, label: "Dev Web", description: "React, TypeScript, Vite" },
    { icon: BarChart3, label: "Análise de Dados", description: "SQL, Power BI, Python" },
    { icon: FolderKanban, label: "Gestão", description: "Scrum, Kanban, Git" },
  ];

const softSkills = [
    { icon: Users, label: "Team Leadership" },         // Liderança de Equipes
    { icon: Lightbulb, label: "Creative Thinking" },   // Pensamento Criativo
    { icon: Zap, label: "Problem Solving" },           // Resolução de Problemas
    { icon: BarChart3, label: "Data Storytelling" },    // Narrativa de Dados
    { icon: Target, label: "Strategic Vision" },       // Visão Estratégica
    { icon: MessageCircle, label: "Effective Communication" } // Comunicação Eficaz
];

  return (
    <section id="about" className="section-padding bg-card relative overflow-hidden" ref={ref}>
      {/* Animated background elements */}
      <AnimatedBackground variant="about" />
      
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image/Visual side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-md mx-auto lg:mx-0">
              {/* Abstract background shape */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tl from-primary/20 to-transparent transform rotate-3" />
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tl from-primary/10 to-transparent transform -rotate-3" />
              
              {/* Profile photo */}
              <div className="relative z-10 aspect-square rounded-3xl overflow-hidden">
                <img 
                  src="/foto_perfil.png" 
                  alt="Lucas Salles Granado - Creative Developer & Cultural Producer" 
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 bg-background rounded-xl p-3 shadow-lg border border-border"
              >
                <Code2 className="w-6 h-6 text-primary" />
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-4 -left-4 bg-background rounded-xl p-3 shadow-lg border border-border"
              >
                <BarChart3 className="w-6 h-6 text-primary" />
              </motion.div>
            </div>
          </motion.div>

          {/* Content side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-sm font-mono text-primary mb-4 block">// about me</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-primary">
              From Culture to Code
            </h2>
            
            <div className="space-y-4 text-muted-foreground mb-8">
              <p>
                My journey began in <strong className="text-foreground">Cultural Production</strong>, 
                where I developed essential project management skills, team leadership, 
                and creative thinking under pressure.
              </p>
              <p>
                Today, as an <strong className="text-foreground">Information Systems</strong>, 
                student, I combine this background with the technical rigor of data development and analysis.
                 I believe that the best solutions are born at the intersection of creativity and technology.
              </p>
            </div>

            {/* Hard Skills */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {skills.map((skill, i) => (
                <motion.div
                  key={skill.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                  className="text-center p-4 rounded-xl bg-background border border-border"
                >
                  <skill.icon className="w-6 h-6 mx-auto mb-2 text-primary" />
                  <p className="font-medium text-primary">{skill.label}</p>
                  <p className="text-xs text-muted-foreground mt-1">{skill.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Soft Skills */}
            <div className="flex flex-wrap gap-3">
              {softSkills.map((skill, i) => (
                <motion.div
                  key={skill.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.7 + i * 0.1 }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm"
                >
                  <skill.icon className="w-4 h-4" />
                  {skill.label}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
