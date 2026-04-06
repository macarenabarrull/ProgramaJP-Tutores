
import React from 'react';
import { SlideData } from '../constants';
import { 
  CheckCircle2, Users, Calendar, GraduationCap, FileText, Flag, Heart, 
  BrainCircuit, Zap, ClipboardCheck, PencilRuler, Search, FileSignature, 
  Rocket, BarChart3, Compass, Target, Layers, Sparkles, DollarSign, Briefcase,
  Download, Trophy, Shield, Mail, RotateCcw
} from 'lucide-react';
import { motion } from "framer-motion";

interface SlideProps {
  data: SlideData;
  onPrint?: () => void;
  onDownloadPPTX?: () => void;
  onJumpToSlide?: (index: number) => void;
}

const IconMap: Record<string, any> = {
  Compass, Target, BrainCircuit, Layers, Zap, ClipboardCheck, Heart, Sparkles,
  Users, DollarSign, Briefcase, Calendar, GraduationCap, FileText, Flag,
  PencilRuler, Search, FileSignature, Rocket, BarChart3
};

// Standardized Premium Styles for Features/Icons
const featureStyles = [
    { icon: Zap, color: 'text-indigo-600', bg: 'bg-indigo-50', border: 'border-indigo-100' },
    { icon: Target, color: 'text-emerald-600', bg: 'bg-emerald-50', border: 'border-emerald-100' },
    { icon: Sparkles, color: 'text-rose-600', bg: 'bg-rose-50', border: 'border-rose-100' },
    { icon: Users, color: 'text-amber-600', bg: 'bg-amber-50', border: 'border-amber-100' },
    { icon: GraduationCap, color: 'text-purple-600', bg: 'bg-purple-50', border: 'border-purple-100' },
    { icon: BarChart3, color: 'text-blue-600', bg: 'bg-blue-50', border: 'border-blue-100' },
    { icon: Trophy, color: 'text-orange-600', bg: 'bg-orange-50', border: 'border-orange-100' },
    { icon: Shield, color: 'text-cyan-600', bg: 'bg-cyan-50', border: 'border-cyan-100' },
];

// --- Animation Variants ---
const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.1
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 30, filter: 'blur(5px)' },
    show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { type: "spring", stiffness: 200, damping: 20 } }
};

// --- Reusable Premium Components ---
const Highlight: React.FC<{ children: React.ReactNode, color?: string }> = ({ children, color = "text-indigo-600" }) => (
    <span className={`${color} font-black tracking-tight`}>{children}</span>
);

const GlowIcon: React.FC<{ icon: any, color: string, bg: string, size?: number }> = ({ icon: Icon, color, bg, size = 24 }) => (
    <div className={`relative flex items-center justify-center ${bg} ${color} rounded-2xl p-3 shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:rotate-3`}>
        <div className={`absolute inset-0 ${bg} blur-xl opacity-40 rounded-full -z-10 animate-pulse`} />
        <Icon size={size} />
    </div>
);

// --- Reusable "Deep Glass" Card Component ---
const GlassCard: React.FC<{ children?: React.ReactNode, className?: string, hover?: boolean }> = ({ children, className = "", hover = false }) => (
    <div className={`
        bg-white/40 backdrop-blur-2xl backdrop-saturate-150 
        border border-white/60 rounded-2xl md:rounded-3xl
        shadow-[0_8px_32px_0_rgba(99,102,241,0.03)]
        relative overflow-hidden
        before:absolute before:inset-0 before:rounded-[inherit] before:p-[1px] before:bg-gradient-to-br before:from-white/80 before:to-transparent before:-z-10
        ${hover ? 'transition-all duration-500 hover:bg-white/60 hover:scale-[1.01] hover:shadow-[0_20px_50px_-12px_rgba(99,102,241,0.15)] hover:border-white/80' : ''}
        ${className}
    `}>
        {children}
    </div>
);

