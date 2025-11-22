
import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle }) => {
  return (
    <div className="text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-white relative inline-block">
        {title}
        <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-2/3 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full"></span>
      </h2>
      <p className="mt-4 text-lg text-slate-400">{subtitle}</p>
    </div>
  );
};

export default SectionTitle;
