
import React from 'react';
import SectionTitle from './SectionTitle';

const SocialLink: React.FC<{ href: string; icon: React.ReactNode; label: string }> = ({ href, icon, label }) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="p-3 bg-slate-800/50 border border-slate-700 rounded-full text-slate-400 hover:text-cyan-400 hover:border-cyan-500 transition-all duration-300 transform hover:scale-110"
    >
      {icon}
    </a>
  );

const Contact: React.FC = () => {
    const MailIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"></rect><polyline points="22,6 12,13 2,6"></polyline></svg>;
    const InstagramIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>;

  return (
    <section id="contact" className="container mx-auto text-center py-24">
      <SectionTitle title="Contacto" subtitle="¿Listo para Crear Algo Increíble?" sectionId="contact" />
      <p className="mt-8 max-w-2xl mx-auto text-lg text-slate-400">
        Estoy abierto a nuevas oportunidades y colaboraciones. Si tienes un proyecto en mente o simplemente quieres saludar, no dudes en contactarme.
      </p>
      <div className="mt-12 flex justify-center items-center gap-6">
        <SocialLink href="mailto:alejandro.osorno.edit@gmail.com" label="Enviar un correo" icon={<MailIcon />} />
        <SocialLink href="https://www.instagram.com/alejandro16_osorno/" label="Visitar Instagram" icon={<InstagramIcon />} />
      </div>
    </section>
  );
};

export default Contact;
