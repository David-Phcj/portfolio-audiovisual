import React from 'react';
import { SkillName } from '../types';

interface SkillIconProps extends React.SVGProps<SVGSVGElement> {
  icon: SkillName;
}

const icons: Record<SkillName, React.ReactNode> = {
  premiere: (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Adobe Premiere Pro - Morado/Púrpura #EA77FF */}
      <rect x="2" y="2" width="20" height="20" rx="2.5" fill="#EA77FF"/>
      <path d="M8 5v14l11-7z" fill="white"/>
      <rect x="2" y="3" width="4" height="18" rx="1" fill="white" opacity="0.7"/>
      <rect x="18" y="3" width="4" height="18" rx="1" fill="white" opacity="0.7"/>
    </svg>
  ),
  illustrator: (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Adobe Illustrator - Naranja #FF9A00 */}
      <rect x="2" y="2" width="20" height="20" rx="2.5" fill="#FF9A00"/>
      <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" fill="white"/>
    </svg>
  ),
  photoshop: (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Adobe Photoshop - Azul #31C5F0 */}
      <rect x="2" y="2" width="20" height="20" rx="2.5" fill="#31C5F0"/>
      <rect x="3" y="3" width="18" height="18" rx="2" fill="none" stroke="white" strokeWidth="1.5" opacity="0.8"/>
      <circle cx="9" cy="9" r="2" fill="white"/>
      <path d="M21 15l-5-5L5 21" stroke="white" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
      <rect x="14" y="6" width="4" height="4" rx="0.5" fill="white"/>
    </svg>
  ),
  aftereffects: (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Adobe After Effects - Morado #9999FF */}
      <rect x="2" y="2" width="20" height="20" rx="2.5" fill="#9999FF"/>
      <path d="M12 2L2 7v10l10 5 10-5V7L12 2z" fill="none" stroke="white" strokeWidth="1.5"/>
      <circle cx="12" cy="12" r="2" fill="white"/>
      <path d="M8 8l8 8M16 8l-8 8" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
  filmora: (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Wondershare Filmora - Azul/Cyan #00D4FF */}
      <rect x="2" y="2" width="20" height="20" rx="2.5" fill="#00D4FF"/>
      <rect x="3" y="5" width="18" height="14" rx="2" fill="none" stroke="white" strokeWidth="1.5"/>
      <rect x="6" y="8" width="12" height="8" rx="1" fill="white" opacity="0.3"/>
      <path d="M10 11l4 2.5-4 2.5V11z" fill="white"/>
      <circle cx="7" cy="7" r="0.5" fill="white"/>
      <circle cx="17" cy="7" r="0.5" fill="white"/>
      <circle cx="7" cy="17" r="0.5" fill="white"/>
      <circle cx="17" cy="17" r="0.5" fill="white"/>
    </svg>
  ),
  blender: (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Blender - Naranja #F5792A */}
      <circle cx="12" cy="12" r="10" fill="#F5792A"/>
      <path d="M12 2L2 7l10 5 10-5-10-5z" fill="none" stroke="white" strokeWidth="1.5"/>
      <path d="M2 17l10 5 10-5M2 12l10 5 10-5" stroke="white" strokeWidth="1.5"/>
      <path d="M12 2v20M2 7l10 5M22 7l-10 5" stroke="white" strokeWidth="1.5"/>
      <circle cx="12" cy="12" r="1.5" fill="white"/>
    </svg>
  ),
  flstudio: (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* FL Studio - Naranja #FF9900 */}
      <rect x="2" y="2" width="20" height="20" rx="2.5" fill="#FF9900"/>
      <path d="M9 18V5l12-2v13M9 18c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3 3 1.34 3 3zm12-3c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3 3 1.34 3 3z" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M9 5l12-2" stroke="white" strokeWidth="1.5"/>
      <circle cx="6" cy="18" r="2" fill="white"/>
      <circle cx="18" cy="15" r="2" fill="white"/>
    </svg>
  ),
  animate: (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Adobe Animate - Naranja #FF9A00 */}
      <rect x="2" y="2" width="20" height="20" rx="2.5" fill="#FF9A00"/>
      <rect x="3" y="4" width="5" height="16" rx="1" fill="white" opacity="0.6"/>
      <rect x="10" y="4" width="5" height="16" rx="1" fill="white" opacity="0.8"/>
      <rect x="17" y="4" width="4" height="16" rx="1" fill="white"/>
      <path d="M5.5 8h2M5.5 12h2M5.5 16h2" stroke="#FF9A00" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
      <path d="M12.5 8h2M12.5 12h2M12.5 16h2" stroke="#FF9A00" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
      <circle cx="19" cy="10" r="1" fill="#FF9A00"/>
      <circle cx="19" cy="14" r="1" fill="#FF9A00"/>
    </svg>
  ),
};

const SkillIcon: React.FC<SkillIconProps> = ({ icon, ...props }) => {
  return React.cloneElement(icons[icon] as React.ReactElement, props);
};

export default SkillIcon;