import React from 'react';
import { Brain } from 'lucide-react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({ className = "", size = 'md' }) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-16 h-16'
  };

  return (
    <div className={`${sizeClasses[size]} ${className} relative flex items-center justify-center overflow-hidden rounded-xl bg-white shadow-sm group`}>
      <img 
        src="https://lh3.googleusercontent.com/d/1EIouJiPfVcHynVoi5BKGv-HrfwC62FjJ" 
        alt="MindSpark AI Logo" 
        className="w-full h-full object-contain p-1 group-hover:scale-110 transition-transform"
        referrerPolicy="no-referrer"
      />
    </div>
  );
};
