import { Skill, Project, SkillLevel, Study } from './types';

export const SKILLS_DATA: Skill[] = [
  {
    name: 'Adobe Premiere Pro',
    level: SkillLevel.Intermedio,
    icon: 'premiere',
    description: 'Edición de video, montaje y corrección de color.',
  },
  {
    name: 'Adobe After Effects',
    level: SkillLevel.Avanzado,
    icon: 'aftereffects',
    description: 'Motion graphics, efectos visuales y composición.',
  },
  {
    name: 'Adobe Photoshop',
    level: SkillLevel.Avanzado,
    icon: 'photoshop',
    description: 'Retoque fotográfico, diseño de miniaturas y gráficos.',
  },
  {
    name: 'Wondershare Filmora',
    level: SkillLevel.Avanzado,
    icon: 'filmora',
    description: 'Edición rápida y creativa para redes sociales.',
  },
  {
    name: 'FL Studio',
    level: SkillLevel.Intermedio,
    icon: 'flstudio',
    description: 'Producción musical, mezcla y masterización de audio.',
  },
  {
    name: 'Adobe Illustrator',
    level: SkillLevel.Intermedio,
    icon: 'illustrator',
    description: 'Diseño de logos y gráficos vectoriales.',
  },
  {
    name: 'Blender',
    level: SkillLevel.Principiante,
    icon: 'blender',
    description: 'Modelado 3D básico y animación.',
  },
  {
    name: 'Adobe Animate',
    level: SkillLevel.Principiante,
    icon: 'animate',
    description: 'Animación 2D tradicional y para web.',
  },
];

// Helper para generar rutas correctas con base path
const assetPath = (path: string) => {
  const base = import.meta.env.BASE_URL || '/portfolio-audiovisual/';
  // Remover el slash inicial si existe y agregar el base path
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${base}${cleanPath}`;
};

export const PROJECTS_DATA: Project[] = [
  {
    title: 'Spot Publicitario - "Bruso Remodeling"',
    category: 'Publicidad',
    description: 'Video explicativo para empresa estado unidense de arquitectura.',
    imageUrl: assetPath('assets/brusoImage.png'),
    videoUrl: assetPath('assets/videos/BrusoVideo.mp4'),
    tools: ['Filmora', 'After Effects'],
  },
  {
    title: 'Comercial Publicitario- "Pulpas Caucasia"',
    category: 'Comercial',
    description: 'Video publicitario para empresa de jugos naturales y verduras.',
    imageUrl: assetPath('assets/PulpasCaucasiaImage.png'),
    videoUrl: assetPath('assets/videos/PulpasCaucasia.mp4'),
    tools: ['Filmora'],
  },
  {
    title: 'Animacion 3D - "Blender Tracking"',
    category: 'Animacion 3D',
    description: 'Ejemplo de trackeo de camara con movimiento de camara en blender.',
    imageUrl: assetPath('assets/BlenderTrackingImage.png'),
    videoUrl: assetPath('assets/videos/BlenderTracking.mp4'),
    tools: ['After Effects', 'Blender'],
  },
  {
    title: 'Documental - "Universidad de Antioquia"',
    category: 'Documental',
    description: 'Documental sobre proyecto universidad de Antioquia (La incertidumbre).',
    imageUrl: assetPath('assets/DocumentalUdeaImage.png'),
    videoUrl: assetPath('assets/videos/DocumentalUdea.mp4'),
    tools: ['Filmora'],
  },
   {
    title: 'Motion Tracking - "Sonic"',
    category: 'Motion Tracking',
    description: 'Ejemplo de motion tracking de camara con movimiento de camara en sonic.',
    imageUrl: assetPath('assets/MotionTrackingSonicImage.png'),
    videoUrl: assetPath('assets/videos/MotionTrackingSonic.mp4'),
    tools: ['After Effects'],
  },
  {
    title: 'Cortometraje Experimental - "Synapse"',
    category: 'Experimental',
    description: 'Un proyecto personal que explora la narrativa visual a través de efectos visuales abstractos y sonido.',
    imageUrl: 'https://picsum.photos/seed/synapse/600/400',
    videoUrl: assetPath('assets/videos/synapse.mp4'),
    tools: ['After Effects', 'FL Studio', 'Blender'],
  }
];

export const STUDIES_DATA: Study[] = [
  {
    degree: 'Técnico en Contenidos Digitales',
    institution: 'Certificado por SENA',
    year: '2025 (Previsto)',
    description: 'Formación técnica para la creación y gestión de contenidos en plataformas digitales.',
  },
   {
    degree: 'Certificado en Audiovisuales',
    institution: 'Universidad de Antioquia',
    year: '2025 (Previsto)',
    description: 'Énfasis en documental, formalizando conocimientos técnicos y narrativos para contar historias impactantes.',
  },
  {
    degree: 'Inmersión en Producción Musical',
    institution: 'Formación Autodidacta en FL Studio',
    year: '2024',
    description: 'Inicio del aprendizaje en producción musical, enfocándome en mezcla y masterización para complementar mis habilidades audiovisuales.',
  },
  {
    degree: 'Inicio de Aprendizaje Autodidacta',
    institution: 'Plataformas Online y Proyectos Personales',
    year: '2022',
    description: 'Comienzo de mi formación en edición de video, post-producción y diseño gráfico a través de cursos, tutoriales y práctica constante.',
  },
];