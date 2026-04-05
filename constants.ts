
export type IconKey = 'Compass' | 'Target' | 'BrainCircuit' | 'Layers' | 'Zap' | 'ClipboardCheck' | 'Heart' | 'Sparkles' | 'Users' | 'DollarSign' | 'Briefcase' | 'Calendar' | 'GraduationCap' | 'FileText' | 'Flag' | 'PencilRuler' | 'Search' | 'FileSignature' | 'Rocket' | 'BarChart3';

export interface SlideData {
  id: string;
  type: 'cover' | 'objectives' | 'info' | 'timeline' | 'grid' | 'table-granos' | 'table-capital' | 'mentoring-split' | 'academy-split' | 'closing' | 'tutor-content';
  title?: string;
  subtitle?: string;
  content?: any;
}

export interface TutorContent {
  icon: IconKey;
  description: string;
  bullets?: string[];
  highlight?: string;
  question?: string;
  table?: {
    headers: string[];
    rows: string[][];
  };
  footerNote?: string;
}

export const SLIDES: SlideData[] = [
  {
    id: 'cover',
    type: 'cover',
    title: 'PROGRAMA DE JP 2025/2026',
    subtitle: 'Formando el futuro del ecosistema de negocios comerciales',
    content: {
      highlight: '10 Jóvenes Profesionales',
      tags: ['Mesa de Granos', 'Mercado de Capitales', 'Consultoría']
    }
  },
  {
    id: 'intro',
    type: 'objectives',
    title: 'Objetivos',
    subtitle: 'Potenciando el ecosistema de negocios',
    content: {
      mainGoal: "Incorporar 10 Jóvenes Profesionales con alto potencial comercial y financiero.",
      pillars: ["Inmersión Temprana", "Práctica Real", "Visión 360°"],
      stats: [
        { label: 'Mesa de Granos', value: '4 JP', icon: 'Users', color: 'text-green-600', bg: 'bg-green-50', border: 'border-green-100' },
        { label: 'fyoCapital', value: '4 JP', icon: 'DollarSign', color: 'text-blue-600', bg: 'bg-blue-50', border: 'border-blue-100' },
        { label: 'Consultoría', value: '2 JP', icon: 'Briefcase', color: 'text-purple-600', bg: 'bg-purple-50', border: 'border-purple-100' }
      ]
    }
  },
  {
    id: 'profile',
    type: 'info',
    title: 'Perfil buscado',
    subtitle: 'Requisitos y competencias claves',
    content: {
      description: "Orientado a jóvenes con breve base previa, curiosidad intelectual y actitud proactiva.",
      bullets: [
        "Al menos 1 año de experiencia en áreas comerciales, ventas, logística o finanzas.",
        "Estudiantes avanzados o graduados de carreras afines.",
        "Interés genuino por comercialización de granos y mercado financiero.",
        "Experiencia previa eleva autonomía y velocidad de aprendizaje."
      ],
      valueProp: [
        { title: "Liderá", text: "Tu propio desarrollo profesional." },
        { title: "Integrate", text: "A equipos comerciales reales desde el inicio." },
        { title: "Aprendé", text: "Del negocio en acción, no desde la teoría." },
        { title: "Viví", text: "La experiencia fyo desde adentro." }
      ]
    }
  },
  {
    id: 'contexto',
    type: 'tutor-content',
    title: 'CONTEXTO Y PROPÓSITO',
    subtitle: 'El rol central del acompañamiento',
    content: {
      icon: 'Compass',
      description: "El Programa de Jóvenes Profesionales tiene como objetivo desarrollar perfiles que, en el mediano plazo, puedan desempeñarse en la mesa comercial con criterio y autonomía.",
      bullets: [
        "No se trata de una incorporación tradicional, sino de un proceso de formación.",
        "El tutor cumple un rol central: es quien acompaña, guía y acelera el desarrollo en la práctica diaria."
      ],
      highlight: "La calidad del programa está directamente vinculada a la calidad del acompañamiento.",
      question: "¿Qué persona en su carrera les enseñó realmente a trabajar? ¿Qué hizo diferente?"
    } as TutorContent
  },
  {
    id: 'rol-tutor',
    type: 'tutor-content',
    title: 'ROL DEL TUTOR Y ALCANCE',
    subtitle: 'Acompañando el proceso de aprendizaje',
    content: {
      icon: 'Target',
      description: "El tutor no solo transmite tareas, sino que acompaña el proceso de aprendizaje del JP.",
      bullets: [
        "Dar contexto sobre el negocio.",
        "Explicar cómo y por qué se toman decisiones.",
        "Acompañar en la ejecución.",
        "Generar espacios de aprendizaje."
      ],
      highlight: "El objetivo es que el JP no solo ejecute correctamente, sino que pueda desarrollar criterio propio.",
      table: {
        headers: ['Negocio', 'Operativa', 'Cultura'],
        rows: [['Comprensión del mercado', 'Ejecución de tareas', 'Forma de trabajo']]
      },
      footerNote: "Un aprendizaje completo requiere integrar estas tres dimensiones."
    } as TutorContent
  },
  {
    id: 'punto-partida',
    type: 'tutor-content',
    title: 'PUNTO DE PARTIDA Y PROCESO',
    subtitle: 'De la inexperiencia a la ejecución',
    content: {
      icon: 'BrainCircuit',
      description: "Los JP ingresan con potencial, pero sin conocimiento del negocio. Es esperable que no cuenten con herramientas técnicas, necesiten contexto y cometan errores.",
      bullets: [
        "No saber → Entender → Practicar → Equivocarse → Ajustar → Consolidar → Ejecutar"
      ],
      highlight: "Intentar acelerar sin comprensión genera ejecución mecánica, no aprendizaje real.",
      question: "¿Qué fue lo más difícil de entender cuando ustedes comenzaron?"
    } as TutorContent
  },
  {
    id: 'etapas-aprendizaje',
    type: 'tutor-content',
    title: 'ROL DEL TUTOR EN CADA ETAPA',
    subtitle: 'Adaptando la intervención',
    content: {
      icon: 'Layers',
      description: "El desafío del tutor es adaptar su nivel de intervención según la etapa del JP.",
      table: {
        headers: ['Etapa', 'Qué necesita el JP', 'Rol del Tutor'],
        rows: [
          ['Inicial', 'Comprender', 'Explicar y dar contexto'],
          ['Intermedia', 'Practicar', 'Acompañar y corregir'],
          ['Avanzada', 'Autonomía', 'Desafiar y dar espacio']
        ]
      },
      highlight: "Evitar tanto la sobreintervención como la ausencia.",
      question: "¿En qué situaciones suelen intervenir de más o de menos?"
    } as TutorContent
  },
  {
    id: 'transferencia',
    type: 'tutor-content',
    title: 'TRANSFERENCIA Y COMUNICACIÓN',
    subtitle: 'Haciendo explícito lo implícito',
    content: {
      icon: 'Zap',
      description: "Gran parte del conocimiento comercial es implícito. Por eso, el tutor debe hacerlo explícito compartiendo criterios y visibilidad al razonamiento.",
      bullets: [
        "Explicar el “por qué”.",
        "Hacer preguntas.",
        "Escuchar."
      ],
      highlight: "No es lo mismo indicar qué hacer, que explicar por qué se toma una decisión.",
      question: "¿Cuántas veces responden directamente sin dar espacio a que el otro piense?"
    } as TutorContent
  },
  {
    id: 'feedback',
    type: 'tutor-content',
    title: 'FEEDBACK Y SEGUIMIENTO',
    subtitle: 'Claridad para el desarrollo',
    content: {
      icon: 'ClipboardCheck',
      description: "El feedback es clave para ordenar el aprendizaje y dar claridad sobre el desempeño.",
      bullets: [
        "Frecuente, concreto y orientado a la mejora.",
        "Estructura: Qué está funcionando, Qué ajustar, Próximos pasos."
      ],
      highlight: "Sin feedback, el JP pierde referencia sobre su desempeño.",
      question: "¿Cuándo fue la última vez que dieron un feedback concreto?"
    } as TutorContent
  },
  {
    id: 'motivacion',
    type: 'tutor-content',
    title: 'ACOMPAÑAMIENTO Y MOTIVACIÓN',
    subtitle: 'Gestionando el desafío inicial',
    content: {
      icon: 'Heart',
      description: "El inicio del aprendizaje suele ser desafiante. Pueden aparecer dudas, frustración e inseguridad.",
      bullets: [
        "Dar contexto.",
        "Acompañar el proceso.",
        "Reconocer avances."
      ],
      highlight: "Un error no es solo una corrección, es una oportunidad de aprendizaje.",
      question: "¿Cómo reaccionan cuando alguien se equivoca?"
    } as TutorContent
  },
  {
    id: 'cultura',
    type: 'tutor-content',
    title: 'CULTURA Y DESVÍOS A EVITAR',
    subtitle: 'El tutor como referente',
    content: {
      icon: 'Sparkles',
      description: "El tutor es el principal transmisor de la cultura organizacional. El JP aprende observando cómo se comunica el equipo y cómo se gestionan errores.",
      bullets: [
        "Desvíos a evitar: No delegar, No dar contexto, No dar feedback, No estar disponible, Sobreproteger."
      ],
      question: "¿Con cuál de estos puntos se sienten más identificados?"
    } as TutorContent
  },
  {
    id: 'expectativas',
    type: 'closing',
    title: '¡Muchas gracias por su ayuda!',
    subtitle: 'JP 2025/2026',
    content: {
      description: "Formar a una persona requiere tiempo, pero impacta directamente en el equipo y el negocio.",
      bullets: [
        "Acompañe activamente.",
        "Comparta conocimiento.",
        "Promueva participación.",
        "Brinde feedback.",
        "Genere aprendizaje."
      ],
      highlight: "El éxito del programa depende de la experiencia de aprendizaje.",
      contacts: [
        { role: 'TBP', email: 'mbarrull@fyo.com' },
        { role: 'Talentos', email: 'talentos@fyo.com' }
      ]
    }
  }
];
