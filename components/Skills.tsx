import React, { useState, useEffect, useRef } from 'react';
import { SKILLS_DATA } from '../constants';
import { Skill, SkillLevel } from '../types';
import SectionTitle from './SectionTitle';
import SkillIcon from './SkillIcon';

interface SkillLevelBarProps {
  level: SkillLevel;
  isVisible: boolean;
  delay: number;
  isMobile: boolean;
}

const SkillLevelBar: React.FC<SkillLevelBarProps> = ({ level, isVisible, delay, isMobile }) => {
  const levelMap = {
    [SkillLevel.Principiante]: { width: '25%', label: 'Principiante', color: 'bg-sky-500', glowColor: 'shadow-sky-500/50' },
    [SkillLevel.Intermedio]: { width: '50%', label: 'Intermedio', color: 'bg-teal-500', glowColor: 'shadow-teal-500/50' },
    [SkillLevel.Avanzado]: { width: '75%', label: 'Avanzado', color: 'bg-cyan-500', glowColor: 'shadow-cyan-500/50' },
    [SkillLevel.Profesional]: { width: '100%', label: 'Profesional', color: 'bg-cyan-400', glowColor: 'shadow-cyan-400/50' },
  };

  const { width, label, color, glowColor } = levelMap[level] || levelMap[SkillLevel.Principiante];
  
  // Optimizaciones para móviles: duración más corta, sin efectos pesados
  const animationDuration = isMobile ? '0.8s' : '1.2s';
  const showGlow = !isMobile; // Desactivar glow en móviles
  const showShimmer = !isMobile; // Desactivar shimmer en móviles

  return (
    <div className="w-full bg-slate-700 rounded-full h-2.5 mt-2 group relative overflow-hidden">
      <div
        className={`h-2.5 rounded-full ${color} transition-all duration-1000 ease-out ${
          isVisible && showGlow ? 'shadow-lg ' + glowColor : ''
        }`}
        style={{
          width: isVisible ? width : '0%',
          transitionDelay: `${delay}ms`,
          animation: isVisible ? `progressFill ${animationDuration} cubic-bezier(0.4, 0, 0.2, 1) forwards` : 'none',
          '--target-width': width,
          willChange: isVisible ? 'width, transform' : 'auto', // Optimización para GPU
        } as React.CSSProperties & { '--target-width': string }}
      >
        {/* Efecto de brillo animado - solo en desktop */}
        {isVisible && showShimmer && (
          <div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-full"
            style={{
              animation: `shimmer 2s ease-in-out infinite`,
              animationDelay: `${delay + (isMobile ? 800 : 1200)}ms`,
              willChange: 'transform', // Optimización para GPU
            }}
          />
        )}
      </div>
      <style>{`
        @keyframes progressFill {
          from {
            width: 0%;
            ${!isMobile ? 'transform: scaleX(0);' : ''}
            opacity: 0.5;
          }
          50% {
            opacity: 1;
          }
          to {
            width: var(--target-width);
            ${!isMobile ? 'transform: scaleX(1);' : ''}
            opacity: 1;
          }
        }
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(200%);
          }
        }
      `}</style>
    </div>
  );
};

interface SkillCardProps {
  skill: Skill;
  isVisible: boolean;
  index: number;
  isMobile: boolean;
}

const SkillCard: React.FC<SkillCardProps> = ({ skill, isVisible, index, isMobile }) => {
  const levelLabels = ['Principiante', 'Intermedio', 'Avanzado', 'Profesional'];
  // Delays más cortos en móviles para mejor rendimiento
  const baseDelay = isMobile ? 20 : 50; // Reducido de 50ms a 20ms en móviles
  const cardDelay = index * baseDelay;
  
  // Simplificar animaciones en móviles
  const iconAnimation = isMobile 
    ? (isVisible ? 'scale-100' : 'scale-0')
    : (isVisible ? 'scale-100 rotate-0' : 'scale-0 rotate-180');
  
  const textAnimation = isMobile
    ? (isVisible ? 'opacity-100' : 'opacity-0')
    : (isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4');
  
  return (
    <div
      className={`bg-slate-800/50 p-6 rounded-lg border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 transform hover:-translate-y-2 backdrop-blur-sm ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
      style={{
        transitionDelay: `${cardDelay}ms`,
        willChange: isVisible ? 'opacity, transform' : 'auto', // Optimización para GPU
      }}
    >
      <div className="flex items-center space-x-4">
        <div className={`text-cyan-400 transition-transform ${isMobile ? 'duration-300' : 'duration-500'} ${
          iconAnimation
        }`}
        style={{ 
          transitionDelay: `${cardDelay + (isMobile ? 50 : 100)}ms`,
          willChange: 'transform',
        }}
        >
          <SkillIcon icon={skill.icon} className="w-10 h-10"/>
        </div>
        <div>
          <h3 className={`text-lg font-bold text-white transition-all ${isMobile ? 'duration-300' : 'duration-500'} ${
            textAnimation
          }`}
          style={{ 
            transitionDelay: `${cardDelay + (isMobile ? 75 : 150)}ms`,
            willChange: isVisible ? 'opacity, transform' : 'auto',
          }}
          >
            {skill.name}
          </h3>
          <p className={`text-sm text-slate-400 transition-all ${isMobile ? 'duration-300' : 'duration-500'} ${
            textAnimation
          }`}
          style={{ 
            transitionDelay: `${cardDelay + (isMobile ? 100 : 200)}ms`,
            willChange: isVisible ? 'opacity, transform' : 'auto',
          }}
          >
            {levelLabels[skill.level]}
          </p>
        </div>
      </div>
      <p className={`mt-4 text-slate-400 text-sm h-10 transition-all ${isMobile ? 'duration-300' : 'duration-500'} ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      style={{ 
        transitionDelay: `${cardDelay + (isMobile ? 125 : 250)}ms`,
        willChange: isVisible ? 'opacity' : 'auto',
      }}
      >
        {skill.description}
      </p>
      <SkillLevelBar level={skill.level} isVisible={isVisible} delay={cardDelay + (isMobile ? 150 : 300)} isMobile={isMobile} />
    </div>
  );
};

const Skills: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const hasAnimatedRef = useRef(false);

  useEffect(() => {
    // Detectar si es móvil
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint de Tailwind
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (!sectionRef.current || hasAnimatedRef.current) return;

    // Threshold más bajo en móviles para activar antes
    const threshold = isMobile ? 0.05 : 0.1;
    const rootMargin = isMobile ? '-20px 0px' : '-50px 0px';

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimatedRef.current) {
            setIsVisible(true);
            hasAnimatedRef.current = true;
            observer.disconnect();
          }
        });
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(sectionRef.current);

    return () => {
      observer.disconnect();
    };
  }, [isMobile]);

  return (
    <section id="skills" ref={sectionRef} className="container mx-auto">
      <SectionTitle title="Habilidades" subtitle="Mis Herramientas Creativas" sectionId="skills" />
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {SKILLS_DATA.map((skill, index) => (
          <SkillCard key={skill.name} skill={skill} isVisible={isVisible} index={index} isMobile={isMobile} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
