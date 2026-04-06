import React from 'react';
import { SlideData } from '../constants';
import { 
  Users, DollarSign, Briefcase, Mail, Compass, Target, BrainCircuit, 
  Layers, Zap, ClipboardCheck, Heart, Sparkles, Calendar, GraduationCap, 
  FileText, Flag, PencilRuler, Search, FileSignature, Rocket, BarChart3,
  CheckCircle2
} from 'lucide-react';

const IconMap: Record<string, any> = {
  Compass, Target, BrainCircuit, Layers, Zap, ClipboardCheck, Heart, Sparkles,
  Users, DollarSign, Briefcase, Calendar, GraduationCap, FileText, Flag,
  PencilRuler, Search, FileSignature, Rocket, BarChart3
};

interface ReportViewProps {
  slides: SlideData[];
}

export const ReportView: React.FC<ReportViewProps> = ({ slides }) => {
  const findSlide = (id: string) => slides.find(s => s.id === id);

  const objectives = findSlide('intro');
  const closing = findSlide('closing');

  // Filter for tutor content slides
  const tutorSlides = slides.filter(s => s.type === 'tutor-content');

  if (!objectives || !closing) {
    return <div className="p-12 text-center text-red-600 font-bold">Error: Datos incompletos para el reporte.</div>;
  }

  const Header = ({ continuation = false, title = "PROGRAMA JP 25-26" }) => (
    <header className="mb-8 border-b-2 border-slate-900 pb-4">
        <div className="flex justify-between items-end">
            <div>
                <h3 className="text-[9px] text-indigo-600 font-black uppercase tracking-[0.3em] mb-1">
                    REPORTE ESTRATÉGICO {continuation && <span className="text-slate-300">| CONTINUACIÓN</span>}
                </h3>
                <h1 className="text-3xl font-black text-slate-900 uppercase tracking-tighter leading-none">
                    {title}
                </h1>
            </div>
            <div className="text-right">
                <div className="text-4xl font-black text-slate-200 tracking-tighter leading-none">fyo<span className="text-indigo-600">.</span></div>
                <div className="text-[8px] font-black text-slate-400 uppercase tracking-widest mt-1">TALENTO Y CULTURA</div>
            </div>
        </div>
    </header>
  );

  const Footer = ({ page, total }: { page: number, total: number }) => (
    <footer className="mt-auto pt-6 flex justify-between items-center text-[9px] text-slate-400 border-t border-slate-100">
        <div className="flex items-center gap-4">
            <span className="font-black uppercase tracking-[0.2em] text-slate-900">Programa JP 25-26</span>
            <span className="w-1 h-1 rounded-full bg-slate-200" />
            <span className="font-medium">Guía de Acompañamiento para Tutores</span>
        </div>
        <div className="font-black bg-slate-900 text-white px-3 py-1 rounded-full text-[8px]">
            PÁGINA {page} / {total}
        </div>
    </footer>
  );

  const totalPages = 3 + Math.ceil(tutorSlides.length / 2);

  return (
    <div className="w-full bg-slate-100 text-slate-800 font-sans text-[11px] leading-relaxed print:p-0 print:bg-white">
        
      {/* --- PAGE 0: COVER PAGE --- */}
      <div className="w-full max-w-[210mm] min-h-[297mm] mx-auto p-[3cm] relative flex flex-col bg-white shadow-2xl mb-12 print:shadow-none print:mb-0 print:w-full print:max-w-none print:min-h-screen print:break-after-page overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-50 rounded-full -mr-32 -mt-32 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-50/50 rounded-full -ml-48 -mb-48 blur-3xl" />
          
          <div className="relative z-10 mt-24">
              <div className="text-8xl font-black text-slate-100 tracking-tighter mb-6 leading-none">fyo<span className="text-indigo-600">.</span></div>
              <div className="h-1.5 w-24 bg-indigo-600 mb-16"></div>
              
              <h3 className="text-xl font-black text-indigo-600 uppercase tracking-[0.5em] mb-6">Talento y Cultura</h3>
              <h1 className="text-7xl font-black text-slate-900 leading-[0.9] tracking-tighter mb-12 uppercase">
                  Manual de<br />Acompañamiento<br /><span className="text-indigo-600">JP 25-26</span>
              </h1>
              
              <div className="max-w-md border-l-4 border-indigo-100 pl-8 py-2">
                  <p className="text-xl text-slate-500 font-medium leading-relaxed">
                      Herramientas estratégicas y guía práctica para el desarrollo de la próxima generación de líderes comerciales.
                  </p>
              </div>
          </div>

          <div className="mt-auto relative z-10">
              <div className="grid grid-cols-2 gap-16 border-t-2 border-slate-900 pt-12">
                  <div>
                      <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] block mb-3">Documento</span>
                      <span className="text-lg font-black text-slate-900 uppercase tracking-tight">Reporte Ejecutivo de Tutoría</span>
                  </div>
                  <div>
                      <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] block mb-3">Versión</span>
                      <span className="text-lg font-black text-slate-900 uppercase tracking-tight">Ciclo 2025 - 2026</span>
                  </div>
              </div>
          </div>
      </div>

      {/* --- PAGE 1: ESTRUCTURA Y OBJETIVOS --- */}
      <div className="w-full max-w-[210mm] min-h-[297mm] mx-auto p-[2cm] relative flex flex-col bg-white shadow-2xl mb-12 print:shadow-none print:mb-0 print:w-full print:max-w-none print:min-h-screen print:break-after-page">
        <Header title="VISIÓN ESTRATÉGICA" />
        
        <div className="space-y-12 flex-1">
            {/* RESUMEN EJECUTIVO EXPANDIDO */}
            <section className="relative">
                <div className="absolute -left-8 top-0 bottom-0 w-1 bg-indigo-100 rounded-full" />
                <h2 className="text-[11px] font-black text-indigo-600 uppercase tracking-[0.3em] mb-6">01. Resumen Ejecutivo</h2>
                <div className="grid grid-cols-[1fr_240px] gap-12 items-start">
                    <div className="space-y-6">
                        <p className="text-sm text-slate-600 leading-relaxed font-medium">
                            El Programa de Jóvenes Profesionales (JP) representa la inversión más significativa de fyo en el desarrollo de talento comercial. Este reporte actúa como una hoja de ruta para los tutores, asegurando que la transferencia de conocimiento sea estructurada, consciente y efectiva.
                        </p>
                        <div className="bg-indigo-50 p-6 rounded-3xl border border-indigo-100 relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-4 opacity-10">
                                <Target size={64} />
                            </div>
                            <p className="text-indigo-900 font-black italic text-lg leading-tight relative z-10">
                                "{objectives.content.mainGoal}"
                            </p>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Pilares del Programa</h3>
                        <div className="space-y-2">
                            {objectives.content.pillars.map((p: string, i: number) => (
                                <div key={i} className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl border border-slate-100">
                                    <div className="w-2 h-2 rounded-full bg-indigo-500" />
                                    <span className="font-black text-slate-800 uppercase text-[9px]">{p}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* OBJETIVOS POR ÁREA */}
            <section>
                <h2 className="text-[11px] font-black text-indigo-600 uppercase tracking-[0.3em] mb-6">02. Objetivos y Alcance</h2>
                <div className="grid grid-cols-3 gap-6">
                    {objectives.content.stats.map((stat: any, i: number) => {
                        const Icon = IconMap[stat.icon] || Users;
                        return (
                            <div key={i} className="p-6 border-2 border-slate-50 rounded-[2rem] bg-white shadow-sm flex flex-col items-center text-center group">
                                <div className={`w-12 h-12 rounded-2xl ${stat.bg} flex items-center justify-center ${stat.color} mb-4 shadow-inner`}>
                                    <Icon size={24} />
                                </div>
                                <h3 className="font-black text-slate-400 uppercase text-[8px] tracking-[0.2em] mb-2">{stat.label}</h3>
                                <span className="text-3xl font-black text-slate-900 tracking-tighter">{stat.value}</span>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* METODOLOGÍA PRÁCTICA */}
            <section className="bg-slate-900 rounded-[2.5rem] p-10 text-white relative overflow-hidden">
                <div className="absolute right-0 bottom-0 w-64 h-64 bg-indigo-500/10 rounded-full -mr-20 -mb-20 blur-3xl" />
                <div className="relative z-10">
                    <h2 className="text-[10px] font-black text-indigo-400 uppercase tracking-[0.4em] mb-6">03. Metodología de Acompañamiento</h2>
                    <div className="grid grid-cols-2 gap-12">
                        <div className="space-y-4">
                            <h4 className="text-lg font-black tracking-tight">El Rol del Tutor</h4>
                            <p className="text-slate-400 text-xs leading-relaxed">
                                El tutor no es solo un instructor técnico; es un mentor cultural que modela los valores de fyo y facilita la inmersión en el ecosistema de negocios.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 gap-3">
                            {['Transferencia de Criterio', 'Feedback Continuo', 'Gestión del Error'].map((item, i) => (
                                <div key={i} className="flex items-center gap-3 text-[10px] font-bold">
                                    <CheckCircle2 size={14} className="text-indigo-400" />
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>

        <Footer page={2} total={totalPages} />
      </div>

      {/* --- PAGE 2+: CONTENIDO PARA TUTORES --- */}
      {Array.from({ length: Math.ceil(tutorSlides.length / 2) }).map((_, pageIdx) => (
          <div key={pageIdx} className="w-full max-w-[210mm] min-h-[297mm] mx-auto p-[2cm] relative flex flex-col bg-white shadow-2xl mb-12 print:shadow-none print:mb-0 print:w-full print:max-w-none print:min-h-screen print:break-after-page">
              <Header title="GUÍA DE IMPLEMENTACIÓN" continuation={pageIdx > 0} />
              
              <div className="space-y-10 flex-1">
                  {tutorSlides.slice(pageIdx * 2, (pageIdx + 1) * 2).map((slide) => {
                      const Icon = IconMap[slide.content.icon] || Compass;
                      return (
                        <section key={slide.id} className="bg-slate-50/50 rounded-[2rem] p-8 border border-slate-100 relative">
                            <div className="flex items-start justify-between mb-8">
                                <div className="flex items-center gap-5">
                                    <div className="w-14 h-14 bg-white shadow-xl shadow-indigo-900/5 text-indigo-600 rounded-2xl flex items-center justify-center border border-indigo-50">
                                        <Icon size={28} />
                                    </div>
                                    <div>
                                        <h2 className="text-xl font-black text-slate-900 uppercase tracking-tight leading-none mb-2">
                                            {slide.title}
                                        </h2>
                                        <div className="flex items-center gap-2">
                                            <div className="h-1 w-10 bg-indigo-600 rounded-full"></div>
                                            <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest">{slide.subtitle}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-[1fr_200px] gap-10">
                                <div className="space-y-6">
                                    <p className="text-slate-800 font-bold text-[13px] leading-relaxed">
                                        {slide.content.description}
                                    </p>
                                    
                                    {slide.content.bullets && (
                                        <div className="grid grid-cols-1 gap-3">
                                            {slide.content.bullets.map((b: string, i: number) => (
                                                <div key={i} className="flex items-start gap-4 p-4 bg-white rounded-2xl border border-slate-100 shadow-sm">
                                                    <div className="w-2 h-2 rounded-full bg-indigo-500 mt-1.5 shrink-0 shadow-[0_0_8px_rgba(99,102,241,0.4)]" />
                                                    <span className="text-[11px] font-bold text-slate-600 leading-snug">{b}</span>
                                                </div>
                                            ))}
                                        </div>
                                    )}

                                    {slide.content.table && (
                                        <div className="mt-4 border-2 border-slate-100 rounded-3xl overflow-hidden bg-white shadow-sm">
                                            <table className="w-full text-left border-collapse">
                                                <thead className="bg-slate-900">
                                                    <tr>
                                                        {slide.content.table.headers.map((h: string, i: number) => (
                                                            <th key={i} className="p-4 text-[9px] font-black text-slate-400 uppercase tracking-widest text-center">{h}</th>
                                                        ))}
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {slide.content.table.rows.map((row: string[], i: number) => (
                                                        <tr key={i} className="border-t border-slate-50">
                                                            {row.map((c: string, j: number) => (
                                                                <td key={j} className="p-4 text-[11px] font-bold text-slate-700 text-center">{c}</td>
                                                            ))}
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    )}
                                </div>

                                <div className="space-y-6">
                                    {slide.content.question && (
                                        <div className="bg-white p-6 rounded-3xl border-2 border-indigo-50 shadow-lg shadow-indigo-900/5">
                                            <div className="flex items-center gap-2 mb-4">
                                                <div className="w-2 h-2 rounded-full bg-indigo-500"></div>
                                                <span className="text-[9px] font-black uppercase tracking-[0.3em] text-indigo-600 block">Reflexión</span>
                                            </div>
                                            <p className="text-[11px] font-bold italic leading-relaxed text-slate-600">
                                                "{slide.content.question}"
                                            </p>
                                        </div>
                                    )}

                                    {slide.content.highlight && (
                                        <div className="p-6 bg-indigo-600 text-white rounded-3xl shadow-xl shadow-indigo-200 text-[10px] font-black uppercase tracking-widest leading-tight flex flex-col gap-3">
                                            <Zap size={20} className="text-indigo-200" />
                                            {slide.content.highlight}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </section>
                      );
                  })}
              </div>

              {/* PRACTICAL TOOL: NOTES SECTION */}
              <div className="mt-8 p-6 border-2 border-dashed border-slate-200 rounded-3xl bg-slate-50/30">
                  <h3 className="text-[9px] font-black text-slate-400 uppercase tracking-[0.3em] mb-4">Notas de Seguimiento y Observaciones</h3>
                  <div className="space-y-3">
                      <div className="h-px bg-slate-200 w-full" />
                      <div className="h-px bg-slate-200 w-full" />
                      <div className="h-px bg-slate-200 w-full" />
                  </div>
              </div>

              <Footer page={pageIdx + 3} total={totalPages} />
          </div>
      ))}

      {/* --- FINAL PAGE: CIERRE --- */}
      <div className="w-full max-w-[210mm] min-h-[297mm] mx-auto p-[2cm] relative flex flex-col bg-white shadow-2xl print:shadow-none print:w-full print:max-w-none print:min-h-screen">
          <Header title="COMPROMISO Y CIERRE" />
          
          <section className="flex-1 flex flex-col justify-center items-center text-center max-w-2xl mx-auto">
              <div className="text-8xl mb-10 drop-shadow-xl">🙏</div>
              <h2 className="text-5xl font-black text-slate-900 uppercase tracking-tighter mb-6 leading-none">{closing.title}</h2>
              <p className="text-xl text-indigo-600 font-black uppercase tracking-[0.5em] mb-16">{closing.subtitle}</p>
              
              <div className="grid grid-cols-1 gap-8 w-full mb-16">
                  <div className="text-left bg-slate-50 p-10 rounded-[3rem] border border-slate-100 relative overflow-hidden shadow-inner">
                      <div className="absolute -right-10 -top-10 w-48 h-48 bg-indigo-100 rounded-full blur-3xl opacity-50"></div>
                      <h3 className="text-[11px] font-black text-slate-400 uppercase tracking-[0.4em] mb-8 relative z-10">Manifiesto del Tutor</h3>
                      <div className="grid grid-cols-2 gap-x-12 gap-y-6 relative z-10">
                          {closing.content.bullets.map((b: string, i: number) => (
                              <div key={i} className="flex items-center gap-4 text-sm font-bold text-slate-800">
                                  <div className="w-2.5 h-2.5 bg-indigo-500 rounded-full shrink-0 shadow-[0_0_10px_rgba(99,102,241,0.5)]"></div>
                                  {b}
                              </div>
                          ))}
                      </div>
                  </div>
                  
                  <div className="p-10 bg-slate-900 text-white rounded-[3rem] shadow-2xl text-center relative overflow-hidden">
                      <div className="absolute left-0 top-0 w-full h-1.5 bg-indigo-500"></div>
                      <p className="text-lg font-bold italic leading-relaxed text-slate-300 mb-4">
                          "{closing.content.description}"
                      </p>
                      <span className="text-[10px] font-black uppercase tracking-[0.4em] text-indigo-400">Visión Final</span>
                  </div>
              </div>
          </section>

          <section className="mb-16">
              <h2 className="text-[11px] font-black text-slate-400 uppercase tracking-[0.4em] mb-10 text-center">Canales de Soporte Estratégico</h2>
              <div className="flex justify-center gap-24">
                  {closing.content.contacts.map((c: any, i: number) => (
                      <div key={i} className="flex items-center gap-5 group">
                          <div className="bg-indigo-50 p-4 rounded-2xl text-indigo-600 shadow-sm border border-indigo-100">
                              <Mail size={24} />
                          </div>
                          <div className="text-left">
                              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-1">{c.role}</span>
                              <span className="text-lg font-black text-slate-900 tracking-tight">{c.email}</span>
                          </div>
                      </div>
                  ))}
              </div>
          </section>

          <Footer page={totalPages} total={totalPages} />
      </div>
    </div>
  );
};
