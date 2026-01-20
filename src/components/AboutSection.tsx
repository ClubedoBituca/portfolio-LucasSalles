import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, BarChart3, FolderKanban, Users, Lightbulb, Zap } from "lucide-react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skills = [
    { icon: Code2, label: "Dev Web", description: "React, TypeScript, Python" },
    { icon: BarChart3, label: "Análise de Dados", description: "SQL, Power BI, Python" },
    { icon: FolderKanban, label: "Gestão", description: "Scrum, Kanban, Metodologias Ágeis" },
  ];

  const softSkills = [
    { icon: Users, label: "Liderança de Equipes" },
    { icon: Lightbulb, label: "Pensamento Criativo" },
    { icon: Zap, label: "Resolução de Problemas" },
  ];

  return (
    <section id="about" className="section-padding bg-card" ref={ref}>
      <div className="container-custom">
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
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/20 to-primary/5 transform rotate-3" />
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tl from-primary/10 to-transparent transform -rotate-3" />
              
              {/* Profile placeholder with initials */}
              <div className="relative z-10 aspect-square rounded-3xl bg-secondary flex items-center justify-center overflow-hidden">
                <span className="text-8xl font-bold text-gradient">CT</span>
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
            <span className="text-sm font-mono text-primary mb-4 block">// sobre mim</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Da Cultura para o Código
            </h2>
            
            <div className="space-y-4 text-muted-foreground mb-8">
              <p>
                Minha jornada começou na <strong className="text-foreground">Produção Cultural</strong>, 
                onde desenvolvi habilidades essenciais de gestão de projetos, 
                liderança de equipes e pensamento criativo sob pressão.
              </p>
              <p>
                Hoje, como estudante de <strong className="text-foreground">Sistemas de Informação</strong>, 
                combino essa bagagem com o rigor técnico do desenvolvimento e análise de dados. 
                Acredito que as melhores soluções nascem na interseção entre criatividade e tecnologia.
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
                  <p className="font-medium text-sm">{skill.label}</p>
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
