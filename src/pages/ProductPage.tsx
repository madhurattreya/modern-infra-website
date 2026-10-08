import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  CheckCircle2, 
  Calculator, 
  Phone 
} from 'lucide-react';
import { SectionHeader } from '../components/SectionHeader';
import { TechCard } from '../components/TechCard';
import { Button } from '../components/Button';
import { PRODUCTS, COMPANY_CONTACT } from '../data/companyData';

interface ProductPageProps {
  forcedId?: string;
  onOpenEstimator?: () => void;
}

export const ProductPage: React.FC<ProductPageProps> = ({ forcedId, onOpenEstimator }) => {
  const { slug } = useParams<{ slug?: string }>();
  
  const product = PRODUCTS.find(
    p => p.id === forcedId || p.slug === slug || (slug && p.slug === slug.replace('/', ''))
  ) || PRODUCTS[0];

  return (
    <div className="bg-[#F8FAFC] text-[#0F172A] min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Breadcrumb Navigation & Header */}
        <div>
          <div className="text-xs font-sans text-[#D97706] mb-2 font-bold uppercase tracking-wider flex items-center gap-2">
            <span>HOME</span>
            <span className="text-[#CBD5E1]">/</span>
            <span>PRODUCTS</span>
            <span className="text-[#CBD5E1]">/</span>
            <span className="text-[#0F172A]">{product.title}</span>
            <span className="text-[#CBD5E1]">|</span>
            <span className="text-[#64748B]">IS 800:2007 &amp; AISC COMPLIANT</span>
          </div>
          <SectionHeader
            kicker={product.code}
            title={product.title}
            subtitle={product.shortDesc}
            badge="CERTIFIED SYSTEM"
          />
        </div>

        {/* Hero Product Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Visual Showcase */}
          <div className="lg:col-span-6 space-y-4">
            <div className="relative h-80 sm:h-96 bg-[#FFFFFF] border border-[#CBD5E1] overflow-hidden shadow-industrial">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover filter brightness-95"
              />
              <div className="absolute top-3 left-3 px-2.5 py-1 bg-white/95 border border-[#F59E0B] text-xs font-sans text-[#D97706] font-bold uppercase tracking-wider shadow-xs">
                {product.code}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-2 gap-3">
              <Button
                variant="primary"
                size="md"
                onClick={onOpenEstimator}
                icon={<Calculator className="w-4 h-4" />}
                className="w-full"
              >
                Estimate Cost
              </Button>
              <a href={`tel:${COMPANY_CONTACT.phone}`} className="w-full">
                <Button variant="secondary" size="md" icon={<Phone className="w-4 h-4" />} className="w-full">
                  Direct Inquire
                </Button>
              </a>
            </div>
          </div>

          {/* Technical Specifications Table */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-[#FFFFFF] border border-[#CBD5E1] p-6 space-y-4 shadow-industrial">
              <div className="text-xs font-sans text-[#D97706] font-bold border-b border-[#E2E8F0] pb-2 flex justify-between items-center uppercase tracking-wider">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#D97706]" />
                  ENGINEERING SPECIFICATION MATRIX
                </span>
                <span className="text-[#059669] font-bold">100% SPEC VERIFIED</span>
              </div>

              <div className="space-y-3 font-sans text-xs">
                {product.specs.map((spec, i) => (
                  <div key={i} className="flex flex-col sm:flex-row sm:justify-between py-2 border-b border-[#F1F5F9] gap-1">
                    <span className="text-[#64748B] font-medium">{spec.label}:</span>
                    <span className="text-[#0F172A] font-bold sm:text-right">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* In-depth Narrative */}
            <div className="font-body text-sm sm:text-base text-[#334155] leading-relaxed space-y-3">
              <p className="text-[#0F172A] leading-relaxed font-normal">
                {product.description}
              </p>
            </div>
          </div>
        </div>

        {/* Engineering Features & Key Applications */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Key Features */}
          <TechCard idCode="SPECIFICATION ATTRIBUTES" title="Core Engineering Attributes">
            <div className="space-y-3 text-xs sm:text-sm font-sans text-[#334155] pt-2">
              {product.features.map((f, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#D97706] shrink-0 mt-0.5" />
                  <span>{f}</span>
                </div>
              ))}
            </div>
          </TechCard>

          {/* Industry Applications */}
          <TechCard idCode="FIELD DEPLOYMENTS" title="Primary Field Applications">
            <div className="space-y-3 text-xs sm:text-sm font-sans text-[#334155] pt-2">
              {product.applications.map((app, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <div className="w-2 h-2 bg-[#D97706] mt-1.5 shrink-0" />
                  <span>{app}</span>
                </div>
              ))}
            </div>
          </TechCard>
        </div>

        {/* Other Structural Products Slider/List */}
        <div className="bg-[#FFFFFF] border border-[#CBD5E1] p-8 space-y-6 shadow-industrial">
          <div className="flex items-center justify-between border-b border-[#E2E8F0] pb-4">
            <div className="text-xs font-sans text-[#D97706] font-bold uppercase tracking-wider flex items-center gap-2">
              <span className="w-2 h-2 bg-[#D97706]" />
              RELATED STRUCTURAL SYSTEMS
            </div>
            <Link to="/#products" className="text-xs font-sans font-bold text-[#64748B] hover:text-[#D97706] uppercase tracking-wider">
              View All 8 Systems ›
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {PRODUCTS.filter(p => p.id !== product.id).slice(0, 4).map(other => (
              <Link
                key={other.id}
                to={`/${other.slug}`}
                className="p-3 bg-[#F8FAFC] border border-[#CBD5E1] hover:border-[#F59E0B] transition-colors group shadow-xs"
              >
                <div className="text-[10px] font-sans font-bold text-[#D97706] uppercase">{other.code}</div>
                <div className="text-xs font-bold font-headline text-[#0F172A] group-hover:text-[#D97706] truncate mt-1 uppercase">
                  {other.title}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
