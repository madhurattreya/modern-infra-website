import React from 'react';

interface TechCardProps {
  idCode?: string;
  title?: string;
  badge?: string;
  children: React.ReactNode;
  className?: string;
  glowOnHover?: boolean;
  interactive?: boolean;
}

export const TechCard: React.FC<TechCardProps> = ({
  idCode,
  title,
  badge,
  children,
  className = '',
  glowOnHover = true,
  interactive = false
}) => {
  return (
    <div
      className={`group relative bg-[#FFFFFF] border border-[#CBD5E1] p-6 transition-all duration-150 shadow-industrial-sm 
      ${interactive ? 'cursor-pointer' : ''} 
      ${glowOnHover ? 'hover:border-[#D97706] hover:shadow-industrial' : ''} 
      ${className}`}
    >
      {/* Top Active Indicator Line */}
      <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-transparent group-hover:bg-[#D97706] transition-colors duration-150" />

      {/* Structural Corner Rivet Accents */}
      <span className="absolute top-2 right-2 w-1.5 h-1.5 bg-[#CBD5E1] group-hover:bg-[#D97706] transition-colors" />

      {/* Card Header Specification Tag */}
      {(idCode || badge) && (
        <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#F1F5F9] text-xs">
          {idCode && (
            <span className="text-[#D97706] font-sans font-bold uppercase tracking-wider text-[11px] flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-[#D97706]" />
              {idCode}
            </span>
          )}
          {badge && (
            <span className="px-2 py-0.5 bg-[#F8FAFC] border border-[#CBD5E1] text-[#475569] group-hover:text-[#0F172A] group-hover:border-[#D97706] transition-colors uppercase text-[10px] font-sans font-bold tracking-wider">
              {badge}
            </span>
          )}
        </div>
      )}

      {title && (
        <h3 className="text-xl sm:text-2xl font-bold font-headline text-[#0F172A] group-hover:text-[#D97706] transition-colors mb-2 uppercase tracking-tight">
          {title}
        </h3>
      )}

      <div className="font-body text-sm text-[#475569] leading-relaxed">
        {children}
      </div>
    </div>
  );
};
