import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline';
}

export const Button: React.FC<ButtonProps> = ({ variant = 'primary', className = '', ...props }) => {
  const baseClasses = 'px-6 py-3 font-medium transition-all duration-300';
  const variantClasses = variant === 'primary' 
    ? 'bg-[#C8A46A] text-[#171514] hover:bg-[#D9CBB8] hover:text-[#3B101B]' 
    : 'border-2 border-[#C8A46A] text-[#C8A46A] hover:bg-[#C8A46A] hover:text-[#171514]';

  return (
    <button className={`${baseClasses} ${variantClasses} ${className}`} {...props} />
  );
};
