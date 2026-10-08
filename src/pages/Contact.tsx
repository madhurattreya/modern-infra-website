import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  MessageSquare, 
  ExternalLink 
} from 'lucide-react';
import { SectionHeader } from '../components/SectionHeader';
import { TechCard } from '../components/TechCard';
import { Button } from '../components/Button';
import { COMPANY_CONTACT } from '../data/companyData';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    company: '',
    structureType: 'PEB Warehouse',
    areaSqFt: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `Hello HAM Engineering Exim India,\n` +
      `Name: ${formData.name || 'Client'}\n` +
      `Phone: ${formData.phone || 'N/A'}\n` +
      `Project: ${formData.structureType} (${formData.areaSqFt ? formData.areaSqFt + ' sq.ft' : 'Custom'})\n` +
      `Message: ${formData.message || 'Please contact me regarding steel building requirements.'}`
    );
    window.open(`https://wa.me/917668813647?text=${text}`, '_blank');
  };

  return (
    <div className="bg-[#F8FAFC] text-[#0F172A] min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-16">
        <div>
          <div className="text-xs font-sans text-[#D97706] mb-2 font-bold uppercase tracking-wider flex items-center gap-1.5">
            <span>HOME</span>
            <span className="text-[#CBD5E1]">/</span>
            <span>CONTACT</span>
            <span className="text-[#CBD5E1]">/</span>
            <span className="text-[#0F172A]">ENGINEERING DIRECTORY</span>
          </div>
          <SectionHeader
            kicker="DIRECT DISPATCH"
            title="Contact Us: Structural Engineering Directorate"
            subtitle="Connect directly with our senior structural consultants, commercial estimators, and turnkey export directors."
            badge="RAPID RESPONSE 24/7"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Contact Cards & Info */}
          <div className="lg:col-span-5 space-y-6">
            <TechCard idCode="COMMUNICATION CHANNELS" title="Direct Engineering Channels">
              <div className="space-y-4 font-sans text-xs pt-2">
                <div className="flex items-start gap-3 p-3 bg-[#F8FAFC] border border-[#CBD5E1]">
                  <Phone className="w-4 h-4 text-[#D97706] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-[#64748B] text-[10px] font-bold uppercase tracking-wider">DIRECT HELPLINE:</div>
                    <a href={`tel:${COMPANY_CONTACT.phone}`} className="text-[#0F172A] font-bold text-sm hover:text-[#D97706]">
                      {COMPANY_CONTACT.phone}
                    </a>
                    <div className="text-[11px] text-[#64748B] mt-0.5">Alt: {COMPANY_CONTACT.altPhone}</div>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-[#F8FAFC] border border-[#CBD5E1]">
                  <Mail className="w-4 h-4 text-[#D97706] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-[#64748B] text-[10px] font-bold uppercase tracking-wider">OFFICIAL EMAIL:</div>
                    <a href={`mailto:${COMPANY_CONTACT.email}`} className="text-[#0F172A] font-bold text-xs hover:text-[#D97706]">
                      {COMPANY_CONTACT.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-[#F8FAFC] border border-[#CBD5E1]">
                  <MapPin className="w-4 h-4 text-[#D97706] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-[#64748B] text-[10px] font-bold uppercase tracking-wider">HEADQUARTERS &amp; WORKS:</div>
                    <div className="text-[#0F172A] leading-relaxed">{COMPANY_CONTACT.address}</div>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-[#F8FAFC] border border-[#CBD5E1]">
                  <Clock className="w-4 h-4 text-[#D97706] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-[#64748B] text-[10px] font-bold uppercase tracking-wider">OPERATING HOURS:</div>
                    <div className="text-[#0F172A]">Monday - Saturday: 08:30 - 19:30 IST</div>
                    <div className="text-[11px] text-[#059669] mt-0.5 font-bold uppercase tracking-wider">24/7 Field Erection &amp; Export Support</div>
                  </div>
                </div>
              </div>
            </TechCard>

            {/* Direct WhatsApp Callout */}
            <div className="p-6 bg-[#FEF3C7]/40 border border-[#CBD5E1] space-y-3 shadow-sm">
              <div className="flex items-center gap-2 text-xs font-sans text-[#D97706] font-bold uppercase tracking-wider">
                <MessageSquare className="w-4 h-4" />
                <span>RAPID WHATSAPP CHANNEL</span>
              </div>
              <p className="text-sm font-body text-[#475569] leading-relaxed">
                Send your layout drawings, plot dimensions, or queries for immediate evaluation.
              </p>
              <Button
                onClick={handleWhatsAppDirect}
                variant="primary"
                size="md"
                className="w-full"
                icon={<ExternalLink className="w-4 h-4" />}
              >
                Launch WhatsApp Chat
              </Button>
            </div>
          </div>

          {/* Right Column: Formal Specification Form */}
          <div className="lg:col-span-7 bg-[#FFFFFF] border border-[#CBD5E1] p-8 sm:p-10 shadow-industrial">
            <div className="text-xs font-sans text-[#D97706] font-bold pb-2 border-b border-[#E2E8F0] mb-6 flex justify-between uppercase tracking-wider">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-[#D97706]" />
                SUBMIT STRUCTURAL INQUIRY &amp; BOQ REQUEST
              </span>
              <span className="text-[#64748B]">DIRECT EXIM DISPATCH</span>
            </div>

            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 bg-[#FEF3C7] border border-[#F59E0B] mx-auto flex items-center justify-center text-[#D97706]">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-extrabold font-headline text-[#0F172A] uppercase">
                  Technical Request Successfully Logged!
                </h3>
                <p className="text-sm font-body text-[#475569] max-w-md mx-auto leading-relaxed">
                  Thank you, <strong className="text-[#0F172A]">{formData.name}</strong>. Our Lead Structural Estimator at HAM Engineering has received your inquiry for <strong>{formData.structureType}</strong>. You will receive a preliminary technical feasibility analysis within 2-4 business hours.
                </p>
                <div className="pt-4 flex justify-center gap-4">
                  <Button onClick={handleWhatsAppDirect} variant="primary" icon={<ExternalLink className="w-4 h-4" />}>
                    Connect on WhatsApp for Expedited Review
                  </Button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 font-sans text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[#475569] uppercase mb-1 font-bold tracking-wider">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rajesh Kumar"
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#FFFFFF] border border-[#CBD5E1] p-2.5 text-[#0F172A] focus:border-[#F59E0B] outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-[#475569] uppercase mb-1 font-bold tracking-wider">Phone / WhatsApp *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91-XXXXXXXXXX"
                      value={formData.phone}
                      onChange={e => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-[#FFFFFF] border border-[#CBD5E1] p-2.5 text-[#0F172A] focus:border-[#F59E0B] outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[#475569] uppercase mb-1 font-bold tracking-wider">Corporate Email *</label>
                    <input
                      type="email"
                      required
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#FFFFFF] border border-[#CBD5E1] p-2.5 text-[#0F172A] focus:border-[#F59E0B] outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-[#475569] uppercase mb-1 font-bold tracking-wider">Company / Organization</label>
                    <input
                      type="text"
                      placeholder="Organization Name"
                      value={formData.company}
                      onChange={e => setFormData({ ...formData, company: e.target.value })}
                      className="w-full bg-[#FFFFFF] border border-[#CBD5E1] p-2.5 text-[#0F172A] focus:border-[#F59E0B] outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[#475569] uppercase mb-1 font-bold tracking-wider">Structure Type *</label>
                    <select
                      value={formData.structureType}
                      onChange={e => setFormData({ ...formData, structureType: e.target.value })}
                      className="w-full bg-[#FFFFFF] border border-[#CBD5E1] p-2.5 text-[#0F172A] focus:border-[#F59E0B] outline-none"
                    >
                      <option>PEB Warehouse &amp; Logistics Shed</option>
                      <option>Heavy Manufacturing Factory</option>
                      <option>PUF Insulated Cold Storage</option>
                      <option>Multi-Storey Mezzanine Building</option>
                      <option>Conventional Heavy Steel Plant</option>
                      <option>Roof Sheeting / Cladding Package</option>
                      <option>Metro / Airport Transit Structure</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[#475569] uppercase mb-1 font-bold tracking-wider">Estimated Footprint (Sq.Ft)</label>
                    <input
                      type="text"
                      placeholder="e.g. 50,000 sq ft"
                      value={formData.areaSqFt}
                      onChange={e => setFormData({ ...formData, areaSqFt: e.target.value })}
                      className="w-full bg-[#FFFFFF] border border-[#CBD5E1] p-2.5 text-[#0F172A] focus:border-[#F59E0B] outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[#475569] uppercase mb-1 font-bold tracking-wider">Project Details / Dimensional Notes</label>
                  <textarea
                    rows={4}
                    placeholder="Specify length, width, clear eave height, crane capacity, or specific site location..."
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[#FFFFFF] border border-[#CBD5E1] p-2.5 text-[#0F172A] focus:border-[#F59E0B] outline-none"
                  />
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-full"
                  icon={<Send className="w-4 h-4" />}
                >
                  Transmit Technical Specification Dossier
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
