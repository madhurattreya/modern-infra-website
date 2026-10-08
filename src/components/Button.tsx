import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'danger' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  kicker?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'right',
  kicker,
  className = '',
  disabled,
  ...props
}) => {
  const sizeClasses = {
    sm: 'px-3.5 py-1.5 text-xs font-sans tracking-wider font-semibold',
    md: 'px-5 py-2.5 text-xs sm:text-sm font-sans tracking-wider font-bold',
    lg: 'px-7 py-3.5 text-sm sm:text-base font-sans tracking-wide font-bold'
  };

  const variantClasses = {
    primary:
      'bg-[#D97706] text-[#FFFFFF] hover:bg-[#B45309] active:bg-[#92400E] shadow-sm hover:shadow border border-[#B45309]',
    secondary:
      'bg-[#FFFFFF] text-[#0F172A] hover:bg-[#F8FAFC] border border-[#CBD5E1] hover:border-[#D97706] shadow-xs hover:shadow-sm transition-all',
    outline:
      'bg-transparent text-[#1E293B] border border-[#CBD5E1] hover:border-[#D97706] hover:text-[#0F172A] hover:bg-[#FFFBEB]',
    danger:
      'bg-[#DC2626] text-white hover:bg-[#B91C1C] border border-[#B91C1C] shadow-xs',
    ghost:
      'bg-transparent text-[#475569] hover:text-[#0F172A] hover:bg-[#F1F5F9] border border-transparent'
  };

  return (
    <button
      disabled={disabled}
      className={`relative inline-flex items-center justify-center gap-2 uppercase transition-all duration-150 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed select-none ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {/* Corner steel plate notch for primary */}
      {variant === 'primary' && (
        <span className="absolute top-0 right-0 w-1.5 h-1.5 bg-[#FFFFFF]" />
      )}
      {icon && iconPosition === 'left' && <span className="inline-flex shrink-0">{icon}</span>}
      <span className="flex flex-col items-start leading-tight">
        {kicker && <span className="text-[10px] opacity-80 tracking-wider uppercase font-sans font-bold">{kicker}</span>}
        <span>{children}</span>
      </span>
      {icon && iconPosition === 'right' && <span className="inline-flex shrink-0">{icon}</span>}
    </button>
  );
};
