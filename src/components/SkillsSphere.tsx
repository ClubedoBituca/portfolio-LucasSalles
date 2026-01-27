import React, { useEffect, useMemo, useState } from "react";
import { Cloud, fetchSimpleIcons, renderSimpleIcon } from "react-icon-cloud";

// Simple Icons slugs (brand ids)
const ICON_SLUGS = [
  "n8n",
  "discord",
  "nodedotjs",
  "typescript",
  "javascript",
  "express",
  "github",
  "mongodb",
  "python",
  "react",
  "nextdotjs",
  "postgresql",
  "mysql",
  "docker",
  "git",
  "html5",
  "css3",
  "microsoftpowerbi",
  "openai",
  "tailwindcss",
  "vite",
  "framer",
  "vercel",
];

export default function SkillsLogoSphere() {
  const [icons, setIcons] = useState<Record<string, any> | null>(null);

  useEffect(() => {
    let mounted = true;

    fetchSimpleIcons({ slugs: ICON_SLUGS })
      .then((data) => {
        if (!mounted) return;
        setIcons(data.simpleIcons || {});
      })
      .catch(() => {
        if (!mounted) return;
        setIcons({});
      });

    return () => {
      mounted = false;
    };
  }, []);

  const options = useMemo(
    () => ({
      reverse: true,
      depth: 1,
      wheelZoom: false,
      imageScale: 2.2,
      initial: [0.08, -0.08],
      fadeIn: 900,
      clickToFront: 600,
      tooltip: "native" as const,
      outlineColour: "transparent",
      maxSpeed: 0.05,
      minSpeed: 0.02,
    }),
    []
  );

  const logoAnchors = useMemo(() => {
    if (!icons) return null;

    return Object.values(icons).map((icon: any) =>
      renderSimpleIcon({
        icon,
        size: 54,
        bgHex: "#0b0b0f",
        fallbackHex: "#ff6a00",
        aProps: {
          href: "#",
          onClick: (e) => e.preventDefault(),
          title: icon.title,
        },
      })
    );
  }, [icons]);

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left side - Content */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="text-primary">Tools & Continuous Growth</span>
            </h2>

            <div className="space-y-4 text-muted-foreground">
              <p className="text-lg leading-relaxed">
                These are the technologies I have worked with through hands-on
                experience. Each one represents an ongoing learning process, where
                I consistently seek to deepen my understanding and refine my skills.
              </p>

              <p className="text-lg leading-relaxed">
                I believe continuous growth is essential in the technology field.
                For that reason, I dedicate time on a daily basis to studying,
                experimenting, and applying new concepts in real-world projects.
              </p>

              <p className="text-lg leading-relaxed">
                My approach is grounded in strong fundamentals, combined with curiosity
                and openness to emerging technologies, always with a focus on building
                efficient, reliable, and impactful solutions.
              </p>
            </div>
          </div>

          {/* Right side - Sphere */}
          <div className="flex justify-center">
            <div className="skills-sphere">
              <Cloud
                options={options}
                containerProps={{ className: "skills-sphere__cloud" }}
              >
                {logoAnchors || []}
              </Cloud>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
