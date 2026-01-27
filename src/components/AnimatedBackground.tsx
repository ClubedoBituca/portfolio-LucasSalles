import { motion } from "framer-motion";

interface AnimatedBackgroundProps {
  variant?: "hero" | "about" | "projects";
}

const AnimatedBackground = ({ variant = "hero" }: AnimatedBackgroundProps) => {
  const getAnimationConfig = () => {
    switch (variant) {
      case "hero":
        return [
          {
            animate: { x: [0, 100, 0], y: [0, -50, 0], rotate: [0, 180, 360] },
            transition: { duration: 20, repeat: Infinity, ease: "linear" },
            className: "absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-primary/5 blur-xl"
          },
          {
            animate: { x: [0, -80, 0], y: [0, 100, 0], rotate: [0, -180, -360] },
            transition: { duration: 25, repeat: Infinity, ease: "linear" },
            className: "absolute top-3/4 right-1/4 w-24 h-24 rounded-full bg-primary/10 blur-lg"
          },
          {
            animate: { x: [0, 60, 0], y: [0, -80, 0], scale: [1, 1.2, 1] },
            transition: { duration: 15, repeat: Infinity, ease: "easeInOut" },
            className: "absolute bottom-1/4 left-1/3 w-16 h-16 rounded-full bg-primary/8 blur-md"
          },
          {
            animate: { rotate: [0, 360], x: [0, 50, 0], y: [0, -30, 0] },
            transition: { duration: 30, repeat: Infinity, ease: "linear" },
            className: "absolute top-1/3 right-1/3 w-20 h-20 border border-primary/20 rotate-45 blur-sm"
          },
          {
            animate: { rotate: [0, -360], x: [0, -40, 0], y: [0, 60, 0] },
            transition: { duration: 22, repeat: Infinity, ease: "linear" },
            className: "absolute bottom-1/3 right-1/4 w-12 h-12 bg-primary/5 rotate-12 blur-sm"
          }
        ];
      
      case "about":
        return [
          {
            animate: { x: [0, -70, 0], y: [0, 50, 0], rotate: [0, 180, 360] },
            transition: { duration: 28, repeat: Infinity, ease: "linear" },
            className: "absolute top-1/4 right-1/4 w-20 h-20 rounded-full bg-primary/8 blur-xl"
          },
          {
            animate: { x: [0, 40, 0], y: [0, -40, 0], scale: [1, 1.1, 1] },
            transition: { duration: 16, repeat: Infinity, ease: "easeInOut" },
            className: "absolute bottom-1/3 right-1/3 w-12 h-12 border border-primary/20 rotate-45 blur-sm"
          },
          {
            animate: { rotate: [0, -360], x: [0, 20, 0] },
            transition: { duration: 24, repeat: Infinity, ease: "linear" },
            className: "absolute top-1/3 left-1/4 w-6 h-6 bg-primary/10 rotate-12"
          }
        ];
      
      case "projects":
        return [
          {
            animate: { x: [0, 100, 0], y: [0, -60, 0], rotate: [0, 90, 0] },
            transition: { duration: 25, repeat: Infinity, ease: "linear" },
            className: "absolute top-10 right-10 w-24 h-24 border-2 border-primary/10 rounded-lg rotate-45"
          },
          {
            animate: { x: [0, -50, 0], y: [0, 80, 0], scale: [1, 1.3, 1] },
            transition: { duration: 18, repeat: Infinity, ease: "easeInOut" },
            className: "absolute bottom-20 left-10 w-16 h-16 bg-primary/5 rounded-full blur-lg"
          },
          {
            animate: { rotate: [0, 360], x: [0, 30, 0] },
            transition: { duration: 20, repeat: Infinity, ease: "linear" },
            className: "absolute top-1/2 left-1/4 w-8 h-8 border border-primary/15 rotate-12"
          }
        ];
      
      default:
        return [];
    }
  };

  const animations = getAnimationConfig();

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {animations.map((config, index) => (
        <motion.div
          key={index}
          animate={config.animate}
          transition={config.transition}
          className={config.className}
        />
      ))}
    </div>
  );
};

export default AnimatedBackground;