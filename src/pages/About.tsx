import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { SectionHeader } from '../components/SectionHeader';
import { TechCard } from '../components/TechCard';
import { Button } from '../components/Button';
import { MetricTile } from '../components/MetricTile';
import { COMPANY_CONTACT } from '../data/companyData';

interface AboutProps {
  onOpenEstimator?: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenEstimator }) => {
  return (
    <div className="bg-[#F8FAFC] text-[#0F172A] min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Breadcrumb & Header */}
        <div>
          <div className="text-xs font-sans text-[#D97706] mb-2 font-bold uppercase tracking-wider flex items-center gap-1.5">
            <span>HOME</span>
            <span className="text-[#CBD5E1]">/</span>
            <span>ABOUT</span>
            <span className="text-[#CBD5E1]">/</span>
            <span className="text-[#0F172A]">COMPANY PROFILE</span>
          </div>
          <SectionHeader
            kicker="CORPORATE PROFILE"
            title="Company Profile: HAM Engineering Exim India Pvt Ltd"
            subtitle="India's leading pre-engineered steel building, heavy fabrication, and turnkey infrastructure export conglomerate."
            badge="ESTABLISHED 2008"
          />
        </div>

        {/* Overview Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-5 font-body text-sm sm:text-base text-[#334155] leading-relaxed">
            <p className="text-[#0F172A] text-base sm:text-lg leading-relaxed font-medium">
              <strong className="text-[#D97706] font-bold">HAM Engineering Exim India Pvt Ltd</strong> is the fastest-growing leading manufacturer and turnkey contractor of Pre-Engineered Steel, Heavy Structural, and Conventional Industrial Buildings in India.
            </p>
            <p>
              Boasting a diverse portfolio of successfully commissioned projects across various industries, including Warehouses and Industrial Logistics Parks, Commercial Complexes, Sports Arenas, Agricultural High-Bays, Aviation Hangars, Multi-Tier Mezzanine Floors, and Specialized Cold Storages.
            </p>
            <p>
              Our automated fabrication plant in the National Capital Region (NCR) spans over <strong className="text-[#0F172A]">7,50,000+ sq. ft.</strong> with a manufacturing capacity surpassing <strong className="text-[#0F172A]">75,000 MT annually</strong>. Equipped with automatic submerged arc welding lines, CNC plasma profile cutters, and in-house shot blasting, we uphold the most stringent metallurgical and geometrical standards.
            </p>

            <div className="pt-4 flex flex-wrap gap-4">
              <Button onClick={onOpenEstimator} variant="primary" icon={<ArrowRight className="w-4 h-4" />}>
                Request Engineering Proposal
              </Button>
              <Link to="/contact">
                <Button variant="outline">
                  Schedule Plant Inspection
                </Button>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 bg-[#FFFFFF] border border-[#CBD5E1] p-6 space-y-4 shadow-industrial">
            <div className="text-xs font-sans text-[#D97706] font-bold pb-2 border-b border-[#E2E8F0] uppercase tracking-wider flex items-center gap-2">
              <span className="w-2 h-2 bg-[#D97706]" />
              PLANT SPECIFICATIONS &amp; INFRASTRUCTURE
            </div>
            <div className="space-y-3 font-sans text-xs">
              <div className="flex justify-between py-1 border-b border-[#F1F5F9]">
                <span className="text-[#64748B]">Plant Floor Footprint:</span>
                <span className="text-[#0F172A] font-bold">{COMPANY_CONTACT.plantArea}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#F1F5F9]">
                <span className="text-[#64748B]">Annual Fabrication Cap:</span>
                <span className="text-[#0F172A] font-bold">{COMPANY_CONTACT.capacityMT}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#F1F5F9]">
                <span className="text-[#64748B]">Certified Workforce:</span>
                <span className="text-[#0F172A] font-bold">{COMPANY_CONTACT.workforce}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#F1F5F9]">
                <span className="text-[#64748B]">Quality Certifications:</span>
                <span className="text-[#D97706] font-bold">{COMPANY_CONTACT.isoCert}</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-[#64748B]">Average Engineering Exp:</span>
                <span className="text-[#0F172A] font-bold">15+ Years Per Specialist</span>
              </div>
            </div>
          </div>
        </div>

        {/* Core Competencies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <TechCard idCode="COMPETENCY 01" title="Engineering Innovation">
            <p className="text-sm font-body text-[#475569] leading-relaxed">
              In-house bureau of structural engineers utilizing Tekla BIM and STAAD.Pro to design cost-effective, earthquake-resistant steel structures that exceed IS:800 and AISC standards.
            </p>
          </TechCard>

          <TechCard idCode="COMPETENCY 02" title="Zero-Defect Quality">
            <p className="text-sm font-body text-[#475569] leading-relaxed">
              Multi-stage Non-Destructive Testing (NDT), ultrasonic flaw detection, and strict weld inspections ensure zero structural failure throughout the design life of 50+ years.
            </p>
          </TechCard>

          <TechCard idCode="COMPETENCY 03" title="Fast-Track Erection">
            <p className="text-sm font-body text-[#475569] leading-relaxed">
              High-accuracy pre-punched connections eliminate on-site modification, allowing high-speed erection teams to commission facilities up to 50% faster than RCC construction.
            </p>
          </TechCard>
        </div>

        {/* Metrics Readout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <MetricTile value="500+" unit="PRJ" label="Turnkey Structures Delivered" code="DELIVERED PROJECTS" />
          <MetricTile value="75K" unit="MT" label="Steel Processed Annually" code="ANNUAL STEEL OUTPUT" />
          <MetricTile value="18+" unit="YRS" label="Industry Leadership" code="YEARS OF EXCELLENCE" />
          <MetricTile value="15M" unit="SQFT" label="Total Constructed Enclosure" code="COVERED INDUSTRIAL AREA" />
        </div>
      </div>
    </div>
  );
};
