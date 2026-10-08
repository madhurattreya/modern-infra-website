import React, { useState } from 'react';
import { 
  X, 
  Play, 
  ExternalLink,
  Building2,
  CheckCircle2,
  Tv
} from 'lucide-react';
import { Button } from './Button';
import { COMPANY_CONTACT } from '../data/companyData';

interface PlantVideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenEstimator?: () => void;
}

interface VideoChapter {
  id: string;
  youtubeId: string;
  title: string;
  subtitle: string;
  duration: string;
  badge: string;
  specs: { label: string; value: string }[];
  description: string;
  highlights: string[];
}

const CHAPTERS: VideoChapter[] = [
  {
    id: 'factory_floor',
    youtubeId: 'd_x5iC8aLp8', // FPV Drone Fly-Through of Heavy Manufacturing Campus
    title: 'Manufacturing Works & Heavy Crane Operations',
    subtitle: '7,50,000+ SQ. FT. HEAVY FABRICATION CAMPUS • FPV FLY-THROUGH',
    duration: '02:45',
    badge: 'PLANT DRONE TOUR',
    specs: [
      { label: 'Annual Throughput', value: '75,000 MT/Year' },
      { label: 'Overhead EOT Cranes', value: '150 MT / 120 MT Demag' },
      { label: 'Covered Bay Width', value: '36m Clear Bay Spans' },
      { label: 'Workforce', value: '150+ Certified Engineers' }
    ],
    description: 'An immersive cinematic fly-through of heavy engineering works. Features double-girder overhead Demag EOT cranes, continuous assembly lines for heavy box girders, robotic welding bays, and ISO 9001:2015 certified production workflows.',
    highlights: [
      'Twin 150-ton heavy crane runway bays',
      'Laser-guided structural alignment jigs',
      'Environmentally controlled painting & curing zone'
    ]
  },
  {
    id: 'cnc_cutting',
    youtubeId: '6P6v6d7lX5g', // Intelligent Steel Fabrication & Automated CNC Processing
    title: 'Intelligent CNC Plasma & Automated Beam Fabrication',
    subtitle: 'COMPUTER-CONTROLLED HIGH-TOLERANCE PLATE PROFILING',
    duration: '03:10',
    badge: 'CNC WORKSHOP',
    specs: [
      { label: 'Max Plate Thickness', value: 'Up to 65mm Structural Steel' },
      { label: 'Cutting Tolerance', value: '±0.5mm Strict Accuracy' },
      { label: 'Gantry Bed Size', value: '4.5m x 18m Continuous Bed' },
      { label: 'Cutting Speed', value: 'Up to 3,500 mm/min' }
    ],
    description: 'High-definition automated CNC processing slicing through heavy structural steel plates with microscopic accuracy. Our automated nesting software reduces raw material scrap to under 1.2% while pre-punching all bolt connection holes.',
    highlights: [
      'Multi-torch synchronized cutting for heavy flanges',
      'Automated bevelling for full-penetration weld preps',
      'Pre-punched bolt holes eliminate field reaming'
    ]
  },
  {
    id: 'peb_erection',
    youtubeId: '5V9qL9B58p0', // Mega Logistics Warehouse & Steel Erection Timelapse
    title: 'Turnkey PEB Site Erection & Mega-Warehouse Timelapse',
    subtitle: 'PRECISION LOGISTICAL DELIVERY & FIELD CRANE ASSEMBLY',
    duration: '04:20',
    badge: 'SITE TIMELAPSE',
    specs: [
      { label: 'Erection Velocity', value: '350 - 500 MT / Month' },
      { label: 'Mobile Crane Fleet', value: '50 MT - 100 MT Telescopic' },
      { label: 'Clear Span Records', value: 'Up to 90m Column-Free' },
      { label: 'Safety Record', value: 'Zero-Harm / Zero-Accident' }
    ],
    description: 'Witness the complete turnkey construction of an industrial mega-warehouse. Towering mobile cranes hoist 40-meter tapered rafters into position, where certified riggers secure moment joints with high-strength friction grip (HSFG) bolts under strict safety protocols.',
    highlights: [
      'Pre-engineered bolted connections ensure zero site welding',
      'Laser-screed optical level verification of column plumb',
      'All-weather boom lift access and safety harness tie-off lines'
    ]
  },
  {
    id: 'plant_tour',
    youtubeId: 'F3zWJpLd48U', // Steel Building Manufacturing & Quality Control Tour
    title: 'Pre-Engineered Building Systems Plant Tour & QA',
    subtitle: 'CONTINUOUS PURLIN LINES, BEAM LINES & QUALITY CONTROL',
    duration: '05:15',
    badge: 'SYSTEMS TOUR',
    specs: [
      { label: 'Welding Code', value: 'AWS D1.1 / ASME Sec IX' },
      { label: 'Purlin Line', value: 'Continuous Roll-Formed Z/C' },
      { label: 'Coating Check', value: 'Elcometer DFT Testing' },
      { label: 'Raw Steel Spec', value: 'IS 2062 Gr E250 / E350 MTC' }
    ],
    description: 'Comprehensive guided facility walkthrough showcasing high-speed cold-formed purlin roll-forming, plate shearing, automated welding, shot blasting, and quality assurance testing before dispatch.',
    highlights: [
      'Automated continuous cold-forming purlin lines',
      'Dry Film Thickness (DFT) verification on SA 2.5 blasted steel',
      'Mill Test Certificates (MTC) supplied with every dispatched lot'
    ]
  }
];

