import React from 'react';

interface MetricTileProps {
  value: string;
  unit?: string;
  label: string;
  subtext?: string;
  code?: string;
  progressPercent?: number;
  className?: string;
}

export const MetricTile: React.FC<MetricTileProps> = ({
  value,
  unit,
  label,
  subtext,
  code,
  progressPercent = 100,
  className = ''
}) => {
  return (
    <div className={`relative bg-[#FFFFFF] border border-[#CBD5E1] p-6 hover:border-[#D97706] transition-all duration-150 group shadow-industrial-sm hover:shadow-industrial ${className}`}>
      {/* Top Engineering Parameter Identifier */}
      <div className="flex items-center justify-between text-[11px] text-[#64748B] mb-3">
        <span className="font-sans font-bold uppercase tracking-wider text-[#64748B]">{code || 'VERIFIED SPEC'}</span>
        <span className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-[#10B981]" />
          <span className="text-[10px] text-[#059669] font-bold font-sans uppercase tracking-wider">CERTIFIED</span>
        </span>
      </div>

      {/* Main Counter readout */}
      <div className="flex items-baseline gap-1.5">
        <span className="text-4xl sm:text-5xl font-extrabold font-headline text-[#0F172A] tracking-tight group-hover:text-[#D97706] transition-colors tabular-nums">
          {value}
        </span>
        {unit && (
          <span className="text-sm sm:text-base font-bold font-sans uppercase tracking-wide text-[#D97706]">
            {unit}
          </span>
        )}
      </div>

      {/* Label and subtext */}
      <div className="mt-2.5 text-xs font-sans font-bold uppercase tracking-wider text-[#0F172A]">
        {label}
      </div>
      {subtext && (
        <div className="text-xs font-body text-[#64748B] mt-1 leading-relaxed">
          {subtext}
        </div>
      )}

      {/* Bottom capacity threshold hairline */}
      <div className="mt-4 pt-3 border-t border-[#F1F5F9] flex items-center gap-2">
        <div className="h-1.5 flex-1 bg-[#F1F5F9] overflow-hidden">
          <div
            className="h-full bg-[#D97706] transition-all duration-500 ease-out"
            style={{ width: `${Math.min(100, Math.max(10, progressPercent))}%` }}
          />
        </div>
        <span className="text-[10px] font-sans text-[#94A3B8] font-bold uppercase tracking-wider">PLANT SPEC</span>
      </div>
    </div>
  );
};
