import React from 'react';
import { Target, Eye, CheckCircle2, ArrowRight } from 'lucide-react';
import { SectionHeader } from '../components/SectionHeader';
import { TechCard } from '../components/TechCard';
import { Button } from '../components/Button';
import { Link } from 'react-router-dom';

export const VisionMission: React.FC = () => {
  return (
    <div className="bg-[#F8FAFC] text-[#0F172A] min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-16">
        <div>
          <div className="text-xs font-sans text-[#D97706] mb-2 font-bold uppercase tracking-wider flex items-center gap-1.5">
            <span>HOME</span>
            <span className="text-[#CBD5E1]">/</span>
            <span>ABOUT</span>
            <span className="text-[#CBD5E1]">/</span>
            <span className="text-[#0F172A]">VISION &amp; MISSION</span>
          </div>
          <SectionHeader
            kicker="STRATEGIC FOUNDATION"
            title="Our Vision &amp; Mission: Pillars of Structural Leadership"
            subtitle="The strategic principles and engineering doctrine guiding HAM Engineering Exim India into the next decade of infrastructure development."
            badge="LONG-TERM CHARTER"
          />
        </div>

        {/* Vision & Mission Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Vision */}
          <TechCard idCode="CORPORATE VISION" badge="HORIZON 2035">
            <div className="w-12 h-12 bg-[#FEF3C7] border border-[#F59E0B] flex items-center justify-center text-[#B45309] mb-4 shadow-xs">
              <Eye className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-extrabold font-headline text-[#0F172A] mb-3 uppercase">
              Our Vision
            </h3>
            <p className="text-sm sm:text-base font-body text-[#475569] leading-relaxed mb-6">
              To be recognized globally as the most trusted, technically sophisticated, and sustainable manufacturer of Pre-Engineered Steel Buildings and heavy infrastructure solutions, establishing the benchmark for structural safety, architectural excellence, and engineering transparency.
            </p>
            <div className="border-t border-[#F1F5F9] pt-4 space-y-2.5 text-xs font-sans text-[#334155]">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#D97706] shrink-0" />
                <span>Top-tier domestic &amp; international export footprint</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#D97706] shrink-0" />
                <span>Pioneer in low-carbon modular steel fabrication</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#D97706] shrink-0" />
                <span>Zero-tolerance quality &amp; lifecycle reliability</span>
              </div>
            </div>
          </TechCard>

          {/* Mission */}
          <TechCard idCode="OPERATIONAL MISSION" badge="OPERATIONAL MANDATE">
            <div className="w-12 h-12 bg-[#FEF3C7] border border-[#F59E0B] flex items-center justify-center text-[#B45309] mb-4 shadow-xs">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-extrabold font-headline text-[#0F172A] mb-3 uppercase">
              Our Mission
            </h3>
            <p className="text-sm sm:text-base font-body text-[#475569] leading-relaxed mb-6">
              To deliver turnkey steel infrastructure that maximizes client ROI through mathematical design optimization, automated manufacturing, and zero-delay on-site erection, while upholding uncompromising occupational safety and environmental stewardship.
            </p>
            <div className="border-t border-[#F1F5F9] pt-4 space-y-2.5 text-xs font-sans text-[#334155]">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#D97706] shrink-0" />
                <span>Deliver every facility within agreed timeline &amp; budget</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#D97706] shrink-0" />
                <span>Continuous R&amp;D in thermal insulation &amp; clear spans</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#D97706] shrink-0" />
                <span>Empower a 150+ workforce with advanced safety standards</span>
              </div>
            </div>
          </TechCard>
        </div>

        {/* Core Principles */}
        <div className="bg-[#FFFFFF] border border-[#CBD5E1] p-8 sm:p-10 space-y-6 shadow-industrial">
          <div className="text-xs font-sans text-[#D97706] font-bold uppercase tracking-wider flex items-center gap-2">
            <span className="w-2 h-2 bg-[#D97706]" />
            FIVE CORE PILLARS OF OUR OPERATIONAL DOCTRINE
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { title: "Precision", desc: "±1.5mm shop tolerances across all cut, drilled, and welded steel members." },
              { title: "Integrity", desc: "Unwavering commitment to certified raw materials and authentic test certificates." },
              { title: "Velocity", desc: "Parallel engineering and fabrication compressing project lifecycles by 50%." },
              { title: "Safety", desc: "Zero-accident site erection culture with strict rigging and PPE protocols." },
              { title: "Sustainability", desc: "100% recyclable steel design and high-efficiency thermal building envelopes." }
            ].map((p, i) => (
              <div key={i} className="border-l-2 border-[#CBD5E1] pl-4 space-y-1 font-sans">
                <div className="text-sm font-bold text-[#0F172A] uppercase tracking-wide">{p.title}</div>
                <div className="text-xs text-[#64748B] leading-relaxed">{p.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="flex justify-between items-center bg-[#FEF3C7]/40 border border-[#CBD5E1] p-6 flex-wrap gap-4">
          <div>
            <div className="text-lg font-bold font-headline text-[#0F172A] uppercase">
              Ready to Align With an Engineering Partner You Can Count On?
            </div>
            <div className="text-sm font-body text-[#64748B] mt-0.5">
              Connect with our structural design team at HAM Engineering today for a free design feasibility review.
            </div>
          </div>
          <Link to="/contact">
            <Button variant="primary" icon={<ArrowRight className="w-4 h-4" />}>
              Contact Our Directorate
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