// 1. Cover Slide - Immersive Redesign
export const CoverSlide: React.FC<SlideProps> = ({ data }) => {
  return (
    <motion.div 
        className="flex flex-col justify-center items-center h-full text-center relative z-10"
        initial="hidden" animate="show" variants={containerVariants}
    >
      <motion.div variants={itemVariants} className="mb-8 relative">
        <div className="absolute inset-0 bg-indigo-500/20 blur-3xl rounded-full scale-150 -z-10 animate-pulse" />
        <GlassCard className="p-10 md:p-16 flex flex-col items-center max-w-5xl border-white/80 shadow-2xl relative">
            {/* Mesh Gradient inside card */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-emerald-500 to-indigo-500" />
            
            <motion.div variants={itemVariants} className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-indigo-200/50 bg-white/60 backdrop-blur-md text-indigo-700 text-[10px] md:text-xs font-black tracking-[0.3em] uppercase mb-8 shadow-sm">
                <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                </span>
                @fyoonline
            </motion.div>
            
            <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter text-slate-900 mb-6 leading-[1.1] drop-shadow-sm font-display">
                PROGRAMA<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-emerald-500 to-indigo-600 animate-gradient-x">JP 25-26</span>
            </motion.h1>
            
            <motion.p variants={itemVariants} className="text-base md:text-lg lg:text-xl text-slate-500 font-bold max-w-2xl leading-relaxed tracking-tight mb-10">
                {data.subtitle}
            </motion.p>
            
            <motion.div variants={containerVariants} className="flex flex-wrap justify-center gap-3 w-full">
                {data.content.tags.map((tag: string, idx: number) => (
                <motion.div variants={itemVariants} key={idx} className="flex items-center gap-3 px-5 py-2.5 bg-white/60 border border-white/80 rounded-2xl hover:bg-white transition-all shadow-sm backdrop-blur-sm group cursor-default">
                    <div className="h-2 w-2 rounded-full bg-indigo-300 group-hover:bg-indigo-500 transition-colors shadow-[0_0_8px_rgba(99,102,241,0.4)]" />
                    <span className="text-slate-600 font-black group-hover:text-slate-900 text-xs md:text-sm tracking-wide">{tag}</span>
                </motion.div>
                ))}
            </motion.div>
        </GlassCard>
      </motion.div>
    </motion.div>
  );
};

// 2. Objectives Slide - Clean & Spaced Redesign
export const ObjectivesSlide: React.FC<SlideProps> = ({ data }) => {
  return (
    <motion.div className="h-full flex flex-col justify-center py-4 max-w-6xl mx-auto" initial="hidden" animate="show" variants={containerVariants}>
      <motion.div variants={itemVariants} className="mb-10 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 text-indigo-600 text-[10px] font-black tracking-widest uppercase mb-6 shadow-sm border border-indigo-100">
              <Target size={14} />
              Objetivo Principal
          </div>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-black text-slate-900 leading-[1.1] tracking-tight font-display">
              {data.content.mainGoal.split("10 Jóvenes Profesionales")[0]}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-emerald-600 uppercase">10 JÓVENES PROFESIONALES</span>
              {data.content.mainGoal.split("10 Jóvenes Profesionales")[1]}
          </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {data.content.stats.map((stat: any, idx: number) => {
            const Icon = IconMap[stat.icon] || Users;
            const colors = [
                { text: 'text-emerald-600', bg: 'bg-emerald-50', border: 'border-emerald-100', shadow: 'shadow-emerald-100' },
                { text: 'text-blue-600', bg: 'bg-blue-50', border: 'border-blue-100', shadow: 'shadow-blue-100' },
                { text: 'text-purple-600', bg: 'bg-purple-50', border: 'border-purple-100', shadow: 'shadow-purple-100' }
            ];
            const style = colors[idx % colors.length];

            return (
                <motion.div variants={itemVariants} key={idx}>
                    <GlassCard hover className={`p-8 flex flex-col items-center text-center border-b-8 ${style.border.replace('border', 'border-b')}`}>
                        <div className="mb-6">
                            <GlowIcon icon={Icon} color={style.text} bg={style.bg} size={32} />
                        </div>
                        <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-2">{stat.label}</h3>
                        <div className={`text-4xl font-black tracking-tighter ${style.text}`}>
                            {stat.value.split(" ")[0]}
                            <span className="text-lg font-bold ml-2 text-slate-400">JP</span>
                        </div>
                    </GlassCard>
                </motion.div>
            )
        })}
      </div>

      <motion.div variants={itemVariants} className="mt-10 flex flex-wrap justify-center gap-4">
          {data.content.pillars.map((pillar: string, idx: number) => (
              <div key={idx} className="flex items-center gap-3 px-6 py-3 rounded-2xl bg-white/60 border border-white/80 shadow-sm">
                  <CheckCircle2 size={18} className="text-indigo-500" />
                  <span className="text-slate-700 font-black text-sm uppercase tracking-wider">{pillar}</span>
              </div>
          ))}
      </motion.div>
    </motion.div>
  );
};


// 3. Info Slide (Redesigned Right Column) + 7. Info Slide (Redesigned Stats)
export const InfoSlide: React.FC<SlideProps> = ({ data }) => {
  // Slide 7 Styles (Stats/Areas)
  const statStyles = [
    { color: 'text-indigo-600', bg: 'bg-indigo-100', border: 'border-indigo-200', ring: 'ring-indigo-50' },
    { color: 'text-emerald-600', bg: 'bg-emerald-100', border: 'border-emerald-200', ring: 'ring-emerald-50' },
    { color: 'text-rose-600', bg: 'bg-rose-100', border: 'border-rose-200', ring: 'ring-rose-50' },
    { color: 'text-indigo-600', bg: 'bg-indigo-100', border: 'border-indigo-200', ring: 'ring-indigo-50' },
    { color: 'text-emerald-600', bg: 'bg-emerald-100', border: 'border-emerald-200', ring: 'ring-emerald-50' },
  ];

  return (
    <motion.div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 h-full items-center py-2" initial="hidden" animate="show" variants={containerVariants}>
      <div className="lg:col-span-7 space-y-4 md:space-y-6">
        <motion.p variants={itemVariants} className="text-base md:text-lg lg:text-xl text-slate-800 font-bold leading-relaxed tracking-tight">
          <Highlight>fyo</Highlight> es una compañía líder en el ecosistema de agronegocios, y este programa busca <Highlight color="text-emerald-600">potenciar el talento joven</Highlight> para liderar el futuro de la industria.
        </motion.p>
        
        {data.content.bullets && (
            <motion.div variants={containerVariants} className="space-y-2.5">
                {data.content.bullets.map((item: string, idx: number) => (
                    <motion.div variants={itemVariants} key={idx} className="flex items-start gap-3 p-3 rounded-2xl bg-white/40 border border-white/60 hover:bg-white hover:shadow-sm transition-all group">
                        <div className="mt-1 p-1 bg-indigo-50 rounded-full group-hover:bg-indigo-100 transition-colors shadow-sm">
                             <CheckCircle2 className="text-indigo-500 shrink-0" size={16} />
                        </div>
                        <span className="text-slate-700 text-sm md:text-base font-bold group-hover:text-slate-900 transition-colors">{item}</span>
                    </motion.div>
                ))}
            </motion.div>
        )}
      </div>

      {/* Redesigned Right Column */}
      <motion.div variants={containerVariants} className="lg:col-span-5 flex flex-col gap-4">
        {data.content.stats && (
            <div className="grid gap-3">
                {data.content.stats.map((stat: any, idx: number) => {
                    const Icon = IconMap[stat.icon] || Users;
                    const style = statStyles[idx % statStyles.length];
                    return (
                        <motion.div variants={itemVariants} key={`stat-${idx}`}>
                            <div className="p-3.5 rounded-2xl bg-white/60 border border-white/80 flex items-center justify-between group hover:scale-[1.02] transition-all duration-300 shadow-sm hover:shadow-md backdrop-blur-md">
                                <div className="flex flex-col">
                                    <span className="text-[9px] font-black text-slate-400 uppercase tracking-[0.2em] mb-1">{stat.label}</span>
                                    <span className={`text-base md:text-lg font-black ${style.color} leading-tight`}>
                                        {stat.value}
                                    </span>
                                </div>
                                <GlowIcon icon={Icon} color={style.color} bg={style.bg} size={20} />
                            </div>
                        </motion.div>
                    )
                })}
            </div>
        )}

        {/* Slide 3: The 4 Value Props - Premium Cards VERTICAL STACK LARGER */}
        {data.content.valueProp && (
             <motion.div variants={containerVariants} className="flex flex-col gap-5">
                {data.content.valueProp.map((vp: any, idx: number) => {
                    const style = featureStyles[idx % featureStyles.length];
                    const Icon = style.icon;
                    return (
                        <motion.div variants={itemVariants} key={idx} className="w-full">
                            {/* Larger padding (p-5), larger spacing to make them 'agrandados' */}
                            <div className={`
                                w-full p-5 rounded-2xl border ${style.border} bg-white/40 backdrop-blur-md 
                                flex items-center gap-4 group hover:scale-[1.02] transition-all duration-300 shadow-sm hover:shadow-md
                            `}>
                                <div className={`w-12 h-12 shrink-0 rounded-full ${style.bg} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                                    <GlowIcon icon={Icon} color={style.color} bg={style.bg} size={24} />
                                </div>
                                <div>
                                     <span className={`block font-black text-lg ${style.color}`}>{vp.title}</span>
                                     <span className="text-slate-500 text-xs md:text-sm font-medium leading-snug block">{vp.text}</span>
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
             </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
};


// 5. Grid Slide - Refined Glass & Colors
export const GridSlide: React.FC<SlideProps> = ({ data }) => {
  const gridStyles = [
    { color: 'text-amber-600', bg: 'bg-amber-50', border: 'border-amber-100', iconBg: 'bg-amber-100' }, // Mañana
    { color: 'text-blue-600', bg: 'bg-blue-50', border: 'border-blue-100', iconBg: 'bg-blue-100' }, // Almuerzo
    { color: 'text-purple-600', bg: 'bg-purple-50', border: 'border-purple-100', iconBg: 'bg-purple-100' }, // Tarde
    { color: 'text-emerald-600', bg: 'bg-emerald-50', border: 'border-emerald-100', iconBg: 'bg-emerald-100' }, // Mentores
  ];

  return (
    <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 py-2" initial="hidden" animate="show" variants={containerVariants}>
      {data.content.items.map((item: any, idx: number) => {
        const Icon = IconMap[item.icon] || Users;
        const style = gridStyles[idx % gridStyles.length];

        return (
            <motion.div variants={itemVariants} key={idx}>
                <div className={`
                    relative p-6 rounded-3xl overflow-hidden group h-full
                    bg-white/40 backdrop-blur-xl border ${style.border}
                    hover:bg-white/60 transition-all duration-300 hover:shadow-xl hover:shadow-purple-900/5
                `}>
                    {/* Background Soft Blob */}
                    <div className={`absolute -right-12 -top-12 w-48 h-48 ${style.iconBg} rounded-full blur-3xl opacity-50 group-hover:scale-125 transition-transform duration-700`} />
                    
                    <div className="relative z-10 flex flex-col h-full items-start">
                        <div className={`w-12 h-12 rounded-2xl ${style.bg} border ${style.border} flex items-center justify-center mb-4 ${style.color} shadow-sm group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                            <Icon size={24} />
                        </div>
                        <h3 className="text-lg font-black text-slate-900 mb-2 tracking-tight">{item.title}</h3>
                        <p className="text-slate-600 text-xs md:text-sm font-bold leading-relaxed">{item.desc}</p>
                    </div>
                </div>
            </motion.div>
        );
      })}
    </motion.div>
  );
};

// 6. Table Slide (Granos) - Centered and Balanced
export const TableGranosSlide: React.FC<SlideProps> = () => {
  const months = ['Mes 1', 'Mes 2', 'Mes 3', 'Mes 4', 'Mes 5'];
  const areas = ['Insumos', 'Análisis', 'Consultoría', 'Logística', 'Intel. y Des. Com.'];
  const matrix = [
    [1, 2, 3, 4, null],
    [null, 1, 2, 3, 4],
    [4, null, 1, 2, 3],
    [3, 4, null, 1, 2],
    [2, 3, 4, null, 1],
  ];

  return (
    <motion.div className="w-full flex flex-col items-center justify-center py-4" initial="hidden" animate="show" variants={containerVariants}>
      <motion.div variants={itemVariants} className="w-full max-w-5xl">
        <GlassCard className="overflow-hidden border-indigo-100/50 shadow-2xl">
            <table className="w-full text-left border-collapse">
            <thead>
                <tr className="bg-indigo-50/50">
                <th className="p-4 md:p-6 text-slate-400 font-black text-[10px] uppercase tracking-[0.2em] border-b border-indigo-100">Período</th>
                {areas.map((area, i) => (
                    <th key={i} className="p-4 md:p-6 text-indigo-700 font-black text-[10px] md:text-xs border-b border-indigo-100 border-l border-indigo-50/50 text-center tracking-tight uppercase">{area}</th>
                ))}
                </tr>
            </thead>
            <tbody>
                {months.map((month, rowIndex) => (
                <tr key={rowIndex} className="hover:bg-white/30 transition-colors group">
                    <td className="p-4 md:p-6 font-mono text-slate-500 text-xs md:text-sm border-b border-indigo-50/50 bg-indigo-50/10 group-hover:text-indigo-600 font-black">{month}</td>
                    {matrix[rowIndex].map((group, colIndex) => (
                    <td key={colIndex} className="p-2 md:p-4 border-b border-indigo-50/50 border-l border-indigo-50/50 text-center relative">
                        {group ? (
                        <div className={`mx-auto w-8 h-8 md:w-10 md:h-10 rounded-xl flex items-center justify-center text-xs md:text-sm font-black shadow-lg transition-all hover:scale-110 hover:-translate-y-1 text-white border border-white/20
                            ${group === 1 ? 'bg-indigo-500 shadow-indigo-500/30' : ''}
                            ${group === 2 ? 'bg-emerald-500 shadow-emerald-500/30' : ''}
                            ${group === 3 ? 'bg-indigo-600 shadow-indigo-600/30' : ''}
                            ${group === 4 ? 'bg-rose-500 shadow-rose-500/30' : ''}
                        `}>
                            G{group}
                        </div>
                        ) : (
                        <div className="w-1.5 h-1.5 bg-indigo-100 rounded-full mx-auto" />
                        )}
                    </td>
                    ))}
                </tr>
                ))}
            </tbody>
            </table>
        </GlassCard>
      </motion.div>
      
      <motion.div variants={itemVariants} className="mt-8 flex flex-wrap gap-6 justify-center">
          <LegendItem color="bg-indigo-500" label="Grupo 1 (JP 1-2)" />
          <LegendItem color="bg-emerald-500" label="Grupo 2 (JP 3-4)" />
          <LegendItem color="bg-indigo-600" label="Grupo 3 (JP 5-6)" />
          <LegendItem color="bg-rose-500" label="Grupo 4 (JP 7-8)" />
      </motion.div>
    </motion.div>
  );
};

const LegendItem = ({ color, label }: { color: string, label: string }) => (
    <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-white/40 border border-white/50 shadow-sm backdrop-blur-sm">
        <span className={`w-3 h-3 rounded-full ${color} shadow-[0_0_8px_currentColor]`}></span>
        <span className="text-slate-600 text-xs font-bold uppercase tracking-wide">{label}</span>
    </div>
)

// 7. Table Slide (Capital)
export const TableCapitalSlide: React.FC<SlideProps> = () => {
    const data = [
        { month: '1', jp1: 'Finanzas (FP)', jp2: 'BackOffice fyoCapital', jp3: 'Análisis de Mercado', jp4: 'Operadores' },
        { month: '2', jp1: 'BackOffice fyoCapital', jp2: 'Análisis de Mercado', jp3: 'Operadores', jp4: 'Finanzas (FP)' },
        { month: '3', jp1: 'Análisis de Mercado', jp2: 'Operadores', jp3: 'Finanzas (FP)', jp4: 'BackOffice fyoCapital' },
        { month: '4', jp1: 'Operadores', jp2: 'Finanzas (FP)', jp3: 'BackOffice fyoCapital', jp4: 'Análisis de Mercado' },
    ];

    return (
        <motion.div className="w-full flex flex-col items-center justify-center py-4" initial="hidden" animate="show" variants={containerVariants}>
            <motion.div variants={itemVariants} className="w-full max-w-5xl">
                <GlassCard className="overflow-hidden border-indigo-100/50 shadow-2xl relative">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-emerald-500 to-indigo-500 opacity-50" />
                    <div className="grid grid-cols-5 bg-indigo-50/30 backdrop-blur-md border-b border-indigo-100 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] font-display">
                        <div className="p-4 md:p-6">Mes</div>
                        <div className="p-4 md:p-6 text-indigo-600 text-center">JP 1</div>
                        <div className="p-4 md:p-6 text-indigo-600 text-center">JP 2</div>
                        <div className="p-4 md:p-6 text-indigo-600 text-center">JP 3</div>
                        <div className="p-4 md:p-6 text-indigo-600 text-center">JP 4</div>
                    </div>
                    {data.map((row, idx) => (
                        <div key={idx} className="grid grid-cols-5 border-b border-indigo-50/50 hover:bg-white/40 transition-all duration-300 text-xs md:text-sm group">
                            <div className="p-4 md:p-6 font-mono text-slate-500 flex items-center bg-indigo-50/10 font-black group-hover:text-indigo-700">{row.month}</div>
                            <div className="p-4 md:p-5 text-slate-700 flex items-center justify-center border-l border-indigo-50/50 text-center font-bold tracking-tight group-hover:text-indigo-900">{row.jp1}</div>
                            <div className="p-4 md:p-5 text-slate-700 flex items-center justify-center border-l border-indigo-50/50 text-center font-bold tracking-tight group-hover:text-indigo-900">{row.jp2}</div>
                            <div className="p-4 md:p-5 text-slate-700 flex items-center justify-center border-l border-indigo-50/50 text-center font-bold tracking-tight group-hover:text-indigo-900">{row.jp3}</div>
                            <div className="p-4 md:p-5 text-slate-700 flex items-center justify-center border-l border-indigo-50/50 text-center font-bold tracking-tight group-hover:text-indigo-900">{row.jp4}</div>
                        </div>
                    ))}
                </GlassCard>
            </motion.div>
            <motion.p variants={itemVariants} className="mt-8 text-center text-slate-400 text-[10px] font-black uppercase tracking-[0.3em]">Rotación Full-Time mensual por área</motion.p>
        </motion.div>
    );
};

// 8. New Mentoring Slide (Adjusted size and added "Sugerencias")
export const MentoringSplitSlide: React.FC<SlideProps> = ({ data }) => {
    return (
        <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 h-full pb-4" initial="hidden" animate="show" variants={containerVariants}>
            {/* Left Col: Lists of Mentors - Compacted for better fit */}
            <motion.div variants={containerVariants} className="flex flex-col justify-center gap-2">
                 {/* Granos */}
                 <motion.div variants={itemVariants}>
                    <GlassCard hover className="p-3 md:p-4 border-indigo-100/50">
                        <div className="flex justify-between items-center mb-2">
                            <h3 className="text-sm md:text-base font-black text-slate-900 flex items-center gap-2 tracking-tight">
                                <span className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.4)]"></span>
                                Mentores Granos
                            </h3>
                            <span className="text-[8px] md:text-[9px] font-black text-slate-400 uppercase tracking-widest bg-white/50 px-1.5 py-0.5 rounded-md border border-white/60">Sugerencias</span>
                        </div>
                        <ul className="grid grid-cols-2 gap-x-2 gap-y-1">
                            {data.content.granosMentors.map((m: string, i: number) => (
                                <li key={i} className="flex items-center gap-1.5 text-slate-700 group">
                                    <div className="h-1 w-1 rounded-full bg-slate-300 group-hover:bg-green-500 transition-colors"></div>
                                    <span className="text-sm font-bold group-hover:text-slate-900 transition-colors leading-tight truncate tracking-tight">{m}</span>
                                </li>
                            ))}
                        </ul>
                    </GlassCard>
                 </motion.div>

                 {/* Capital */}
                 <motion.div variants={itemVariants}>
                    <GlassCard hover className="p-3 md:p-4 border-indigo-100/50">
                        <div className="flex justify-between items-center mb-2">
                            <h3 className="text-sm md:text-base font-black text-slate-900 flex items-center gap-2 tracking-tight">
                                <span className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.4)]"></span>
                                Mentores fyoCapital
                            </h3>
                            <span className="text-[8px] md:text-[9px] font-black text-slate-400 uppercase tracking-widest bg-white/50 px-1.5 py-0.5 rounded-md border border-white/60">Sugerencias</span>
                        </div>
                        <ul className="grid grid-cols-2 gap-x-2 gap-y-1">
                            {data.content.capitalMentors.map((m: string, i: number) => (
                                <li key={i} className="flex items-center gap-1.5 text-slate-700 group">
                                    <div className="h-1 w-1 rounded-full bg-slate-300 group-hover:bg-blue-500 transition-colors"></div>
                                    <span className="text-sm font-bold group-hover:text-slate-900 transition-colors leading-tight truncate tracking-tight">{m}</span>
                                </li>
                            ))}
                        </ul>
                    </GlassCard>
                 </motion.div>

                 {/* Consultoria - New */}
                 <motion.div variants={itemVariants}>
                    <GlassCard hover className="p-3 md:p-4 border-indigo-100/50">
                        <div className="flex justify-between items-center mb-2">
                            <h3 className="text-base md:text-lg font-black text-slate-900 flex items-center gap-2 tracking-tight">
                                <span className="w-2 h-2 rounded-full bg-purple-500 shadow-[0_0_8px_rgba(168,85,247,0.4)]"></span>
                                Mentores Consultoría
                            </h3>
                            <span className="text-[8px] md:text-[9px] font-black text-slate-400 uppercase tracking-widest bg-white/50 px-1.5 py-0.5 rounded-md border border-white/60">Sugerencias</span>
                        </div>
                        <ul className="grid grid-cols-2 gap-x-2 gap-y-1">
                            {data.content.consultoriaMentors?.map((m: string, i: number) => (
                                <li key={i} className="flex items-center gap-1.5 text-slate-700 group">
                                    <div className="h-1 w-1 rounded-full bg-slate-300 group-hover:bg-purple-500 transition-colors"></div>
                                    <span className="text-sm font-bold group-hover:text-slate-900 transition-colors leading-tight truncate tracking-tight">{m}</span>
                                </li>
                            ))}
                        </ul>
                    </GlassCard>
                 </motion.div>
            </motion.div>

            {/* Right Col: Considerations */}
            <motion.div variants={itemVariants} className="h-full py-2">
                <div className="bg-slate-900 p-6 md:p-8 rounded-3xl border border-slate-800 flex flex-col justify-center h-full text-white relative overflow-hidden shadow-2xl group">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl -mr-12 -mt-12 pointer-events-none group-hover:scale-125 transition-transform duration-700"></div>
                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl -ml-12 -mb-12 pointer-events-none"></div>
                    
                    <div className="relative z-10">
                        <div className="mb-6 flex items-center gap-4">
                            <GlowIcon icon={Users} color="text-indigo-400" bg="bg-white/10" size={24} />
                            <h3 className="text-xl md:text-2xl font-black tracking-tight font-display">Consideraciones del Rol</h3>
                        </div>
                        
                        <p className="text-slate-400 mb-6 leading-relaxed text-base font-bold tracking-tight">
                            El rol del mentor es clave para facilitar la inmersión cultural y técnica del JP, brindando guía estratégica más allá del día a día.
                        </p>

                        <div className="flex flex-col gap-3">
                            {data.content.considerations.map((item: string, i: number) => (
                                <div key={i} className="p-3 bg-white/5 rounded-xl border border-white/5 flex items-center gap-3 hover:bg-white/10 transition-colors group">
                                    <CheckCircle2 size={20} className="text-indigo-400 group-hover:scale-110 transition-transform" />
                                    <span className="font-bold text-base tracking-tight">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

// 9. New Academy Slide - COMPLETE REDESIGN (Vertical Layout, Clean framing)
export const AcademySplitSlide: React.FC<SlideProps> = ({ data }) => {
    // If using new data structure from constants, prioritize it. 
    // Fallback to manual list if not present, but based on request we use the new content.
    const topics = data.content.topics || ['Circuitos Administrativos', 'Herramientas de Gestión'];

    return (
        <motion.div className="flex flex-col h-full gap-4 md:gap-6 justify-center max-w-6xl mx-auto py-2" initial="hidden" animate="show" variants={containerVariants}>
            
            {/* Top Cards Row */}
            <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                <motion.div variants={itemVariants}>
                    <GlassCard hover className="p-4 flex flex-row md:flex-col items-center gap-3 text-center md:justify-center border-indigo-100/50 group">
                        <GlowIcon icon={Calendar} color="text-fuchsia-600" bg="bg-fuchsia-50" size={24} />
                        <div className="text-left md:text-center">
                            <span className="text-[9px] font-black text-slate-400 uppercase tracking-[0.2em] block mb-0.5">Cuándo</span>
                            <span className="text-base md:text-lg font-black text-slate-900 tracking-tight font-display">Viernes 14-18hs</span>
                        </div>
                    </GlassCard>
                </motion.div>
                <motion.div variants={itemVariants}>
                    <GlassCard hover className="p-4 flex flex-row md:flex-col items-center gap-3 text-center md:justify-center border-indigo-100/50 group">
                        <GlowIcon icon={GraduationCap} color="text-purple-600" bg="bg-purple-50" size={24} />
                        <div className="text-left md:text-center">
                            <span className="text-[9px] font-black text-slate-400 uppercase tracking-[0.2em] block mb-0.5">Frecuencia</span>
                            <span className="text-base md:text-lg font-black text-slate-900 tracking-tight font-display">2 Módulos / Sem</span>
                        </div>
                    </GlassCard>
                </motion.div>
                <motion.div variants={itemVariants}>
                    <GlassCard hover className="p-4 flex flex-row md:flex-col items-center gap-3 text-center md:justify-center border-indigo-100/50 group">
                        <GlowIcon icon={BarChart3} color="text-indigo-600" bg="bg-indigo-50" size={24} />
                        <div className="text-left md:text-center">
                             <span className="text-[9px] font-black text-slate-400 uppercase tracking-[0.2em] block mb-0.5">Evaluación</span>
                             <span className="text-base md:text-lg font-black text-slate-900 tracking-tight font-display">Examen Mensual</span>
                        </div>
                    </GlassCard>
                </motion.div>
            </motion.div>

            {/* Bottom Content Area */}
            <motion.div variants={itemVariants} className="flex-1">
                <GlassCard className="h-full p-6 md:p-10 relative overflow-hidden flex flex-col justify-center border-indigo-100/50 shadow-2xl">
                     {/* Decor */}
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-indigo-100/40 to-transparent rounded-full -mr-20 -mt-20 pointer-events-none blur-3xl" />

                    <div className="relative z-10 w-full">
                        <div className="mb-8 border-b border-indigo-100/50 pb-6">
                            <h3 className="text-3xl md:text-4xl font-black text-slate-900 mb-3 tracking-tighter font-display">Contenidos del Programa</h3>
                             <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-bold tracking-tight max-w-4xl">
                                Espacio de formación técnica intensiva diseñado para nivelar conocimientos y profundizar en la operatoria.
                            </p>
                        </div>
                        
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                            {topics.map((item: string, i: number) => (
                                <motion.div 
                                    key={i} 
                                    whileHover={{ scale: 1.05, y: -5 }}
                                    className="flex items-center gap-4 p-4 rounded-3xl border border-indigo-50 bg-white/60 hover:bg-white transition-all hover:border-indigo-200 shadow-sm group"
                                >
                                    <div className="w-2.5 h-2.5 rounded-full bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.6)] shrink-0 group-hover:scale-125 transition-transform"></div>
                                    <span className="text-slate-800 font-black text-xs md:text-sm leading-tight tracking-tight uppercase">{item}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </GlassCard>
            </motion.div>
        </motion.div>
    );
};

// 10. Tutor Content Slide - Refined Layout with Variety
export const TutorContentSlide: React.FC<SlideProps & { index?: number }> = ({ data }) => {
    const content = data.content;

    // Determine Layout based on ID for specific requests
    const isThreeSquares = ['rol-tutor', 'etapas-aprendizaje', 'transferencia', 'feedback', 'motivacion', 'cultura'].includes(data.id);
    const isPath = data.id === 'punto-partida';
    const isSubtleQuestion = ['contexto', 'transferencia', 'feedback', 'motivacion', 'cultura', 'rol-tutor', 'etapas-aprendizaje'].includes(data.id);

    // Helper to get 3 items for squares
    const getThreeItems = () => {
        if (data.id === 'rol-tutor') {
            return [
                { title: 'Negocio', desc: 'Comprensión del mercado', emoji: '📈', color: 'bg-blue-50 text-blue-600 border-blue-100' },
                { title: 'Operativa', desc: 'Ejecución de tareas', emoji: '⚙️', color: 'bg-emerald-50 text-emerald-600 border-emerald-100' },
                { title: 'Cultura', desc: 'Forma de trabajo', emoji: '🤝', color: 'bg-purple-50 text-purple-600 border-purple-100' }
            ];
        }
        if (data.id === 'etapas-aprendizaje') {
            return content.table.rows.map((row: string[], i: number) => ({
                title: row[0],
                desc: `${row[1]} → ${row[2]}`,
                emoji: i === 0 ? '🌱' : i === 1 ? '🌿' : '🌳',
                color: i === 0 ? 'bg-amber-50 text-amber-600 border-amber-100' : i === 1 ? 'bg-indigo-50 text-indigo-600 border-indigo-100' : 'bg-emerald-50 text-emerald-600 border-emerald-100'
            }));
        }
        if (data.id === 'transferencia') {
            return [
                { title: 'Explicar', desc: 'El "por qué" detrás de cada acción.', emoji: '🗣️', color: 'bg-indigo-50 text-indigo-600 border-indigo-100' },
                { title: 'Preguntar', desc: 'Fomentar el razonamiento propio.', emoji: '❓', color: 'bg-rose-50 text-rose-600 border-rose-100' },
                { title: 'Escuchar', desc: 'Validar la comprensión del JP.', emoji: '👂', color: 'bg-emerald-50 text-emerald-600 border-emerald-100' }
            ];
        }
        if (data.id === 'feedback') {
            return [
                { title: 'Frecuente', desc: 'Concreto y orientado a la mejora.', emoji: '⏱️', color: 'bg-blue-50 text-blue-600 border-blue-100' },
                { title: 'Estructura', desc: 'Qué funciona y qué ajustar.', emoji: '🏗️', color: 'bg-purple-50 text-purple-600 border-purple-100' },
                { title: 'Futuro', desc: 'Definir próximos pasos claros.', emoji: '🚀', color: 'bg-amber-50 text-amber-600 border-amber-100' }
            ];
        }
        if (data.id === 'motivacion') {
            return [
                { title: 'Contexto', desc: 'Dar sentido a las tareas.', emoji: '🗺️', color: 'bg-indigo-50 text-indigo-600 border-indigo-100' },
                { title: 'Acompañar', desc: 'Estar presente en el proceso.', emoji: '🤝', color: 'bg-rose-50 text-rose-600 border-rose-100' },
                { title: 'Reconocer', desc: 'Valorar los avances logrados.', emoji: '🌟', color: 'bg-emerald-50 text-emerald-600 border-emerald-100' }
            ];
        }
        if (data.id === 'cultura') {
            return [
                { title: 'Referente', desc: 'Transmitir valores con el ejemplo.', emoji: '💎', color: 'bg-purple-50 text-purple-600 border-purple-100' },
                { title: 'Comunicación', desc: 'Gestión abierta de errores.', emoji: '📢', color: 'bg-blue-50 text-blue-600 border-blue-100' },
                { title: 'Disponibilidad', desc: 'Estar para cuando el JP lo necesite.', emoji: '🕒', color: 'bg-rose-50 text-rose-600 border-rose-100' }
            ];
        }
        return [];
    };

    return (
        <motion.div 
            className="flex flex-col h-full gap-4 md:gap-6 justify-center max-w-6xl mx-auto overflow-y-auto custom-scrollbar pr-2 py-2" 
            initial="hidden" animate="show" variants={containerVariants}
        >
            {isThreeSquares ? (
                /* Layout: Three Squares Redesign */
                <div className="space-y-8">
                    <motion.div variants={itemVariants} className="text-center max-w-4xl mx-auto">
                        <h3 className="text-xl md:text-2xl font-black text-slate-900 tracking-tight font-display mb-4">
                            {content.description}
                        </h3>
                    </motion.div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {getThreeItems().map((item: any, i: number) => (
                            <motion.div key={i} variants={itemVariants}>
                                <GlassCard hover className={`h-full p-6 flex flex-col items-center text-center border-b-8 ${item.color.split(' ')[2].replace('border', 'border-b')}`}>
                                    <div className="text-4xl mb-4">{item.emoji}</div>
                                    <h4 className={`text-lg font-black mb-2 uppercase tracking-wider ${item.color.split(' ')[1]}`}>{item.title}</h4>
                                    <p className="text-slate-600 font-bold leading-relaxed text-sm">{item.desc}</p>
                                </GlassCard>
                            </motion.div>
                        ))}
                    </div>

                    {isSubtleQuestion && content.question && (
                        <motion.div variants={itemVariants} className="text-center mt-8">
                            <p className="text-slate-400 text-sm italic font-medium">
                                <span className="font-black uppercase tracking-widest mr-2 text-[10px] not-italic">Reflexión:</span>
                                "{content.question}"
                            </p>
                        </motion.div>
                    )}
                </div>
            ) : isPath ? (
                /* Layout: Path / Arrows Redesign */
                <div className="space-y-12 py-4">
                    <motion.div variants={itemVariants} className="text-center max-w-4xl mx-auto">
                        <h3 className="text-xl md:text-2xl font-black text-slate-900 tracking-tight font-display mb-4">
                            {content.description}
                        </h3>
                    </motion.div>

                    <div className="relative">
                        {/* Connecting Line */}
                        <div className="absolute top-1/2 left-0 w-full h-1 bg-indigo-100 -translate-y-1/2 hidden md:block" />
                        
                        <div className="grid grid-cols-2 md:grid-cols-7 gap-4 relative z-10">
                            {content.bullets[0].split(' → ').map((step: string, i: number) => (
                                <motion.div key={i} variants={itemVariants} className="flex flex-col items-center gap-4">
                                    <div className={`w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center font-black text-white shadow-xl
                                        ${i === 0 ? 'bg-slate-400' : i === 6 ? 'bg-emerald-500' : 'bg-indigo-500'}
                                    `}>
                                        {i + 1}
                                    </div>
                                    <span className="text-[10px] md:text-xs font-black text-slate-700 uppercase tracking-tighter text-center">{step}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <motion.div variants={itemVariants} className="p-6 rounded-3xl bg-indigo-50 border border-indigo-100 text-center">
                        <p className="text-indigo-900 font-black text-lg">
                            {content.highlight}
                        </p>
                    </motion.div>
                </div>
            ) : (
                /* Layout: Standard Split (Default) - Refined for Slide 4 */
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
                    <div className="lg:col-span-12 space-y-6 md:space-y-8">
                        {content.description && (
                            <motion.p variants={itemVariants} className="text-xl md:text-2xl text-slate-800 font-black leading-tight text-center max-w-5xl mx-auto">
                                <Highlight>{content.description.split(" ")[0]}</Highlight> {content.description.split(" ").slice(1).join(" ")}
                            </motion.p>
                        )}

                        {content.bullets && (
                            <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto">
                                {content.bullets.map((bullet: string, idx: number) => (
                                    <motion.div variants={itemVariants} key={idx} className="flex items-start gap-4 p-4 rounded-3xl bg-white/60 border border-white/80 hover:bg-white hover:shadow-xl transition-all group">
                                        <div className="mt-1 p-2 bg-indigo-50 rounded-2xl text-indigo-600 group-hover:scale-110 transition-transform shadow-sm text-lg">
                                            🎯
                                        </div>
                                        <span className="text-slate-700 text-base md:text-lg font-bold leading-snug tracking-tight">{bullet}</span>
                                    </motion.div>
                                ))}
                            </motion.div>
                        )}

                        {content.highlight && (
                            <motion.div 
                                variants={itemVariants}
                                className="p-5 rounded-3xl border-l-8 shadow-lg bg-gradient-to-r from-indigo-50 to-emerald-50 border-indigo-500 max-w-4xl mx-auto"
                            >
                                <p className="font-black text-lg md:text-xl flex items-center gap-4 text-indigo-900">
                                    <Zap size={24} className="text-indigo-500" />
                                    {content.highlight}
                                </p>
                            </motion.div>
                        )}

                        {isSubtleQuestion && content.question && (
                            <motion.div variants={itemVariants} className="text-center pt-4">
                                <p className="text-slate-400 text-sm italic font-medium">
                                    <span className="font-black uppercase tracking-widest mr-2 text-[10px] not-italic">Reflexión:</span>
                                    "{content.question}"
                                </p>
                            </motion.div>
                        )}
                    </div>
                </div>
            )}
        </motion.div>
    );
};

// 11. Closing Slide - Premium Finish
export const ClosingSlide: React.FC<SlideProps> = ({ data, onPrint, onJumpToSlide }) => {
    const contacts = data.content.contacts || [];
    const { description } = data.content;

    return (
        <motion.div 
            className="flex flex-col justify-center items-center h-full text-center relative max-w-6xl mx-auto px-6 py-4" 
            initial="hidden" 
            animate="show" 
            variants={containerVariants}
        >
            {/* Background Decorative Element */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-500/5 rounded-full blur-[120px] -z-10" />

            <motion.div variants={itemVariants} className="mb-8 relative z-10">
                <motion.div 
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.2, type: "spring" }}
                    className="text-7xl md:text-8xl mb-4 drop-shadow-2xl"
                >
                    🙏
                </motion.div>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter text-slate-900 mb-4 leading-tight drop-shadow-sm font-display">
                    {data.title || '¡Muchas gracias!'}
                </h1>
                <div className="flex items-center justify-center gap-4">
                    <div className="h-px w-16 bg-indigo-200" />
                    <p className="text-xl text-indigo-600 font-black tracking-[0.5em] uppercase">
                        {data.subtitle || 'JP 25-26'}
                    </p>
                    <div className="h-px w-16 bg-indigo-200" />
                </div>
            </motion.div>

            <div className="flex flex-col md:flex-row gap-6 w-full max-w-4xl items-stretch relative z-10 mb-8">
                {/* Motivational Quote Card */}
                <motion.div variants={itemVariants} className="flex-1">
                    <GlassCard className="p-6 text-center border-indigo-100/50 bg-white/40 shadow-xl relative group h-full flex flex-col justify-center">
                        <div className="absolute top-4 left-6 text-indigo-200/30">
                            <Sparkles size={32} />
                        </div>
                        <div className="relative z-10">
                            <p className="text-lg md:text-xl font-bold text-slate-700 leading-tight tracking-tight italic mb-4">
                                "{description || 'Formar a una persona requiere tiempo, pero impacta directamente en el equipo y el negocio.'}"
                            </p>
                            <div className="flex items-center justify-center gap-2 text-indigo-400">
                                <div className="h-1 w-1 rounded-full bg-indigo-300" />
                                <span className="text-[9px] font-black uppercase tracking-[0.3em]">Reflexión Final</span>
                                <div className="h-1 w-1 rounded-full bg-indigo-300" />
                            </div>
                        </div>
                    </GlassCard>
                </motion.div>

                {/* Action Center Card */}
                <motion.div variants={itemVariants} className="md:w-72">
                    <GlassCard className="p-6 border-indigo-100 bg-indigo-50/50 shadow-xl h-full flex flex-col items-center justify-center relative overflow-hidden group">
                        {/* Decorative background for download card */}
                        <div className="absolute -right-10 -bottom-10 w-32 h-32 bg-indigo-200/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-1000" />
                        
                        <div className="relative z-10 flex flex-col items-center w-full gap-3">
                            <div className="w-12 h-16 bg-white border border-indigo-100 rounded-lg mb-1 flex flex-col p-1.5 shadow-lg transform group-hover:rotate-3 transition-transform duration-500">
                                <div className="w-full h-0.5 bg-indigo-100 rounded-full mb-1" />
                                <div className="w-3/4 h-0.5 bg-indigo-50 rounded-full mb-1" />
                                <div className="w-full h-0.5 bg-indigo-50 rounded-full mb-2" />
                                <div className="mt-auto flex justify-center">
                                    <FileText size={16} className="text-indigo-500" />
                                </div>
                            </div>
                            
                            <div className="text-center mb-2">
                                <h4 className="text-slate-900 font-black text-sm tracking-tight mb-0.5">Reporte Ejecutivo</h4>
                                <p className="text-slate-500 text-[8px] uppercase tracking-[0.2em]">PDF Optimizado</p>
                            </div>
                            
                            <button 
                                onClick={onPrint}
                                className="w-full group/btn relative flex items-center justify-center gap-2 px-4 py-3 bg-indigo-600 text-white rounded-xl font-black text-[10px] transition-all shadow-md hover:bg-indigo-700 hover:-translate-y-0.5 active:scale-95 font-display tracking-[0.15em] overflow-hidden"
                            >
                                <Download size={14} className="group-hover/btn:scale-110 transition-transform duration-300" />
                                <span className="uppercase">Descargar</span>
                                <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 group-hover/btn:animate-shine" />
                            </button>

                            {onJumpToSlide && (
                                <button 
                                    onClick={() => onJumpToSlide(0)}
                                    className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-white border border-indigo-100 text-indigo-600 rounded-xl font-black text-[9px] transition-all shadow-sm hover:bg-indigo-50 hover:border-indigo-200 active:scale-95 font-display tracking-[0.15em]"
                                >
                                    <RotateCcw size={12} />
                                    <span className="uppercase">Volver al inicio</span>
                                </button>
                            )}
                        </div>
                    </GlassCard>
                </motion.div>
            </div>

            {/* Contact Info Bar */}
            <motion.div variants={itemVariants} className="w-full max-w-4xl">
                <div className="flex flex-wrap justify-center gap-6 md:gap-12">
                    {contacts.map((contact: any, idx: number) => (
                        <a 
                            key={idx} 
                            href={`mailto:${contact.email}`}
                            className="flex items-center gap-3 group transition-all hover:scale-105"
                        >
                            <div className="w-8 h-8 rounded-lg bg-white/60 border border-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-indigo-50 group-hover:text-indigo-600 group-hover:border-indigo-100 transition-all">
                                <Mail size={14} />
                            </div>
                            <div className="text-left">
                                <span className="block text-[8px] font-black text-slate-400 uppercase tracking-wider mb-0.5">{contact.role}</span>
                                <span className="block text-xs font-bold text-slate-700 group-hover:text-indigo-600 transition-colors underline decoration-indigo-200 underline-offset-2">{contact.email}</span>
                            </div>
                        </a>
                    ))}
                </div>
            </motion.div>
        </motion.div>
    );
};
