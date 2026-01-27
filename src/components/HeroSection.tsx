import { motion } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";
import NodeGraph from "./NodeGraph";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-10">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-card" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating circles */}
        <motion.div
          animate={{ 
            x: [0, 100, 0],
            y: [0, -50, 0],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-primary/5 blur-xl"
        />
        
        <motion.div
          animate={{ 
            x: [0, -80, 0],
            y: [0, 100, 0],
            rotate: [0, -180, -360]
          }}
          transition={{ 
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-3/4 right-1/4 w-24 h-24 rounded-full bg-primary/10 blur-lg"
        />
        
        <motion.div
          animate={{ 
            x: [0, 60, 0],
            y: [0, -80, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-1/4 left-1/3 w-16 h-16 rounded-full bg-primary/8 blur-md"
        />
        
        {/* Floating geometric shapes */}
        <motion.div
          animate={{ 
            rotate: [0, 360],
            x: [0, 50, 0],
            y: [0, -30, 0]
          }}
          transition={{ 
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/3 right-1/3 w-20 h-20 border border-primary/20 rotate-45 blur-sm"
        />
        
        <motion.div
          animate={{ 
            rotate: [0, -360],
            x: [0, -40, 0],
            y: [0, 60, 0]
          }}
          transition={{ 
            duration: 22,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-1/3 right-1/4 w-12 h-12 bg-primary/5 rotate-12 blur-sm"
        />
      </div>
      
      {/* Node graph visualization */}
      <div className="absolute inset-0 flex items-center justify-center opacity-30">
        <NodeGraph />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 flex flex-col items-center justify-center min-h-[70vh]">
        <div className="max-w-5xl mx-auto text-center flex flex-col items-center justify-center">
          {/* Logo with creative animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ 
              duration: 1.2, 
              ease: "easeOut",
              type: "spring",
              stiffness: 100
            }}
            className="mb-8 relative"
          >
            <motion.div
              animate={{ 
                rotate: [0, 5, -5, 0],
                scale: [1, 1.05, 1]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative"
            >
              <img 
                src="/src/assets/logositeportfolio.png" 
                alt="Lucas Salles Logo" 
                className="w-32 h-32 md:w-40 md:h-40 object-contain filter drop-shadow-lg"
                style={{
                  filter: 'brightness(0) saturate(100%) invert(58%) sepia(69%) saturate(2834%) hue-rotate(346deg) brightness(104%) contrast(97%)'
                }}
              />
              
              {/* Glowing effect behind logo */}
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute inset-0 bg-primary/20 rounded-full blur-xl -z-10"
              />
            </motion.div>
            
            {/* Floating particles around logo */}
            <motion.div
              animate={{ 
                x: [0, 20, 0],
                y: [0, -15, 0],
                opacity: [0.4, 0.8, 0.4]
              }}
              transition={{ 
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute -top-2 -right-2 w-2 h-2 bg-primary rounded-full"
            />
            
            <motion.div
              animate={{ 
                x: [0, -15, 0],
                y: [0, 10, 0],
                opacity: [0.3, 0.7, 0.3]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
              className="absolute -bottom-1 -left-3 w-1.5 h-1.5 bg-primary/70 rounded-full"
            />
            
            <motion.div
              animate={{ 
                x: [0, 10, 0],
                y: [0, -20, 0],
                opacity: [0.5, 0.9, 0.5]
              }}
              transition={{ 
                duration: 2.8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5
              }}
              className="absolute top-1/2 -right-4 w-1 h-1 bg-primary/80 rounded-full"
            />
          </motion.div>

          {/* Tag */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-accent text-accent-foreground text-base font-mono mb-12"
          >
            <Sparkles className="w-5 h-5" />
            <span>Creative Technologist</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight mb-10"
          >
            <span className="text-gradient whitespace-nowrap">Data-Driven, Creatively Led.</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-16"
          >
          Information Systems student rooted in Cultural Production. Turning ideas into meaningful digital experiences.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >

          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-3 text-muted-foreground"
          >
            <span className="text-sm font-mono">scroll</span>
            <ArrowDown className="w-5 h-5" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
