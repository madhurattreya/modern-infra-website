import React from 'react';
import { Quote, CheckCircle2 } from 'lucide-react';
import { SectionHeader } from '../components/SectionHeader';
import { TechCard } from '../components/TechCard';
import { Button } from '../components/Button';
import { COMPANY_CONTACT } from '../data/companyData';

export const DirectorMessage: React.FC = () => {
  return (
    <div className="bg-[#F8FAFC] text-[#0F172A] min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        <div>
          <div className="text-xs font-sans text-[#D97706] mb-2 font-bold uppercase tracking-wider flex items-center gap-1.5">
            <span>HOME</span>
            <span className="text-[#CBD5E1]">/</span>
            <span>ABOUT</span>
            <span className="text-[#CBD5E1]">/</span>
            <span className="text-[#0F172A]">DIRECTOR'S MESSAGE</span>
          </div>
          <SectionHeader
            kicker="EXECUTIVE LEADERSHIP"
            title="Director's Message: Engineering the Future of Industrial Steel"
            subtitle="A commitment to engineering precision, technological leadership, and sustainable infrastructure for the nation and global export markets."
            badge="EXECUTIVE STATEMENT"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Main Statement Narrative */}
          <div className="lg:col-span-8 bg-[#FFFFFF] border border-[#CBD5E1] p-8 sm:p-10 space-y-6 shadow-industrial">
            <div className="flex items-center gap-3 text-[#D97706]">
              <Quote className="w-8 h-8" />
              <span className="font-sans text-xs uppercase tracking-widest font-bold">
                COMMUNIQUE FROM MANAGING DIRECTOR
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold font-headline text-[#0F172A] leading-tight uppercase">
              "We don't merely manufacture steel sheds; we build the core backbone of industrial commerce."
            </h3>

            <div className="space-y-4 font-body text-sm sm:text-base text-[#334155] leading-relaxed">
              <p>
                When we laid the foundation of <strong className="text-[#0F172A]">HAM Engineering Exim India Pvt Ltd</strong>, the industrial construction landscape was plagued by persistent project delays, material waste, and unpredictable quality.
              </p>
              <p>
                Our foundational mission was simple yet uncompromising: to introduce mathematical precision, automated fabrication, and turnkey predictability to steel infrastructure across India and international markets. Today, with over 500 commissioned landmarks, our structural frameworks shelter mission-critical supply chains, manufacturing powerhouses, and national transportation corridors.
              </p>
              <p>
                As India accelerates toward a multi-trillion dollar manufacturing economy, modern corporations require infrastructure that can be deployed at lightning speed without compromising safety or environmental ethics. By adopting 100% recyclable high-tensile steel, low-carbon engineering practices, and AI-assisted drafting, HAM Engineering remains at the vanguard of this industrial revolution.
              </p>
              <p className="text-[#0F172A] font-semibold pt-2">
                We invite you to experience the difference that structural integrity, mechanical discipline, and passionate craftsmanship can make for your next facility.
              </p>
            </div>

            {/* Signature Block */}
            <div className="pt-6 border-t border-[#E2E8F0] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <div className="text-lg font-bold font-headline text-[#0F172A] uppercase">
                  Board of Directors
                </div>
                <div className="text-xs font-sans text-[#D97706] font-bold uppercase tracking-wider">
                  HAM Engineering Exim India Pvt Ltd
                </div>
              </div>
              <div className="text-xs font-sans text-[#64748B] font-semibold uppercase tracking-wider">
                ISO 9001:2015 EXECUTIVE ENDORSED
              </div>
            </div>
          </div>

          {/* Core Commitments Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            <TechCard idCode="CORE VALUES" title="Our Core Commitments">
              <ul className="space-y-3 text-xs font-sans text-[#334155] pt-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#D97706] shrink-0 mt-0.5" />
                  <span><strong>Zero Failure Policy:</strong> 100% non-destructive weld testing and certified raw steel.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#D97706] shrink-0 mt-0.5" />
                  <span><strong>On-Time Guarantee:</strong> Parallel factory fabrication and rapid on-site assembly.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#D97706] shrink-0 mt-0.5" />
                  <span><strong>Transparent Pricing:</strong> Clear bill of quantities with zero hidden contingencies.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#D97706] shrink-0 mt-0.5" />
                  <span><strong>Turnkey Accountability:</strong> From architectural blueprint to handover certificate.</span>
                </li>
              </ul>
            </TechCard>

            <div className="p-6 bg-[#FEF3C7]/40 border border-[#CBD5E1] text-center space-y-3">
              <div className="text-xs font-sans text-[#475569] font-medium">Need Direct Technical Guidance?</div>
              <a href={`tel:${COMPANY_CONTACT.phone}`} className="block">
                <Button variant="primary" size="md" className="w-full">
                  Speak With Technical Lead
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
