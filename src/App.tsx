import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Phone, MessageSquare, ArrowUp } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { EstimatorModal } from './components/EstimatorModal';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { DirectorMessage } from './pages/DirectorMessage';
import { VisionMission } from './pages/VisionMission';
import { ProductPage } from './pages/ProductPage';
import { IndustriesWeServe } from './pages/IndustriesWeServe';
import { Projects } from './pages/Projects';
import { Blog } from './pages/Blog';
import { BlogPostPage } from './pages/BlogPost';
import { Contact } from './pages/Contact';
import { COMPANY_CONTACT } from './data/companyData';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export function App() {
  const [isEstimatorOpen, setIsEstimatorOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-[#F8FAFC] text-[#0F172A] relative selection:bg-[#F59E0B] selection:text-[#060A10]">
        {/* Navigation Bar */}
        <Navbar onOpenEstimator={() => setIsEstimatorOpen(true)} />

        {/* Main Application Route Content */}
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home onOpenEstimator={() => setIsEstimatorOpen(true)} />} />
            
            {/* About Subpages */}
            <Route path="/about" element={<About onOpenEstimator={() => setIsEstimatorOpen(true)} />} />
            <Route path="/director-message" element={<DirectorMessage />} />
            <Route path="/vision-mission" element={<VisionMission />} />

            {/* Product Range Subpages */}
            <Route path="/pre-engineered-building" element={<ProductPage forcedId="peb" onOpenEstimator={() => setIsEstimatorOpen(true)} />} />
            <Route path="/puf-panel" element={<ProductPage forcedId="puf" onOpenEstimator={() => setIsEstimatorOpen(true)} />} />
            <Route path="/mezzanine-building" element={<ProductPage forcedId="mezzanine" onOpenEstimator={() => setIsEstimatorOpen(true)} />} />
            <Route path="/conventional-building" element={<ProductPage forcedId="conventional" onOpenEstimator={() => setIsEstimatorOpen(true)} />} />
            <Route path="/roof-sheeting" element={<ProductPage forcedId="roof-sheeting" onOpenEstimator={() => setIsEstimatorOpen(true)} />} />
            <Route path="/cladding-systems" element={<ProductPage forcedId="cladding" onOpenEstimator={() => setIsEstimatorOpen(true)} />} />
            <Route path="/steel-structures" element={<ProductPage forcedId="steel-structures" onOpenEstimator={() => setIsEstimatorOpen(true)} />} />
            <Route path="/metal-false-ceiling-systems" element={<ProductPage forcedId="metal-ceiling" onOpenEstimator={() => setIsEstimatorOpen(true)} />} />

            {/* Other Key Pages */}
            <Route path="/industries-we-serve" element={<IndustriesWeServe onOpenEstimator={() => setIsEstimatorOpen(true)} />} />
            <Route path="/projects" element={<Projects onOpenEstimator={() => setIsEstimatorOpen(true)} />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPostPage />} />
            <Route path="/contact" element={<Contact />} />

            {/* Fallback route */}
            <Route path="*" element={<Home onOpenEstimator={() => setIsEstimatorOpen(true)} />} />
          </Routes>
        </main>

        {/* Global Footer */}
        <Footer />

        {/* Global Interactive Estimator Modal */}
        <EstimatorModal
          isOpen={isEstimatorOpen}
          onClose={() => setIsEstimatorOpen(false)}
        />

        {/* Floating Quick Action Widgets */}
        <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
          {/* Back to top button */}
          {showScrollTop && (
            <button
              onClick={scrollToTop}
              className="p-3 bg-[#FFFFFF] border border-[#CBD5E1] hover:border-[#F59E0B] text-[#0F172A] hover:text-[#D97706] transition-colors shadow-lg cursor-pointer"
              title="Scroll to Top"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          )}

          {/* Quick WhatsApp Floating Button */}
          <a
            href={`https://wa.me/${COMPANY_CONTACT.whatsapp}?text=Hello%20HAM%20Engineering%2C%20I%20have%20an%20inquiry%20regarding%20PEB%20steel%20structures.`}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3.5 bg-[#25D366] text-white hover:bg-[#20ba59] transition-all shadow-[0_4px_20px_rgba(37,211,102,0.45)] flex items-center justify-center cursor-pointer group"
            title="Chat on WhatsApp"
          >
            <MessageSquare className="w-5 h-5 fill-current" />
          </a>

          {/* Quick Phone Floating Button */}
          <a
            href={`tel:${COMPANY_CONTACT.phone}`}
            className="p-3.5 bg-[#F59E0B] text-[#0F172A] hover:bg-[#FBBF24] transition-all shadow-[0_4px_20px_rgba(245,158,11,0.45)] flex items-center justify-center cursor-pointer"
            title="Call Helpline"
          >
            <Phone className="w-5 h-5 fill-current" />
          </a>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
