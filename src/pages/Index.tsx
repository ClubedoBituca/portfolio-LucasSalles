import { lazy, Suspense, useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SEO from "@/components/SEO";
import StructuredData from "@/components/StructuredData";
import ErrorBoundary from "@/components/ErrorBoundary";
import ScrollProgress from "@/components/ScrollProgress";
import { trackWebVitals } from "@/utils/analytics";

// Lazy load heavy components
const AboutSection = lazy(() => import("@/components/AboutSection"));
const SkillsSphere = lazy(() => import("@/components/SkillsSphere"));
const ProjectsSection = lazy(() => import("@/components/ProjectsSection"));
const ContactSection = lazy(() => import("@/components/ContactSection"));
const Footer = lazy(() => import("@/components/Footer"));

// Loading skeleton components
const SectionSkeleton = () => (
  <div className="section-padding">
    <div className="container-custom">
      <div className="animate-pulse space-y-4">
        <div className="h-8 bg-muted rounded w-1/3"></div>
        <div className="h-4 bg-muted rounded w-2/3"></div>
        <div className="h-4 bg-muted rounded w-1/2"></div>
      </div>
    </div>
  </div>
);

const Index = () => {
  useEffect(() => {
    // Initialize web vitals tracking
    trackWebVitals();
  }, []);

  return (
    <>
      <SEO 
        title="Lucas Salles Granado - Creative Developer & Cultural Producer"
        description="Desenvolvedor Full Stack e ex-produtor cultural com experiência na gestão de mais de R$ 1 Milhão em recursos captados. Especialista em React, Three.js, TypeScript e gestão de projetos culturais."
        image="/foto_perfil.png"
        url="https://lucassalles-portfolio.vercel.app/"
      />
      <StructuredData />
      <ScrollProgress />
      
      <ErrorBoundary>
        <div className="min-h-screen bg-background dark">
          <Navbar />
          <main>
            <HeroSection />
            <ErrorBoundary fallback={<SectionSkeleton />}>
              <Suspense fallback={<SectionSkeleton />}>
                <AboutSection />
              </Suspense>
            </ErrorBoundary>
            <ErrorBoundary fallback={<SectionSkeleton />}>
              <Suspense fallback={<SectionSkeleton />}>
                <SkillsSphere />
              </Suspense>
            </ErrorBoundary>
            <ErrorBoundary fallback={<SectionSkeleton />}>
              <Suspense fallback={<SectionSkeleton />}>
                <ProjectsSection />
              </Suspense>
            </ErrorBoundary>
            <ErrorBoundary fallback={<SectionSkeleton />}>
              <Suspense fallback={<SectionSkeleton />}>
                <ContactSection />
              </Suspense>
            </ErrorBoundary>
          </main>
          <ErrorBoundary fallback={<div className="h-20 bg-card"></div>}>
            <Suspense fallback={<div className="h-20 bg-card"></div>}>
              <Footer />
            </Suspense>
          </ErrorBoundary>
        </div>
      </ErrorBoundary>
    </>
  );
};

export default Index;
