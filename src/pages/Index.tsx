import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import StructuredData from "@/components/StructuredData";

const Index = () => {
  return (
    <>
      <SEO 
        title="Lucas Salles Granado - Creative Developer & Cultural Producer"
        description="Desenvolvedor Full Stack e ex-produtor cultural com experiência na gestão de mais de R$ 1 Milhão em recursos captados. Especialista em React, Three.js, TypeScript e gestão de projetos culturais."
        image="/foto_perfil.png"
        url="https://lucassalles.dev"
      />
      <StructuredData />
      
      <div className="min-h-screen bg-background dark">
        <Navbar />
        <main>
          <HeroSection />
          <AboutSection />
          <ProjectsSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
