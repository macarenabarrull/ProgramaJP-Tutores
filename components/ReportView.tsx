import React from 'react';
import { SlideData } from '../constants';
import { 
  Users, DollarSign, Briefcase, Mail, Compass, Target, BrainCircuit, 
  Layers, Zap, ClipboardCheck, Heart, Sparkles, Calendar, GraduationCap, 
  FileText, Flag, PencilRuler, Search, FileSignature, Rocket, BarChart3 
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
    <header className="mb-6 border-b border-slate-900 pb-2">
        <div className="flex justify-between items-end">
            <div>
                <h3 className="text-[8px] text-slate-400 font-black uppercase tracking-[0.2em] mb-1">
                    REPORTE EJECUTIVO {continuation && <span className="text-slate-300">| CONTINUACIÓN</span>}
                </h3>
                <h1 className="text-2xl font-black text-slate-900 uppercase tracking-tight leading-none">
                    {title}
                </h1>
            </div>
            <div className="text-right">
                <div className="text-4xl font-black text-slate-100 tracking-tighter leading-none">fyo<span className="text-indigo-600">.</span></div>
                <div className="text-[8px] font-black text-slate-400 uppercase tracking-widest mt-0.5">TALENTO Y CULTURA</div>
            </div>
        </div>
    </header>
  );

  const Footer = ({ page, total }: { page: number, total: number }) => (
    <footer className="mt-auto pt-4 flex justify-between items-center text-[8px] text-slate-300 border-t border-slate-100">
        <div className="font-black uppercase tracking-[0.2em]">Programa JP 25-26 | Guía para Tutores</div>
        <div className="font-bold">Página {page} de {total}</div>
    </footer>
  );

  const totalPages = 3 + Math.ceil(tutorSlides.length / 2);

  return (
    <div className="w-full bg-slate-50 text-slate-800 font-sans text-[10px] leading-relaxed print:p-0 print:bg-white">
        
      {/* --- PAGE 0: COVER PAGE --- */}
      <div className="w-full max-w-[210mm] min-h-[297mm] mx-auto p-[2.5cm] relative flex flex-col bg-white shadow-2xl mb-8 print:shadow-none print:mb-0 print:w-full print:max-w-none print:min-h-screen print:break-after-page">
          <div className="absolute top-0 left-0 w-full h-2 bg-indigo-600"></div>
          
          <div className="mt-20">
              <div className="text-7xl font-black text-slate-100 tracking-tighter mb-4">fyo<span className="text-indigo-600">.</span></div>
              <div className="h-1 w-20 bg-indigo-600 mb-12"></div>
              
              <h3 className="text-lg font-black text-indigo-600 uppercase tracking-[0.4em] mb-4">Programa de Talentos</h3>
              <h1 className="text-6xl font-black text-slate-900 leading-none tracking-tighter mb-8">
                  GUÍA PARA<br />TUTORES<br />JP 25-26
              </h1>
              
              <p className="text-xl text-slate-500 font-medium max-w-md leading-relaxed mb-20">
                  Manual de acompañamiento, objetivos y herramientas para el desarrollo de Jóvenes Profesionales.
              </p>
          </div>

          <div className="mt-auto grid grid-cols-2 gap-12 border-t border-slate-100 pt-12">
              <div>
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-2">Departamento</span>
                  <span className="text-sm font-bold text-slate-900">Talento y Cultura</span>
              </div>
              <div>
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-2">Fecha de Emisión</span>
                  <span className="text-sm font-bold text-slate-900">Abril 2026</span>
              </div>
          </div>
      </div>

      {/* --- PAGE 1: ESTRUCTURA DEL PROGRAMA --- */}
      <div className="w-full max-w-[210mm] min-h-[297mm] mx-auto p-[2cm] relative flex flex-col bg-white shadow-2xl mb-8 print:shadow-none print:mb-0 print:w-full print:max-w-none print:min-h-screen print:break-after-page">
        <Header title="ESTRUCTURA DEL PROGRAMA" />
        
        <div className="space-y-8 flex-1">
            {/* RESUMEN EJECUTIVO */}
            <section className="grid grid-cols-[200px_1fr] gap-8 items-start">
                <div className="space-y-4">
                    <h2 className="text-[10px] font-black text-indigo-600 uppercase tracking-[0.2em]">Resumen</h2>
                    <p className="text-[9px] text-slate-500 leading-relaxed">
                        Este documento detalla la metodología de acompañamiento para los Jóvenes Profesionales (JP) durante el ciclo 25-26, definiendo el rol del tutor como pieza clave en la transferencia de cultura y conocimiento técnico.
                    </p>
                </div>
                <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100">
                    <p className="text-slate-800 font-bold italic text-[11px] leading-relaxed">
                        "{objectives.content.mainGoal}"
                    </p>
                </div>
            </section>

            {/* 01. OBJETIVOS */}
            <section>
                <h2 className="text-[10px] font-black text-slate-900 uppercase mb-4 flex items-center gap-2">
                    <span className="w-5 h-5 rounded-lg bg-slate-900 text-white flex items-center justify-center text-[9px]">1</span> OBJETIVOS Y ALCANCE
                </h2>
                <div className="grid grid-cols-3 gap-4">
                    {objectives.content.stats.map((stat: any, i: number) => (
                        <div key={i} className="p-4 border border-slate-100 rounded-2xl bg-white shadow-sm">
                            <h3 className="font-black text-slate-400 uppercase text-[7px] tracking-widest mb-1">{stat.label}</h3>
                            <span className="text-xl font-black text-slate-900 block tracking-tighter">{stat.value}</span>
                        </div>
                    ))}
                </div>
            </section>
        </div>

        <Footer page={2} total={totalPages} />
      </div>

      {/* --- PAGE 2+: CONTENIDO PARA TUTORES --- */}
      {Array.from({ length: Math.ceil(tutorSlides.length / 2) }).map((_, pageIdx) => (
          <div key={pageIdx} className="w-full max-w-[210mm] mx-auto p-[2cm] relative flex flex-col bg-white shadow-2xl mb-8 print:shadow-none print:mb-0 print:w-full print:max-w-none print:min-h-screen print:break-after-page">
              <Header title="GUÍA PARA EL TUTOR" continuation={pageIdx > 0} />
              
              <div className="space-y-12 flex-1">
                  {tutorSlides.slice(pageIdx * 2, (pageIdx + 1) * 2).map((slide) => {
                      const Icon = IconMap[slide.content.icon] || Compass;
                      return (
                        <section key={slide.id} className="border-b border-slate-100 pb-10 last:border-0">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-10 h-10 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center">
                                    <Icon size={20} />
                                </div>
                                <div>
                                    <h2 className="text-lg font-black text-slate-900 uppercase tracking-tight leading-none mb-1">
                                        {slide.title}
                                    </h2>
                                    <div className="h-1 w-8 bg-indigo-600 rounded-full"></div>
                                </div>
                            </div>

                            <div className="grid grid-cols-[1fr_180px] gap-10">
                                <div className="space-y-6">
                                    <p className="text-slate-700 font-bold text-sm leading-relaxed">
                                        {slide.content.description}
                                    </p>
                                    
                                    {slide.content.bullets && (
                                        <div className="grid grid-cols-1 gap-3">
                                            {slide.content.bullets.map((b: string, i: number) => (
                                                <div key={i} className="flex items-start gap-3 p-3 bg-slate-50 rounded-xl border border-slate-100">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-1.5 shrink-0" />
                                                    <span className="text-[10px] font-bold text-slate-600 leading-tight">{b}</span>
                                                </div>
                                            ))}
                                        </div>
                                    )}

                                    {slide.content.table && (
                                        <div className="mt-4 border border-slate-100 rounded-2xl overflow-hidden">
                                            <table className="w-full text-left border-collapse">
                                                <thead className="bg-slate-50">
                                                    <tr>
                                                        {slide.content.table.headers.map((h: string, i: number) => (
                                                            <th key={i} className="p-3 text-[8px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-100 text-center">{h}</th>
                                                        ))}
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {slide.content.table.rows.map((row: string[], i: number) => (
                                                        <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                                                            {row.map((c: string, j: number) => (
                                                                <td key={j} className="p-3 text-[10px] font-bold text-slate-600 border-b border-slate-50 text-center">{c}</td>
                                                            ))}
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    )}

                                    {slide.content.highlight && (
                                        <div className="p-4 bg-indigo-600 text-white rounded-2xl shadow-lg shadow-indigo-100 text-[10px] font-black uppercase tracking-widest flex items-center gap-3">
                                            <Zap size={16} className="text-indigo-200" />
                                            {slide.content.highlight}
                                        </div>
                                    )}
                                </div>

                                {slide.content.question && (
                                    <div className="bg-slate-900 p-6 rounded-3xl text-white self-start shadow-xl">
                                        <div className="flex items-center gap-2 mb-4">
                                            <div className="w-2 h-2 rounded-full bg-indigo-400"></div>
                                            <span className="text-[8px] font-black uppercase tracking-[0.3em] text-indigo-400 block">Reflexión</span>
                                        </div>
                                        <p className="text-xs font-bold italic leading-relaxed text-slate-200">
                                            "{slide.content.question}"
                                        </p>
                                    </div>
                                )}
                            </div>
                        </section>
                      );
                  })}
              </div>

              <Footer page={pageIdx + 3} total={totalPages} />
          </div>
      ))}

      {/* --- FINAL PAGE: CIERRE --- */}
      <div className="w-full max-w-[210mm] min-h-[297mm] mx-auto p-[2cm] relative flex flex-col bg-white shadow-2xl print:shadow-none print:w-full print:max-w-none print:min-h-screen">
          <Header title="EXPECTATIVAS Y CIERRE" />
          
          <section className="flex-1 flex flex-col justify-center items-center text-center max-w-2xl mx-auto">
              <div className="text-6xl mb-8">🙏</div>
              <h2 className="text-4xl font-black text-slate-900 uppercase tracking-tighter mb-4 leading-none">{closing.title}</h2>
              <p className="text-lg text-indigo-600 font-black uppercase tracking-[0.4em] mb-12">{closing.subtitle}</p>
              
              <div className="grid grid-cols-1 gap-6 w-full mb-12">
                  <div className="text-left bg-slate-50 p-8 rounded-3xl border border-slate-100 relative overflow-hidden">
                      <div className="absolute -right-10 -top-10 w-40 h-40 bg-indigo-100 rounded-full blur-3xl opacity-50"></div>
                      <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-6 relative z-10">Compromisos del Tutor</h3>
                      <div className="grid grid-cols-2 gap-x-8 gap-y-4 relative z-10">
                          {closing.content.bullets.map((b: string, i: number) => (
                              <div key={i} className="flex items-center gap-3 text-[11px] font-bold text-slate-700">
                                  <div className="w-2 h-2 bg-indigo-500 rounded-full shrink-0"></div>
                                  {b}
                              </div>
                          ))}
                      </div>
                  </div>
                  
                  <div className="p-8 bg-slate-900 text-white rounded-3xl shadow-2xl text-center relative overflow-hidden">
                      <div className="absolute left-0 top-0 w-full h-1 bg-indigo-500"></div>
                      <p className="text-sm font-bold italic leading-relaxed text-slate-300 mb-2">
                          "{closing.content.description}"
                      </p>
                      <span className="text-[9px] font-black uppercase tracking-[0.3em] text-indigo-400">Reflexión Final</span>
                  </div>
              </div>
          </section>

          <section className="mb-12">
              <h2 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-6 text-center">Canales de Contacto</h2>
              <div className="flex justify-center gap-16">
                  {closing.content.contacts.map((c: any, i: number) => (
                      <div key={i} className="flex items-center gap-4 group">
                          <div className="bg-indigo-50 p-3 rounded-2xl text-indigo-600">
                              <Mail size={18} />
                          </div>
                          <div className="text-left">
                              <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest block mb-0.5">{c.role}</span>
                              <span className="text-sm font-black text-slate-900">{c.email}</span>
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
