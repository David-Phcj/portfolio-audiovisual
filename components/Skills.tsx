import React from 'react';
import { SKILLS_DATA } from '../constants';
import { Skill, SkillLevel } from '../types';
import SectionTitle from './SectionTitle';
import SkillIcon from './SkillIcon';

const SkillLevelBar: React.FC<{ level: SkillLevel }> = ({ level }) => {
  const levelMap = {
    [SkillLevel.Principiante]: { width: '25%', label: 'Principiante', color: 'bg-sky-500' },
    [SkillLevel.Intermedio]: { width: '50%', label: 'Intermedio', color: 'bg-teal-500' },
    [SkillLevel.Avanzado]: { width: '75%', label: 'Avanzado', color: 'bg-cyan-500' },
    [SkillLevel.Profesional]: { width: '100%', label: 'Profesional', color: 'bg-cyan-400' },
  };

  const { width, label, color } = levelMap[level] || levelMap[SkillLevel.Principiante];

  return (
    <div className="w-full bg-slate-700 rounded-full h-2.5 mt-2 group">
      <div
        className={`h-2.5 rounded-full ${color} transition-all duration-1000 ease-out`}
        style={{ width: '0%', animation: `progress-anim 1s ease-out forwards`, '--target-width': width } as React.CSSProperties}
      ></div>
       {/* FIX: Removed 'jsx' prop from style tag to fix TypeScript error. */}
       <style>{`
        @keyframes progress-anim {
          from { width: 0%; }
          to { width: var(--target-width); }
        }
      `}</style>
    </div>
  );
};

const SkillCard: React.FC<{ skill: Skill }> = ({ skill }) => {
  const levelLabels = ['Principiante', 'Intermedio', 'Avanzado', 'Profesional'];
  return (
    <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 transform hover:-translate-y-2 backdrop-blur-sm">
      <div className="flex items-center space-x-4">
        <div className="text-cyan-400">
          <SkillIcon icon={skill.icon} className="w-10 h-10"/>
        </div>
        <div>
          <h3 className="text-lg font-bold text-white">{skill.name}</h3>
          <p className="text-sm text-slate-400">{levelLabels[skill.level]}</p>
        </div>
      </div>
      <p className="mt-4 text-slate-400 text-sm h-10">{skill.description}</p>
      <SkillLevelBar level={skill.level} />
    </div>
  );
};

const Skills: React.FC = () => {
  return (
    <section id="skills" className="container mx-auto">
      <SectionTitle title="Habilidades" subtitle="Mis Herramientas Creativas" sectionId="skills" />
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {SKILLS_DATA.map((skill) => (
          <SkillCard key={skill.name} skill={skill} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
