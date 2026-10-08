import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle2, 
  Cpu, 
  Factory, 
  Wrench, 
  Calculator, 
  Phone, 
  ExternalLink,
  ChevronRight,
  Flame,
  Settings,
  ShieldCheck,
  Play,
  Video,
  Layers,
  Award,
  Maximize2,
  HardHat,
  Microscope,
  FileCheck
} from 'lucide-react';
import { Hero } from '../components/Hero';
import { SectionHeader } from '../components/SectionHeader';
import { TechCard } from '../components/TechCard';
import { MetricTile } from '../components/MetricTile';
import { Button } from '../components/Button';
import { ThreePEBViewer } from '../components/ThreePEBViewer';
import { PlantVideoModal } from '../components/PlantVideoModal';
import { 
  COMPANY_CONTACT, 
  PRODUCTS, 
  INDUSTRIES, 
  PROJECTS, 
  BLOG_POSTS 
} from '../data/companyData';

interface HomeProps {
  onOpenEstimator?: () => void;
}

export const Home: React.FC<HomeProps> = ({ onOpenEstimator }) => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState<boolean>(false);
  const [activeMachineryTab, setActiveMachineryTab] = useState<number>(0);

  const machineryFleet = [
    {
      id: 'cnc',
      title: 'High-Definition CNC Gantry Plasma Cutting System',
      code: 'MACH-CNC-4500',
      tag: 'PLATE PROFILING',
      image: '/images/cnc_cutting.jpg',
      specs: [
        { label: 'Plate Cutting Thickness', value: '6mm - 65mm High-Tensile Steel' },
        { label: 'Cutting Tolerance', value: '±0.5mm Strict Optical Accuracy' },
        { label: 'Bed Dimensions', value: '4,500mm x 18,000mm Continuous Table' },
        { label: 'Torches Installed', value: '1 HD Plasma + 4 Synchronized Oxy-Fuel' }
      ],
      description: 'Dual-drive gantry automated plate cutting machine with computer nesting control. Capable of multi-bevel cutting for full-penetration submerged arc weld joint preparation, slashing material scrap and expediting delivery schedules.'
    },
    {
      id: 'saw',
      title: 'Automated Submerged Arc Welding (SAW) H-Beam Line',
      code: 'MACH-SAW-2000',
      tag: 'PRIMARY FABRICATION',
      image: '/images/factory_floor.jpg',
      specs: [
        { label: 'Beam Depth Capacity', value: '200mm up to 2,200mm Built-up Sections' },
        { label: 'Flange Width', value: '150mm up to 800mm High-Yield Plates' },
        { label: 'Welding Speed', value: '450mm - 850mm / minute Continuous' },
        { label: 'Welding Standard', value: 'AWS D1.1 / ASME Sec IX Full Penetration' }
      ],
      description: 'Heavy portal submerged arc welding system equipped with dual wire feeders and flux recovery. Deposits uniform, deep-penetrating double-sided fillet welds without weld spatter, ensuring 100% radiographic integrity on tapered primary columns and rafters.'
    },
    {
      id: 'crane-fleet',
      title: 'Turnkey High-Altitude Mobile Crane & Erection Fleet',
      code: 'MACH-CRN-500T',
      tag: 'SITE EXECUTION',
      image: '/images/peb_erection.jpg',
      specs: [
        { label: 'Telescopic Crane Fleet', value: '50 MT to 120 MT Heavy Hydraulic Cranes' },
        { label: 'Boom Tip Height', value: 'Up to 68 Meters High Reach' },
        { label: 'Erection Capacity', value: '400+ MT Fabricated Steel / Month' },
        { label: 'Safety Accreditation', value: 'Zero-Harm Rigging & Lifting Protocol' }
      ],
      description: 'In-house heavy mobile crane fleet and self-propelled boom lifts operated by certified master riggers. Allows simultaneous hoisting of 40-meter moment rafters, secondary purlin lines, and insulated roof envelopes across high-wind construction zones.'
    },
    {
      id: 'puf-line',
      title: 'Continuous High-Pressure PUF Sandwich Panel Line',
      code: 'MACH-PUF-150',
      tag: 'THERMAL ENVELOPE',
      image: '/images/puf_cold_chain.jpg',
      specs: [
        { label: 'Insulation Core Density', value: '40 ± 2 kg/m³ Rigid Polyurethane' },
        { label: 'Thermal Conductivity', value: '0.022 W/m·K (Maximum Efficiency)' },
        { label: 'Facing Sheet Coating', value: 'AZ150 Galvalume / Food-Grade PVDF' },
        { label: 'Panel Thicknesses', value: '40mm, 50mm, 80mm, 100mm, 120mm, 150mm' }
      ],
      description: 'Fully automated continuous double-belt lamination line with computer-controlled high-pressure cyclopentane polyurethane injection. Produces seamless, airtight tongue-and-groove insulated panels for minus 25°C cold chain logistics and pharmaceutical clean rooms.'
    },
    {
      id: 'ndt-lab',
      title: 'Ultrasonic Flaw Detection & Metallurgical Testing Lab',
      code: 'LAB-NDT-OLYMP',
      tag: 'QUALITY AUDIT',
      image: '/images/qa_testing.jpg',
      specs: [
        { label: 'Testing Method', value: 'Digital Ultrasonic Flaw Detection (UT)' },
        { label: 'Surface Crack Testing', value: 'Fluorescent Magnetic Particle (MPT)' },
        { label: 'Coating Thickness', value: 'Elcometer Digital DFT Gauge' },
        { label: 'Raw Steel Traceability', value: '100% Mill Test Certificate (MTC) Heat Log' }
      ],
      description: 'In-house NDT engineering laboratory certified to ISO 9001:2015. Every tension flange, moment splice, and critical structural anchor undergoes ultrasonic sound wave inspection to eliminate hidden weld defects prior to factory dispatch.'
    }
  ];

  return (
    <div className="bg-[#F8FAFC] text-[#0F172A] min-h-screen">
      {/* 1. Hero Section with 3D WebGL Viewer & Plant Video Preview */}
      <Hero onOpenEstimator={onOpenEstimator} />

      {/* 2. What We Do: Turnkey Industrial Execution with Rich Visual Photography */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b border-[#E2E8F0] relative bg-[#FFFFFF]">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            kicker="OPERATIONAL DIVISIONS"
            title="What We Do: Turnkey Industrial Execution"
            subtitle="HAM Engineering Exim India operates a modern, high-precision automated manufacturing plant equipped with CNC plasma cutters, submerged arc welding, and automated shot-blasting across 7,50,000+ sq.ft."
            badge="END-TO-END CAPABILITY"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Division 1: Design & Engineering */}
            <div className="group bg-[#FFFFFF] border border-[#CBD5E1] hover:border-[#F59E0B] transition-all flex flex-col justify-between shadow-industrial-sm hover:shadow-industrial-lg">
              <div>
                <div className="relative h-48 overflow-hidden border-b border-[#E2E8F0]">
                  <img
                    src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80"
                    alt="Tekla 3D BIM Structural Modeling"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-95"
                  />
                  <div className="absolute top-2 left-2 px-2 py-0.5 bg-white/95 border border-[#CBD5E1] text-[10px] font-sans font-bold text-[#D97706] uppercase tracking-wider">
                    DIVISION 01 • PHASE I
                  </div>
                  <div className="absolute bottom-2 right-2 px-2 py-0.5 bg-[#0F172A]/90 text-white text-[10px] font-mono border border-white/20">
                    TEKLA &amp; STAAD.PRO
                  </div>
                </div>

                <div className="p-6">
                  <div className="w-10 h-10 bg-[#FEF3C7] border border-[#F59E0B] flex items-center justify-center text-[#B45309] mb-3 shadow-xs">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold font-headline text-[#0F172A] mb-2 uppercase">
                    Design &amp; Engineering
                  </h3>
                  <p className="text-xs sm:text-sm font-body text-[#475569] leading-relaxed mb-4">
                    Comprehensive 3D parametric structural modeling in Tekla and STAAD.Pro. Finite element wind simulation per IS:875 (Part 3) and seismic design per IS:1893 to optimize steel weight without compromising structural safety.
                  </p>
                  <ul className="space-y-2 text-xs font-sans text-[#334155] border-t border-[#F1F5F9] pt-3">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#D97706] shrink-0" />
                      <span>Tekla 3D BIM Detailing &amp; Fabrication Spools</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#D97706] shrink-0" />
                      <span>STAAD.Pro FEA Seismic Stress Checks</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#D97706] shrink-0" />
                      <span>Zero-Reaming Bolt Connection Layouts</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Division 2: Automated Manufacturing */}
            <div className="group bg-[#FFFFFF] border border-[#CBD5E1] hover:border-[#F59E0B] transition-all flex flex-col justify-between shadow-industrial-sm hover:shadow-industrial-lg">
              <div>
                <div className="relative h-48 overflow-hidden border-b border-[#E2E8F0]">
                  <img
                    src="/images/cnc_cutting.jpg"
                    alt="Automated CNC Plasma Steel Cutting"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-95"
                  />
                  <div className="absolute top-2 left-2 px-2 py-0.5 bg-white/95 border border-[#CBD5E1] text-[10px] font-sans font-bold text-[#D97706] uppercase tracking-wider">
                    DIVISION 02 • PHASE II
                  </div>
                  <div className="absolute bottom-2 right-2 px-2 py-0.5 bg-[#0F172A]/90 text-white text-[10px] font-mono border border-white/20">
                    75,000 MT / YEAR
                  </div>
                </div>

                <div className="p-6">
                  <div className="w-10 h-10 bg-[#FEF3C7] border border-[#F59E0B] flex items-center justify-center text-[#B45309] mb-3 shadow-xs">
                    <Factory className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold font-headline text-[#0F172A] mb-2 uppercase">
                    Automated Manufacturing
                  </h3>
                  <p className="text-xs sm:text-sm font-body text-[#475569] leading-relaxed mb-4">
                    Heavy automated fabrication plant in NCR featuring CNC multi-torch oxy-fuel cutters, submerged arc welding (SAW) beam assemblers, and centrifugal blast cleaning lines conforming to SA 2.5 standards.
                  </p>
                  <ul className="space-y-2 text-xs font-sans text-[#334155] border-t border-[#F1F5F9] pt-3">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#D97706] shrink-0" />
                      <span>Submerged Arc Continuous Beam Welding</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#D97706] shrink-0" />
                      <span>High-Definition CNC Gantry Plasma Cutting</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#D97706] shrink-0" />
                      <span>SA 2.5 Centrifugal Shot Blasting Bay</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Division 3: Supply & Site Erection */}
            <div className="group bg-[#FFFFFF] border border-[#CBD5E1] hover:border-[#F59E0B] transition-all flex flex-col justify-between shadow-industrial-sm hover:shadow-industrial-lg">
              <div>
                <div className="relative h-48 overflow-hidden border-b border-[#E2E8F0]">
                  <img
                    src="/images/peb_erection.jpg"
                    alt="Mobile Crane Site Erection of PEB Rafters"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-95"
                  />
                  <div className="absolute top-2 left-2 px-2 py-0.5 bg-white/95 border border-[#CBD5E1] text-[10px] font-sans font-bold text-[#D97706] uppercase tracking-wider">
                    DIVISION 03 • PHASE III
                  </div>
                  <div className="absolute bottom-2 right-2 px-2 py-0.5 bg-[#0F172A]/90 text-white text-[10px] font-mono border border-white/20">
                    ZERO ACCIDENT
                  </div>
                </div>

                <div className="p-6">
                  <div className="w-10 h-10 bg-[#FEF3C7] border border-[#F59E0B] flex items-center justify-center text-[#B45309] mb-3 shadow-xs">
                    <Wrench className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold font-headline text-[#0F172A] mb-2 uppercase">
                    Supply &amp; Site Erection
                  </h3>
                  <p className="text-xs sm:text-sm font-body text-[#475569] leading-relaxed mb-4">
                    Turnkey logistical delivery and field assembly managed by dedicated project engineers. Erection using precision mobile cranes, boom lifts, and laser alignment tools under zero-incident safety protocols.
                  </p>
                  <ul className="space-y-2 text-xs font-sans text-[#334155] border-t border-[#F1F5F9] pt-3">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#D97706] shrink-0" />
                      <span>Pre-Punched High-Strength Bolted Assembly</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#D97706] shrink-0" />
                      <span>Heavy Mobile Telescopic Crane Logistics</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#D97706] shrink-0" />
                      <span>50% Accelerated Commissioning Timelines</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. NEW SECTION: Plant Machinery Fleet & Heavy Production Lines */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b border-[#E2E8F0] bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
            <SectionHeader
              kicker="MANUFACTURING INFRASTRUCTURE"
              title="Factory Machinery Fleet &amp; Production Lines"
              subtitle="Inspect our automated heavy engineering machinery in Faridabad/NCR. Engineered for high-tonnage fabrication with sub-millimeter tolerances."
              badge="HEAVY PRODUCTION YARD"
              className="mb-0"
            />
            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsVideoModalOpen(true)}
              icon={<Play className="w-3.5 h-3.5 text-[#D97706] fill-current" />}
              className="mt-4 md:mt-0"
            >
              Watch Machinery In Action
            </Button>
          </div>

          {/* Machinery Interactive Showcase */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 bg-[#FFFFFF] border border-[#CBD5E1] p-4 sm:p-6 shadow-industrial">
            {/* Left Column: Machinery Tabs */}
            <div className="lg:col-span-4 space-y-2 border-b lg:border-b-0 lg:border-r border-[#E2E8F0] lg:pr-6 pb-6 lg:pb-0">
              <div className="text-[11px] font-sans font-bold uppercase tracking-wider text-[#64748B] mb-3">
                SELECT EQUIPMENT TO INSPECT SPECS:
              </div>
              {machineryFleet.map((machine, index) => (
                <button
                  key={machine.id}
                  onClick={() => setActiveMachineryTab(index)}
                  className={`w-full p-3.5 text-left border transition-all cursor-pointer ${
                    activeMachineryTab === index
                      ? 'bg-[#FEF3C7] border-[#F59E0B] text-[#0F172A] shadow-xs'
                      : 'bg-[#F8FAFC] border-[#CBD5E1] text-[#475569] hover:border-[#D97706]'
                  }`}
                >
                  <div className="flex items-center justify-between text-[10px] font-sans font-bold uppercase tracking-wider mb-1">
                    <span className="text-[#D97706]">{machine.tag}</span>
                    <span className="font-mono text-[#64748B]">{machine.code}</span>
                  </div>
                  <div className="text-sm font-bold font-headline text-[#0F172A] uppercase line-clamp-1">
                    {machine.title}
                  </div>
                </button>
              ))}
            </div>

            {/* Right Column: Selected Machine Live Photo & Technical Sheet */}
            <div className="lg:col-span-8 flex flex-col justify-between">
              {(() => {
                const cur = machineryFleet[activeMachineryTab];
                return (
                  <div className="space-y-5">
                    {/* Visual Photo Box with Telemetry */}
                    <div className="relative h-64 sm:h-72 overflow-hidden border border-[#CBD5E1] bg-[#0F172A] group">
                      <img
                        src={cur.image}
                        alt={cur.title}
                        className="w-full h-full object-cover filter brightness-95 group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent pointer-events-none" />
                      
                      <div className="absolute top-3 left-3 px-2.5 py-1 bg-[#F59E0B] text-[#0F172A] font-sans font-bold text-xs uppercase tracking-wider shadow-sm">
                        {cur.tag} • ACTIVE WORKSTATION
                      </div>

                      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs">
                        <div className="font-headline font-bold text-base uppercase">
                          {cur.title}
                        </div>
                        <span className="px-2 py-0.5 bg-black/60 border border-white/20 font-mono text-[10px]">
                          ISO 9001 VERIFIED
                        </span>
                      </div>
                    </div>

                    {/* Description Narrative */}
                    <p className="text-xs sm:text-sm font-body text-[#475569] leading-relaxed">
                      {cur.description}
                    </p>

                    {/* 4-Item Spec Matrix */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3 border-t border-[#E2E8F0]">
                      {cur.specs.map((s, idx) => (
                        <div key={idx} className="p-3 bg-[#F8FAFC] border border-[#CBD5E1]">
                          <div className="text-[10px] font-sans font-bold text-[#64748B] uppercase tracking-wider">
                            {s.label}
                          </div>
                          <div className="text-xs sm:text-sm font-bold font-headline text-[#0F172A] uppercase mt-0.5">
                            {s.value}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })()}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Full-Width Interactive 3D PEB Anatomy & Structural Engineering Explorer */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b border-[#E2E8F0] bg-[#FFFFFF]">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            kicker="INTERACTIVE 3D CAD ENGINE"
            title="3D Structural Anatomy &amp; Assembly Explorer"
            subtitle="Rotate 360°, trigger 3D exploded assembly disassembly, and inspect individual PEB components from foundation anchor cages to tapered rafters."
            badge="WEBGL THREE.JS VIEWER"
            align="center"
          />

          {/* Dedicated Full-Width Three.js Structural Inspector */}
          <ThreePEBViewer height="h-[480px] sm:h-[540px]" />
        </div>
      </section>

      {/* 5. Product Systems Showcase */}
      <section id="products" className="py-20 px-4 sm:px-6 lg:px-8 border-b border-[#E2E8F0] relative bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <SectionHeader
              kicker="PRODUCT SYSTEMS"
              title="Pre-Engineered &amp; Structural Systems"
              subtitle="From heavy multi-span industrial sheds to temperature-controlled PUF enclosures, explore our full spectrum of certified building systems."
              badge="8 INDUSTRIAL SYSTEMS"
              className="mb-0"
            />
            <Link to="/pre-engineered-building" className="mt-4 md:mt-0">
              <Button variant="outline" size="sm" icon={<ArrowRight className="w-3.5 h-3.5" />}>
                View Technical Specs
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PRODUCTS.map(product => (
              <div
                key={product.id}
                className="group bg-[#FFFFFF] border border-[#CBD5E1] hover:border-[#F59E0B] transition-all duration-200 flex flex-col justify-between shadow-industrial-sm hover:shadow-industrial-lg"
              >
                <div>
                  <div className="relative h-44 overflow-hidden border-b border-[#E2E8F0]">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-95"
                    />
                    <div className="absolute top-2 left-2 px-2 py-0.5 bg-white/95 border border-[#CBD5E1] text-[10px] font-sans font-bold text-[#D97706] uppercase tracking-wider">
                      {product.code}
                    </div>
                  </div>

                  <div className="p-5 space-y-2.5">
                    <h3 className="text-lg font-bold font-headline text-[#0F172A] group-hover:text-[#D97706] transition-colors leading-snug uppercase">
                      {product.title}
                    </h3>
                    <p className="text-xs font-body text-[#475569] leading-relaxed line-clamp-3">
                      {product.shortDesc}
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <Link
                    to={`/${product.slug}`}
                    className="inline-flex items-center justify-between text-xs font-sans font-bold text-[#D97706] hover:text-[#B45309] transition-colors uppercase pt-3 border-t border-[#F1F5F9] w-full"
                  >
                    <span>View Specifications</span>
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Dedicated Plant Video Banner & Virtual Factory Tour */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b border-[#CBD5E1] bg-[#0F172A] text-white relative overflow-hidden">
        {/* Ambient Video Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/factory_floor.jpg"
            alt="HAM Engineering Factory Works"
            className="w-full h-full object-cover opacity-25 filter brightness-75 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A] via-[#0F172A]/90 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-[#F59E0B] text-[#0F172A] text-[10px] font-sans font-bold uppercase tracking-wider">
                <Video className="w-3.5 h-3.5" />
                <span>OFFICIAL WORKS DOCUMENTARY REEL</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-headline uppercase leading-tight">
                Experience Our NCR Manufacturing Works <br />
                <span className="text-[#F59E0B]">&amp; Heavy Fabrication In Action</span>
              </h2>

              <p className="text-sm sm:text-base font-body text-[#CBD5E1] max-w-xl leading-relaxed">
                Watch 4K video documentation of twin 150 MT Demag cranes lifting massive steel box girders, automated submerged arc welding lines, and crane-assisted rapid rafter assembly on landmark logistics sites.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <Button
                  variant="primary"
                  size="lg"
                  onClick={() => setIsVideoModalOpen(true)}
                  icon={<Play className="w-5 h-5 fill-current" />}
                >
                  Play Full 4-Chapter Plant Reel
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  onClick={onOpenEstimator}
                  className="bg-transparent border-white/40 text-white hover:bg-white/10 hover:border-white"
                  icon={<Calculator className="w-4 h-4" />}
                >
                  Request Plant Tour &amp; Proposal
                </Button>
              </div>
            </div>

            {/* Clickable Video Thumbnail Box */}
            <div className="lg:col-span-5">
              <div
                onClick={() => setIsVideoModalOpen(true)}
                className="relative bg-[#1E293B] border border-[#F59E0B]/50 p-2 shadow-2xl group cursor-pointer hover:border-[#F59E0B] transition-all"
              >
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src="/images/cnc_cutting.jpg"
                    alt="CNC Plasma Steel Cutting Sparks"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-90"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-[#F59E0B] text-[#0F172A] flex items-center justify-center shadow-lg group-hover:scale-120 transition-transform">
                      <Play className="w-8 h-8 fill-current ml-1" />
                    </div>
                  </div>
                  <div className="absolute bottom-2 left-2 px-2 py-0.5 bg-black/80 text-[10px] font-mono text-[#F59E0B]">
                    LIVE CUTTING &amp; WELDING RUN
                  </div>
                </div>
                <div className="p-3 flex items-center justify-between text-xs font-sans text-[#CBD5E1]">
                  <span className="font-bold uppercase tracking-wider text-white">4 CHAPTERS • 09:50 TOTAL RUNTIME</span>
                  <span className="text-[#F59E0B] font-bold">CLICK TO WATCH</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Numbers Speak For Themselves / Manufacturing Volume */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b border-[#E2E8F0] bg-[#FFFFFF]">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            kicker="CAPACITY &amp; PERFORMANCE"
            title="Manufacturing Volume &amp; Engineering Track Record"
            subtitle="Verified engineering capacity, manufacturing volume, and cross-sector track record."
            badge="AUDITED CAPACITY"
            align="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <MetricTile
              value="500+"
              unit="UNITS"
              label="Turnkey Projects Completed"
              subtext="Executed across industrial, commercial, defense, and transit infrastructure."
              code="PROJECT DELIVERIES"
              progressPercent={100}
            />

            <MetricTile
              value="75,000"
              unit="MT/YR"
              label="Fabrication Output Capacity"
              subtext="Heavy built-up plate columns, crane girders, and secondary purlin lines."
              code="ANNUAL TONNAGE"
              progressPercent={88}
            />

            <MetricTile
              value="18+"
              unit="YEARS"
              label="Engineering Heritage"
              subtext="Continual innovation in high-tensile steel construction since 2008."
              code="INDUSTRY LEADERSHIP"
              progressPercent={95}
            />

            <MetricTile
              value="15M+"
              unit="SQ.FT"
              label="Total Covered Area Built"
              subtext="Warehouses, pharmaceutical cleanrooms, factory sheds, and airport hangars."
              code="STRUCTURAL AREA"
              progressPercent={92}
            />
          </div>
        </div>
      </section>

      {/* 8. Industries We Serve: Cross-Sector Mastery (with Vivid Photography) */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b border-[#E2E8F0] bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <SectionHeader
              kicker="INDUSTRIAL SECTORS"
              title="Industries We Serve: Cross-Sector Mastery"
              subtitle="Decades of structural expertise delivering specialized building envelopes across heavy manufacturing, logistics, defense, and public infrastructure."
              badge="6 MAJOR SECTORS"
              className="mb-0"
            />
            <Link to="/industries-we-serve" className="mt-4 md:mt-0">
              <Button variant="outline" size="sm" icon={<ArrowRight className="w-3.5 h-3.5" />}>
                All Industry Verticals
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {INDUSTRIES.map(industry => (
              <div
                key={industry.id}
                className="group relative bg-[#FFFFFF] border border-[#CBD5E1] hover:border-[#F59E0B] transition-all flex flex-col justify-between shadow-industrial-sm hover:shadow-industrial-lg"
              >
                <div>
                  {/* Real Industry Photography Container */}
                  <div className="relative h-48 overflow-hidden border-b border-[#E2E8F0]">
                    <img
                      src={industry.image}
                      alt={industry.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-95"
                    />
                    <div className="absolute top-2 left-2 px-2 py-0.5 bg-white/95 border border-[#CBD5E1] text-[10px] font-sans font-bold text-[#D97706] uppercase tracking-wider">
                      {industry.code}
                    </div>
                    <div className="absolute bottom-2 right-2 px-2 py-0.5 bg-[#0F172A]/90 text-white font-sans text-[10px] font-bold uppercase tracking-wider border border-white/20">
                      {industry.projectsCount}
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold font-headline text-[#0F172A] group-hover:text-[#D97706] transition-colors mb-2 uppercase">
                      {industry.name}
                    </h3>

                    <p className="text-xs sm:text-sm font-body text-[#475569] leading-relaxed mb-4">
                      {industry.description}
                    </p>

                    <div className="space-y-1.5 border-t border-[#F1F5F9] pt-3 text-xs font-sans text-[#334155]">
                      {industry.benefits.map((b, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#D97706] shrink-0 mt-0.5" />
                          <span>{b}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <Link
                    to="/industries-we-serve"
                    className="inline-flex items-center gap-1.5 text-xs font-sans font-bold text-[#D97706] hover:text-[#B45309] transition-colors uppercase pt-3 border-t border-[#F1F5F9] w-full"
                  >
                    <span>Sector Case Studies</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. NEW SECTION: Quality Assurance & Testing Laboratory */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b border-[#E2E8F0] bg-[#FFFFFF]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Visual Testing Lab Photo */}
            <div className="lg:col-span-5">
              <div className="relative bg-[#FFFFFF] border border-[#CBD5E1] p-2 shadow-industrial group">
                <div className="relative aspect-4/3 overflow-hidden">
                  <img
                    src="/images/qa_testing.jpg"
                    alt="Ultrasonic NDT Weld Testing on Heavy Steel"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-95"
                  />
                  <div className="absolute top-2 left-2 px-2.5 py-1 bg-[#FEF3C7] border border-[#F59E0B] text-[#B45309] text-[10px] font-sans font-bold uppercase tracking-wider">
                    ISO 9001:2015 ACCREDITED LAB
                  </div>
                  <div className="absolute bottom-2 right-2 px-2 py-0.5 bg-[#0F172A]/90 text-white font-mono text-[10px] border border-white/20">
                    OLYMPUS DIGITAL UT
                  </div>
                </div>
                <div className="p-3 text-center text-xs font-sans text-[#64748B]">
                  100% Tension Flange Ultrasonic Flaw Soundness Verification
                </div>
              </div>
            </div>

            {/* QA Specifications & Protocols */}
            <div className="lg:col-span-7 space-y-5">
              <div className="text-xs font-sans text-[#D97706] font-bold uppercase tracking-wider flex items-center gap-2">
                <span className="w-2 h-2 bg-[#D97706]" />
                ZERO-DEFECT METALLURGICAL STANDARDS
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold font-headline text-[#0F172A] tracking-tight uppercase">
                Rigorous In-House Quality Assurance &amp; Testing Lab
              </h2>

              <p className="text-sm sm:text-base font-body text-[#475569] leading-relaxed">
                Quality is our core engineering doctrine. HAM Engineering Exim India enforces 4-tier inspection starting from inbound raw coil spectrometer analysis to 100% ultrasonic weld scanning and dry-film thickness (DFT) tests on SA 2.5 blasted steel.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 bg-[#F8FAFC] border border-[#CBD5E1]">
                  <div className="flex items-center gap-2 mb-1">
                    <Microscope className="w-4 h-4 text-[#D97706]" />
                    <span className="text-xs font-headline font-bold text-[#0F172A] uppercase">Ultrasonic Flaw Testing</span>
                  </div>
                  <p className="text-xs font-body text-[#64748B] leading-relaxed">
                    Compliant with AWS D1.1 structural welding code. Calibrated probes detect internal porosity, slag, and lack of penetration.
                  </p>
                </div>

                <div className="p-4 bg-[#F8FAFC] border border-[#CBD5E1]">
                  <div className="flex items-center gap-2 mb-1">
                    <FileCheck className="w-4 h-4 text-[#D97706]" />
                    <span className="text-xs font-headline font-bold text-[#0F172A] uppercase">100% Mill Test Traceability</span>
                  </div>
                  <p className="text-xs font-body text-[#64748B] leading-relaxed">
                    Every batch of structural steel is dispatched with certified Mill Test Certificates (MTC) verifying yield, tensile, and elongation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. Interactive Estimator Banner (Warm Light Industrial Tone) */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-b border-[#CBD5E1] bg-[#FFFBEB] relative overflow-hidden">
        {/* Subtle architectural steel background texture */}
        <div className="absolute inset-0 z-0 pointer-events-none select-none opacity-35">
          <img
            src="/images/hero_steel_bg.jpg"
            alt="Structural Steel Framing"
            className="w-full h-full object-cover object-center filter brightness-85 contrast-125"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#FFFBEB]/95 via-[#FFFBEB]/85 to-[#FFFBEB]/60" />
        </div>

        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 relative z-10">
          <div className="max-w-2xl space-y-3">
            <div className="text-xs font-sans text-[#B45309] tracking-wider uppercase font-bold flex items-center gap-2">
              <span className="w-2 h-2 bg-[#D97706]" />
              FAST-TRACK SPECIFICATION ESTIMATOR
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-headline text-[#0F172A] tracking-tight uppercase">
              Calculate Your Industrial Shed Cost &amp; Steel Tonnage
            </h2>
            <p className="text-sm sm:text-base font-body text-[#475569] leading-relaxed">
              Input your length, width, and clear eave height parameters to get immediate steel tonnage, fabrication schedule, and cost estimates.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Button
              variant="primary"
              size="lg"
              onClick={onOpenEstimator}
              icon={<Calculator className="w-5 h-5" />}
              iconPosition="left"
            >
              Open Interactive Estimator
            </Button>
            <a href={`tel:${COMPANY_CONTACT.phone}`}>
              <Button variant="secondary" size="lg" icon={<Phone className="w-4 h-4" />}>
                Call Engineering Bureau
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* 11. Landmark Projects Executed */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b border-[#E2E8F0] bg-[#FFFFFF]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <SectionHeader
              kicker="PROVEN EXECUTION"
              title="Landmark Projects Executed"
              subtitle="Recently completed industrial landmarks across transit stations, logistics parks, and process manufacturing sheds."
              badge="VERIFIED EXECUTION"
              className="mb-0"
            />
            <Link to="/projects" className="mt-4 md:mt-0">
              <Button variant="outline" size="sm" icon={<ArrowRight className="w-3.5 h-3.5" />}>
                View All Projects
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROJECTS.slice(0, 3).map(prj => (
              <div
                key={prj.id}
                className="group bg-[#FFFFFF] border border-[#CBD5E1] hover:border-[#F59E0B] transition-all flex flex-col justify-between shadow-industrial-sm hover:shadow-industrial-lg"
              >
                <div>
                  <div className="relative h-52 overflow-hidden border-b border-[#E2E8F0]">
                    <img
                      src={prj.image}
                      alt={prj.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-95"
                    />
                    <div className="absolute top-2 left-2 px-2 py-0.5 bg-white/95 text-[10px] font-sans font-bold text-[#D97706] border border-[#CBD5E1] uppercase tracking-wider">
                      {prj.code}
                    </div>
                    <div className="absolute bottom-2 right-2 px-2 py-0.5 bg-[#0F172A]/95 text-[10px] font-sans font-bold text-white border border-[#334155] uppercase tracking-wider">
                      {prj.steelTonnage}
                    </div>
                  </div>

                  <div className="p-5 space-y-2.5">
                    <div className="text-[11px] font-sans text-[#64748B] uppercase font-bold tracking-wider">
                      {prj.category} • {prj.location}
                    </div>
                    <h3 className="text-lg font-bold font-headline text-[#0F172A] group-hover:text-[#D97706] transition-colors leading-snug uppercase">
                      {prj.title}
                    </h3>
                    <div className="text-xs font-sans font-bold text-[#D97706] uppercase tracking-wide">
                      Footprint: {prj.area}
                    </div>
                    <div className="space-y-1.5 text-xs font-sans text-[#475569] border-t border-[#F1F5F9] pt-3">
                      {prj.highlights.map((h, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#D97706] shrink-0" />
                          <span className="truncate">{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <Link
                    to="/projects"
                    className="inline-flex items-center justify-between text-xs font-sans font-bold text-[#D97706] hover:text-[#B45309] transition-colors uppercase pt-3 border-t border-[#F1F5F9] w-full"
                  >
                    <span>Inspect Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. Recent From Our Blogs / Engineering Insights */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b border-[#E2E8F0] bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <SectionHeader
              kicker="TECHNICAL INSIGHTS"
              title="Recent Technical Bureau Articles"
              subtitle="Engineering whitepapers, material science guides, and structural design comparisons."
              badge="BLOG &amp; ARTICLES"
              className="mb-0"
            />
            <Link to="/blog" className="mt-4 md:mt-0">
              <Button variant="outline" size="sm" icon={<ArrowRight className="w-3.5 h-3.5" />}>
                Read All Articles
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {BLOG_POSTS.map(post => (
              <div
                key={post.id}
                className="group bg-[#FFFFFF] border border-[#CBD5E1] p-6 hover:border-[#F59E0B] transition-all flex flex-col justify-between shadow-industrial-sm hover:shadow-industrial-lg"
              >
                <div>
                  <div className="flex items-center justify-between text-[11px] font-sans text-[#64748B] mb-3">
                    <span className="text-[#D97706] font-bold uppercase tracking-wider">{post.category}</span>
                    <span className="font-semibold">{post.readTime}</span>
                  </div>

                  <h3 className="text-lg font-bold font-headline text-[#0F172A] group-hover:text-[#D97706] transition-colors mb-2.5 leading-snug uppercase">
                    {post.title}
                  </h3>

                  <p className="text-xs sm:text-sm font-body text-[#475569] leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#F1F5F9] flex items-center justify-between text-xs font-sans">
                  <span className="text-[11px] text-[#94A3B8] font-semibold">{post.date}</span>
                  <Link
                    to={`/blog/${post.slug}`}
                    className="text-[#D97706] group-hover:text-[#B45309] font-bold flex items-center gap-1 uppercase tracking-wider"
                  >
                    <span>Read Guide</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 13. Direct Contact & Dispatch Callout */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#FFFFFF] relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-[#F8FAFC] border border-[#CBD5E1] p-8 sm:p-12 shadow-industrial relative overflow-hidden">
            {/* Subtle architectural background texture */}
            <div className="absolute inset-0 z-0 pointer-events-none select-none opacity-35">
              <img
                src="/images/hero_steel_bg.jpg"
                alt="Architectural steel framework"
                className="w-full h-full object-cover object-center filter grayscale brightness-85 contrast-135"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#F8FAFC]/95 via-[#F8FAFC]/85 to-[#F8FAFC]/65" />
            </div>

            <div className="lg:col-span-7 space-y-4 relative z-10">
              <div className="text-xs font-sans text-[#D97706] font-bold tracking-wider uppercase flex items-center gap-2">
                <span className="w-2 h-2 bg-[#D97706]" />
                HAM ENGINEERING FABRICATION &amp; EXIM BUREAU
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-headline text-[#0F172A] tracking-tight leading-tight uppercase">
                Quality Comes First! <br />
                <span className="text-[#D97706]">Partner with HAM Engineering Exim India.</span>
              </h2>
              <p className="text-sm sm:text-base font-body text-[#475569] leading-relaxed">
                We make sure that every minute detail is looked into while manufacturing even the smallest component. Our focus is 100% on client needs, timely delivery, and zero structural defect.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 font-sans text-xs">
                <div className="p-4 bg-[#FFFFFF] border border-[#CBD5E1]">
                  <div className="text-[#64748B] text-[10px] font-bold uppercase tracking-wider">DIRECT HELPLINE</div>
                  <a href={`tel:${COMPANY_CONTACT.phone}`} className="text-[#0F172A] font-bold text-base hover:text-[#D97706] mt-0.5 block">
                    {COMPANY_CONTACT.phone}
                  </a>
                </div>
                <div className="p-4 bg-[#FFFFFF] border border-[#CBD5E1]">
                  <div className="text-[#64748B] text-[10px] font-bold uppercase tracking-wider">OFFICIAL EMAIL</div>
                  <a href={`mailto:${COMPANY_CONTACT.email}`} className="text-[#0F172A] font-bold text-sm hover:text-[#D97706] truncate block mt-0.5">
                    {COMPANY_CONTACT.email}
                  </a>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col gap-3">
              <Button
                variant="primary"
                size="lg"
                onClick={onOpenEstimator}
                className="w-full text-center"
                icon={<Calculator className="w-5 h-5" />}
              >
                Open Cost Estimator
              </Button>
              <Link to="/contact" className="w-full">
                <Button variant="secondary" size="lg" className="w-full" icon={<ArrowRight className="w-4 h-4" />}>
                  Submit Drawing / Request Proposal
                </Button>
              </Link>
              <a
                href={`https://wa.me/${COMPANY_CONTACT.whatsapp}?text=Hello%20HAM%20Engineering%2C%20I%20have%20an%20inquiry.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                <Button variant="outline" size="lg" className="w-full" icon={<ExternalLink className="w-4 h-4 text-[#D97706]" />}>
                  Instant WhatsApp Chat
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Global Plant Video Showcase Modal */}
      <PlantVideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        onOpenEstimator={onOpenEstimator}
      />
    </div>
  );
};
