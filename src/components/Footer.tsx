import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  MapPin, 
  ShieldCheck, 
  ArrowUpRight, 
  Clock, 
  Cpu 
} from 'lucide-react';
import { COMPANY_CONTACT, PRODUCTS } from '../data/companyData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0F172A] border-t border-[#1E293B] text-[#DFE2EE] relative overflow-hidden">
      {/* Background blueprint subtle grid */}
      <div className="absolute inset-0 blueprint-grid opacity-15 pointer-events-none" />

      {/* Top Banner Callout: Rapid Engineering Dispatch */}
      <div className="border-b border-[#1E293B] bg-[#1E293B]/80 px-4 sm:px-6 lg:px-8 py-8 relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="text-xs font-sans text-[#F59E0B] tracking-wider uppercase font-bold flex items-center gap-2">
              <span className="w-2 h-2 bg-[#F59E0B]" />
              FAST-TRACK GLOBAL FABRICATION &amp; EXIM
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold font-headline text-white mt-1 uppercase tracking-tight">
              Have an Urgent Industrial Shed or Warehouse Project?
            </h3>
            <p className="text-sm font-body text-[#94A3B8] mt-1 leading-relaxed">
              Direct consultation with Senior Structural Design Engineers. Preliminary 3D layout &amp; BOQ within 48 hours.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href={`tel:${COMPANY_CONTACT.phone}`}
              className="px-5 py-3 bg-[#0F172A] border border-[#334155] hover:border-[#F59E0B] text-white font-sans text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-colors"
            >
              <Phone className="w-4 h-4 text-[#F59E0B]" />
              {COMPANY_CONTACT.phone}
            </a>
            <a
              href={`https://wa.me/${COMPANY_CONTACT.whatsapp}?text=Hello%20HAM%20Engineering%2C%20I%20need%20a%20PEB%20structural%20quote.`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-[#F59E0B] hover:bg-[#FBBF24] text-[#0F172A] font-sans text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-colors shadow-[0_0_20px_-3px_rgba(245,158,11,0.4)]"
            >
              <span>Instant WhatsApp Inquiry</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Directory Columns */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Column 1: Brand & Credentials */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 bg-white border border-[#CBD5E1] p-0.5 flex items-center justify-center overflow-hidden">
                <img src="/logo.png" alt="HAM Engineering" className="w-full h-full object-contain" />
              </div>
              <div>
                <span className="text-xl sm:text-2xl font-extrabold font-headline text-white uppercase tracking-tight">
                  HAM <span className="text-[#F59E0B]">ENGINEERING</span>
                </span>
                <div className="text-[10px] font-sans text-[#94A3B8] tracking-wider uppercase font-bold">
                  EXIM INDIA PVT LTD
                </div>
              </div>
            </div>

            <p className="text-sm font-body text-[#94A3B8] leading-relaxed">
              HAM Engineering Exim India Pvt Ltd is India's premier manufacturer and exporter of Pre-Engineered Steel Buildings (PEB), heavy structural steel, and PUF insulated systems. Delivering precision engineering across warehousing, manufacturing, defense, and international turnkey infrastructure.
            </p>

            <div className="pt-2 space-y-2 text-xs font-sans">
              <div className="flex items-center gap-2 text-[#DFE2EE] font-medium">
                <ShieldCheck className="w-4 h-4 text-[#F59E0B]" />
                <span>{COMPANY_CONTACT.isoCert}</span>
              </div>
              <div className="flex items-center gap-2 text-[#94A3B8]">
                <Clock className="w-4 h-4 text-[#94A3B8]" />
                <span>Fully Operational Plant: {COMPANY_CONTACT.plantArea}</span>
              </div>
              <div className="flex items-center gap-2 text-[#94A3B8]">
                <Cpu className="w-4 h-4 text-[#94A3B8]" />
                <span>Annual Capacity: {COMPANY_CONTACT.capacityMT}</span>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4 font-sans">
            <h4 className="text-xs uppercase text-[#F59E0B] font-bold tracking-wider border-b border-[#1E293B] pb-2">
              CORPORATE DIRECTORY
            </h4>
            <ul className="space-y-2.5 text-xs text-[#94A3B8]">
              <li>
                <Link to="/" className="hover:text-[#F59E0B] transition-colors flex items-center gap-1.5">
                  <span className="text-[#334155]">›</span> Home Overview
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#F59E0B] transition-colors flex items-center gap-1.5">
                  <span className="text-[#334155]">›</span> Company Profile
                </Link>
              </li>
              <li>
                <Link to="/director-message" className="hover:text-[#F59E0B] transition-colors flex items-center gap-1.5">
                  <span className="text-[#334155]">›</span> Director's Message
                </Link>
              </li>
              <li>
                <Link to="/vision-mission" className="hover:text-[#F59E0B] transition-colors flex items-center gap-1.5">
                  <span className="text-[#334155]">›</span> Vision &amp; Mission
                </Link>
              </li>
              <li>
                <Link to="/industries-we-serve" className="hover:text-[#F59E0B] transition-colors flex items-center gap-1.5">
                  <span className="text-[#334155]">›</span> Industries We Serve
                </Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-[#F59E0B] transition-colors flex items-center gap-1.5">
                  <span className="text-[#334155]">›</span> Projects Portfolio
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-[#F59E0B] transition-colors flex items-center gap-1.5">
                  <span className="text-[#334155]">›</span> Technical Blogs
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#F59E0B] transition-colors flex items-center gap-1.5">
                  <span className="text-[#334155]">›</span> Contact &amp; Works
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Product Range */}
          <div className="space-y-4 font-sans">
            <h4 className="text-xs uppercase text-[#F59E0B] font-bold tracking-wider border-b border-[#1E293B] pb-2">
              STRUCTURAL SYSTEMS
            </h4>
            <ul className="space-y-2.5 text-xs text-[#94A3B8]">
              {PRODUCTS.slice(0, 6).map(prod => (
                <li key={prod.id}>
                  <Link
                    to={`/${prod.slug}`}
                    className="hover:text-[#F59E0B] transition-colors flex items-center gap-1.5 truncate"
                  >
                    <span className="text-[#334155]">›</span> {prod.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/roof-sheeting"
                  className="hover:text-[#F59E0B] transition-colors flex items-center gap-1.5"
                >
                  <span className="text-[#334155]">›</span> Roof Sheeting &amp; Cladding
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Engineering Headquarters & Contact */}
          <div className="space-y-4 font-sans">
            <h4 className="text-xs uppercase text-[#F59E0B] font-bold tracking-wider border-b border-[#1E293B] pb-2">
              WORKS &amp; HEADQUARTERS
            </h4>
            <div className="space-y-3 text-xs text-[#94A3B8]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#F59E0B] shrink-0 mt-0.5" />
                <span className="leading-relaxed">{COMPANY_CONTACT.address}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#F59E0B] shrink-0" />
                <a href={`tel:${COMPANY_CONTACT.phone}`} className="hover:text-white transition-colors font-bold text-[#DFE2EE]">
                  {COMPANY_CONTACT.phone}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#F59E0B] shrink-0" />
                <a href={`mailto:${COMPANY_CONTACT.email}`} className="hover:text-white transition-colors truncate">
                  {COMPANY_CONTACT.email}
                </a>
              </div>

              <div className="pt-2 border-t border-[#1E293B] text-[11px] text-[#64748B]">
                Operating Hours: Mon - Sat: 08:30 - 19:30 IST<br />
                24/7 Field Erection &amp; Export Support
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Technical Bar */}
        <div className="mt-16 pt-8 border-t border-[#1E293B] flex flex-col sm:flex-row items-center justify-between gap-4 font-sans text-xs text-[#64748B]">
          <div>
            © {new Date().getFullYear()} HAM Engineering Exim India Pvt Ltd. All Rights Reserved.
          </div>
          <div className="flex items-center gap-4 text-[#94A3B8] font-medium">
            <span>IS 800:2007 COMPLIANT</span>
            <span>•</span>
            <span>MBMA STANDARDS</span>
            <span>•</span>
            <span className="text-[#10B981] font-bold">EXPORT READY</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
