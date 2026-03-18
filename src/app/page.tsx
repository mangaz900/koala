import PromoBar from '@/components/PromoBar';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import TrustBar from '@/components/TrustBar';
import ProblemSolution from '@/components/ProblemSolution';
import BenefitCards from '@/components/BenefitCards';
import IngredientsSection from '@/components/IngredientsSection';
import HowItWorks from '@/components/HowItWorks';
import Reviews from '@/components/Reviews';
import ComparisonTable from '@/components/ComparisonTable';
import FAQ from '@/components/FAQ';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <PromoBar />
      <Header />
      <main>
        <HeroSection />
        <ProblemSolution />
        <ComparisonTable />
        <HowItWorks />
        <BenefitCards />
        <IngredientsSection />
        <Reviews />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
