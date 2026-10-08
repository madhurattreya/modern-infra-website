import React from 'react';
import { Link } from 'react-router-dom';
import { 
  CheckCircle2, 
  ArrowRight, 
  Calculator 
} from 'lucide-react';
import { SectionHeader } from '../components/SectionHeader';
import { Button } from '../components/Button';
import { INDUSTRIES } from '../data/companyData';

interface IndustriesWeServeProps {
  onOpenEstimator?: () => void;
}

export const IndustriesWeServe: React.FC<IndustriesWeServeProps> = ({ onOpenEstimator }) => {
  return (
    <div className="bg-[#F8FAFC] text-[#0F172A] min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-16">
        <div>
          <div className="text-xs font-sans text-[#D97706] mb-2 font-bold uppercase tracking-wider flex items-center gap-1.5">
            <span>HOME</span>
            <span className="text-[#CBD5E1]">/</span>
            <span>INDUSTRIES</span>
            <span className="text-[#CBD5E1]">/</span>
            <span className="text-[#0F172A]">SECTOR SOLUTIONS</span>
          </div>
          <SectionHeader
            kicker="SECTOR SPECIALIZATION"
            title="Industries We Serve: Structural Solutions by Sector"
            subtitle="Custom pre-engineered buildings and heavy structural steelwork engineered for the specialized operational demands of modern commerce."
            badge="MULTI-SECTOR CAPABILITY"
          />
        </div>

        {/* Sectors Grid */}
        <div className="space-y-12">
          {INDUSTRIES.map((industry) => (
            <div
              key={industry.id}
              className="bg-[#FFFFFF] border border-[#CBD5E1] hover:border-[#F59E0B] transition-all p-6 sm:p-8 shadow-industrial-sm hover:shadow-industrial-lg"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-4 h-64 bg-[#FFFFFF] border border-[#CBD5E1] overflow-hidden">
                  <img
                    src={industry.image}
                    alt={industry.name}
                    className="w-full h-full object-cover filter brightness-95 hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="lg:col-span-8 space-y-4">
                  <div className="flex items-center justify-between text-xs font-sans">
                    <span className="text-[#D97706] font-bold uppercase tracking-wider">{industry.code}</span>
                    <span className="px-2.5 py-1 bg-[#F1F5F9] border border-[#CBD5E1] text-[#0F172A] font-bold uppercase text-[11px] tracking-wider">
                      {industry.projectsCount}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold font-headline text-[#0F172A] uppercase">
                    {industry.name}
                  </h3>

                  <p className="text-sm sm:text-base font-body text-[#475569] leading-relaxed">
                    {industry.description}
                  </p>

                  <div className="border-t border-[#F1F5F9] pt-4">
                    <div className="text-xs font-sans text-[#D97706] font-bold uppercase tracking-wider mb-2">
                      SPECIFIC ENGINEERING ADVANTAGES:
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {industry.benefits.map((b, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs font-sans text-[#334155]">
                          <CheckCircle2 className="w-4 h-4 text-[#D97706] shrink-0 mt-0.5" />
                          <span>{b}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2 flex flex-wrap gap-4 items-center">
                    <Button onClick={onOpenEstimator} variant="primary" size="sm" icon={<Calculator className="w-3.5 h-3.5" />}>
                      Estimate Sector Shed
                    </Button>
                    <Link to="/contact">
                      <Button variant="outline" size="sm" icon={<ArrowRight className="w-3.5 h-3.5" />}>
                        Request Sector Case Studies
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="bg-[#FFFFFF] border border-[#CBD5E1] p-8 text-center space-y-4 shadow-industrial">
          <h3 className="text-2xl sm:text-3xl font-extrabold font-headline text-[#0F172A] uppercase">
            Have a Specialized or Hybrid Industrial Facility?
          </h3>
          <p className="text-sm sm:text-base font-body text-[#475569] max-w-2xl mx-auto leading-relaxed">
            From automated high-bay warehouses with laser-guided AGV tracks to corrosive chemical processing sheds, our engineering team designs bespoke solutions for every operating envelope.
          </p>
          <div className="pt-2 flex justify-center gap-4">
            <Link to="/contact">
              <Button variant="primary" size="md">
                Talk to a Sector Specialist
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
