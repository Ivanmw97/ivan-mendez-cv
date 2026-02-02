export default {
  nav: {
    home: 'Inicio',
    cv: 'CV',
    blog: 'Blog',
    contact: 'Contacto'
  },
  landing: {
    title: "Hola, soy Iván",
    subtitle: 'Desarrollador de Software (Móvil y Web)',
    viewCv: 'Ver CV',
    readBlog: 'Leer Blog',
    contactMe: 'Contacto',
    alsoInSpanish: 'También en Inglés'
  },
  contact: {
    title: 'Contacto',
    name: 'Tu Nombre',
    email: 'Tu Email',
    message: 'Tu Mensaje',
    send: 'Enviar Mensaje',
    success: '¡Gracias! Tu mensaje ha sido enviado.'
  },
  personalInfo: {
    name: "Ivan Mendez",
    title: "Desarrollador de Software",
    summary: "Desarrollador de software versátil con más de 5 años de experiencia en desarrollo móvil y web. Experto en la creación de aplicaciones móviles nativas y multiplataforma usando Kotlin, Swift y Flutter, así como aplicaciones web con Java, Vue.js y React. Experiencia trabajando en equipos Agile, entregando soluciones escalables con código limpio y mantenible, siguiendo las mejores prácticas. Apasionado por la tecnología, el aprendizaje continuo y la entrega de experiencias de usuario de alta calidad.",
    email: "ivanmw97@gmail.com",
    location: "Santa Cruz de Tenerife, España",
    linkedin: "https://www.linkedin.com/in/ivanmw97/",
    github: "https://github.com/Ivanmw97"
  },
  sectionTitles: {
    experience: "Experiencia Laboral",
    skills: "Habilidades",
    projects: "Proyectos",
    downloadCV: "Descargar CV"
  },
  skills: [
    {
      category: "Desarrollo Móvil",
      items: ["Kotlin", "Java", "Swift", "Dart", "Flutter"]
    },
    {
      category: "Frontend",
      items: ["React", "Vue.js", "Vaadin", "JavaScript", "TypeScript", "HTML5", "CSS3"]
    },
    {
      category: "Backend",
      items: ["Node.js", "Express", "Python", "Django", "Java", "RESTful APIs", "GraphQL"]
    },
    {
      category: "Bases de Datos",
      items: ["Microsoft SQL Server", "Oracle"]
    },
    {
      category: "DevOps y Herramientas",
      items: ["Git", "Docker", "Jenkins", "CI/CD", "Agile/Scrum", "Android Studio", "Visual Studio Code", "IntelliJ IDEA"]
    }
  ],
  experiences: [
    {
      company: "CIB Group of companies",
      position: "Desarrollador de Software",
      period: "Mar. 2021 - Abr. 2025",
      location: "Las Palmas de Gran Canaria, España",
      achievements: [
        "Contribuí al desarrollo de aplicaciones móviles nativas y multiplataforma usando Kotlin, Swift y Flutter (Dart)",
        "Trabajé estrechamente con un equipo web en aplicaciones empresariales para un importante cliente alemán, usando Java, Vaadin y Vue.js",
        "Gestioné integraciones backend con varias bases de datos incluyendo Oracle y Microsoft SQL Server",
        "Participé activamente en flujos de trabajo Agile/Scrum, revisiones de código y procesos CI/CD con Git y Jenkins",
        "Entregué soluciones escalables y mantenibles tanto en plataformas móviles como web, asegurando alto rendimiento y usabilidad"
      ]
    },
    {
      company: "Freelance",
      position: "Desarrollador Móvil",
      period: "Ene. 2020 - Ene. 2021",
      location: "Tenerife, España",
      achievements: [
        "Diseñé y construí aplicaciones móviles nativas y multiplataforma adaptadas a las necesidades del cliente",
        "Utilicé tecnologías como Kotlin, Swift y Flutter para entregar apps de alto rendimiento y acabado profesional",
        "Gestioné todas las etapas del ciclo de desarrollo, desde la comunicación con el cliente hasta el despliegue de la app",
        "Incorporé mejores prácticas en control de versiones (Git), testing y gestión ágil de proyectos",
        "Proporcioné soporte post-lanzamiento y actualizaciones para asegurar la satisfacción del cliente a largo plazo"
      ]
    }
  ],
  projects: [
    {
      title: "DelYo - Seguimiento de Partidos de Pádel",
      description: "Registra tu trayectoria en pádel con simplicidad y privacidad. Una app Flutter multiplataforma con soporte para 6 idiomas, arquitectura offline-first e interfaz Material Design limpia para registrar partidos, gestionar jugadores y ver estadísticas.",
      technologies: ["Flutter", "Dart", "Hive", "Provider", "Material Design", "Internacionalización"],
      link: "https://github.com/Ivanmw97/DelYo"
    },
    {
      title: "KompKit",
      description: "Un kit de utilidades multiplataforma ligero que proporciona funciones esenciales para desarrollo Web (TypeScript), Android (Kotlin) y Flutter (Dart). Construido como monorepo con APIs idénticas entre plataformas, incluyendo debounce, validación de email y formateo de moneda.",
      technologies: ["TypeScript", "Kotlin", "Dart", "Monorepo", "Multiplataforma", "Utilidades"],
      link: "https://github.com/Kompkit/KompKit"
    },
    {
      title: "Financial Manager",
      description: "Una aplicación web moderna para gestionar tus finanzas personales, monitorear gastos y controlar tu presupuesto. Construida con Vue 3, TypeScript y Vite para velocidad, simplicidad y escalabilidad. Incluye dashboard con vista en tiempo real, gestión de presupuestos y gráficos visuales con integración de Supabase.",
      technologies: ["Vue 3", "TypeScript", "Vite", "Pinia", "Supabase", "TailwindCSS"],
      link: "https://ivanmw97.github.io/financial-manager"
    },
    {
      title: "CryptoTracker",
      description: "Una aplicación móvil desarrollada en Kotlin para seguimiento de criptomonedas en tiempo real. Incluye monitoreo de precios en vivo, información detallada con gráficos interactivos, funcionalidad de búsqueda, gestión de favoritos y temas dinámicos. Construida con arquitectura MVVM, Jetpack Compose y prácticas modernas de desarrollo Android.",
      technologies: ["Kotlin", "Jetpack Compose", "Ktor", "Room", "Koin", "MVVM", "Material Design 3"],
      link: "https://github.com/Ivanmw97/CryptoTracker"
    },
    {
      title: "NovaFlow",
      description: "Plataforma de Gestión de Tareas con IA diseñada por Modulum Studio. Un concepto elegante y moderno que muestra capacidades de diseño y desarrollo con tecnologías de vanguardia. Incluye diseño minimalista, internacionalización (Inglés/Español), modo oscuro y layouts responsivos que priorizan estética y funcionalidad.",
      technologies: ["Astro", "TypeScript", "TailwindCSS", "Internacionalización", "Modo Oscuro"],
      link: "https://modulum-studio.github.io/nova-flow/"
    }
  ]
};
