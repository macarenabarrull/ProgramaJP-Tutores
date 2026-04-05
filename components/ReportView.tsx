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
  const profile = findSlide('profile');
  const timeline = findSlide('timeline');
  const closing = findSlide('closing');

  // Filter for tutor content slides
  const tutorSlides = slides.filter(s => s.type === 'tutor-content');

  if (!objectives || !profile || !timeline || !closing) {
    return <div className="p-12 text-center text-red-600 font-bold">Error: Datos incompletos para el reporte.</div>;
  }

  const consultoriaCount = objectives.content.stats.find((s:any) => s.label === 'Consultoría')?.value || '2 JP';

  // Helper to ensure we don't use english in dates if possible
  const monthMap: Record<string, string> = {
      'Enero': 'Enero', 'Febrero': 'Febrero', 'Mar-Abr': 'Marzo-Abril', 'Abril': 'Abril', 'Mayo': 'Mayo'
  };

  const Header = ({ continuation = false, title = "PROGRAMA JP 25-26" }) => (
    <header className="mb-8 border-b-2 border-slate-900 pb-2">
        <div className="flex justify-between items-end">
            <div>
                <h3 className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mb-1">
                    REPORTE EJECUTIVO {continuation && <span className="text-slate-400">| CONTINUACIÓN</span>}
                </h3>
                <h1 className="text-3xl font-black text-slate-900 uppercase tracking-tight leading-none">
                    {title}
                </h1>
            </div>
            <div className="text-right">
                <div className="text-5xl font-black text-slate-200 tracking-tighter leading-none">fyo<span className="text-fuchsia-600">.</span></div>
                <div className="text-[9px] font-bold text-slate-500 uppercase tracking-widest mt-0.5">TALENTO Y CULTURA</div>
            </div>
        </div>
    </header>
  );

  const Footer = ({ page, total }: { page: number, total: number }) => (
    <footer className="mt-auto pt-4 flex justify-between items-center text-[9px] text-slate-400 border-t border-slate-200">
        <div className="font-bold uppercase tracking-widest">Programa JP 25-26 | Guía para Tutores</div>
        <div>Uso Interno | Página {page}/{total}</div>
    </footer>
  );

  const totalPages = 2 + Math.ceil(tutorSlides.length / 2);

  return (
    <div className="w-full bg-white text-slate-800 font-sans text-[11px] leading-relaxed print:p-0">
        
      {/* --- PAGE 1: ESTRUCTURA DEL PROGRAMA --- */}
      <div className="w-full max-w-[210mm] min-h-[297mm] mx-auto p-[1.5cm] relative flex flex-col bg-white print:w-full print:max-w-none print:min-h-screen">
        <Header title="ESTRUCTURA DEL PROGRAMA" />
        
        {/* 01. OBJETIVOS */}
        <section className="mb-8">
            <h2 className="text-sm font-black text-slate-900 uppercase mb-2 flex items-center gap-2">
                <span className="text-fuchsia-600">01.</span> OBJETIVOS Y ALCANCE
            </h2>
            <div className="bg-slate-50 p-4 border-l-4 border-slate-900 mb-4">
                 <p className="text-slate-700 font-medium italic">
                    "{objectives.content.mainGoal}"
                 </p>
            </div>

            <div className="grid grid-cols-3 gap-4">
                <div className="p-3 border border-slate-200 rounded bg-white">
                    <div className="flex items-center gap-2 mb-2">
                        <Users size={14} className="text-green-600"/>
                        <h3 className="font-bold text-slate-900 uppercase text-[10px]">Mesa de Granos</h3>
                    </div>
                    <span className="text-lg font-black text-slate-900 block">{objectives.content.stats[0].value}</span>
                </div>

                <div className="p-3 border border-slate-200 rounded bg-white">
                    <div className="flex items-center gap-2 mb-2">
                        <DollarSign size={14} className="text-blue-600"/>
                        <h3 className="font-bold text-slate-900 uppercase text-[10px]">fyoCapital</h3>
                    </div>
                    <span className="text-lg font-black text-slate-900 block">{objectives.content.stats[1].value}</span>
                </div>

                <div className="p-3 border border-slate-200 rounded bg-white">
                    <div className="flex items-center gap-2 mb-2">
                        <Briefcase size={14} className="text-purple-600"/>
                        <h3 className="font-bold text-slate-900 uppercase text-[10px]">Consultoría</h3>
                    </div>
                    <span className="text-lg font-black text-slate-900 block">{consultoriaCount}</span>
                </div>
            </div>
        </section>

        {/* 02. PERFIL */}
        <section className="mb-8">
            <h2 className="text-sm font-black text-slate-900 uppercase mb-3 flex items-center gap-2">
                <span className="text-fuchsia-600">02.</span> PERFIL DEL CANDIDATO
            </h2>
            
            <div className="flex gap-6">
                <div className="w-1/3 bg-fuchsia-50 p-4 rounded-sm border border-fuchsia-100">
                    <h3 className="text-fuchsia-900 font-bold uppercase text-[10px] mb-2">Requisitos Clave</h3>
                    <ul className="space-y-2">
                        {profile.content.bullets.map((b: string, i: number) => (
                            <li key={i} className="flex items-start gap-2 text-fuchsia-900 text-[10px] leading-tight">
                                <span className="text-fuchsia-500 mt-0.5">•</span> {b}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="flex-1">
                    <h3 className="font-bold text-slate-900 uppercase text-[10px] mb-2 border-b border-slate-200 pb-1">Propuesta de Valor</h3>
                    <div className="grid grid-cols-2 gap-4">
                        {profile.content.valueProp.map((vp: any, i: number) => (
                             <div key={i}>
                                <span className="font-bold text-slate-800 text-[10px] uppercase block">{vp.title}</span>
                                <span className="text-slate-600 text-[10px]">{vp.text}</span>
                             </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>

        {/* 03. CRONOGRAMA */}
        <section className="flex-1">
             <h2 className="text-sm font-black text-slate-900 uppercase mb-3 flex items-center gap-2">
                <span className="text-fuchsia-600">03.</span> CRONOGRAMA DE ETAPAS
            </h2>
            
            <div className="space-y-3">
                {timeline.content.map((item: any, i: number) => (
                    <div key={i} className="flex items-start gap-4 pb-3 border-b border-slate-100 last:border-0">
                        <div className="w-6 h-6 bg-slate-900 text-white font-bold text-[10px] flex items-center justify-center rounded shrink-0">
                            {i + 1}
                        </div>
                        <div className="grid grid-cols-[100px_1fr] gap-4 w-full">
                             <div className="font-bold text-fuchsia-600 uppercase text-[10px] pt-0.5">{monthMap[item.month] || item.month}</div>
                             <div>
                                <h4 className="font-bold text-slate-900 text-[10px] uppercase mb-0.5">{item.title}</h4>
                                <p className="text-slate-500 text-[10px]">{item.details}</p>
                             </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>

        <Footer page={1} total={totalPages} />
      </div>

      <div className="print:break-before-page"></div>

      {/* --- PAGE 2+: CONTENIDO PARA TUTORES --- */}
      {Array.from({ length: Math.ceil(tutorSlides.length / 2) }).map((_, pageIdx) => (
          <div key={pageIdx} className="w-full max-w-[210mm] min-h-[297mm] mx-auto p-[1.5cm] relative flex flex-col bg-white print:w-full print:max-w-none print:min-h-screen print:break-after-page">
              <Header title="GUÍA PARA EL TUTOR" continuation={pageIdx > 0} />
              
              <div className="space-y-12 flex-1">
                  {tutorSlides.slice(pageIdx * 2, (pageIdx + 2) * 2).map((slide) => {
                      const Icon = IconMap[slide.content.icon] || Compass;
                      return (
                        <section key={slide.id} className="border-b border-slate-100 pb-10 last:border-0">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2 bg-fuchsia-100 text-fuchsia-600 rounded">
                                    <Icon size={18} />
                                </div>
                                <h2 className="text-sm font-black text-slate-900 uppercase tracking-tight">
                                    {slide.title}
                                </h2>
                            </div>

                            <div className="grid grid-cols-[1fr_200px] gap-8">
                                <div className="space-y-4">
                                    <p className="text-slate-700 font-medium text-[10px] leading-relaxed">
                                        {slide.content.description}
                                    </p>
                                    {slide.content.bullets && (
                                        <ul className="space-y-2">
                                            {slide.content.bullets.map((b: string, i: number) => (
                                                <li key={i} className="flex items-start gap-2 text-[9px] text-slate-600">
                                                    <span className="text-fuchsia-500 mt-0.5">•</span> {b}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                    {slide.content.table && (
                                        <div className="mt-4 border border-slate-200 rounded overflow-hidden">
                                            <table className="w-full text-left border-collapse">
                                                <thead className="bg-slate-50">
                                                    <tr>
                                                        {slide.content.table.headers.map((h: string, i: number) => (
                                                            <th key={i} className="p-2 text-[8px] font-bold text-slate-500 uppercase border-b border-slate-200 text-center">{h}</th>
                                                        ))}
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {slide.content.table.rows.map((row: string[], i: number) => (
                                                        <tr key={i}>
                                                            {row.map((c: string, j: number) => (
                                                                <td key={j} className="p-2 text-[9px] text-slate-600 border-b border-slate-100 text-center">{c}</td>
                                                            ))}
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    )}
                                    {slide.content.highlight && (
                                        <div className="p-3 bg-fuchsia-50 border-l-2 border-fuchsia-500 text-[9px] font-bold text-fuchsia-900">
                                            👉 {slide.content.highlight}
                                        </div>
                                    )}
                                </div>

                                {slide.content.question && (
                                    <div className="bg-slate-900 p-4 rounded text-white self-start">
                                        <span className="text-[8px] font-black uppercase tracking-widest text-fuchsia-400 block mb-2">Pregunta</span>
                                        <p className="text-[10px] font-medium italic leading-snug">
                                            "{slide.content.question}"
                                        </p>
                                    </div>
                                )}
                            </div>
                        </section>
                      );
                  })}
              </div>

              <Footer page={pageIdx + 2} total={totalPages} />
          </div>
      ))}

      {/* --- FINAL PAGE: CIERRE --- */}
      <div className="w-full max-w-[210mm] min-h-[297mm] mx-auto p-[1.5cm] relative flex flex-col bg-white print:w-full print:max-w-none print:min-h-screen">
          <Header title="EXPECTATIVAS Y CIERRE" />
          
          <section className="flex-1 flex flex-col justify-center items-center text-center max-w-2xl mx-auto">
              <h2 className="text-2xl font-black text-slate-900 uppercase mb-4">{closing.title}</h2>
              <p className="text-sm text-slate-500 mb-8">{closing.subtitle}</p>
              
              <div className="grid grid-cols-2 gap-4 w-full mb-12">
                  <div className="text-left bg-slate-50 p-6 rounded border border-slate-100">
                      <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">Compromisos del Tutor</h3>
                      <ul className="space-y-3">
                          {closing.content.bullets.map((b: string, i: number) => (
                              <li key={i} className="flex items-center gap-3 text-[10px] font-bold text-slate-700">
                                  <div className="w-1.5 h-1.5 bg-fuchsia-500 rounded-full"></div>
                                  {b}
                              </li>
                          ))}
                      </ul>
                  </div>
                  <div className="flex flex-col justify-center gap-4">
                      <div className="p-6 bg-fuchsia-600 text-white rounded shadow-lg text-left">
                          <p className="text-xs font-bold leading-snug">
                              👉 {closing.content.highlight}
                          </p>
                      </div>
                  </div>
              </div>
          </section>

          <section className="mb-8">
              <h2 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4 text-center">Canales de Contacto</h2>
              <div className="flex justify-center gap-12">
                  {closing.content.contacts.map((c: any, i: number) => (
                      <div key={i} className="flex items-center gap-3">
                          <div className="bg-slate-100 p-2 rounded-full">
                              <Mail size={14} className="text-slate-600" />
                          </div>
                          <div className="text-left">
                              <span className="text-[8px] font-bold text-slate-400 uppercase block">{c.role}</span>
                              <span className="text-[10px] font-bold text-slate-900">{c.email}</span>
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
