
export enum SkillLevel {
  Principiante,
  Intermedio,
  Avanzado,
  Profesional,
}

export type SkillName = 'premiere' | 'illustrator' | 'photoshop' | 'aftereffects' | 'filmora' | 'blender' | 'flstudio' | 'animate';

export interface Skill {
  name: string;
  level: SkillLevel;
  icon: SkillName;
  description: string;
}

export interface Project {
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  videoUrl?: string; // URL del video en assets/videos
  tools: string[];
}

export interface Study {
  degree: string;
  institution: string;
  year: string;
  description: string;
}