export const PlantVideoModal: React.FC<PlantVideoModalProps> = ({ isOpen, onClose, onOpenEstimator }) => {
  const [activeChapter, setActiveChapter] = useState<number>(0);

  if (!isOpen) return null;

  const current = CHAPTERS[activeChapter];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/85 backdrop-blur-xs overflow-y-auto">
      <div className="relative w-full max-w-5xl bg-[#FFFFFF] border border-[#CBD5E1] shadow-[0_20px_70px_rgba(0,0,0,0.5)] overflow-hidden my-4 text-[#0F172A]">
        {/* Modal Header */}
        <div className="flex items-center justify-between p-3.5 sm:p-4 border-b border-[#E2E8F0] bg-[#F8FAFC]">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-[#FEF3C7] border border-[#F59E0B]">
              <Tv className="w-5 h-5 text-[#D97706]" />
            </div>
            <div>
              <div className="text-[10px] font-sans font-bold uppercase tracking-wider text-[#D97706] flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
                OFFICIAL INDUSTRIAL WORKS STREAM • 1080P HD
              </div>
              <h3 className="text-base sm:text-lg font-bold font-headline text-[#0F172A] uppercase line-clamp-1">
                {current.title}
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-[#64748B] hover:text-[#0F172A] hover:bg-[#E2E8F0] border border-[#CBD5E1] transition-colors cursor-pointer"
            title="Close Video"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Real Embedded YouTube Video Player */}
        <div className="relative aspect-video w-full bg-[#0F172A] overflow-hidden">
          <iframe
            key={current.youtubeId}
            src={`https://www.youtube-nocookie.com/embed/${current.youtubeId}?autoplay=1&mute=0&rel=0&modestbranding=1&playsinline=1`}
            title={current.title}
            className="w-full h-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>

        {/* Chapter Selection Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 border-b border-[#CBD5E1] bg-[#F1F5F9]">
          {CHAPTERS.map((ch, idx) => (
            <button
              key={ch.id}
              onClick={() => setActiveChapter(idx)}
              className={`p-3 text-left border-r border-[#CBD5E1] last:border-r-0 transition-all cursor-pointer ${
                activeChapter === idx
                  ? 'bg-white border-t-3 border-t-[#D97706] shadow-sm'
                  : 'hover:bg-white/60 text-[#475569]'
              }`}
            >
              <div className="text-[10px] font-sans font-bold uppercase tracking-wider text-[#D97706] flex items-center justify-between">
                <span>CHAPTER 0{idx + 1}</span>
                <span className="font-mono text-[#64748B]">{ch.duration}</span>
              </div>
              <div className="text-xs font-headline font-bold text-[#0F172A] truncate uppercase mt-0.5">
                {ch.title}
              </div>
            </button>
          ))}
        </div>

        {/* Active Chapter Details & Engineering Specifications */}
        <div className="p-4 sm:p-6 bg-[#FFFFFF]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
            <div className="lg:col-span-7 space-y-3">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 bg-[#FEF3C7] border border-[#F59E0B] text-[10px] font-sans font-bold text-[#B45309] uppercase">
                  {current.badge}
                </span>
                <h4 className="text-base sm:text-lg font-bold font-headline text-[#0F172A] uppercase">
                  {current.title}
                </h4>
              </div>

              <p className="text-xs sm:text-sm font-body text-[#475569] leading-relaxed">
                {current.description}
              </p>

              <div className="space-y-1.5 pt-1">
                {current.highlights.map((h, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs font-sans text-[#334155]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#D97706] shrink-0" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Spec Matrix */}
            <div className="lg:col-span-5 bg-[#F8FAFC] border border-[#CBD5E1] p-4">
              <div className="text-[10px] font-sans font-bold uppercase tracking-wider text-[#D97706] mb-2 pb-1 border-b border-[#E2E8F0]">
                OPERATIONAL PARAMETERS &amp; BENCHMARKS
              </div>
              <div className="space-y-1.5 text-xs font-sans">
                {current.specs.map((s, i) => (
                  <div key={i} className="flex justify-between items-center py-1 border-b border-[#E2E8F0] last:border-b-0">
                    <span className="text-[#64748B]">{s.label}:</span>
                    <span className="text-[#0F172A] font-bold">{s.value}</span>
                  </div>
                ))}
              </div>

              <div className="mt-3 pt-3 border-t border-[#CBD5E1] flex gap-2">
                {onOpenEstimator && (
                  <Button
                    variant="primary"
                    size="sm"
                    onClick={() => {
                      onClose();
                      onOpenEstimator();
                    }}
                    className="w-full text-center"
                  >
                    Calculate Project Cost
                  </Button>
                )}
                <a
                  href={`https://wa.me/${COMPANY_CONTACT.whatsapp}?text=Hello%20HAM%20Engineering%2C%20I%20watched%20your%20plant%20operations%20video%20and%20want%20to%20discuss%20a%20project.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <Button variant="outline" size="sm" className="w-full" icon={<ExternalLink className="w-3 h-3 text-[#D97706]" />}>
                    Connect on WhatsApp
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
