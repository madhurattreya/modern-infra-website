import React, { useState } from 'react';
import { 
  ArrowRight, 
  Calculator, 
  ShieldCheck, 
  Activity, 
  Phone,
  Play,
  Layers,
  Building2,
  Video
} from 'lucide-react';
import { Button } from './Button';
import { COMPANY_CONTACT } from '../data/companyData';
import { ThreePEBViewer } from './ThreePEBViewer';
import { PlantVideoModal } from './PlantVideoModal';

interface HeroProps {
  onOpenEstimator?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenEstimator }) => {
  const [heroMediaMode, setHeroMediaMode] = useState<'3d' | 'video'>('3d');
  const [isVideoModalOpen, setIsVideoModalOpen] = useState<boolean>(false);

  return (
    <section className="relative min-h-[92vh] bg-[#FFFFFF] border-b border-[#E2E8F0] overflow-hidden flex items-center">
      {/* Background blueprint grid for light theme */}
      <div className="absolute inset-0 blueprint-grid-light opacity-60 pointer-events-none" />
      
      {/* Ambient background rotating mechanical gear illustration */}
      <div className="absolute -top-24 -right-24 w-96 h-96 opacity-[0.05] pointer-events-none select-none text-[#0F172A]">
        <svg viewBox="0 0 100 100" className="w-full h-full animate-spin-slow" fill="currentColor">
          <path d="M50 35c-8.28 0-15 6.72-15 15s6.72 15 15 15 15-6.72 15-15-6.72-15-15-15zm0-25c-2.4 0-4.66.42-6.77 1.18l-2.44-6.42-6.58 2.39 2.44 6.42c-3.7 2.13-6.85 5.16-9.14 8.78l-6.42-2.44-2.39 6.58 6.42 2.44c-.76 2.11-1.18 4.37-1.18 6.77s.42 4.66 1.18 6.77l-6.42 2.44 2.39 6.58 6.42-2.44c2.29 3.62 5.44 6.65 9.14 8.78l-2.44 6.42 6.58 2.39 2.44-6.42c2.11.76 4.37 1.18 6.77 1.18s4.66-.42 6.77-1.18l2.44 6.42 6.58-2.39-2.44-6.42c3.7-2.13 6.85-5.16 9.14-8.78l6.42 2.44 2.39-6.58-6.42-2.44c.76-2.11 1.18-4.37 1.18-6.77s-.42-4.66-1.18-6.77l6.42-2.44-2.39-6.58-6.42 2.44c-2.29-3.62-5.44-6.65-9.14-8.78l2.44-6.42-6.58-2.39-2.44 6.42c-2.11-.76-4.37-1.18-6.77-1.18z"/>
        </svg>
      </div>

      <div className="absolute -bottom-20 -left-20 w-80 h-80 opacity-[0.04] pointer-events-none select-none text-[#D97706]">
        <svg viewBox="0 0 100 100" className="w-full h-full animate-spin-reverse-slow" fill="currentColor">
          <path d="M50 35c-8.28 0-15 6.72-15 15s6.72 15 15 15 15-6.72 15-15-6.72-15-15-15zm0-25c-2.4 0-4.66.42-6.77 1.18l-2.44-6.42-6.58 2.39 2.44 6.42c-3.7 2.13-6.85 5.16-9.14 8.78l-6.42-2.44-2.39 6.58 6.42 2.44c-.76 2.11-1.18 4.37-1.18 6.77s.42 4.66 1.18 6.77l-6.42 2.44 2.39 6.58 6.42-2.44c2.29 3.62 5.44 6.65 9.14 8.78l-2.44 6.42 6.58 2.39 2.44-6.42c2.11.76 4.37 1.18 6.77 1.18s4.66-.42 6.77-1.18l2.44 6.42 6.58-2.39-2.44-6.42c3.7-2.13 6.85-5.16 9.14-8.78l6.42 2.44 2.39-6.58-6.42-2.44c.76-2.11 1.18-4.37 1.18-6.77s-.42-4.66-1.18-6.77l6.42-2.44-2.39-6.58-6.42 2.44c-2.29-3.62-5.44-6.65-9.14-8.78l2.44-6.42-6.58-2.39-2.44 6.42c-2.11-.76-4.37-1.18-6.77-1.18z"/>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 relative z-10 w-full">
        {/* Top Industrial Specification Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#CBD5E1] pb-3 mb-8 text-xs">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 bg-[#FEF3C7] border border-[#F59E0B] text-[#B45309] font-sans font-bold text-[11px] tracking-wider uppercase shadow-xs">
              HEAVY FABRICATION DIVISION
            </span>
            <span className="text-[#475569] font-sans font-semibold hidden sm:inline">SPEC: IS 800:2007 (CODE OF PRACTICE FOR STEEL)</span>
            <span className="text-[#64748B] font-sans hidden md:inline">• FABRICATION TOLERANCE: ±1.5MM</span>
          </div>

          <div className="flex items-center gap-4 text-[#475569] text-xs font-sans">
            <span className="flex items-center gap-1.5 text-[#059669] font-bold">
              <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
              PLANT CAPACITY: 75,000 MT/YR
            </span>
            <span className="hidden sm:inline text-[#CBD5E1]">|</span>
            <span className="hidden sm:inline font-semibold">NCR INDUSTRIAL HUB • EXIM OPERATIONS</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left Column: Headlines & Actions */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#F1F5F9] border border-[#CBD5E1] text-xs font-sans text-[#D97706] shadow-xs">
              <ShieldCheck className="w-4 h-4 text-[#D97706]" />
              <span className="font-bold tracking-wider text-[#0F172A] uppercase">
                HAM ENGINEERING EXIM INDIA PVT LTD
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-5xl font-extrabold font-sans text-[#0F172A] tracking-tight leading-[1.14] uppercase">
              Turnkey Pre-Engineered Steel <br />
              <span className="text-[#D97706]">
                Buildings &amp; Heavy Fabrication
              </span>
            </h1>

            <p className="text-base sm:text-lg font-body text-[#334155] max-w-xl leading-relaxed">
              Engineering massive clear-span Pre-Engineered Buildings (PEB), heavy structural steel frameworks, and PUF insulated facilities. Built for extreme seismic loads, zero maintenance, and rapid 50% accelerated on-site erection across domestic and export markets.
            </p>

            {/* Quick Stat Bar */}
            <div className="grid grid-cols-3 gap-2 pt-2 pb-2 border-y border-[#CBD5E1] py-3 bg-[#F8FAFC]">
              <div className="px-3 border-r border-[#CBD5E1]">
                <div className="text-2xl sm:text-3xl font-extrabold font-headline text-[#0F172A]">500+</div>
                <div className="text-[11px] text-[#64748B] uppercase font-bold tracking-wider mt-0.5">Projects Built</div>
              </div>
              <div className="px-3 border-r border-[#CBD5E1]">
                <div className="text-2xl sm:text-3xl font-extrabold font-headline text-[#D97706]">7.5L</div>
                <div className="text-[11px] text-[#64748B] uppercase font-bold tracking-wider mt-0.5">Sq.Ft Factory</div>
              </div>
              <div className="px-3">
                <div className="text-2xl sm:text-3xl font-extrabold font-headline text-[#0F172A]">18+</div>
                <div className="text-[11px] text-[#64748B] uppercase font-bold tracking-wider mt-0.5">Years Heritage</div>
              </div>
            </div>

            {/* CTA Action Buttons */}
            <div className="pt-2 flex flex-wrap gap-3 items-center">
              <Button
                variant="primary"
                size="lg"
                onClick={onOpenEstimator}
                icon={<Calculator className="w-4 h-4" />}
                iconPosition="right"
              >
                Cost &amp; Spec Estimator
              </Button>

              <Button
                variant="outline"
                size="lg"
                onClick={() => setIsVideoModalOpen(true)}
                icon={<Play className="w-4 h-4 text-[#D97706] fill-current" />}
              >
                Watch Plant Reel
              </Button>

              <a href="#products">
                <Button variant="secondary" size="lg" icon={<ArrowRight className="w-4 h-4" />}>
                  Explore Products
                </Button>
              </a>

              <a
                href={`tel:${COMPANY_CONTACT.phone}`}
                className="inline-flex items-center gap-2 text-xs font-sans font-bold uppercase tracking-wider text-[#475569] hover:text-[#D97706] transition-colors px-2 py-1"
              >
                <Phone className="w-4 h-4 text-[#D97706]" />
                <span>Helpline: {COMPANY_CONTACT.phone}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Interactive 3D WebGL Model / Plant Video Showcase */}
          <div className="lg:col-span-6">
            <div className="bg-[#FFFFFF] border border-[#CBD5E1] p-3 sm:p-4 shadow-industrial-lg">
              {/* Media Switcher Header */}
              <div className="flex items-center justify-between border-b border-[#E2E8F0] pb-2.5 mb-3 text-xs font-sans">
                <div className="flex items-center gap-2">
                  <Activity className="w-4 h-4 text-[#D97706]" />
                  <span className="text-[#0F172A] font-bold uppercase tracking-wider">
                    {heroMediaMode === '3d' ? '3D STRUCTURAL PEB INSPECTOR' : 'FACTORY FABRICATION HUB'}
                  </span>
                </div>

                <div className="flex items-center gap-1">
                  <button
                    onClick={() => setHeroMediaMode('3d')}
                    className={`px-2.5 py-1 text-xs font-sans font-bold uppercase tracking-wider flex items-center gap-1.5 transition-all cursor-pointer border ${
                      heroMediaMode === '3d'
                        ? 'bg-[#FEF3C7] border-[#F59E0B] text-[#B45309]'
                        : 'bg-white border-[#CBD5E1] text-[#475569] hover:border-[#D97706]'
                    }`}
                  >
                    <Layers className="w-3.5 h-3.5 text-[#D97706]" />
                    <span>3D Model</span>
                  </button>

                  <button
                    onClick={() => setHeroMediaMode('video')}
                    className={`px-2.5 py-1 text-xs font-sans font-bold uppercase tracking-wider flex items-center gap-1.5 transition-all cursor-pointer border ${
                      heroMediaMode === 'video'
                        ? 'bg-[#FEF3C7] border-[#F59E0B] text-[#B45309]'
                        : 'bg-white border-[#CBD5E1] text-[#475569] hover:border-[#D97706]'
                    }`}
                  >
                    <Video className="w-3.5 h-3.5 text-[#D97706]" />
                    <span>Plant Tour</span>
                  </button>
                </div>
              </div>

              {heroMediaMode === '3d' ? (
                /* Interactive 3D WebGL Structural Canvas */
                <ThreePEBViewer height="h-72 sm:h-80" />
              ) : (
                /* Live Embedded Working Factory Video Stream */
                <div className="relative h-72 sm:h-80 bg-[#0F172A] overflow-hidden border border-[#CBD5E1]">
                  <iframe
                    src="https://www.youtube-nocookie.com/embed/d_x5iC8aLp8?autoplay=1&mute=1&loop=1&playlist=d_x5iC8aLp8&controls=1&modestbranding=1&playsinline=1"
                    title="HAM Engineering Factory Works Drone Reel"
                    className="w-full h-full border-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                  {/* Floating button to open all 4 chapters */}
                  <button
                    onClick={() => setIsVideoModalOpen(true)}
                    className="absolute top-2 right-2 px-2.5 py-1 bg-[#F59E0B] text-[#0F172A] font-sans font-bold text-[10px] uppercase tracking-wider shadow-md hover:bg-[#D97706] transition-colors cursor-pointer flex items-center gap-1 z-10"
                    title="Open Theater Mode with all 4 Chapters"
                  >
                    <span>All 4 Chapters</span>
                  </button>
                </div>
              )}

              {/* Console Footer */}
              <div className="mt-2.5 flex items-center justify-between text-[11px] font-sans text-[#64748B]">
                <span className="font-semibold uppercase tracking-wider">FABRICATION STATUS: NOMINAL</span>
                <span className="text-[#059669] font-bold uppercase tracking-wider">100% QUALITY VERIFIED</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Full Industrial Plant Video Modal */}
      <PlantVideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        onOpenEstimator={onOpenEstimator}
      />
    </section>
  );
};
