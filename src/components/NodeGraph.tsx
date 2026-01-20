import { motion } from "framer-motion";

const NodeGraph = () => {
  const nodes = [
    { id: 1, cx: 150, cy: 120, r: 8 },
    { id: 2, cx: 280, cy: 80, r: 6 },
    { id: 3, cx: 350, cy: 180, r: 10 },
    { id: 4, cx: 200, cy: 220, r: 7 },
    { id: 5, cx: 420, cy: 100, r: 5 },
    { id: 6, cx: 100, cy: 200, r: 6 },
    { id: 7, cx: 480, cy: 200, r: 8 },
    { id: 8, cx: 300, cy: 280, r: 6 },
  ];

  const connections = [
    { from: 1, to: 2 },
    { from: 1, to: 4 },
    { from: 2, to: 3 },
    { from: 2, to: 5 },
    { from: 3, to: 4 },
    { from: 3, to: 7 },
    { from: 4, to: 6 },
    { from: 4, to: 8 },
    { from: 5, to: 7 },
    { from: 6, to: 1 },
    { from: 7, to: 8 },
    { from: 8, to: 3 },
  ];

  const getNode = (id: number) => nodes.find((n) => n.id === id)!;

  return (
    <motion.svg
      viewBox="0 0 600 400"
      className="w-full max-w-2xl h-auto"
      initial="hidden"
      animate="visible"
    >
      {/* Gradient definitions */}
      <defs>
        <linearGradient id="nodeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="hsl(24 95% 58%)" />
          <stop offset="100%" stopColor="hsl(35 95% 60%)" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Connections */}
      {connections.map((conn, i) => {
        const from = getNode(conn.from);
        const to = getNode(conn.to);
        return (
          <motion.line
            key={`conn-${i}`}
            x1={from.cx}
            y1={from.cy}
            x2={to.cx}
            y2={to.cy}
            stroke="url(#nodeGradient)"
            strokeWidth="1"
            strokeOpacity="0.3"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.5, delay: i * 0.1, ease: "easeOut" }}
          />
        );
      })}

      {/* Nodes */}
      {nodes.map((node, i) => (
        <motion.g key={node.id}>
          {/* Glow effect */}
          <motion.circle
            cx={node.cx}
            cy={node.cy}
            r={node.r * 2}
            fill="url(#nodeGradient)"
            opacity="0.2"
            initial={{ scale: 0 }}
            animate={{ scale: [1, 1.2, 1] }}
            transition={{
              scale: { duration: 3, repeat: Infinity, delay: i * 0.3 },
              default: { duration: 0.5, delay: i * 0.1 },
            }}
          />
          {/* Main node */}
          <motion.circle
            cx={node.cx}
            cy={node.cy}
            r={node.r}
            fill="url(#nodeGradient)"
            filter="url(#glow)"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 + i * 0.1, type: "spring" }}
          />
        </motion.g>
      ))}
    </motion.svg>
  );
};

export default NodeGraph;
