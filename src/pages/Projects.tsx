import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight, Filter, MapPin, Calendar } from 'lucide-react';
import { SectionHeader } from '../components/SectionHeader';
import { Button } from '../components/Button';
import { PROJECTS } from '../data/companyData';

interface ProjectsProps {
  onOpenEstimator?: () => void;
}

export const Projects: React.FC<ProjectsProps> = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Landmarks' },
    { id: 'Transit Infrastructure', label: 'Transit & Rail' },
    { id: 'Logistics & Warehousing', label: 'Warehousing' },
    { id: 'Manufacturing', label: 'Manufacturing' },
    { id: 'PUF & Clean Room', label: 'PUF & Cold Chains' },
    { id: 'Public Architecture', label: 'Public & Sports' }
  ];

  const filteredProjects = selectedCategory === 'all'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === selectedCategory);

  return (
    <div className="bg-[#F8FAFC] text-[#0F172A] min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        <div>
          <div className="text-xs font-sans text-[#D97706] mb-2 font-bold uppercase tracking-wider flex items-center gap-1.5">
            <span>HOME</span>
            <span className="text-[#CBD5E1]">/</span>
            <span>PORTFOLIO</span>
            <span className="text-[#CBD5E1]">/</span>
            <span className="text-[#0F172A]">LANDMARK PROJECTS</span>
          </div>
          <SectionHeader
            kicker="PROJECT PORTFOLIO"
            title="Projects: Landmark Infrastructure Executions"
            subtitle="Showcasing high-tonnage fabrication, complex structural geometries, and fast-track turnkey deliveries across India and export corridors."
            badge="500+ DELIVERED"
          />
        </div>

        {/* Filter Controls */}
        <div className="flex flex-wrap items-center gap-2 border-b border-[#E2E8F0] pb-4 font-sans text-xs">
          <span className="text-[#64748B] mr-2 flex items-center gap-1.5 font-bold uppercase tracking-wider">
            <Filter className="w-3.5 h-3.5 text-[#D97706]" />
            FILTER SECTOR:
          </span>
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3 py-1.5 border transition-all cursor-pointer uppercase font-bold tracking-wider text-[11px] ${
                selectedCategory === cat.id
                  ? 'bg-[#F59E0B] text-[#0F172A] border-[#D97706] shadow-xs'
                  : 'bg-[#FFFFFF] text-[#475569] border-[#CBD5E1] hover:border-[#F59E0B] hover:text-[#0F172A]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(prj => (
            <div
              key={prj.id}
              className="group bg-[#FFFFFF] border border-[#CBD5E1] hover:border-[#F59E0B] transition-all flex flex-col justify-between shadow-industrial-sm hover:shadow-industrial-lg"
            >
              <div>
                {/* Project Image */}
                <div className="relative h-60 overflow-hidden border-b border-[#E2E8F0]">
                  <img
                    src={prj.image}
                    alt={prj.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-95"
                  />
                  <div className="absolute top-2 left-2 px-2 py-0.5 bg-white/95 text-[10px] font-sans font-bold text-[#D97706] border border-[#CBD5E1] uppercase tracking-wider shadow-xs">
                    {prj.code}
                  </div>
                  <div className="absolute bottom-2 right-2 px-2 py-0.5 bg-[#0F172A]/95 text-[10px] font-sans font-bold text-white border border-[#334155] uppercase tracking-wider">
                    {prj.steelTonnage} STEEL
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-3">
                  <div className="flex items-center justify-between text-xs font-sans text-[#64748B]">
                    <span className="flex items-center gap-1 font-medium">
                      <MapPin className="w-3.5 h-3.5 text-[#D97706]" />
                      {prj.location}
                    </span>
                    <span className="flex items-center gap-1 font-medium">
                      <Calendar className="w-3.5 h-3.5 text-[#64748B]" />
                      {prj.completionYear}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold font-headline text-[#0F172A] group-hover:text-[#D97706] transition-colors leading-snug uppercase">
                    {prj.title}
                  </h3>

                  <div className="text-xs font-sans font-bold text-[#D97706] uppercase tracking-wide">
                    Covered Area: {prj.area}
                  </div>

                  {/* Technical Highlights */}
                  <div className="space-y-1.5 border-t border-[#F1F5F9] pt-3 text-xs font-sans text-[#334155]">
                    {prj.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#D97706] shrink-0 mt-0.5" />
                        <span className="text-xs text-[#475569]">{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <Link to="/contact" className="block w-full">
                  <Button variant="secondary" size="sm" className="w-full" icon={<ArrowRight className="w-3.5 h-3.5" />}>
                    Request Case Dossier
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Bar */}
        <div className="bg-[#FFFFFF] border border-[#CBD5E1] p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-industrial">
          <div>
            <h3 className="text-xl font-bold font-headline text-[#0F172A] uppercase">
              Want to see detailed drawings or visit a completed site?
            </h3>
            <p className="text-sm font-body text-[#64748B] mt-1 leading-relaxed">
              We arrange on-site visits to operational PEB structures for verified corporate clients.
            </p>
          </div>
          <Link to="/contact">
            <Button variant="primary" size="md">
              Schedule Site Walkthrough
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
