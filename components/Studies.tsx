
import React, { useState, useEffect, useRef } from 'react';
import SectionTitle from './SectionTitle';
import { STUDIES_DATA } from '../constants';
import { Study } from '../types';

const StudyItem: React.FC<{ study: Study; isLast: boolean; index: number }> = ({ study, isLast, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const itemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is visible
      }
    );

    const currentRef = itemRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div
      ref={itemRef}
      className={`relative pl-8 sm:pl-12 py-6 group transition-all duration-500 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Vertical line */}
      {!isLast && (
        <div className="absolute top-5 left-0 h-full w-px bg-slate-700 group-hover:bg-cyan-400 transition-colors duration-300" style={{left: '0.4rem'}}></div>
      )}
      {/* Circle */}
      <div className="absolute top-5 left-0 w-4 h-4 bg-slate-800 border-2 border-slate-600 rounded-full transition-all duration-300 group-hover:border-cyan-400 group-hover:scale-110"></div>
      
      <div className="relative">
        <p className="text-sm font-semibold text-cyan-400 mb-1">{study.year}</p>
        <h3 className="text-xl font-bold text-white">{study.degree}</h3>
        <p className="text-md text-slate-400 mb-3">{study.institution}</p>
        <p className="text-slate-400 leading-relaxed">{study.description}</p>
      </div>
    </div>
  );
};

const Studies: React.FC = () => {
  return (
    <section id="studies" className="container mx-auto">
      <SectionTitle title="Estudios" subtitle="Mi Trayectoria Formativa" />
      <div className="mt-12 max-w-3xl mx-auto">
        <div className="relative border-l-2 border-slate-700/50">
          {STUDIES_DATA.map((study, index) => (
            <StudyItem 
                key={study.degree} 
                study={study} 
                isLast={index === STUDIES_DATA.length - 1} 
                index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Studies;
