import React, { ReactNode, useState, useEffect, useRef } from 'react';
import { 
  ChevronRight, ChevronLeft, Maximize, Minimize, Keyboard, X, MousePointer2, 
  Sparkles, Home, Target, Users, Info, GraduationCap, CheckCircle2, Compass,
  BrainCircuit, Layers, Zap, ClipboardCheck, Heart
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { SLIDES } from '../constants';

interface SlideLayoutProps {
  children: ReactNode;
  currentSlide: number;
  totalSlides: number;
  onNext: () => void;
  onPrev: () => void;
  onJumpToSlide: (index: number) => void;
  title?: string;
  subtitle?: string;
  direction?: number;
}

export const SlideLayout: React.FC<SlideLayoutProps> = ({ 
  children, 
  currentSlide, 
  totalSlides, 
  onNext, 
  onPrev,
  onJumpToSlide,
  title,
  subtitle,
  direction = 0
}) => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showShortcuts, setShowShortcuts] = useState(true);
  const [showIndex, setShowIndex] = useState(false);
  const [showTouchHint, setShowTouchHint] = useState(false);
  
  // Swipe Logic
  const touchStart = useRef<number | null>(null);
  const touchEnd = useRef<number | null>(null);
  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    touchEnd.current = null;
    touchStart.current = e.targetTouches[0].clientX;
  };

  const onTouchMove = (e: React.TouchEvent) => {
    touchEnd.current = e.targetTouches[0].clientX;
  };

  const onTouchEnd = () => {
    if (!touchStart.current || !touchEnd.current) return;
    const distance = touchStart.current - touchEnd.current;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe && currentSlide < totalSlides - 1) {
        onNext();
    }
    if (isRightSwipe && currentSlide > 0) {
        onPrev();
    }
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
        setIsFullscreen(false);
      }
    }
  };

  // Wake Lock Logic
  const wakeLock = useRef<any>(null);

  useEffect(() => {
    const requestWakeLock = async () => {
      try {
        if ('wakeLock' in navigator) {
          wakeLock.current = await (navigator as any).wakeLock.request('screen');
        }
      } catch (err: any) {
        console.error(`${err.name}, ${err.message}`);
      }
    };

    const releaseWakeLock = () => {
      if (wakeLock.current !== null) {
        wakeLock.current.release();
        wakeLock.current = null;
      }
    };

    if (isFullscreen) {
      requestWakeLock();
    } else {
      releaseWakeLock();
    }

    return () => releaseWakeLock();
  }, [isFullscreen]);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    
    // Hide shortcuts toast after 4 seconds
    const timer = setTimeout(() => setShowShortcuts(false), 4000);

    // Show touch hint on mobile
    if ('ontouchstart' in window) {
      const hintTimer = setTimeout(() => setShowTouchHint(true), 2000);
      const hideHintTimer = setTimeout(() => setShowTouchHint(false), 6000);
      return () => {
        clearTimeout(timer);
        clearTimeout(hintTimer);
        clearTimeout(hideHintTimer);
      }
    }

    return () => {
        document.removeEventListener('fullscreenchange', handleFullscreenChange);
        clearTimeout(timer);
    }
  }, []);

  // Animation Variants
  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
      filter: 'blur(8px)',
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      filter: 'blur(0px)',
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 100 : -100,
      opacity: 0,
      filter: 'blur(8px)',
    }),
  };

  return (
    <div 
        className="h-screen w-full flex flex-col relative bg-[#f0f4f8] text-slate-900 overflow-hidden selection:bg-indigo-200 selection:text-indigo-900 print:h-auto print:overflow-visible"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
    >
      {/* --- AURORA BACKGROUND --- */}
      <div className="absolute inset-0 w-full h-full bg-[#f8fafc] overflow-hidden -z-10 print:hidden bg-mesh-indigo">
          {/* Noise Texture Overlay */}
          <div className="absolute inset-0 bg-noise z-10"></div>
          
          {/* Animated Blobs */}
          <div className="absolute top-0 -left-4 w-96 h-96 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
          <div className="absolute top-0 -right-4 w-96 h-96 bg-emerald-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-96 h-96 bg-rose-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animation-delay-4000"></div>
          
          {/* Large Static Gradients for depth */}
          <div className="absolute top-[-10%] right-[-10%] w-[80vw] h-[80vw] bg-gradient-to-b from-indigo-100/30 to-transparent rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[60vw] h-[60vw] bg-gradient-to-t from-emerald-100/30 to-transparent rounded-full blur-[100px] pointer-events-none" />
          
          {/* Grain Texture */}
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none mix-blend-overlay"></div>
      </div>

      {/* Top Progress Bar - Glowing */}
      <div className="absolute top-0 left-0 h-1.5 bg-gradient-to-r from-indigo-500 via-emerald-500 to-indigo-500 z-50 transition-all duration-700 ease-in-out shadow-[0_0_20px_rgba(99,102,241,0.6)] print:hidden" style={{ width: `${((currentSlide + 1) / totalSlides) * 100}%` }}>
          <div className="absolute top-0 right-0 h-full w-24 bg-gradient-to-r from-transparent to-white/40 blur-sm"></div>
      </div>

      {/* Header - Deep Glass */}
      <header className="flex-none px-6 py-3 md:px-10 flex justify-between items-center z-20 print:hidden h-16 md:h-24 transition-all">
        <div className="flex items-center gap-4 p-2 pr-5 rounded-2xl bg-white/40 backdrop-blur-xl border border-white/60 shadow-sm group hover:bg-white/60 transition-all">
          {/* Fyo Logo */}
          <div className="font-black text-xl md:text-3xl tracking-tighter flex items-center gap-1 pl-2">
            <span className="text-slate-900">fyo</span>
          </div>
          <div className="h-6 w-px bg-slate-300/50 mx-1"></div>
          <div className="flex flex-col leading-none">
             <span className="text-[10px] md:text-[11px] font-black tracking-[0.3em] text-indigo-900 uppercase">Programa JP</span>
             <span className="text-[9px] md:text-[10px] text-slate-500 font-black tracking-widest">2025 / 2026</span>
          </div>
        </div>
        
        <div className="flex items-center gap-3 md:gap-5">
              <button 
                onClick={() => setShowIndex(!showIndex)}
                className={`p-2.5 transition-all rounded-2xl backdrop-blur-sm border ${
                  showIndex 
                  ? 'bg-slate-900 text-white border-slate-800 shadow-xl' 
                  : 'text-slate-500 hover:text-indigo-600 hover:bg-white/60 border-transparent hover:border-white/60'
                }`}
                title="Índice de diapositivas"
              >
                <Sparkles size={22} className={showIndex ? 'animate-pulse' : ''} />
              </button>
            <button 
              onClick={toggleFullscreen}
              className="p-2.5 text-slate-500 hover:text-indigo-600 transition-all rounded-2xl hover:bg-white/40 backdrop-blur-sm border border-transparent hover:border-white/40"
              title={isFullscreen ? "Salir de pantalla completa" : "Pantalla completa"}
            >
              {isFullscreen ? <Minimize size={22} /> : <Maximize size={22} />}
            </button>
             <span className="text-slate-900 font-black text-xs md:text-sm bg-white/40 backdrop-blur-md border border-white/60 px-4 py-2 rounded-2xl shadow-sm tracking-widest">{currentSlide + 1} <span className="text-slate-400 mx-1">/</span> {totalSlides}</span>
        </div>
      </header>

      {/* Content Area - Optimized Spacing */}
      <main className="flex-1 w-full max-w-[1440px] mx-auto px-6 md:px-16 pt-16 md:pt-20 relative z-10 flex flex-col justify-center print:block print:max-w-none print:px-0 min-h-0">
        <AnimatePresence mode="wait" custom={direction}>
            <motion.div
                key={currentSlide}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                    x: { type: "spring", stiffness: 200, damping: 25 },
                    opacity: { duration: 0.3 }
                }}
                className="w-full h-full flex flex-col justify-center"
            >
                {title && (
                    <motion.div 
                        initial={{ opacity: 0, y: -20, filter: 'blur(5px)' }}
                        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                        transition={{ delay: 0.1, duration: 0.6 }}
                        className="mb-4 md:mb-8 print:mb-4 shrink-0"
                    >
                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tighter leading-[0.95] drop-shadow-sm font-display">
                        {title}
                        </h1>
                        {subtitle && (
                            <div className="flex items-center gap-3 mt-2">
                                <div className="h-0.5 w-6 bg-indigo-500 rounded-full"></div>
                                <p className="text-slate-500 text-base md:text-lg font-bold tracking-tight">
                                    {subtitle}
                                </p>
                            </div>
                        )}
                    </motion.div>
                )}
                <div className="w-full h-full flex flex-col justify-center print:block overflow-y-auto md:overflow-visible py-2 custom-scrollbar">
                    {children}
                </div>
            </motion.div>
        </AnimatePresence>
      </main>

      {/* Index Sidebar - Deep Glass Overlay */}
      <AnimatePresence>
        {showIndex && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowIndex(false)}
              className="absolute inset-0 bg-slate-900/20 backdrop-blur-sm z-[60] print:hidden"
            />
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute top-0 right-0 h-full w-full max-w-sm bg-white/80 backdrop-blur-2xl border-l border-white/40 z-[70] shadow-2xl flex flex-col print:hidden"
            >
              <div className="p-6 flex justify-between items-center border-b border-slate-100">
                <h2 className="text-xl font-black tracking-tight text-slate-900">Índice</h2>
                <button onClick={() => setShowIndex(false)} className="p-2 hover:bg-slate-100 rounded-full transition-colors">
                  <X size={20} />
                </button>
              </div>
              <div className="flex-1 overflow-y-auto p-4 space-y-2 custom-scrollbar">
                {SLIDES.map((slide, idx) => {
                  const isCurrent = idx === currentSlide;
                  // Map slide types/ids to icons
                  const getSlideIcon = () => {
                    if (slide.type === 'cover') return Home;
                    if (slide.type === 'objectives') return Target;
                    if (slide.type === 'info') return Users;
                    if (slide.type === 'academy-split') return GraduationCap;
                    if (slide.type === 'closing') return CheckCircle2;
                    if (slide.type === 'tutor-content') {
                      // Use the icon from content if it exists in our imports
                      const iconName = slide.content?.icon;
                      if (iconName === 'Compass') return Compass;
                      if (iconName === 'Target') return Target;
                      if (iconName === 'BrainCircuit') return BrainCircuit;
                      if (iconName === 'Layers') return Layers;
                      if (iconName === 'Zap') return Zap;
                      if (iconName === 'ClipboardCheck') return ClipboardCheck;
                      if (iconName === 'Heart') return Heart;
                      if (iconName === 'Sparkles') return Sparkles;
                    }
                    return Info;
                  };
                  const Icon = getSlideIcon();

                  return (
                    <button
                      key={slide.id}
                      onClick={() => {
                        onJumpToSlide(idx);
                        setShowIndex(false);
                      }}
                      className={`w-full text-left p-3 rounded-2xl transition-all flex items-center gap-4 group ${
                        isCurrent 
                        ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-200' 
                        : 'hover:bg-indigo-50 text-slate-600'
                      }`}
                    >
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                        isCurrent ? 'bg-white/20' : 'bg-slate-100 group-hover:bg-white'
                      }`}>
                        <Icon size={18} className={isCurrent ? 'text-white' : 'text-slate-400'} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className={`text-sm font-black truncate leading-tight ${isCurrent ? 'text-white' : 'text-slate-800'}`}>
                          {slide.title || (slide.type === 'cover' ? 'Portada' : slide.type)}
                        </div>
                        <div className={`text-[10px] font-bold truncate opacity-70 ${isCurrent ? 'text-indigo-100' : 'text-slate-500'}`}>
                          {slide.subtitle || slide.type}
                        </div>
                      </div>
                      {isCurrent && (
                        <motion.div layoutId="active-indicator">
                          <Sparkles size={14} className="text-white animate-pulse" />
                        </motion.div>
                      )}
                    </button>
                  );
                })}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Touch Hint */}
      <AnimatePresence>
        {showTouchHint && (
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="absolute bottom-32 left-1/2 -translate-x-1/2 z-[55] flex flex-col items-center gap-2 pointer-events-none print:hidden"
          >
            <div className="flex items-center gap-4">
              <motion.div 
                animate={{ x: [-20, 20, -20] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="p-3 bg-white/40 backdrop-blur-md border border-white/60 rounded-full shadow-lg"
              >
                <MousePointer2 size={24} className="text-indigo-500 rotate-90" />
              </motion.div>
            </div>
            <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 bg-white/40 backdrop-blur-sm px-3 py-1 rounded-full">Desliza para navegar</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Shortcuts Toast - Deep Glass */}
      <AnimatePresence>
        {showShortcuts && (
            <motion.div 
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                className="absolute bottom-24 right-8 z-50 bg-slate-900/80 text-white px-5 py-3 rounded-2xl shadow-2xl shadow-slate-900/20 flex items-center gap-4 backdrop-blur-xl border border-white/10 pointer-events-none print:hidden"
            >
                <Keyboard size={20} className="text-indigo-400" />
                <div className="text-sm font-medium tracking-wide">
                    Usa <span className="font-mono bg-white/10 border border-white/20 px-2 py-0.5 rounded text-xs mx-1">←</span> <span className="font-mono bg-white/10 border border-white/20 px-2 py-0.5 rounded text-xs mx-1">→</span> para navegar
                </div>
            </motion.div>
        )}
      </AnimatePresence>

      {/* Footer / Navigation Controls */}
      <footer className="flex-none px-6 py-4 md:px-10 md:py-8 flex justify-between items-center z-20 print:hidden h-24">
        {/* Pagination Dots */}
        <div className="flex gap-2.5">
            {Array.from({ length: totalSlides }).map((_, idx) => (
                <button 
                    key={idx}
                    onClick={() => onJumpToSlide(idx)}
                    className={`h-2 rounded-full transition-all duration-500 ease-out
                        ${idx === currentSlide 
                            ? 'w-12 bg-indigo-600 shadow-[0_0_15px_rgba(99,102,241,0.6)]' 
                            : 'w-2 bg-slate-300 hover:bg-indigo-300'}`}
                />
            ))}
        </div>

        {/* Navigation Buttons - Glass & Glow */}
        <div className="flex items-center gap-5">
            <button 
            onClick={onPrev}
            disabled={currentSlide === 0}
            className="group p-5 rounded-full border border-white/60 bg-white/40 backdrop-blur-md hover:bg-white hover:border-white disabled:opacity-30 disabled:hover:bg-transparent transition-all shadow-sm active:scale-90"
            >
            <ChevronLeft size={24} className="text-slate-600 group-hover:text-indigo-600 transition-colors" />
            </button>

            <button 
            onClick={onNext}
            disabled={currentSlide === totalSlides - 1}
            className="group p-5 rounded-full border border-indigo-400/50 bg-indigo-600 backdrop-blur-md hover:bg-indigo-700 hover:border-indigo-700 disabled:opacity-30 disabled:hover:bg-transparent transition-all shadow-xl shadow-indigo-200 hover:shadow-indigo-300 active:scale-90"
            >
            <ChevronRight size={24} className="text-white transition-colors" />
            </button>
        </div>
      </footer>
    </div>
  );
};