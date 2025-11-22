import React, { useState, useEffect, useRef } from 'react';
import { SKILLS_DATA } from '../constants';
import { Skill, SkillLevel } from '../types';
import SectionTitle from './SectionTitle';
import SkillIcon from './SkillIcon';

interface SkillLevelBarProps {
  level: SkillLevel;
  isVisible: boolean;
  delay: number;
}

const SkillLevelBar: React.FC<SkillLevelBarProps> = ({ level, isVisible, delay }) => {
  const levelMap = {
    [SkillLevel.Principiante]: { width: '25%', label: 'Principiante', color: 'bg-sky-500', glowColor: 'shadow-sky-500/50' },
    [SkillLevel.Intermedio]: { width: '50%', label: 'Intermedio', color: 'bg-teal-500', glowColor: 'shadow-teal-500/50' },
    [SkillLevel.Avanzado]: { width: '75%', label: 'Avanzado', color: 'bg-cyan-500', glowColor: 'shadow-cyan-500/50' },
    [SkillLevel.Profesional]: { width: '100%', label: 'Profesional', color: 'bg-cyan-400', glowColor: 'shadow-cyan-400/50' },
  };

  const { width, label, color, glowColor } = levelMap[level] || levelMap[SkillLevel.Principiante];

  return (
    <div className="w-full bg-slate-700 rounded-full h-2.5 mt-2 group relative overflow-hidden">
      <div
        className={`h-2.5 rounded-full ${color} transition-all duration-1000 ease-out ${
          isVisible ? 'shadow-lg ' + glowColor : ''
        }`}
        style={{
          width: isVisible ? width : '0%',
          transitionDelay: `${delay}ms`,
          animation: isVisible ? `progressFill 1.2s cubic-bezier(0.4, 0, 0.2, 1) forwards` : 'none',
          '--target-width': width,
        } as React.CSSProperties & { '--target-width': string }}
      >
        {/* Efecto de brillo animado */}
        {isVisible && (
          <div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-full"
            style={{
              animation: `shimmer 2s ease-in-out infinite`,
              animationDelay: `${delay + 1200}ms`,
            }}
          />
        )}
      </div>
      <style>{`
        @keyframes progressFill {
          from {
            width: 0%;
            transform: scaleX(0);
            opacity: 0.5;
          }
          50% {
            opacity: 1;
          }
          to {
            width: var(--target-width);
            transform: scaleX(1);
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
}

const SkillCard: React.FC<SkillCardProps> = ({ skill, isVisible, index }) => {
  const levelLabels = ['Principiante', 'Intermedio', 'Avanzado', 'Profesional'];
  const cardDelay = index * 50; // Delay escalonado para cada tarjeta
  
  return (
    <div
      className={`bg-slate-800/50 p-6 rounded-lg border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 transform hover:-translate-y-2 backdrop-blur-sm ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
      style={{
        transitionDelay: `${cardDelay}ms`,
      }}
    >
      <div className="flex items-center space-x-4">
        <div className={`text-cyan-400 transition-transform duration-500 ${
          isVisible ? 'scale-100 rotate-0' : 'scale-0 rotate-180'
        }`}
        style={{ transitionDelay: `${cardDelay + 100}ms` }}
        >
          <SkillIcon icon={skill.icon} className="w-10 h-10"/>
        </div>
        <div>
          <h3 className={`text-lg font-bold text-white transition-all duration-500 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
          }`}
          style={{ transitionDelay: `${cardDelay + 150}ms` }}
          >
            {skill.name}
          </h3>
          <p className={`text-sm text-slate-400 transition-all duration-500 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
          }`}
          style={{ transitionDelay: `${cardDelay + 200}ms` }}
          >
            {levelLabels[skill.level]}
          </p>
        </div>
      </div>
      <p className={`mt-4 text-slate-400 text-sm h-10 transition-all duration-500 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      style={{ transitionDelay: `${cardDelay + 250}ms` }}
      >
        {skill.description}
      </p>
      <SkillLevelBar level={skill.level} isVisible={isVisible} delay={cardDelay + 300} />
    </div>
  );
};

const Skills: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const hasAnimatedRef = useRef(false);

  useEffect(() => {
    if (!sectionRef.current || hasAnimatedRef.current) return;

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
        threshold: 0.1, // Activar cuando el 10% del apartado es visible
        rootMargin: '-50px 0px',
      }
    );

    observer.observe(sectionRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="container mx-auto">
      <SectionTitle title="Habilidades" subtitle="Mis Herramientas Creativas" sectionId="skills" />
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {SKILLS_DATA.map((skill, index) => (
          <SkillCard key={skill.name} skill={skill} isVisible={isVisible} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
