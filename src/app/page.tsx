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
        <TrustBar />
        <ProblemSolution />
        <BenefitCards />
        <IngredientsSection />
        <HowItWorks />
        <Reviews />
        <ComparisonTable />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />

      {/* Mobile sticky cart bar */}
      <div style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        background: 'rgba(13,8,24,0.96)',
        backdropFilter: 'blur(20px)',
        borderTop: '1px solid rgba(139,92,246,0.2)',
        padding: '0.875rem 1.5rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '1rem',
        zIndex: 100,
      }} className="mobile-sticky">
        <div>
          <span style={{ color: '#f0eaff', fontWeight: 700, fontSize: '1rem' }}>399 kr</span>
          <span style={{ color: '#a899c4', fontSize: '0.8rem', display: 'block' }}>1 burk · 60 gummies</span>
        </div>
        <a href="#shop" style={{ flex: 1, maxWidth: '220px' }}>
          <button className="btn-primary" style={{ padding: '0.8rem 1.5rem', fontSize: '0.9rem', fontFamily: 'Inter, sans-serif' }}>
            🌙 Köp nu
          </button>
        </a>
      </div>

      <style>{`
        .mobile-sticky { display: none; }
        @media (max-width: 768px) {
          .mobile-sticky { display: flex !important; }
          main { padding-bottom: 80px; }
        }
      `}</style>
    </>
  );
}
