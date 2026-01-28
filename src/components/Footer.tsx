import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Music, MessageCircle } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: Github, href: "https://github.com/ClubedoBituca", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/lucas-salles-granado-36a195334/", label: "LinkedIn" },
    { icon: Mail, href: "https://mail.google.com/mail/?view=cm&fs=1&to=d2023006878@unifei.edu.br", label: "Email" },
    { icon: MessageCircle, href: "https://wa.me/5535991900528?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20seus%20servi%C3%A7os", label: "WhatsApp" },
  ];

  return (
    <footer className="py-8 border-t border-border bg-card">
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
            <p className="font-mono text-lg text-gradient font-semibold">Lucas Salles Granado</p>
            <p className="text-sm text-muted-foreground mt-1">
              thanks for your interest!
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
                target="_blank"
                rel="noopener noreferrer"
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
            Made with <Music className="w-4 h-4 text-primary" /> in 2025
          </motion.p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
