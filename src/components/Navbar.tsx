import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Phone, 
  Menu, 
  X, 
  ChevronDown, 
  Calculator, 
  ShieldCheck, 
  Clock, 
  MapPin, 
  ArrowUpRight 
} from 'lucide-react';
import { COMPANY_CONTACT, PRODUCTS } from '../data/companyData';
import { Button } from './Button';

interface NavbarProps {
  onOpenEstimator?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenEstimator }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-40 w-full bg-[#FFFFFF]/98 backdrop-blur-md border-b border-[#CBD5E1] shadow-xs">
      {/* Top Corporate Engineering Information Bar */}
      <div className="hidden lg:block bg-[#0F172A] text-xs font-sans text-[#CBD5E1] px-6 py-2 border-b border-[#1E293B]">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2 text-[#F8FAFC] font-semibold">
              <span className="w-2 h-2 rounded-full bg-[#10B981]" />
              <span className="text-[#F59E0B] font-sans font-bold uppercase tracking-wider text-[11px]">
                HAM ENGINEERING MANUFACTURING HUB
              </span>
            </span>
            <span className="flex items-center gap-1.5 text-[#CBD5E1]">
              <ShieldCheck className="w-4 h-4 text-[#F59E0B]" />
              {COMPANY_CONTACT.isoCert}
            </span>
            <span className="flex items-center gap-1.5 text-[#94A3B8]">
              <Clock className="w-3.5 h-3.5 text-[#CBD5E1]" />
              ANNUAL CAPACITY: 75,000 MT/YR
            </span>
            <span className="flex items-center gap-1.5 text-[#94A3B8]">
              <MapPin className="w-3.5 h-3.5 text-[#CBD5E1]" />
              PLANT: 7,50,000+ SQ. FT.
            </span>
          </div>

          <div className="flex items-center gap-6 font-sans">
            <a
              href={`tel:${COMPANY_CONTACT.phone}`}
              className="flex items-center gap-1.5 text-[#F59E0B] hover:text-[#FBBF24] transition-colors font-bold tracking-wide"
            >
              <Phone className="w-3.5 h-3.5" />
              HELPLINE: {COMPANY_CONTACT.phone}
            </a>
            <span className="text-[#334155]">|</span>
            <a
              href={`mailto:${COMPANY_CONTACT.email}`}
              className="hover:text-white transition-colors text-xs text-[#CBD5E1]"
            >
              {COMPANY_CONTACT.email}
            </a>
          </div>
        </div>
      </div>

      {/* Main Corporate Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo with HD Badge */}
          <Link to="/" className="flex items-center gap-3.5 group">
            <div className="relative w-12 h-12 bg-white border border-[#CBD5E1] p-0.5 group-hover:border-[#D97706] transition-colors shadow-xs flex items-center justify-center overflow-hidden">
              <img
                src="/logo.png"
                alt="HAM Engineering Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold font-headline text-[#0F172A] tracking-tight flex items-center leading-none">
                HAM <span className="text-[#D97706] ml-1.5">ENGINEERING</span>
              </div>
              <div className="text-[10px] font-sans text-[#64748B] tracking-wider uppercase font-bold mt-0.5">
                EXIM INDIA PVT LTD • INDUSTRIAL STEEL
              </div>
            </div>
          </Link>

          {/* Desktop Navigation Links (Clean Industrial Sans-Serif) */}
          <nav className="hidden lg:flex items-center gap-1 font-sans text-xs font-bold tracking-wider">
            <Link
              to="/"
              className={`px-3.5 py-2.5 transition-colors border-b-2 uppercase ${
                isActive('/')
                  ? 'border-[#D97706] text-[#0F172A] bg-[#FFFBEB]'
                  : 'border-transparent text-[#475569] hover:text-[#0F172A] hover:bg-[#F8FAFC]'
              }`}
            >
              HOME
            </Link>

            {/* About Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setAboutDropdownOpen(true)}
              onMouseLeave={() => setAboutDropdownOpen(false)}
            >
              <button
                type="button"
                className={`px-3.5 py-2.5 flex items-center gap-1 border-b-2 transition-colors uppercase ${
                  location.pathname.startsWith('/about') ||
                  location.pathname === '/director-message' ||
                  location.pathname === '/vision-mission'
                    ? 'border-[#D97706] text-[#0F172A] bg-[#FFFBEB]'
                    : 'border-transparent text-[#475569] hover:text-[#0F172A] hover:bg-[#F8FAFC]'
                }`}
              >
                ABOUT <ChevronDown className="w-3.5 h-3.5" />
              </button>

              {aboutDropdownOpen && (
                <div className="absolute top-full left-0 w-64 bg-[#FFFFFF] border border-[#CBD5E1] shadow-xl py-2 z-50">
                  <Link
                    to="/about"
                    onClick={() => setAboutDropdownOpen(false)}
                    className="block px-4 py-2.5 text-xs text-[#334155] hover:text-[#0F172A] hover:bg-[#FFFBEB] hover:border-l-2 hover:border-[#D97706] transition-all"
                  >
                    Company Profile
                  </Link>
                  <Link
                    to="/director-message"
                    onClick={() => setAboutDropdownOpen(false)}
                    className="block px-4 py-2.5 text-xs text-[#334155] hover:text-[#0F172A] hover:bg-[#FFFBEB] hover:border-l-2 hover:border-[#D97706] transition-all"
                  >
                    Director's Message
                  </Link>
                  <Link
                    to="/vision-mission"
                    onClick={() => setAboutDropdownOpen(false)}
                    className="block px-4 py-2.5 text-xs text-[#334155] hover:text-[#0F172A] hover:bg-[#FFFBEB] hover:border-l-2 hover:border-[#D97706] transition-all"
                  >
                    Vision &amp; Mission
                  </Link>
                </div>
              )}
            </div>

            {/* Product Range Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setProductsDropdownOpen(true)}
              onMouseLeave={() => setProductsDropdownOpen(false)}
            >
              <button
                type="button"
                className={`px-3.5 py-2.5 flex items-center gap-1 border-b-2 transition-colors uppercase ${
                  PRODUCTS.some(p => location.pathname === `/${p.slug}`)
                    ? 'border-[#D97706] text-[#0F172A] bg-[#FFFBEB]'
                    : 'border-transparent text-[#475569] hover:text-[#0F172A] hover:bg-[#F8FAFC]'
                }`}
              >
                PRODUCTS <ChevronDown className="w-3.5 h-3.5" />
              </button>

              {productsDropdownOpen && (
                <div className="absolute top-full -left-12 w-80 bg-[#FFFFFF] border border-[#CBD5E1] shadow-2xl py-2 z-50 max-h-[80vh] overflow-y-auto">
                  <div className="px-4 py-2 text-[11px] font-sans font-bold text-[#D97706] border-b border-[#E2E8F0] uppercase tracking-wider bg-[#F8FAFC]">
                    HEAVY INDUSTRIAL SYSTEMS
                  </div>
                  {PRODUCTS.map(product => (
                    <Link
                      key={product.id}
                      to={`/${product.slug}`}
                      onClick={() => setProductsDropdownOpen(false)}
                      className="block px-4 py-2.5 text-xs text-[#334155] hover:text-[#0F172A] hover:bg-[#FFFBEB] hover:border-l-2 hover:border-[#D97706] transition-all"
                    >
                      <div className="font-bold text-[#0F172A]">{product.title}</div>
                      <div className="text-[10px] text-[#D97706] font-sans font-bold uppercase">{product.code}</div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/industries-we-serve"
              className={`px-3.5 py-2.5 transition-colors border-b-2 uppercase ${
                isActive('/industries-we-serve')
                  ? 'border-[#D97706] text-[#0F172A] bg-[#FFFBEB]'
                  : 'border-transparent text-[#475569] hover:text-[#0F172A] hover:bg-[#F8FAFC]'
              }`}
            >
              INDUSTRIES
            </Link>

            <Link
              to="/projects"
              className={`px-3.5 py-2.5 transition-colors border-b-2 uppercase ${
                isActive('/projects')
                  ? 'border-[#D97706] text-[#0F172A] bg-[#FFFBEB]'
                  : 'border-transparent text-[#475569] hover:text-[#0F172A] hover:bg-[#F8FAFC]'
              }`}
            >
              PROJECTS
            </Link>

            <Link
              to="/blog"
              className={`px-3.5 py-2.5 transition-colors border-b-2 uppercase ${
                isActive('/blog')
                  ? 'border-[#D97706] text-[#0F172A] bg-[#FFFBEB]'
                  : 'border-transparent text-[#475569] hover:text-[#0F172A] hover:bg-[#F8FAFC]'
              }`}
            >
              BLOG
            </Link>

            <Link
              to="/contact"
              className={`px-3.5 py-2.5 transition-colors border-b-2 uppercase ${
                isActive('/contact')
                  ? 'border-[#D97706] text-[#0F172A] bg-[#FFFBEB]'
                  : 'border-transparent text-[#475569] hover:text-[#0F172A] hover:bg-[#F8FAFC]'
              }`}
            >
              CONTACT
            </Link>
          </nav>

          {/* Right Header Action */}
          <div className="hidden lg:flex items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              onClick={onOpenEstimator}
              icon={<Calculator className="w-3.5 h-3.5 text-[#D97706]" />}
              iconPosition="left"
            >
              Cost Estimator
            </Button>
            <Link to="/contact">
              <Button
                variant="primary"
                size="sm"
                icon={<ArrowUpRight className="w-3.5 h-3.5" />}
              >
                Request Quote
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onOpenEstimator}
              className="p-2 bg-[#F8FAFC] border border-[#CBD5E1] text-[#D97706]"
              title="Estimator"
            >
              <Calculator className="w-5 h-5" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 bg-[#F8FAFC] border border-[#CBD5E1] text-[#0F172A] hover:text-[#D97706] transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FFFFFF] border-b border-[#CBD5E1] px-4 pt-3 pb-6 space-y-2 font-sans text-xs shadow-xl">
          <Link
            to="/"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-[#0F172A] border-b border-[#E2E8F0] font-bold uppercase"
          >
            HOME
          </Link>

          {/* About Submenu */}
          <div className="border-b border-[#E2E8F0] pb-2">
            <div className="py-1 text-[#D97706] font-sans font-bold uppercase tracking-wider text-[11px]">COMPANY OVERVIEW</div>
            <Link
              to="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="block pl-3 py-1.5 text-[#475569]"
            >
              ↳ Company Profile
            </Link>
            <Link
              to="/director-message"
              onClick={() => setMobileMenuOpen(false)}
              className="block pl-3 py-1.5 text-[#475569]"
            >
              ↳ Director's Message
            </Link>
            <Link
              to="/vision-mission"
              onClick={() => setMobileMenuOpen(false)}
              className="block pl-3 py-1.5 text-[#475569]"
            >
              ↳ Vision &amp; Mission
            </Link>
          </div>

          {/* Product Range Submenu */}
          <div className="border-b border-[#E2E8F0] pb-2">
            <div className="py-1 text-[#D97706] font-sans font-bold uppercase tracking-wider text-[11px]">INDUSTRIAL PRODUCT RANGE</div>
            {PRODUCTS.map(product => (
              <Link
                key={product.id}
                to={`/${product.slug}`}
                onClick={() => setMobileMenuOpen(false)}
                className="block pl-3 py-1 text-[#475569] truncate"
              >
                ↳ {product.title}
              </Link>
            ))}
          </div>

          <Link
            to="/industries-we-serve"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-[#0F172A] border-b border-[#E2E8F0] font-semibold uppercase"
          >
            INDUSTRIES WE SERVE
          </Link>
          <Link
            to="/projects"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-[#0F172A] border-b border-[#E2E8F0] font-semibold uppercase"
          >
            PROJECTS
          </Link>
          <Link
            to="/blog"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-[#0F172A] border-b border-[#E2E8F0] font-semibold uppercase"
          >
            BLOG
          </Link>
          <Link
            to="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-[#0F172A] border-b border-[#E2E8F0] font-semibold uppercase"
          >
            CONTACT US
          </Link>

          <div className="pt-4 flex flex-col gap-2">
            <Button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEstimator?.();
              }}
              variant="outline"
              size="md"
              className="w-full"
              icon={<Calculator className="w-4 h-4 text-[#D97706]" />}
            >
              Cost &amp; Spec Estimator
            </Button>
            <a href={`tel:${COMPANY_CONTACT.phone}`} className="w-full">
              <Button variant="primary" size="md" className="w-full" icon={<Phone className="w-4 h-4" />}>
                Call {COMPANY_CONTACT.phone}
              </Button>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
