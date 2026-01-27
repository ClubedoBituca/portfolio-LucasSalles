import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: string;
}

const SEO = ({ 
  title = "Lucas Salles Granado - Creative Developer & Cultural Producer",
  description = "Desenvolvedor Full Stack e ex-produtor cultural com experiência na gestão de mais de R$ 1 Milhão em recursos captados e liderança de equipes multidisciplinares. Especialista em React, Three.js, Project Management e Cultural Production.",
  image = "/foto_perfil.png",
  url = "https://lucassalles.dev",
  type = "website"
}: SEOProps) => {
  const siteTitle = title.includes("Lucas Salles") ? title : `${title} | Lucas Salles Granado`;

  return (
    <Helmet>
      {/* HTML Meta Tags */}
      <title>{siteTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content="Lucas Salles Granado, Creative Developer, Cultural Producer, React, TypeScript, Three.js, Project Management, Full Stack Developer, UNIFEI, Sistemas de Informação" />
      <meta name="author" content="Lucas Salles Granado" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="pt-BR" />
      <meta name="revisit-after" content="7 days" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content="Lucas Salles Granado Portfolio" />
      <meta property="og:locale" content="pt_BR" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:creator" content="@LucasSalles" />
      
      {/* Additional SEO */}
      <meta name="theme-color" content="#f97316" />
      <link rel="canonical" href={url} />
      
      {/* Structured Data for GEO */}
      <meta name="generator" content="React + Vite + TypeScript" />
      <meta name="application-name" content="Lucas Salles Portfolio" />
    </Helmet>
  );
};

export default SEO;