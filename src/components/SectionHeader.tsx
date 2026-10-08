import React from 'react';

interface SectionHeaderProps {
  kicker: string;
  title: string;
  subtitle?: string;
  badge?: string;
  align?: 'left' | 'center';
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  kicker,
  title,
  subtitle,
  badge,
  align = 'left',
  className = ''
}) => {
  const isCenter = align === 'center';

  return (
    <div className={`relative mb-12 ${isCenter ? 'text-center mx-auto max-w-3xl' : 'max-w-3xl'} ${className}`}>
      {/* Industrial Category Kicker */}
      <div className={`flex items-center gap-2.5 mb-2.5 ${isCenter ? 'justify-center' : 'justify-start'}`}>
        <span className="w-2 h-2 bg-[#D97706]" />
        <span className="text-xs font-sans font-bold uppercase tracking-widest text-[#D97706]">
          {kicker}
        </span>
        <span className="h-[1px] w-8 bg-[#CBD5E1]" />
        {badge && (
          <span className="px-2.5 py-0.5 bg-[#F1F5F9] border border-[#CBD5E1] text-[#1E293B] font-sans text-[11px] uppercase tracking-wider font-bold">
            {badge}
          </span>
        )}
      </div>

      {/* Main Authoritative Headline */}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-headline text-[#0F172A] tracking-tight leading-[1.05] uppercase">
        {title}
      </h2>

      {/* Structural Underline Accent */}
      <div className={`mt-3.5 mb-4 flex items-center ${isCenter ? 'justify-center' : 'justify-start'}`}>
        <div className="h-[3px] w-14 bg-[#D97706]" />
        <div className="h-[1px] w-28 bg-[#CBD5E1]" />
      </div>

      {/* Clear Corporate Subtitle */}
      {subtitle && (
        <p className="text-sm sm:text-base font-body text-[#475569] leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};
