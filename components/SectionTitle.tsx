
import React, { useState, useEffect, useRef } from 'react';

interface SectionTitleProps {
  title: string;
  subtitle: string;
  sectionId?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle, sectionId }) => {
  const [isAnimated, setIsAnimated] = useState(false);
  const titleRef = useRef<HTMLDivElement>(null);
  const hasAnimatedRef = useRef(false);

  useEffect(() => {
    // Escuchar evento de scroll automático desde el header
    const handleSectionScroll = (event: CustomEvent) => {
      if (sectionId && event.detail.sectionId === sectionId) {
        hasAnimatedRef.current = false;
        setIsAnimated(false);
        // Delay para que el scroll termine antes de animar
        setTimeout(() => {
          setIsAnimated(true);
          hasAnimatedRef.current = true;
        }, 400);
      }
    };

    // Observar cuando la sección entra en viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimatedRef.current) {
            setIsAnimated(true);
            hasAnimatedRef.current = true;
          }
        });
      },
      {
        threshold: 0.1, // Animar cuando el 10% del elemento es visible
        rootMargin: '-120px 0px', // Offset para considerar el header
      }
    );

    const currentRef = titleRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    window.addEventListener('section-scroll', handleSectionScroll as EventListener);

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
      window.removeEventListener('section-scroll', handleSectionScroll as EventListener);
    };
  }, [sectionId]);

  return (
    <div 
      ref={titleRef}
      className={`text-center transition-all duration-700 ease-out ${
        isAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: isAnimated ? '0ms' : '0ms' }}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-white relative inline-block">
        {title}
        <span 
          className={`absolute -bottom-2 left-1/2 -translate-x-1/2 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full transition-all duration-1000 ease-out ${
            isAnimated ? 'w-2/3' : 'w-0'
          }`}
          style={{ transitionDelay: isAnimated ? '200ms' : '0ms' }}
        ></span>
      </h2>
      <p 
        className={`mt-4 text-lg text-slate-400 transition-all duration-700 ease-out ${
          isAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
        style={{ transitionDelay: isAnimated ? '300ms' : '0ms' }}
      >
        {subtitle}
      </p>
    </div>
  );
};

export default SectionTitle;
