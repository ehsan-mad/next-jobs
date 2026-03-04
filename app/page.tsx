import Header from "./components/Header";
import Hero from "./components/Hero";
import LogoCloud from "./components/LogoCloud";
import CategorySection from "./components/CategorySection";
import LatestJobs from "./components/LatestJobs";
import FeaturedJobs from "./components/FeaturedJobs";
import DashboardCTA from "./components/DashboardCTA";
import DashboardPreview from "./components/DashboardPreview";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-epilogue overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <LogoCloud />
        <CategorySection />
        <DashboardCTA />
        
        <FeaturedJobs />
        <LatestJobs />
      </main>
      <Footer />
    </div>
  );
}
