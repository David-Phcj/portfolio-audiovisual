
import React from 'react';
import SectionTitle from './SectionTitle';

const About: React.FC = () => {
  return (
    <section id="about" className="container mx-auto">
      <SectionTitle title="Sobre Mí" subtitle="Mi Pasión, Mi Profesión" sectionId="about" />
      <div className="mt-12 grid md:grid-cols-5 gap-12 items-start">
        <div className="md:col-span-2">
            <img 
                src={`${import.meta.env.BASE_URL || '/portfolio-audiovisual/'}assets/profile.jpeg`}
                alt="Retrato de Alejandro Osorno Sanchez" 
                className="rounded-lg shadow-2xl shadow-cyan-500/10 object-cover aspect-square"
            />
            <div className="mt-6 bg-slate-800/50 border border-slate-700/50 rounded-lg p-4 text-slate-300">
                <div className="space-y-3">
                    <div className="flex items-center">
                        <svg xmlns="http://www.w.org/2000/svg" className="h-6 w-6 mr-3 text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                        <div>
                            <p className="text-sm font-bold text-white">Alejandro Osorno Sanchez</p>
                        </div>
                    </div>
                    <div className="flex items-center">
                         <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"></rect><polyline points="22,6 12,13 2,6"></polyline></svg>
                        <div>
                            <a href="mailto:alejandro.osorno.edit@gmail.com" className="text-sm font-semibold hover:text-cyan-400 transition-colors">alejandro.osorno.edit@gmail.com</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="md:col-span-3 text-slate-400 space-y-4 text-base md:text-lg leading-relaxed">
          <p>
            Soy un joven técnico en contenidos digitales con una sólida experiencia en edición audiovisual desde 2022. Me he formado de manera autodidacta y he desarrollado un dominio profundo de los programas de edición, así como una comprensión clara de la estructura de la línea de tiempo, la composición y los principios de montaje.
          </p>
          <p>
            Mi pasión por las artes audiovisuales me permite adaptarme a diversos estilos: he creado videos para redes sociales (TikTok, Instagram, YouTube), participado en comerciales para microempresas, así como en vídeos explicativos y documentales.
          </p>
          <p>
            Mi enfoque combina <span className="text-cyan-400 font-semibold">creatividad técnica</span> con una <span className="text-cyan-400 font-semibold">sensibilidad narrativa</span>. Me motiva transformar ideas en historias visuales y entregar contenido pulido que comunique con claridad y fuerza. Estoy siempre dispuesto a aprender, experimentar y colaborar en proyectos que requieran profesionalismo, versatilidad y pasión por la imagen.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;