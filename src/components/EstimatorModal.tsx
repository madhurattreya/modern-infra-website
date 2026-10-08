import React, { useState } from 'react';
import { X, Calculator, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from './Button';
import { COMPANY_CONTACT } from '../data/companyData';

interface EstimatorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const EstimatorModal: React.FC<EstimatorModalProps> = ({ isOpen, onClose }) => {
  const [structureType, setStructureType] = useState('peb');
  const [lengthFt, setLengthFt] = useState(150);
  const [widthFt, setWidthFt] = useState(80);
  const [heightFt, setHeightFt] = useState(28);
  const [craneCapacity, setCraneCapacity] = useState('none');
  const [insulationType, setInsulationType] = useState('puf-60');
  const [clientName, setClientName] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  // Engineering calculations
  const totalAreaSqFt = lengthFt * widthFt;
  const totalAreaSqM = Math.round(totalAreaSqFt * 0.092903);
  
  // Steel tonnage estimation (~30 to 45 kg per sq m for PEB depending on crane & height)
  let kgPerSqM = 32;
  if (heightFt > 30) kgPerSqM += 5;
  if (craneCapacity !== 'none') kgPerSqM += craneCapacity === '10mt' ? 8 : 14;
  const estimatedTonnageMT = Math.round((totalAreaSqM * kgPerSqM) / 1000);

  // Erection timeline estimation
  const estimatedWeeks = Math.max(4, Math.round(estimatedTonnageMT / 25) + 3);

  // Estimated cost range in Lakhs (₹350 - ₹550 per sq ft turnkey)
  let ratePerSqFt = 420;
  if (structureType === 'cold-storage') ratePerSqFt = 750;
  if (structureType === 'mezzanine') ratePerSqFt = 580;
  if (craneCapacity !== 'none') ratePerSqFt += 50;

  const estimatedTotalCostLakhs = ((totalAreaSqFt * ratePerSqFt) / 100000).toFixed(1);

  const handleSubmitEstimate = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsAppShare = () => {
    const text = encodeURIComponent(
      `Hello HAM Engineering Exim India, I ran an engineering estimate on your website:\n` +
      `Structure: ${structureType.toUpperCase()}\n` +
      `Dimensions: ${lengthFt}'L x ${widthFt}'W x ${heightFt}'H (${totalAreaSqFt.toLocaleString()} sq.ft)\n` +
      `Est Steel: ~${estimatedTonnageMT} MT | Crane: ${craneCapacity}\n` +
      `My Name: ${clientName || 'Inquirer'} | Phone: ${clientPhone || 'N/A'}\n` +
      `Please provide detailed technical feasibility & formal proposal.`
    );
    window.open(`https://wa.me/917668813647?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-[#FFFFFF] border border-[#F59E0B] shadow-[0_10px_40px_rgba(0,0,0,0.2)] p-6 sm:p-8 my-8 text-[#0F172A]">
        {/* Header telemetry */}
        <div className="flex items-center justify-between pb-4 border-b border-[#E2E8F0]">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-[#FEF3C7] border border-[#F59E0B]">
              <Calculator className="w-5 h-5 text-[#D97706]" />
            </div>
            <div>
              <div className="text-[10px] font-sans text-[#D97706] tracking-wider uppercase font-bold flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-[#D97706]" />
                HAM ENGINEERING SPECIFICATION SYSTEM
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold font-headline text-[#0F172A] uppercase tracking-tight">
                Interactive PEB &amp; Structural Cost Estimator
              </h2>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#64748B] hover:text-[#0F172A] hover:bg-[#F1F5F9] border border-[#CBD5E1] hover:border-[#F59E0B] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="py-12 text-center max-w-md mx-auto space-y-4">
            <div className="w-16 h-16 bg-[#FEF3C7] border border-[#F59E0B] mx-auto flex items-center justify-center text-[#D97706]">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-extrabold font-headline text-[#0F172A] uppercase">
              Feasibility Telemetry Logged!
            </h3>
            <p className="text-sm font-body text-[#475569] leading-relaxed">
              Our Structural Design Bureau at HAM Engineering has received your dimensional parameters ({totalAreaSqFt.toLocaleString()} sq.ft). A Senior Structural Consultant will connect shortly.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
              <Button onClick={handleWhatsAppShare} variant="primary" icon={<ArrowRight className="w-4 h-4" />}>
                Instant WhatsApp Verification
              </Button>
              <Button onClick={() => setSubmitted(false)} variant="outline">
                Recalculate
              </Button>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-6">
            {/* Input Parameters Controls */}
            <div className="lg:col-span-7 space-y-5">
              {/* Structure Type Select */}
              <div>
                <label className="block text-xs font-sans uppercase text-[#475569] mb-1.5 font-bold tracking-wider">
                  1. Select Structural Category
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[
                    { id: 'peb', label: 'PEB Warehouse' },
                    { id: 'industrial', label: 'Heavy Factory' },
                    { id: 'cold-storage', label: 'PUF Cold Chain' },
                    { id: 'mezzanine', label: 'Multi-Storey' }
                  ].map(item => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setStructureType(item.id)}
                      className={`p-2.5 text-xs font-sans text-left border transition-all cursor-pointer ${
                        structureType === item.id
                          ? 'bg-[#FEF3C7] border-[#F59E0B] text-[#B45309] font-bold shadow-xs'
                          : 'bg-[#F8FAFC] border-[#CBD5E1] text-[#475569] font-medium hover:border-[#F59E0B]/50'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Sliders: Length, Width, Height */}
              <div className="space-y-4 bg-[#F8FAFC] border border-[#CBD5E1] p-4">
                <div>
                  <div className="flex justify-between text-xs font-sans mb-1">
                    <span className="text-[#64748B] font-medium">Building Length:</span>
                    <span className="text-[#D97706] font-bold">{lengthFt} Feet ({Math.round(lengthFt * 0.3048)}m)</span>
                  </div>
                  <input
                    type="range"
                    min="50"
                    max="600"
                    step="10"
                    value={lengthFt}
                    onChange={e => setLengthFt(Number(e.target.value))}
                    className="w-full accent-[#F59E0B] bg-[#E2E8F0] h-2 cursor-pointer"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs font-sans mb-1">
                    <span className="text-[#64748B] font-medium">Clear Span Width:</span>
                    <span className="text-[#D97706] font-bold">{widthFt} Feet ({Math.round(widthFt * 0.3048)}m)</span>
                  </div>
                  <input
                    type="range"
                    min="40"
                    max="250"
                    step="5"
                    value={widthFt}
                    onChange={e => setWidthFt(Number(e.target.value))}
                    className="w-full accent-[#F59E0B] bg-[#E2E8F0] h-2 cursor-pointer"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs font-sans mb-1">
                    <span className="text-[#64748B] font-medium">Clear Eave Height:</span>
                    <span className="text-[#D97706] font-bold">{heightFt} Feet ({Math.round(heightFt * 0.3048)}m)</span>
                  </div>
                  <input
                    type="range"
                    min="18"
                    max="50"
                    step="2"
                    value={heightFt}
                    onChange={e => setHeightFt(Number(e.target.value))}
                    className="w-full accent-[#F59E0B] bg-[#E2E8F0] h-2 cursor-pointer"
                  />
                </div>
              </div>

              {/* Crane Capacity & Insulation */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-sans uppercase text-[#475569] mb-1.5 font-bold tracking-wider">
                    Overhead Crane Provision
                  </label>
                  <select
                    value={craneCapacity}
                    onChange={e => setCraneCapacity(e.target.value)}
                    className="w-full bg-[#FFFFFF] border border-[#CBD5E1] text-xs font-sans text-[#0F172A] p-2.5 focus:border-[#F59E0B] outline-none"
                  >
                    <option value="none">No Overhead Crane</option>
                    <option value="5mt">5 MT Overhead EOT Crane</option>
                    <option value="10mt">10 MT Overhead EOT Crane</option>
                    <option value="25mt">25 MT Heavy Crane Runway</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-sans uppercase text-[#475569] mb-1.5 font-bold tracking-wider">
                    Roof / Wall Insulation
                  </label>
                  <select
                    value={insulationType}
                    onChange={e => setInsulationType(e.target.value)}
                    className="w-full bg-[#FFFFFF] border border-[#CBD5E1] text-xs font-sans text-[#0F172A] p-2.5 focus:border-[#F59E0B] outline-none"
                  >
                    <option value="galvalume">Standard AZ150 High-Tensile Sheet</option>
                    <option value="puf-50">50mm PUF Insulated Sandwich Panel</option>
                    <option value="puf-80">80mm PUF Insulated Sandwich Panel</option>
                    <option value="puf-120">120mm Deep-Freeze PUF Envelope</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Live Calculation Output Console */}
            <div className="lg:col-span-5 bg-[#F8FAFC] border border-[#CBD5E1] p-5 flex flex-col justify-between">
              <div>
                <div className="text-[11px] font-sans text-[#D97706] uppercase tracking-wider font-bold mb-3 flex items-center justify-between">
                  <span>TELEMETRY SUMMARY</span>
                  <span className="w-2 h-2 rounded-full bg-[#D97706] animate-beacon" />
                </div>

                <div className="space-y-3.5 divide-y divide-[#E2E8F0] font-sans text-xs">
                  <div className="flex justify-between items-center pt-2">
                    <span className="text-[#64748B]">Covered Footprint:</span>
                    <span className="text-[#0F172A] font-bold text-sm font-headline">
                      {totalAreaSqFt.toLocaleString()} SQ. FT.
                      <span className="text-[#64748B] text-[11px] ml-1 font-sans">({totalAreaSqM} m²)</span>
                    </span>
                  </div>

                  <div className="flex justify-between items-center pt-2">
                    <span className="text-[#64748B]">Est. Steel Tonnage:</span>
                    <span className="text-[#D97706] font-bold text-sm font-headline">
                      ~{estimatedTonnageMT} MT Structural Steel
                    </span>
                  </div>

                  <div className="flex justify-between items-center pt-2">
                    <span className="text-[#64748B]">Fabrication &amp; Erection:</span>
                    <span className="text-[#0F172A] font-bold">
                      {estimatedWeeks} - {estimatedWeeks + 2} Weeks
                    </span>
                  </div>

                  <div className="flex justify-between items-center pt-2">
                    <span className="text-[#64748B]">Design Codes Applied:</span>
                    <span className="text-[#0F172A] font-sans font-bold text-xs uppercase">
                      IS 800:2007 &amp; MBMA 2010
                    </span>
                  </div>

                  <div className="pt-3 bg-[#FFFFFF] p-3 border border-[#E2E8F0]">
                    <div className="text-[10px] text-[#64748B] uppercase font-bold tracking-wider">Estimated Project Budget Band</div>
                    <div className="text-2xl sm:text-3xl font-extrabold font-headline text-[#D97706] mt-0.5">
                      ₹ {estimatedTotalCostLakhs} Lakhs*
                    </div>
                    <div className="text-[10px] text-[#64748B] mt-1">
                      *Turnkey supply &amp; erection estimate. Excludes civil foundations &amp; statutory taxes.
                    </div>
                  </div>
                </div>
              </div>

              {/* Inquiry Form */}
              <form onSubmit={handleSubmitEstimate} className="mt-5 pt-4 border-t border-[#E2E8F0] space-y-3">
                <div className="text-xs font-sans text-[#0F172A] font-bold uppercase tracking-wider">
                  Get Detailed Bill of Quantities (BOQ):
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="text"
                    required
                    placeholder="Your Name"
                    value={clientName}
                    onChange={e => setClientName(e.target.value)}
                    className="w-full bg-[#FFFFFF] border border-[#CBD5E1] text-xs font-sans px-3 py-2 text-[#0F172A] focus:border-[#F59E0B] outline-none"
                  />
                  <input
                    type="tel"
                    required
                    placeholder="Phone / WhatsApp"
                    value={clientPhone}
                    onChange={e => setClientPhone(e.target.value)}
                    className="w-full bg-[#FFFFFF] border border-[#CBD5E1] text-xs font-sans px-3 py-2 text-[#0F172A] focus:border-[#F59E0B] outline-none"
                  />
                </div>
                <Button type="submit" variant="primary" size="md" className="w-full" icon={<ArrowRight className="w-4 h-4" />}>
                  Generate Official Specification Offer
                </Button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
