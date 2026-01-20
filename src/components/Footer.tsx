import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Mail, href: "mailto:contato@email.com", label: "Email" },
  ];

  return (
    <footer className="py-12 border-t border-border bg-card">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo/Name */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center md:text-left"
          >
            <p className="font-mono text-lg text-gradient font-semibold">CT</p>
            <p className="text-sm text-muted-foreground mt-1">
              Creative Technologist
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center gap-4"
          >
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                aria-label={link.label}
                className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <link.icon className="w-5 h-5" />
              </a>
            ))}
          </motion.div>

          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm text-muted-foreground flex items-center gap-1"
          >
            Feito com <Heart className="w-4 h-4 text-primary" /> em 2025
          </motion.p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
