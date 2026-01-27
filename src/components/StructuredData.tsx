import { Helmet } from 'react-helmet-async';

interface StructuredDataProps {
  name?: string;
  jobTitle?: string;
  alumniOf?: string;
  knowsAbout?: string[];
  description?: string;
  sameAs?: string[];
  image?: string;
  url?: string;
  email?: string;
  telephone?: string;
}

const StructuredData = ({
  name = "Lucas Salles Granado",
  jobTitle = "Creative Developer & Cultural Producer",
  alumniOf = "UNIFEI (Sistemas de Informação)",
  knowsAbout = [
    "React",
    "Three.js", 
    "Project Management",
    "Cultural Production",
    "Grant Writing",
    "TypeScript",
    "JavaScript",
    "Python",
    "Full Stack Development",
    "WebGL",
    "Data Analysis",
    "Financial Auditing",
    "Team Leadership"
  ],
  description = "Desenvolvedor Full Stack e ex-produtor cultural com experiência na gestão de mais de R$ 1 Milhão em recursos captados e liderança de equipes multidisciplinares.",
  sameAs = [
    "https://www.linkedin.com/in/lucas-salles-granado-36a195334/",
    "https://github.com/ClubedoBitucado"
  ],
  image = "/src/assets/foto_perfil.png",
  url = "https://lucassalles.dev",
  email = "d2023006878@unifei.edu.br",
  telephone = "+5535991900528"
}: StructuredDataProps) => {
  
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": name,
    "jobTitle": jobTitle,
    "description": description,
    "image": image,
    "url": url,
    "email": email,
    "telephone": telephone,
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "Universidade Federal de Itajubá",
      "alternateName": "UNIFEI",
      "department": "Sistemas de Informação"
    },
    "knowsAbout": knowsAbout,
    "sameAs": sameAs,
    "worksFor": {
      "@type": "Organization",
      "name": "Freelancer"
    },
    "hasOccupation": [
      {
        "@type": "Occupation",
        "name": "Full Stack Developer",
        "occupationLocation": {
          "@type": "Place",
          "name": "Brasil"
        },
        "skills": [
          "React",
          "TypeScript",
          "JavaScript",
          "Python",
          "Three.js",
          "WebGL",
          "Node.js",
          "Data Analysis"
        ]
      },
      {
        "@type": "Occupation",
        "name": "Cultural Producer",
        "occupationLocation": {
          "@type": "Place",
          "name": "Minas Gerais, Brasil"
        },
        "skills": [
          "Project Management",
          "Grant Writing",
          "Financial Auditing",
          "Team Leadership",
          "Cultural Production",
          "Event Management"
        ]
      }
    ],
    "award": [
      "Gestão de mais de R$ 1 Milhão em recursos captados",
      "Liderança de equipes multidisciplinares em projetos culturais"
    ],
    "memberOf": {
      "@type": "EducationalOrganization",
      "name": "UNIFEI - Universidade Federal de Itajubá"
    }
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Lucas Salles Granado Portfolio",
    "alternateName": "Lucas Salles Portfolio",
    "url": url,
    "description": "Portfolio profissional de Lucas Salles Granado - Creative Developer & Cultural Producer",
    "author": {
      "@type": "Person",
      "name": name
    },
    "inLanguage": "pt-BR",
    "copyrightYear": "2025",
    "genre": "Portfolio"
  };

  const professionalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Lucas Salles Granado - Desenvolvimento Web & Consultoria Cultural",
    "description": "Serviços de desenvolvimento web, análise de dados e consultoria em gestão de projetos culturais",
    "provider": {
      "@type": "Person",
      "name": name
    },
    "areaServed": "Brasil",
    "serviceType": [
      "Desenvolvimento Web",
      "Análise de Dados", 
      "Gestão de Projetos",
      "Consultoria Cultural",
      "Desenvolvimento Full Stack"
    ]
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(personSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(websiteSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(professionalServiceSchema)}
      </script>
    </Helmet>
  );
};

export default StructuredData;