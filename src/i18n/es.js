const es = {
  // ===== NAVBAR =====
  nav: {
    home: 'Inicio',
    about: 'Nosotros',
    services: 'Servicios',
    autoAccidents: 'Accidentes de Auto',
    patientCenter: 'Centro de Pacientes',
    contact: 'Contacto',
    phone: '(908) 497-9440',
  },

  // ===== FOOTER =====
  footer: {
    tagline: 'Garabo Chiropractic Health Center, PC',
    desc: 'Especialistas en accidentes de vehículo motorizado y cuidado quiropráctico Cualificado en Trauma en Clark, NJ desde 1991.',
    innerCircle: 'Proveedor "Inner Circle" para\nempleados de Hackensack Meridian',
    quickLinks: 'Enlaces Rápidos',
    officeHours: 'Horario de Oficina',
    contact: 'Contáctenos',
    days: {
      monday: 'Lunes',
      tuesday: 'Martes',
      wednesday: 'Miércoles',
      thursday: 'Jueves',
      friday: 'Viernes',
      saturday: 'Sábado',
      sunday: 'Domingo',
    },
    times: {
      monday: '8:30 AM – 6:00 PM',
      tuesday: '8:30 AM – 12:30 PM',
      wednesday: '8:30 AM – 6:00 PM',
      thursday: 'Cerrado',
      friday: '8:30 AM – 6:00 PM',
      saturday: '8:30 AM – Mediodía',
      sunday: 'Cerrado',
    },
    copyright: (year) => `© ${year} Clark Spine and Pain Relief · Garabo Chiropractic Health Center, PC · Clark, NJ`,
    copyrightSub: '118 Westfield Avenue, Suites 3 & 4, Clark, NJ 07066 ·',
  },

  // ===== HERO =====
  hero: {
    badge: 'Aceptando Nuevos Pacientes · Clark, NJ',
    headline1: 'Espalda•Cuello•Ciática',
    headline2: 'Alivio del Dolor',
    headline3: 'Sin Medicamentos',
    sub: 'Dr. James Garabo, DC — Quiropráctico Cualificado en Trauma con más de 35\u00a0años de experiencia especializado en lesiones por accidentes de vehículo motorizado y el diagnóstico del dolor mecánico de columna.',
    bookBtn: 'Hacer una Cita',
    servicesBtn: 'Nuestros Servicios',
    pill1: '✓ Medicare Aceptado',
    pill2: '✓ Horizon BC/BS Nivel 1',
    pill3: '✓ Especialista en Accidentes de Auto',
    stat1Num: '35+',
    stat1Label: 'Años de Experiencia',
    stat2Num: '1991',
    stat2Label: 'Est. en Clark, NJ',
    stat3Num: 'Palmer',
    stat3Label: 'Graduado del Colegio',
    drName: 'Dr. James Garabo, DC',
    traumaQualified: 'Cualificado en Trauma',
  },

  // ===== AUTO ACCIDENTS PAGE =====
  autoAccidents: {
    tag: 'Especialista en MVM',
    heroTitle: 'Atención por Lesiones en Accidentes de Auto',
    heroSub: 'Tratamiento quiropráctico Cualificado en Trauma y documentación médico-legal — desde el primer día hasta la resolución del caso.',
    ctaBook: 'Hacer una Cita',
    ctaCall: 'Llamar (908) 497-9440',

    urgencyTag: 'Por Qué Actuar Rápido',
    urgencyTitle: 'No Espere Para Buscar Atención',
    urgencySub: 'Los síntomas tras una colisión pueden tardar días en aparecer. Una evaluación temprana protege su salud y su reclamación legal.',
    urgencyItems: [
      { icon: 'delayed', title: 'Los Síntomas Suelen Retrasarse', desc: 'La adrenalina y la inflamación pueden enmascarar el dolor por días o semanas. Muchas lesiones graves son invisibles sin una evaluación clínica adecuada.' },
      { icon: 'legal_doc', title: 'La Documentación Legal Empieza Ahora', desc: 'Un expediente médico oportuno establece el vínculo directo entre el accidente y sus lesiones — esencial para cualquier reclamación de seguro o caso legal.' },
      { icon: 'early_care', title: 'El Cuidado Temprano Da Mejores Resultados', desc: 'Las lesiones espinales tratadas temprano tienen mucho menos probabilidad de volverse crónicas. Nuestro equipo le inicia en un plan de cuidado de inmediato.' },
    ],

    injuriesTag: 'Lo Que Tratamos',
    injuriesTitle: 'Lesiones Comunes en Accidentes de Auto',
    injuriesSub: 'Nuestro equipo está capacitado para identificar y tratar el espectro completo de lesiones por accidentes de vehículo motorizado.',
    injuries: [
      { icon: 'whiplash', title: 'Latigazo (WAD)', desc: 'Lesión por aceleración-desaceleración cervical — la lesión de MVM más común. Diagnosticamos y tratamos todos los grados de WAD.' },
      { icon: 'disc', title: 'Hernia de Disco', desc: 'Hernia de disco traumática en la columna cervical o lumbar causada por las fuerzas del impacto.' },
      { icon: 'soft_tissue', title: 'Lesiones de Tejidos Blandos', desc: 'Lesiones musculares, ligamentosas y tendinosas en toda la columna y extremidades.' },
      { icon: 'radicular', title: 'Radiculopatía', desc: 'Compresión de la raíz nerviosa que causa dolor irradiado, entumecimiento o debilidad en brazos o piernas.' },
      { icon: 'headache', title: 'Dolores de Cabeza Post-Concusión', desc: 'Dolor de cabeza y dolor cervicogénico tras trauma craneal o desaceleración brusca.' },
      { icon: 'subluxation', title: 'Subluxaciones Espinales', desc: 'Desalineaciones vertebrales que interrumpen el movimiento articular normal y la función nerviosa tras un trauma.' },
    ],

    processTag: 'Nuestro Proceso',
    processTitle: 'Qué Esperar Como Paciente de Accidente',
    processSteps: [
      { num: '01', title: 'Priorizamos a los Pacientes de Accidentes', desc: 'Llámenos y lo atenderemos lo más rápido posible — generalmente el mismo día o al día siguiente.' },
      { num: '02', title: 'Evaluación Comprensiva', desc: 'Nuestro médico realiza un examen ortopédico y neurológico completo, incluyendo rayos X en sitio según indicación clínica.' },
      { num: '03', title: 'Diagnóstico y Plan de Cuidado', desc: 'Recibe un diagnóstico preciso y un plan de tratamiento enfocado — manipulación espinal, terapia de tejidos blandos y ondas de choque si está indicado.' },
      { num: '04', title: 'Documentación en Todo Momento', desc: 'Generamos expedientes y reportes médicos completos y legalmente sólidos para su aseguradora, abogado o médico de referencia desde la primera visita.' },
    ],

    legalTag: 'Servicios Médico-Legales',
    legalTitle: 'Documentación Completa para Su Caso',
    legalBody: 'Nuestra práctica ha servido a pacientes de accidentes de auto y a la comunidad legal de Nueva Jersey por más de tres décadas. Entendemos exactamente lo que los ajustadores de seguros, abogados defensores y abogados de lesiones personales necesitan de un proveedor médico.',
    legalItems: [
      'Reportes de evaluación inicial de lesiones',
      'Reportes médicos narrativos',
      'Reportes de interpretación y datación de MRI',
      'Testimonio experto y deposiciones',
      'Reportes de progreso y estado final',
      'Apoyo para refutación de IME',
    ],

    ctaTitle: '¿Estuvo en un Accidente?',
    ctaSub: 'No espere. Llámenos hoy para una evaluación rápida y comience su camino a la recuperación.',
  },

  // ===== SERVICES PREVIEW =====
  servicesPreview: {
    tag: 'Lo Que Tratamos',
    title: 'Atención Integral de Columna y Dolor',
    subtitle: 'Ofrecemos atención quiropráctica experta para una amplia variedad de condiciones espinales y lesiones musculoesqueléticas — incluyendo recuperación de accidentes de auto, dolor crónico de espalda y cuello, hernias discales, ciática y más.',
    exploreBtn: 'Ver Todos los Servicios',
    featuredBadge: '★  Especialidad Principal',
    featuredInjuriesTitle: 'Lesiones Frecuentemente Tratadas:',
    services: [
      { icon: 'mva', title: 'Lesiones por Accidente de Auto', desc: 'Latigazo, hernias discales y trauma espinal' },
      { icon: 'back', title: 'Dolor de Espalda', desc: 'Condiciones de espalda alta, media y baja' },
      { icon: 'neck', title: 'Dolor de Cuello', desc: 'Dolor y rigidez de columna cervical' },
      { icon: 'sciatica', title: 'Ciática', desc: 'Dolor del nervio ciático y radiculopatía' },
      { icon: 'shockwave', title: 'Terapia de Ondas de Choque', desc: 'Curación de tejidos aprobada por la FDA' },
      { icon: 'mri', title: 'Interpretación de MRI', desc: 'Análisis avanzado de imágenes y reportes' },
    ],
  },

  // ===== DR PREVIEW =====
  drPreview: {
    tag: 'Conozca al Dr. Garabo',
    title: 'Más de 35 Años de Cuidado Quiropráctico Experto',
    p1: 'El Dr. James Garabo, DC ha sido el Director Clínico del Garabo Chiropractic Health Center (Clark Spine and Pain Relief) desde 1991. Es graduado del Palmer College of Chiropractic y posee una licencia activa en Nueva Jersey (MCO-3710).',
    p2: 'El Dr. Garabo tiene amplia experiencia en lesiones por accidentes de vehículo motorizado y proporciona diagnóstico, tratamiento y documentación médico-legal para casos espinales post-traumáticos. Nuestra oficina cuenta con rayos X en sitio, manipulación espinal y terapia de ondas de choque — atención integral bajo un mismo techo.',
    creds: [
      'Doctor en Quiropráctica – Palmer College, 1988',
      'Licencia NJ Activa, Licencia # MCO-3710',
      'Quiropráctico Cualificado en Trauma',
      'Experto en Interpretación de MRI',
      'Especialista en Documentación Médico-Legal',
    ],
    cvBtn: 'CV Completo y Credenciales',
    badgeTitle: 'Cualificado en Trauma',
    badgeSub: 'Quiropráctico',
    drName: 'Dr. James Garabo',
  },

  // ===== STEPS =====
  steps: {
    tag: 'Cómo Comenzar',
    title: '4 Pasos para Aliviar el Dolor',
    subtitle: 'Nuestro proceso sencillo lo lleva del dolor al alivio de la manera más rápida posible.',
    bookBtn: 'Solicitar una Cita',
    formsBtn: 'Descargar Formularios',
    items: [
      { num: '01', title: 'Haga su Cita', desc: 'Llame a nuestra oficina o use el formulario de contacto para programar. Los nuevos pacientes siempre son bienvenidos.' },
      { num: '02', title: 'Complete los Formularios', desc: 'Descargue y complete sus formularios con anticipación para ahorrar tiempo en su primera visita.' },
      { num: '03', title: 'Evaluación en la Oficina', desc: 'Nuestro médico realiza un examen completo, revisa las imágenes y determina un diagnóstico preciso.' },
      { num: '04', title: 'Inicie su Plan de Cuidado', desc: 'Reciba un plan de tratamiento individualizado a corto plazo para eliminar el dolor y restaurar su calidad de vida.' },
    ],
  },

  // ===== TESTIMONIALS =====
  testimonials: {
    tag: 'Historias de Pacientes',
    title: 'Lo Que Dicen Nuestros Pacientes',
    items: [
      { quote: 'El Dr. Garabo es excepcional. Después de años de dolor crónico de espalda finalmente pude obtener alivio. Su diagnóstico fue preciso, su tratamiento fue efectivo y su personal es increíblemente acogedor.', name: 'Maria T.', location: 'Clark, NJ' },
      { quote: 'Entré apenas pudiendo caminar por la ciática. En pocas semanas de tratamiento estaba de pie. No puedo recomendar suficientemente al Dr. Garabo — un cuidado que realmente cambia la vida.', name: 'Robert K.', location: 'Westfield, NJ' },
      { quote: 'Soy paciente desde 1998. El nivel de experiencia y la minuciosidad de sus exámenes y documentación no tienen comparación. El quiropráctico de referencia en la zona.', name: 'Sandra P.', location: 'Cranford, NJ' },
    ],
  },

  // ===== INSURANCE =====
  insurance: {
    tag: 'Seguros y Pagos',
    title: 'Hacemos el Acceso al Cuidado Fácil',
    subtitle: 'Clark Spine and Pain Relief acepta la mayoría de los seguros importantes incluyendo Medicare. También ofrecemos planes de pago convenientes para pacientes sin seguro o con seguro insuficiente.',
    items: [
      { name: 'Medicare', icon: 'medicare' },
      { name: 'Horizon BC/BS NJ\n(Proveedor Nivel 1)', icon: 'bcbs' },
      { name: 'La Mayoría de\nlos Seguros', icon: 'insurance_major' },
      { name: 'Pacientes sin\nSeguro o Parcial', icon: 'uninsured' },
      { name: 'Hackensack Meridian\n"Inner Circle"', icon: 'hackensack' },
      { name: 'Lesiones\nPersonales', icon: 'pi_cases' },
    ],
  },

  // ===== CTA BANNER =====
  cta: {
    title: '¿Listo para Obtener Alivio?',
    sub: 'Programe su primera cita hoy. El Dr. Garabo y su equipo están aquí para ayudarle.',
    bookBtn: 'Hacer una Cita',
    phone: '(908) 497-9440',
  },

  // ===== ABOUT PAGE =====
  about: {
    tag: 'Sobre Nuestra Práctica',
    heroTitle: 'Nuestra Práctica',
    heroSub: 'Sirviendo a Clark, NJ y comunidades aledañas desde 1991',
    bioTag: 'Biografía',
    bioTitle: 'Clark Spine and Pain Relief',
    p1: 'Clark Spine and Pain Relief (también conocido como Garabo Chiropractic Health Center, PC) ha servido a pacientes en Clark, Nueva Jersey y las comunidades circundantes desde 1991. Bajo la dirección del Dr. James Garabo, DC, la práctica busca el diagnóstico, pronóstico y plan de tratamiento más preciso para cada paciente.',
    p2: 'El Dr. Garabo es graduado del Palmer College of Chiropractic y un quiropráctico cualificado en trauma cuya experiencia abarca el diagnóstico y manejo del dolor mecánico de columna, interpretación de MRI y documentación médico-legal.',
    p3: 'Ofrecemos alivio suave, seguro, rápido y efectivo para el dolor de espalda, ciática, dolor de cuello, dolores de cabeza y dolor radicular. Nuestros planes de tratamiento son a corto plazo.',
    p4highlight1: 'Proveedor "Inner Circle" para empleados de Hackensack Meridian',
    p4and: ' y ',
    p4highlight2: 'Proveedor Nivel 1 de Horizon BC/BS de NJ',
    p4end: '.',
    credTag: 'Calificaciones',
    credTitle: 'Educación y Licencias',
    edu: {
      title: 'Educación',
      items: [
        { main: 'Doctor en Quiropráctica', sub: 'Palmer College of Chiropractic\nDavenport, IA · 1988' },
        { main: 'Junta Nacional de Examinadores Quiroprácticos, Parte 1 · 1986' },
        { main: 'Junta Nacional de Examinadores Quiroprácticos, Parte 2 · 1987' },
      ],
    },
    lic: {
      title: 'Licencias',
      items: [
        { main: 'Licencia de Nueva Jersey # MCO-3710', sub: '1989 – Presente (Activa)' },
        { main: 'Licencia de Pensilvania · 1988 (Inactiva)' },
        { main: 'Licencia de Massachusetts · 1989 (Inactiva)' },
      ],
    },
    occ: {
      title: 'Historial Laboral',
      items: [
        { main: 'Director Clínico', sub: 'Garabo Chiropractic Health Center, PC\nClark Spine and Pain Relief\nClark, NJ · 1991 – Presente', em: 'Cualificado en Trauma' },
        { main: 'Doctor Asociado', sub: 'Delano Family Chiropractic Center\nBloomfield, NJ · 1989 – 1991' },
      ],
    },
    postGrad: {
      title: 'Educación de Posgrado Seleccionada',
      items: [
        'Relaciones Éticas Médico-Legales, Documentación y Testimonio Legal',
        'Cuidado de Columna Interprofesional en Hospital',
        'Rehabilitación Quiropráctica y el Paradigma Funcional',
        'Datación por Edad de Discos Herniados por MRI',
        'Tendencias en el Tratamiento Espinal',
        'Neurología de la Biomecánica Espinal',
        'Identificación de Patología Espinal en MRI',
        'Inervación Central de la Ingeniería Biomecánica Espinal',
      ],
      source: 'División Post-Doctoral de la Academia de Quiropráctica / Cleveland University Kansas City · Long Island, NY · 2019',
    },
    contactCard: {
      orgName: 'Garabo Chiropractic Health Center, PC',
      address: '118 Westfield Avenue, Suites 3 & 4\nClark, Nueva Jersey 07066',
    },
  },

  // ===== SERVICES PAGE =====
  servicesPage: {
    tag: 'Lo Que Hacemos',
    heroTitle: 'Nuestros Servicios',
    heroSub: 'Atención quiropráctica integral — todo bajo un mismo techo.',
    conditionsLabel: 'Condiciones Tratadas:',
    ctaText: '¿Estuvo en un accidente o lucha con dolor crónico? Llámenos — podemos ayudar.',
    bookBtn: 'Hacer una Cita',
    categories: [
      {
        id: 'conditions',
        title: 'Condiciones que Tratamos',
        desc: 'Desde lesiones agudas hasta condiciones espinales crónicas, ofrecemos atención experta y personalizada.',
        services: [
          { icon: 'mva', title: 'Accidentes de Vehículo Motorizado', body: 'Las colisiones — incluso a bajas velocidades — pueden causar lesiones espinales duraderas que, sin tratamiento, llevan a dolor crónico y discapacidad. Nuestro equipo es Cualificado en Trauma y se especializa en la evaluación, diagnóstico, tratamiento y documentación médico-legal de lesiones relacionadas con MVM. Proporcionamos informes completos de lesiones para aseguradoras, abogados y médicos de referencia.', conditions: ['Latigazo (WAD)', 'Hernia de disco cervical', 'Hernia de disco lumbar', 'Lesiones de tejidos blandos', 'Radiculopatía por trauma', 'Fracturas / subluxaciones espinales', 'Dolores de cabeza post-concusión'] },
          { icon: 'back', title: 'Dolor de Espalda', body: 'El dolor de espalda superior, media e inferior es una de las razones más comunes por las que los pacientes visitan nuestra práctica. Empleamos ajustes espinales, terapias de tejidos blandos y estrategias de rehabilitación para reducir el dolor, restaurar la movilidad y prevenir la recurrencia.', conditions: ['Hernias de disco', 'Esguince/distensión lumbar', 'Síndrome facetario', 'Estenosis espinal', 'Manejo del dolor postoperatorio'] },
          { icon: 'neck', title: 'Dolor de Cuello', body: 'El dolor de columna cervical puede ser debilitante. Nuestro equipo se especializa en el diagnóstico y manejo del dolor mecánico cervical, incluyendo lesiones por latigazo de accidentes de auto. Nuestros tratamientos abordan la causa raíz, no solo el síntoma.', conditions: ['Hernia de disco cervical', 'Latigazo (WAD)', 'Radiculopatía cervical', 'Dolores de cabeza cervicogénicos', 'Espasmo muscular y tensión'] },
          { icon: 'sciatica', title: 'Ciática', body: 'La ciática causa un dolor agudo y ardiente que irradia desde la espalda baja a través de la nalga y hacia la pierna. Nuestro equipo identifica con precisión la fuente y crea un plan de tratamiento específico.', conditions: ['Hernia de disco lumbar', 'Síndrome del piriforme', 'Estenosis espinal', 'Espondilolistesis', 'Compresión de raíz nerviosa'] },
          { icon: 'headache', title: 'Dolores de Cabeza', body: 'Muchos dolores de cabeza tienen un componente espinal. Nuestro equipo está capacitado para diagnosticar y manejar dolores de cabeza cervicogénicos, de tensión, y apoya a pacientes con migrañas con cuidado quiropráctico conservador.', conditions: ['Dolores de cabeza cervicogénicos', 'Dolores de cabeza de tensión', 'Dolores de cabeza post-concusión', 'Neuralgia occipital'] },
          { icon: 'radicular', title: 'Dolor Radicular', body: 'El dolor radicular — dolor, entumecimiento o debilidad que irradia desde la columna hacia las extremidades — puede ser causado por patología discal, compresión de raíz nerviosa o degeneración espinal.', conditions: ['Radiculopatía de extremidad superior', 'Radiculopatía de extremidad inferior', 'Síndrome del túnel carpiano', 'Síndrome del desfiladero torácico'] },
        ],
      },
      {
        id: 'treatments',
        title: 'Tratamientos y Terapias',
        desc: 'Tratamientos prácticos y basados en evidencia diseñados para aliviar el dolor, restaurar la función y apoyar el proceso de curación natural del cuerpo.',
        services: [
          { icon: 'adjustment', title: 'Manipulación Espinal', body: 'La manipulación espinal (ajuste quiropráctico) es el pilar del cuidado quiropráctico. Nuestro equipo usa fuerza precisa y controlada para restaurar el movimiento articular adecuado, reducir el dolor, disminuir la inflamación y mejorar la función del sistema nervioso. Las técnicas se adaptan a la condición, edad y nivel de comodidad de cada paciente.', conditions: ['Ajustes cervicales', 'Ajustes torácicos', 'Ajustes lumbares', 'Manipulación de la articulación sacroilíaca', 'Alternativas de baja fuerza para pacientes sensibles'] },
          { icon: 'shockwave', title: 'Terapia de Ondas de Choque', body: 'La terapia de ondas de choque extracorpórea (ESWT) usa ondas de presión acústica para estimular la curación en tejidos blandos lesionados. Este tratamiento no invasivo aprobado por la FDA acelera la reparación de tejidos, reduce el dolor crónico y mejora la circulación sanguínea — especialmente efectivo para condiciones que no han respondido a terapias convencionales.', conditions: ['Tendinopatía crónica', 'Fascitis plantar', 'Depósitos calcíficos', 'Puntos gatillo musculares', 'Lesiones de tejidos blandos post-traumáticas'] },
        ],
      },
      {
        id: 'diagnostics',
        title: 'Diagnóstico y Evaluación',
        desc: 'Capacidades diagnósticas integrales en nuestra oficina para garantizar un diagnóstico preciso desde su primera visita.',
        services: [
          { icon: 'xray', title: 'Rayos X en Sitio', body: 'Nuestra oficina está equipada con tecnología de rayos X digital, lo que permite a nuestro equipo realizar imágenes en sitio durante su visita. Los rayos X ayudan a identificar desalineaciones espinales, fracturas, estrechamiento del espacio discal y anomalías estructurales críticas para el diagnóstico — especialmente en evaluaciones post-accidente.', conditions: ['Evaluación de alineación espinal', 'Identificación de fracturas', 'Evaluación del espacio discal', 'Detección de espondilolistesis', 'Análisis de biomecánica estructural'] },
          { icon: 'exam', title: 'Exámenes Físicos', body: 'Cada nuevo paciente recibe un examen físico y neurológico completo antes de comenzar el tratamiento. Nuestros exámenes incluyen pruebas ortopédicas, evaluación neurológica, evaluación del rango de movimiento y pruebas de fuerza muscular para construir un cuadro clínico preciso y un expediente médico legalmente sólido.', conditions: ['Pruebas ortopédicas', 'Evaluación neurológica', 'Evaluación del rango de movimiento', 'Pruebas de fuerza muscular', 'Evaluaciones de trauma post-accidente'] },
          { icon: 'mri', title: 'Interpretación de MRI', body: 'Nuestro equipo es experto en la interpretación de MRI de la columna, incluyendo identificación de patología discal, datación por edad de discos herniados y correlación de hallazgos de imagen con síntomas clínicos. Proporcionamos informes completos para casos médico-legales.', conditions: ['Análisis de hernias discales (T1, T2, STIR, Gradiente)', 'Datación por edad en MRI', 'Patología de médula espinal', 'Identificación de mielomalacia', 'Reportes médico-legales'] },
        ],
      },
    ],
  },

  // ===== PATIENT CENTER =====
  patientCenter: {
    tag: 'Centro de Pacientes',
    heroTitle: 'Centro de Pacientes',
    heroSub: 'Formularios, información y todo lo que necesita antes de su primera visita.',
    formsTag: 'Documentos del Paciente',
    formsTitle: 'Descargar Formularios del Paciente',
    formsSubtitle: 'Complete los formularios en la comodidad de su hogar y tráigalos a su cita — o envíelos por fax al',
    faxNote: 'Envíe los formularios completados por fax al',
    faxOr: ' o tráigalos a su cita. ¿Preguntas? Llame al',
    downloadBtn: '⬇ Descargar PDF',
    onlineTag: 'Solicitud en Línea',
    onlineTitle: 'Envíenos un Mensaje',
    onlineDesc: 'Use este formulario para solicitar una cita, hacer una pregunta o enviarnos información adicional antes de su visita.',
    callUs: 'Llámenos',
    emailUs: 'Escríbanos',
    faxFormsTo: 'Envíe Formularios por Fax a',
    nameRequired: 'Nombre Completo *',
    namePlaceholder: 'Juan García',
    emailRequired: 'Correo Electrónico *',
    emailPlaceholder: 'juan@ejemplo.com',
    phone: 'Teléfono',
    phonePlaceholder: '(908) 000-0000',
    subject: 'Asunto',
    subjectPlaceholder: 'Solicitud de Cita',
    messageRequired: 'Mensaje *',
    messagePlaceholder: 'Cuéntenos sobre su condición o haga una pregunta...',
    sendBtn: 'Enviar Mensaje',
    successTitle: '¡Mensaje Enviado!',
    successMsg: 'Gracias por comunicarse. Le responderemos dentro de un día hábil.',
    sendAnotherBtn: 'Enviar Otro Mensaje',
    faqTag: 'Preguntas Frecuentes',
    faqTitle: 'Preguntas Comunes',
    forms: [
      { icon: 'form_intake', title: 'Formulario de Ingreso de Nuevo Paciente', desc: 'Complete este formulario antes de su primera visita. Incluye información personal, historial médico y síntomas actuales.' },
      { icon: 'form_pi', title: 'Cuestionario de Lesión Personal', desc: 'Para pacientes involucrados en accidentes automovilísticos o casos de lesión personal. Documenta el mecanismo de la lesión y el inicio de los síntomas.' },
      { icon: 'form_insurance', title: 'Formulario de Paciente Asegurado', desc: 'Incluye su información de seguro médico y autorizaciones para facturación. Requerido para todos los pacientes asegurados.' },
      { icon: 'form_financial', title: 'Política Financiera y Aviso HIPAA', desc: 'La política financiera de nuestra oficina y el aviso de prácticas de privacidad HIPAA. Requerido para todos los nuevos pacientes.' },
    ],
    faqs: [
      { q: '¿Qué debo traer a mi primera cita?', a: 'Por favor traiga sus formularios de ingreso completados, una identificación válida con foto, su tarjeta de seguro, y cualquier imagen (rayos X, MRI) o informes relacionados con su condición.' },
      { q: '¿Aceptan mi seguro?', a: 'Aceptamos la mayoría de los planes de seguro importantes incluyendo Medicare. Somos un proveedor de Nivel 1 de Horizon BC/BS de NJ y proveedor "Inner Circle" para empleados de Hackensack Meridian. Llámenos al (908) 497-9440 para verificar su plan específico.' },
      { q: '¿Cuánto duran los planes de tratamiento?', a: 'Abogamos por planes de tratamiento enfocados a corto plazo diseñados para brindarle alivio y corrección de manera eficiente. La mayoría de los pacientes ven una mejoría significativa en unas pocas semanas.' },
      { q: '¿Puedo enviar mis formularios por fax antes de la cita?', a: '¡Sí! Puede enviar los formularios completados por fax al (908) 497-9442, o traerlos consigo el día de su cita.' },
    ],
  },

  // ===== CONTACT PAGE =====
  contact: {
    tag: 'Póngase en Contacto',
    heroTitle: 'Nos Encantaría Saber de Usted',
    heroSub: 'Solicite una cita o pregúntenos lo que necesite.',
    ourLocation: 'Nuestra Ubicación',
    locationTitle: 'Clark, Nueva Jersey',
    addressLabel: 'Dirección',
    phoneLabel: 'Teléfono',
    faxLabel: 'Fax',
    cellLabel: 'Celular',
    emailLabel: 'Correo Electrónico',
    officeHours: 'Horario de Oficina',
    closed: 'Cerrado',
    formTitle: 'Solicitar una Cita',
    formSub: 'Complete el formulario a continuación y nos pondremos en contacto para confirmar su visita.',
    firstNameLabel: 'Nombre *',
    firstNamePlaceholder: 'Juan',
    lastNameLabel: 'Apellido *',
    lastNamePlaceholder: 'García',
    errors: {
      firstName: 'El nombre debe tener entre 2 y 50 caracteres (solo letras, guiones y apóstrofes).',
      lastName:  'El apellido debe tener entre 2 y 50 caracteres (solo letras, guiones y apóstrofes).',
      email:     'Por favor ingrese una dirección de correo electrónico válida.',
      phone:     'Por favor ingrese un número de teléfono completo de 10 dígitos.',
      message:   'Por favor escriba un mensaje (al menos 10 caracteres).',
      rateLimit: (s) => `Por favor espere ${s} segundo${s !== 1 ? 's' : ''} antes de enviar de nuevo.`,
    },
    emailLabel2: 'Correo Electrónico *',
    emailPlaceholder: 'juan@ejemplo.com',
    phoneLabel2: 'Teléfono',
    phonePlaceholder: '(908) 000-0000',
    subjectLabel: 'Asunto',
    subjectPlaceholder: 'Cita de Nuevo Paciente',
    messageLabel: 'Mensaje *',
    messagePlaceholder: 'Describa su condición o lo que le gustaría discutir...',
    sendBtn: 'Enviar Mensaje',
    successTitle: '¡Mensaje Recibido!',
    successMsg: 'Gracias por contactar a Clark Spine and Pain Relief. Responderemos dentro de un día hábil.',
    sendAnotherBtn: 'Enviar Otro Mensaje',
    days: {
      monday: 'Lunes', tuesday: 'Martes', wednesday: 'Miércoles',
      thursday: 'Jueves', friday: 'Viernes', saturday: 'Sábado', sunday: 'Domingo',
    },
    times: {
      monday: '8:30 AM – 6:00 PM', tuesday: '8:30 AM – 12:30 PM',
      wednesday: '8:30 AM – 6:00 PM', thursday: 'Cerrado',
      friday: '8:30 AM – 6:00 PM', saturday: '8:30 AM – Mediodía', sunday: 'Cerrado',
    },
  },
}

export default es
