
import React, { useRef, useState } from 'react';
import SectionTitle from './SectionTitle';

interface AudioPlayerProps {
  title: string;
  audioUrl: string;
  description: string;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ title, audioUrl, description }) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (audioRef.current) {
      audioRef.current.currentTime = parseFloat(e.target.value);
      setCurrentTime(parseFloat(e.target.value));
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="bg-slate-900/60 p-4 sm:p-5 md:p-6 rounded-lg border border-slate-700/50">
      <h4 className="text-base sm:text-lg font-bold text-white mb-1 sm:mb-2">{title}</h4>
      <p className="text-xs sm:text-sm text-slate-400 mb-3 sm:mb-4">{description}</p>
      <div className="space-y-3 sm:space-y-4">
        <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
          <button
            onClick={togglePlay}
            className="bg-cyan-500 hover:bg-cyan-600 text-white rounded-full p-2 sm:p-2.5 md:p-3 transition-colors duration-200 flex-shrink-0"
            aria-label={isPlaying ? 'Pausar' : 'Reproducir'}
          >
            {isPlaying ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            )}
          </button>
          <div className="flex-1 min-w-0">
            <input
              type="range"
              min="0"
              max={duration || 0}
              value={currentTime}
              onChange={handleSeek}
              className="w-full h-1.5 sm:h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-cyan-500"
            />
            <div className="flex justify-between text-xs text-slate-400 mt-0.5 sm:mt-1">
              <span className="text-xs">{formatTime(currentTime)}</span>
              <span className="text-xs">{formatTime(duration)}</span>
            </div>
          </div>
        </div>
        <audio
          ref={audioRef}
          src={audioUrl}
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleLoadedMetadata}
          onEnded={() => setIsPlaying(false)}
        />
      </div>
    </div>
  );
};

const MusicProduction: React.FC = () => {
    const SlidersIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12 text-cyan-400">
            <line x1="4" y1="21" x2="4" y2="14"></line><line x1="4" y1="10" x2="4" y2="3"></line>
            <line x1="12" y1="21" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="3"></line>
            <line x1="20" y1="21" x2="20" y2="16"></line><line x1="20" y1="12" x2="20" y2="3"></line>
            <line x1="1" y1="14" x2="7" y2="14"></line><line x1="9" y1="8" x2="15" y2="8"></line>
            <line x1="17" y1="16" x2="23" y2="16"></line>
        </svg>
    );

    const WaveformIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12 text-cyan-400">
            <path d="M2 13.1a1 1 0 0 0-1 1v.4a1 1 0 0 0 1 1h2.2a1 1 0 0 0 1-1v-1.8a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1.1V13Z" />
            <path d="M6.9 9.3a1 1 0 0 0-1 1v5.8a1 1 0 0 0 1 1h2.2a1 1 0 0 0 1-1V9.3a1 1 0 0 0-1-1H7.9a1 1 0 0 0-1 1v.4Z" />
            <path d="M11.8 7.5a1 1 0 0 0-1 1v9.4a1 1 0 0 0 1 1h2.2a1 1 0 0 0 1-1V7.5a1 1 0 0 0-1-1h-1.2a1 1 0 0 0-1 1v.4Z" />
            <path d="M16.7 5.7a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h2.2a1 1 0 0 0 1-1V5.7a1 1 0 0 0-1-1h-1.2a1 1 0 0 0-1 1v.4Z" />
        </svg>
    );
  
  return (
    <section id="music" className="container mx-auto">
      <SectionTitle title="Producción Musical" subtitle="El Arte de Esculpir el Sonido" />
      <div className="mt-12 p-4 sm:p-6 md:p-8 bg-slate-800/50 border border-slate-700/50 rounded-lg shadow-xl relative overflow-hidden">
        <div className="absolute -top-16 -right-16 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl"></div>
        
        <p className="text-center max-w-3xl mx-auto text-sm sm:text-base text-slate-400 mb-8 sm:mb-10 md:mb-12">
          Además, tengo experiencia en producción musical usando FL Studio, donde me he enfocado sobre todo en la mezcla y la masterización de canciones para llevar una producción desde su fase creativa hasta un acabado profesional.
        </p>
        
        <div className="grid md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 text-slate-400 leading-relaxed z-10 relative mb-6 sm:mb-8">
          <div className="bg-slate-900/40 p-4 sm:p-5 md:p-6 rounded-md border border-slate-700">
            <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
              <SlidersIcon/>
              <h3 className="text-xl sm:text-2xl font-bold text-white">Mezcla</h3>
            </div>
            <p className="text-sm sm:text-base">
              En la mezcla, trabajo ajustando volúmenes, ecualización, paneo y efectos para que cada pista (voces, instrumentos, beats) suene clara y equilibrada, creando un espacio sonoro cohesivo.
            </p>
          </div>
          <div className="bg-slate-900/40 p-4 sm:p-5 md:p-6 rounded-md border border-slate-700">
            <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
              <WaveformIcon/>
              <h3 className="text-xl sm:text-2xl font-bold text-white">Masterización</h3>
            </div>
            <p className="text-sm sm:text-base">
              En la masterización, doy los toques finales al tema completo: mejoro su sonoridad, controlo los picos, y preparo el audio para que suene potente y definido en diferentes plataformas de streaming.
            </p>
          </div>
        </div>

        {/* Reproductores de Audio Antes/Después */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6 z-10 relative">
          <AudioPlayer
            title="Antes"
            audioUrl="/assets/audio/antes.mp3"
            description="Audio sin procesar, antes de la mezcla y masterización."
          />
          <AudioPlayer
            title="Después"
            audioUrl="/assets/audio/despues.mp3"
            description="Audio procesado con mezcla y masterización profesional."
          />
        </div>
      </div>
    </section>
  );
};

export default MusicProduction;
