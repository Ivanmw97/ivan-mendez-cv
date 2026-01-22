export default {
  nav: {
    home: 'Home',
    cv: 'CV',
    blog: 'Blog',
    contact: 'Contact'
  },
  landing: {
    title: "Hi, I'm Iván",
    subtitle: 'Software Developer (Mobile & Web)',
    viewCv: 'View CV',
    readBlog: 'Read Blog',
    contactMe: 'Contact',
    alsoInSpanish: 'Also in Spanish'
  },
  contact: {
    title: 'Contact',
    name: 'Your Name',
    email: 'Your Email',
    message: 'Your Message',
    send: 'Send Message',
    success: 'Thanks! Your message has been sent.'
  },
  personalInfo: {
    name: "Ivan Mendez",
    title: "Software Developer",
    summary: "Versatile software developer with 5+ years of experience in mobile and web development. Skilled in building native and cross-platform mobile apps using Kotlin, Swift, and Flutter, as well as web applications with Java, Vue.js, and React. Experienced working in Agile teams, delivering scalable solutions with clean, maintainable code and strong adherence to best practices. Passionate about technology, continuous learning, and delivering high-quality user experiences.",
    email: "ivanmw97@gmail.com",
    location: "Santa Cruz de Tenerife, Spain",
    linkedin: "https://www.linkedin.com/in/ivanmw97/",
    github: "https://github.com/Ivanmw97"
  },
  skills: [
    {
      category: "Mobile Development",
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
      category: "Databases",
      items: ["Microsoft SQL Server", "Oracle"]
    },
    {
      category: "DevOps & Tools",
      items: ["Git", "Docker", "Jenkins", "CI/CD", "Agile/Scrum", "Android Studio", "Visual Studio Code", "IntelliJ IDEA"]
    }
  ],
  experiences: [
    {
      company: "CIB Group of companies",
      position: "Software Developer",
      period: "Mar. 2021 - Apr. 2025",
      location: "Las Palmas de Gran Canaria, Spain",
      achievements: [
        "Contributed to the development of native and cross-platform mobile applications using Kotlin, Swift, and Flutter (Dart)",
        "Worked closely with a web team on enterprise-grade applications for a major German client, using Java, Vaadin, and Vue.js",
        "Handled backend integrations with various databases including Oracle and Microsoft SQL Server",
        "Actively participated in Agile/Scrum workflows, code reviews, and CI/CD processes with Git and Jenkins",
        "Delivered scalable and maintainable solutions across both mobile and web platforms, ensuring high performance and usability"
      ]
    },
    {
      company: "Freelance",
      position: "Mobile Developer",
      period: "Jan. 2020 - Jan. 2021",
      location: "Tenerife, Spain",
      achievements: [
        "Designed and built native and cross-platform mobile applications tailored to client needs",
        "Utilized technologies like Kotlin, Swift, and Flutter to deliver performant and polished apps",
        "Managed all stages of the development lifecycle, from client communication to app deployment",
        "Incorporated best practices in version control (Git), testing, and agile project management",
        "Provided post-launch support and updates to ensure long-term client satisfaction"
      ]
    }
  ],
  projects: [
    {
      title: "DelYo - Padel Match Tracker",
      description: "Track your padel journey with simplicity and privacy. A cross-platform Flutter app supporting 6 languages, offline-first architecture, and clean Material Design interface for recording matches, managing players, and viewing statistics.",
      technologies: ["Flutter", "Dart", "Hive", "Provider", "Material Design", "Internationalization"],
      link: "https://github.com/Ivanmw97/DelYo"
    },
    {
      title: "KompKit",
      description: "A lightweight cross-platform utility kit providing essential functions for Web (TypeScript), Android (Kotlin), and Flutter (Dart) development. Built as a monorepo with identical APIs across platforms, featuring debounce, email validation, and currency formatting utilities.",
      technologies: ["TypeScript", "Kotlin", "Dart", "Monorepo", "Cross-platform", "Utilities"],
      link: "https://github.com/Kompkit/KompKit"
    },
    {
      title: "Financial Manager",
      description: "A modern web application to track your personal finances, monitor spending, and stay on top of your budget. Built with Vue 3, TypeScript, and Vite for speed, simplicity, and scalability. Features dashboard with real-time overview, budget management, and visual charts with Supabase integration.",
      technologies: ["Vue 3", "TypeScript", "Vite", "Pinia", "Supabase", "TailwindCSS"],
      link: "https://ivanmw97.github.io/financial-manager"
    },
    {
      title: "CryptoTracker",
      description: "A mobile application developed in Kotlin for real-time cryptocurrency tracking. Features live price monitoring, detailed cryptocurrency information with interactive charts, search functionality, favorites management, and dynamic themes. Built with MVVM architecture, Jetpack Compose, and modern Android development practices.",
      technologies: ["Kotlin", "Jetpack Compose", "Ktor", "Room", "Koin", "MVVM", "Material Design 3"],
      link: "https://github.com/Ivanmw97/CryptoTracker"
    },
    {
      title: "NovaFlow",
      description: "AI-Powered Task Management platform designed by Modulum Studio. A sleek and modern concept showcasing design and development capabilities with cutting-edge technologies. Features clean minimalist design, seamless internationalization (English/Spanish), dark mode support, and responsive layouts that prioritize both aesthetics and functionality.",
      technologies: ["Astro", "TypeScript", "TailwindCSS", "Internationalization", "Dark Mode"],
      link: "https://modulum-studio.github.io/nova-flow/"
    }
  ]
};