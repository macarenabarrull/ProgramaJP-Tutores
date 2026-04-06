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
  const tutorSlides = slides.filter(s => s.type === 'tutor-content');

  if (!objectives || !closing) {
    return <div className="p-12 text-center text-red-600 font-bold">Error: Datos incompletos para el reporte.</div>;
  }

  const Header = ({ sectionTitle = "GUÍA DEL TUTOR" }) => (
    <header className="mb-6 border-b border-indigo-100 pb-3 flex justify-between items-end">
        <div>
            <h3 className="text-[8px] text-indigo-500 font-black uppercase tracking-[0.3em] mb-0.5">
                PROGRAMA JP 25-26
            </h3>
            <h1 className="text-xl font-black text-slate-900 uppercase tracking-tight">
                {sectionTitle}
            </h1>
        </div>
        <div className="text-right">
            <div className="text-2xl font-black text-slate-200 tracking-tighter leading-none">fyo<span className="text-indigo-500">.</span></div>
        </div>
    </header>
  );

  const Footer = ({ page, total }: { page: number, total: number }) => (
    <footer className="mt-auto pt-4 flex justify-between items-center text-[8px] text-slate-400 border-t border-slate-50">
        <div className="flex items-center gap-3">
            <span className="font-black uppercase tracking-[0.15em] text-slate-800">Reporte Ejecutivo</span>
            <span className="w-0.5 h-0.5 rounded-full bg-slate-200" />
            <span className="font-medium">Confidencial - Talento y Cultura</span>
        </div>
        <div className="font-bold text-slate-500">
            PÁGINA {page} DE {total}
        </div>
    </footer>
  );

  const totalPages = 5; // Fixed structure for better organization

  return (
    <div className="w-full bg-slate-50 text-slate-800 font-sans text-[10px] leading-relaxed print:p-0 print:bg-white">
        
      {/* --- PAGE 0: PORTADA --- */}
      <div className="w-[210mm] h-[297mm] mx-auto p-[2.5cm] relative flex flex-col bg-white shadow-2xl mb-12 print:shadow-none print:mb-0 print:break-after-page overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-indigo-50 rounded-full -mr-24 -mt-24 blur-3xl" />
          
          <div className="relative z-10 mt-32">
              <div className="text-6xl font-black text-slate-100 tracking-tighter mb-4 leading-none">fyo<span className="text-indigo-500">.</span></div>
              <div className="h-1 w-16 bg-indigo-500 mb-12"></div>
              
              <h3 className="text-base font-black text-indigo-500 uppercase tracking-[0.4em] mb-4">Talento y Cultura</h3>
              <h1 className="text-5xl font-black text-slate-900 leading-[1] tracking-tighter mb-10 uppercase">
                  Guía de<br />Acompañamiento<br /><span className="text-indigo-500">JP 25-26</span>
              </h1>
              
              <div className="max-w-sm border-l-2 border-indigo-100 pl-6 py-1">
                  <p className="text-base text-slate-500 font-medium leading-relaxed">
                      Manual estratégico para tutores: Transformando el potencial joven en liderazgo comercial.
                  </p>
              </div>
          </div>

          <div className="mt-auto relative z-10">
              <div className="grid grid-cols-2 gap-10 border-t border-slate-200 pt-8">
                  <div>
                      <span className="text-[8px] font-black text-slate-400 uppercase tracking-[0.2em] block mb-2">Documento</span>
                      <span className="text-sm font-black text-slate-900 uppercase tracking-tight">Reporte de Gestión de Tutoría</span>
                  </div>
                  <div>
                      <span className="text-[8px] font-black text-slate-400 uppercase tracking-[0.2em] block mb-2">Ciclo</span>
                      <span className="text-sm font-black text-slate-900 uppercase tracking-tight">2025 - 2026</span>
                  </div>
              </div>
          </div>
      </div>

      {/* --- PAGE 1: INTRODUCCIÓN Y OBJETIVOS --- */}
      <div className="w-[210mm] h-[297mm] mx-auto p-[2cm] relative flex flex-col bg-white shadow-2xl mb-12 print:shadow-none print:mb-0 print:break-after-page">
        <Header sectionTitle="01. VISIÓN Y OBJETIVOS" />
        
        <div className="space-y-8 flex-1">
            <section>
                <h2 className="text-[9px] font-black text-indigo-500 uppercase tracking-[0.2em] mb-4">Resumen Ejecutivo</h2>
                <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100">
                    <p className="text-[11px] text-slate-600 leading-relaxed font-medium mb-4">
                        El Programa de Jóvenes Profesionales es el semillero de talentos de fyo. El rol del tutor es fundamental para garantizar que los JP no solo aprendan tareas, sino que desarrollen el criterio comercial necesario para el futuro.
                    </p>
                    <div className="flex items-center gap-4 bg-white p-4 rounded-xl border border-indigo-50">
                        <Target className="text-indigo-500 shrink-0" size={24} />
                        <p className="text-indigo-900 font-black italic text-xs leading-tight">
                            "{objectives.content.mainGoal}"
                        </p>
                    </div>
                </div>
            </section>

            <section>
                <h2 className="text-[9px] font-black text-indigo-500 uppercase tracking-[0.2em] mb-4">Alcance por Áreas</h2>
                <div className="grid grid-cols-3 gap-4">
                    {objectives.content.stats.map((stat: any, i: number) => {
                        const Icon = IconMap[stat.icon] || Users;
                        return (
                            <div key={i} className="p-4 border border-slate-100 rounded-2xl bg-white shadow-sm flex flex-col items-center text-center">
                                <div className={`w-10 h-10 rounded-xl ${stat.bg} flex items-center justify-center ${stat.color} mb-3`}>
                                    <Icon size={20} />
                                </div>
                                <h3 className="font-black text-slate-400 uppercase text-[7px] tracking-[0.1em] mb-1">{stat.label}</h3>
                                <span className="text-xl font-black text-slate-900 tracking-tight">{stat.value}</span>
                            </div>
                        );
                    })}
                </div>
            </section>

            <section>
                <h2 className="text-[9px] font-black text-indigo-500 uppercase tracking-[0.2em] mb-4">Pilares de Formación</h2>
                <div className="grid grid-cols-3 gap-3">
                    {objectives.content.pillars.map((p: string, i: number) => (
                        <div key={i} className="flex items-center gap-2 p-3 bg-indigo-50/50 rounded-xl border border-indigo-100">
                            <CheckCircle2 size={12} className="text-indigo-500" />
                            <span className="font-black text-indigo-900 uppercase text-[8px]">{p}</span>
                        </div>
                    ))}
                </div>
            </section>
        </div>

        <Footer page={1} total={totalPages} />
      </div>

      {/* --- PAGE 2: EL ROL DEL TUTOR --- */}
      <div className="w-[210mm] h-[297mm] mx-auto p-[2cm] relative flex flex-col bg-white shadow-2xl mb-12 print:shadow-none print:mb-0 print:break-after-page">
        <Header sectionTitle="02. EL ROL DEL TUTOR" />
        
        <div className="space-y-8 flex-1">
            {tutorSlides.slice(0, 3).map((slide) => {
                const Icon = IconMap[slide.content.icon] || Compass;
                return (
                    <section key={slide.id} className="border border-slate-100 rounded-2xl p-5 bg-slate-50/30">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-8 h-8 bg-white border border-indigo-50 rounded-lg flex items-center justify-center text-indigo-500 shadow-sm">
                                <Icon size={18} />
                            </div>
                            <div>
                                <h3 className="text-sm font-black text-slate-900 uppercase tracking-tight">{slide.title}</h3>
                                <p className="text-[8px] font-bold text-slate-400 uppercase tracking-widest">{slide.subtitle}</p>
                            </div>
                        </div>
                        <p className="text-[10px] text-slate-600 mb-4 font-medium">{slide.content.description}</p>
                        
                        {slide.content.table && (
                            <div className="border border-slate-200 rounded-xl overflow-hidden bg-white">
                                <table className="w-full text-[9px]">
                                    <thead className="bg-slate-50 border-b border-slate-200">
                                        <tr>
                                            {slide.content.table.headers.map((h: string, i: number) => (
                                                <th key={i} className="p-2 font-black text-slate-400 uppercase tracking-widest text-center">{h}</th>
                                            ))}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {slide.content.table.rows.map((row: string[], i: number) => (
                                            <tr key={i} className="border-b border-slate-50 last:border-0">
                                                {row.map((c: string, j: number) => (
                                                    <td key={j} className="p-2 text-slate-700 text-center font-bold">{c}</td>
                                                ))}
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        )}
                    </section>
                );
            })}
        </div>
        <Footer page={2} total={totalPages} />
      </div>

      {/* --- PAGE 3: HERRAMIENTAS Y COMUNICACIÓN --- */}
      <div className="w-[210mm] h-[297mm] mx-auto p-[2cm] relative flex flex-col bg-white shadow-2xl mb-12 print:shadow-none print:mb-0 print:break-after-page">
        <Header sectionTitle="03. HERRAMIENTAS PRÁCTICAS" />
        
        <div className="space-y-8 flex-1">
            {tutorSlides.slice(3, 6).map((slide) => {
                const Icon = IconMap[slide.content.icon] || Compass;
                return (
                    <section key={slide.id} className="border border-slate-100 rounded-2xl p-5 bg-slate-50/30">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-8 h-8 bg-white border border-indigo-50 rounded-lg flex items-center justify-center text-indigo-500 shadow-sm">
                                <Icon size={18} />
                            </div>
                            <h3 className="text-sm font-black text-slate-900 uppercase tracking-tight">{slide.title}</h3>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-6">
                            <div className="space-y-3">
                                <p className="text-[10px] text-slate-600 font-medium">{slide.content.description}</p>
                                {slide.content.bullets && (
                                    <ul className="space-y-1.5">
                                        {slide.content.bullets.map((b: string, i: number) => (
                                            <li key={i} className="flex items-start gap-2 text-[9px] text-slate-500 font-bold">
                                                <div className="w-1 h-1 rounded-full bg-indigo-400 mt-1.5 shrink-0" />
                                                {b}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                            <div className="space-y-3">
                                {slide.content.question && (
                                    <div className="p-3 bg-white border border-indigo-50 rounded-xl italic text-[9px] text-slate-500 leading-relaxed">
                                        <span className="font-black text-indigo-500 uppercase text-[7px] block mb-1">Reflexión sugerida:</span>
                                        "{slide.content.question}"
                                    </div>
                                )}
                                {slide.content.highlight && (
                                    <div className="p-3 bg-indigo-500 text-white rounded-xl font-black uppercase text-[8px] tracking-wider">
                                        {slide.content.highlight}
                                    </div>
                                )}
                            </div>
                        </div>
                    </section>
                );
            })}
        </div>
        <Footer page={3} total={totalPages} />
      </div>

      {/* --- PAGE 4: GESTIÓN Y CULTURA --- */}
      <div className="w-[210mm] h-[297mm] mx-auto p-[2cm] relative flex flex-col bg-white shadow-2xl mb-12 print:shadow-none print:mb-0 print:break-after-page">
        <Header sectionTitle="04. CULTURA Y GESTIÓN" />
        
        <div className="space-y-6 flex-1">
            {tutorSlides.slice(6).map((slide) => {
                const Icon = IconMap[slide.content.icon] || Compass;
                return (
                    <section key={slide.id} className="border border-slate-100 rounded-2xl p-5 bg-slate-50/30">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-8 h-8 bg-white border border-indigo-50 rounded-lg flex items-center justify-center text-indigo-500 shadow-sm">
                                <Icon size={18} />
                            </div>
                            <h3 className="text-sm font-black text-slate-900 uppercase tracking-tight">{slide.title}</h3>
                        </div>
                        <p className="text-[10px] text-slate-600 mb-4 font-medium">{slide.content.description}</p>
                        {slide.content.bullets && (
                            <div className="grid grid-cols-1 gap-2">
                                {slide.content.bullets.map((b: string, i: number) => (
                                    <div key={i} className="p-3 bg-white rounded-xl border border-slate-100 text-[9px] font-bold text-slate-500">
                                        {b}
                                    </div>
                                ))}
                            </div>
                        )}
                    </section>
                );
            })}

            {/* PRACTICAL TOOL: CHECKLIST */}
            <div className="p-5 border border-indigo-100 rounded-2xl bg-indigo-50/30">
                <h3 className="text-[9px] font-black text-indigo-500 uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
                    <ClipboardCheck size={14} />
                    Checklist de Sesión para el Tutor
                </h3>
                <div className="grid grid-cols-2 gap-x-8 gap-y-3">
                    {[
                        "¿Definí objetivos claros para esta semana?",
                        "¿Brindé feedback específico sobre tareas?",
                        "¿Escuché las dudas y desafíos del JP?",
                        "¿Modelé la cultura fyo en mi trato?",
                        "¿Identifiqué desvíos y propuse corrección?",
                        "¿Fomenté la autonomía en la toma de decisión?"
                    ].map((item, i) => (
                        <div key={i} className="flex items-center gap-3">
                            <div className="w-4 h-4 border-2 border-indigo-200 rounded shrink-0" />
                            <span className="text-[9px] font-bold text-slate-600">{item}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* PRACTICAL TOOL: NOTES SECTION */}
            <div className="mt-4 p-5 border border-dashed border-slate-300 rounded-2xl bg-slate-50/50 flex-1">
                <h3 className="text-[8px] font-black text-slate-400 uppercase tracking-[0.2em] mb-4">Notas de Seguimiento y Observaciones</h3>
                <div className="space-y-6">
                    <div className="h-px bg-slate-200 w-full" />
                    <div className="h-px bg-slate-200 w-full" />
                    <div className="h-px bg-slate-200 w-full" />
                    <div className="h-px bg-slate-200 w-full" />
                    <div className="h-px bg-slate-200 w-full" />
                    <div className="h-px bg-slate-200 w-full" />
                </div>
            </div>
        </div>
        <Footer page={4} total={totalPages} />
      </div>

      {/* --- PAGE 5: CIERRE Y CONTACTO --- */}
      <div className="w-[210mm] h-[297mm] mx-auto p-[2cm] relative flex flex-col bg-white shadow-2xl print:shadow-none">
          <Header sectionTitle="05. COMPROMISO FINAL" />
          
          <div className="flex-1 flex flex-col justify-center items-center text-center max-w-lg mx-auto">
              <div className="text-6xl mb-8">🙏</div>
              <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tight mb-4">{closing.title}</h2>
              <p className="text-sm text-indigo-500 font-black uppercase tracking-[0.4em] mb-12">{closing.subtitle}</p>
              
              <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100 w-full mb-10">
                  <h3 className="text-[9px] font-black text-slate-400 uppercase tracking-[0.3em] mb-6">Manifiesto del Tutor</h3>
                  <div className="grid grid-cols-1 gap-4 text-left">
                      {closing.content.bullets.map((b: string, i: number) => (
                          <div key={i} className="flex items-center gap-3 text-[10px] font-bold text-slate-700">
                              <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full shrink-0"></div>
                              {b}
                          </div>
                      ))}
                  </div>
              </div>

              <div className="p-8 bg-indigo-50 border border-indigo-100 rounded-[2rem] w-full relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-1 h-full bg-indigo-500" />
                  <p className="text-xs font-bold italic leading-relaxed text-indigo-900 mb-2">
                      "{closing.content.description}"
                  </p>
                  <span className="text-[8px] font-black uppercase tracking-[0.4em] text-indigo-400">Visión Final</span>
              </div>
          </div>

          <div className="mt-12 border-t border-slate-100 pt-8">
              <h3 className="text-[8px] font-black text-slate-400 uppercase tracking-[0.2em] mb-6 text-center">Canales de Soporte</h3>
              <div className="flex justify-center gap-16">
                  {closing.content.contacts.map((c: any, i: number) => (
                      <div key={i} className="flex items-center gap-3">
                          <div className="bg-indigo-50 p-2 rounded-lg text-indigo-600">
                              <Mail size={16} />
                          </div>
                          <div className="text-left">
                              <span className="text-[7px] font-black text-slate-400 uppercase block">{c.role}</span>
                              <span className="text-xs font-black text-slate-900">{c.email}</span>
                          </div>
                      </div>
                  ))}
              </div>
          </div>

          <Footer page={5} total={totalPages} />
      </div>
    </div>
  );
};
