/* ═══════════════════════════════════════════════════════
   LBCode — script.js  (v2 — estilo javier-lopez.dev)
   Panel Navigation · Theme Toggle · i18n (ES/EN) ·
   Typewriter · Counters · Skill Bars · Spotlight · Form
   ═══════════════════════════════════════════════════════ */

'use strict';

/* ═══════════════════════════════════════════════════════
   TRANSLATIONS
   ═══════════════════════════════════════════════════════ */
const translations = {
  es: {
    // Nav
    'nav.home':       'Inicio',
    'nav.about':      'Sobre Mí',
    'nav.skills':     'Habilidades',
    'nav.services':   'Servicios',
    'nav.experience': 'Experiencia',
    'nav.projects':   'Proyectos',
    'nav.contact':    'Contacto',
    // Hero
    'hero.badge':           'Disponible para proyectos',
    'hero.greeting':        'Hola, soy',
    'hero.name':            'Luis Bravo',
    'hero.subtitle':        'Desarrollador de Software',
    'hero.desc':            'Estudiante de Ingeniería de Software desde República Dominicana, apasionado por construir soluciones digitales que generan impacto real.',
    'hero.btn.projects':    'Ver Proyectos',
    'hero.btn.contact':     'Contáctame',
    'hero.stat.years':      'Años estudiando',
    'hero.stat.tech':       'Tecnologías',
    'hero.stat.projects':   'Proyectos',
    // Char card
    'char.available':       'Disponible ahora',
    'char.role':            'Software Engineer Student',
    // About
    'about.title':          'Sobre mí',
    'about.subtitle':       'Desarrollador apasionado por crear soluciones de alto impacto',
    'about.meta.student':   'Estudiante de Ing. Software',
    'about.meta.location':  'Rep. Dominicana 🇩🇴',
    'about.meta.open':      'Disponible',
    'about.who':            '¿Quién soy?',
    'about.bio1':           'Soy Luis Bravo, desarrollador de software enfocado en construir productos digitales completos, desde el backend hasta el frontend, con atención a cada detalle.',
    'about.bio2':           'Estudio Ingeniería de Software en la República Dominicana. He trabajado en proyectos académicos y personales usando tecnologías como C#, Java, Spring Boot, .NET y más.',
    'about.bio3':           'Mi stack gira en torno a Spring Boot y .NET para backends robustos, con JavaScript y React en el frontend. Confío en Docker para asegurar consistencia entre entornos.',
    'about.bio4':           'Lo que me diferencia no es solo el stack, es la actitud. Creo en el código limpio, en la arquitectura bien pensada y en entregar soluciones que realmente funcionen.',
    'about.location':       'República Dominicana 🇩🇴',
    'about.available':      'Disponible',
    'about.open':           'Abierto a oportunidades freelance y prácticas',
    'about.open-sub':       'Proyectos · Colaboraciones · Pasantías',
    'about.contact-title':  '¿Hablamos?',
    'about.contact-sub':    'Disponible para proyectos',
    'about.contact-btn':    'Contactar →',
    // Skills
    'skills.title':         'Mi Stack Tecnológico',
    'skills.subtitle':      'Tecnologías que domino y con las que construyo soluciones',
    // Services
    'services.title':       'Lo que puedo hacer por ti',
    'services.subtitle':    'Soluciones de software especializadas para materializar ideas robustas',
    'services.featured':    'Especialidad',
    'svc.backend.title':    'Backend & Arquitectura',
    'svc.backend.desc':     'Diseño y desarrollo de APIs RESTful robustas y arquitecturas escalables basadas en microservicios, priorizando la seguridad y el rendimiento.',
    'svc.db.title':         'Bases de Datos SQL',
    'svc.db.desc':          'Modelado, normalización y optimización de bases de datos relacionales, procedimientos almacenados y funciones eficientes.',
    'svc.desktop.title':    'Software de Escritorio',
    'svc.desktop.desc':     'Aplicaciones empresariales sólidas con interfaces modernas bajo el patrón MVVM para automatizar procesos y reglas de negocio complejas.',
    'svc.frontend.title':   'Desarrollo Frontend',
    'svc.frontend.desc':    'Interfaces de usuario modernas, interactivas y responsivas, optimizadas para un consumo eficiente de servicios backend.',
    // Experience
    'exp.title':            'Experiencia',
    'exp.subtitle':         'Mi trayectoria académica, proyectos y formación técnica',
    'exp.section':          'Trayectoria Académica & Proyectos',
    'exp.job1.company':     'Universidad',
    'exp.job1.role':        'Estudiante de Ingeniería de Software',
    'exp.job1.date':        '2022 — Presente',
    'exp.job1.badge':       'Académico',
    'exp.job1.desc':        'Formación en fundamentos de software, estructuras de datos, bases de datos relacionales, programación orientada a objetos y arquitectura de sistemas.',
    'exp.job2.company':     'GameMatch Tracker',
    'exp.job2.role':        'Proyecto Personal — Backend Lead',
    'exp.job2.date':        '2024',
    'exp.job2.badge':       'Proyecto',
    'exp.job2.desc':        'Plataforma de seguimiento de videojuegos con 7 microservicios integrados con Steam y RAWG APIs, orquestados con Eureka y Docker.',
    'exp.job3.company':     'Gestor de Nómina MVVM',
    'exp.job3.role':        'Proyecto Académico — Full Developer',
    'exp.job3.date':        '2023 – 2024',
    'exp.job3.badge':       'Académico',
    'exp.job3.desc':        'Sistema en .NET 8 con patrón MVVM para automatización de deducciones, RBAC y reportes analíticos exportados a PDF y Excel.',
    'exp.job4.company':     'Pura Vida PC',
    'exp.job4.role':        'Proyecto Grupal — Fullstack Developer',
    'exp.job4.date':        '2024 – 2025',
    'exp.job4.badge':       'Proyecto',
    'exp.job4.desc':        'Plataforma web con 5 microservicios, Spring Cloud Gateway, seguridad JWT, notificaciones automatizadas y frontend en React 19.',
    'exp.job5.company':     'Formación Continua',
    'exp.job5.role':        'Cursos y Certificaciones Online',
    'exp.job5.date':        '2022 — Presente',
    'exp.job5.badge':       'Formación',
    'exp.job5.desc':        'Cursos en Spring Boot, Docker, arquitectura de software, diseño de APIs REST y patrones de diseño. Plataformas: Udemy, YouTube, documentación oficial.',
    // Projects
    'projects.title':       'Proyectos Destacados',
    'projects.subtitle':    'Proyectos y soluciones que reflejan mi capacidad técnica',
    'proj.github':          'GitHub',
    'proj.see-all':         'Ver todos en GitHub',
    // Contact
    'contact.title':        'Hablemos',
    'contact.subtitle':     '¿Tienes un proyecto en mente? Estoy disponible para colaborar',
    'contact.ready-title':  '¿Listo para trabajar juntos?',
    'contact.ready-text':   'Estoy abierto a proyectos freelance, colaboraciones académicas y posiciones de prácticas profesionales. ¡Contáctame!',
    'contact.email':        'Email',
    'contact.email-sub':    'Escríbeme directamente',
    'contact.location':     'Ubicación',
    'contact.location-val': 'República Dominicana',
    // Form
    'form.name':            'Nombre completo',
    'form.email':           'Correo electrónico',
    'form.service':         'Servicio de interés',
    'form.message':         'Mensaje',
    'form.submit':          'Enviar Mensaje',
    'form.sending':         'Enviando...',
    'form.success':         '¡Mensaje enviado! Me pondré en contacto pronto.',
    'form.ph.name':         'Tu nombre',
    'form.ph.email':        'tu@correo.com',
    'form.ph.message':      'Cuéntame sobre tu proyecto...',
    'form.opt.select':      'Seleccionar servicio...',
    'form.opt.web':         'Desarrollo Web',
    'form.opt.sql':         'Base de Datos SQL',
    'form.opt.csharp':      'Aplicación C#',
    'form.opt.support':     'Apoyo en Proyectos',
    'form.opt.other':       'Otro',
    'form.err.required':    'Campo requerido',
    'form.err.email':       'Email inválido',
    // Footer
    'footer.built':         'Construido con HTML & CSS · República Dominicana',
  },
  en: {
    // Nav
    'nav.home':       'Home',
    'nav.about':      'About',
    'nav.skills':     'Skills',
    'nav.services':   'Services',
    'nav.experience': 'Experience',
    'nav.projects':   'Projects',
    'nav.contact':    'Contact',
    // Hero
    'hero.badge':           'Available for projects',
    'hero.greeting':        "Hi, I'm",
    'hero.name':            'Luis Bravo',
    'hero.subtitle':        'Software Developer',
    'hero.desc':            'Software Engineering student from the Dominican Republic, passionate about building digital solutions that generate real impact.',
    'hero.btn.projects':    'View Projects',
    'hero.btn.contact':     'Contact Me',
    'hero.stat.years':      'Years studying',
    'hero.stat.tech':       'Technologies',
    'hero.stat.projects':   'Projects',
    // Char card
    'char.available':       'Available now',
    'char.role':            'Software Engineer Student',
    // About
    'about.title':          'About me',
    'about.subtitle':       'Developer passionate about creating high-impact solutions',
    'about.meta.student':   'Software Eng. Student',
    'about.meta.location':  'Dominican Republic 🇩🇴',
    'about.meta.open':      'Available',
    'about.who':            'Who am I?',
    'about.bio1':           "I'm Luis Bravo, a software developer focused on building complete digital products, from backend to frontend, with attention to every detail.",
    'about.bio2':           'I study Software Engineering in the Dominican Republic. I have worked on academic and personal projects using C#, Java, Spring Boot, .NET and more.',
    'about.bio3':           'My stack revolves around Spring Boot and .NET for robust backends, with JavaScript and React on the frontend. I rely on Docker to ensure consistency across environments.',
    'about.bio4':           "What sets me apart is not just the stack, it's the attitude. I believe in clean code, well-thought-out architecture and delivering solutions that actually work.",
    'about.location':       'Dominican Republic 🇩🇴',
    'about.available':      'Available',
    'about.open':           'Open to freelance opportunities and internships',
    'about.open-sub':       'Projects · Collaborations · Internships',
    'about.contact-title':  "Shall we talk?",
    'about.contact-sub':    'Available for projects',
    'about.contact-btn':    'Contact →',
    // Skills
    'skills.title':         'My Tech Stack',
    'skills.subtitle':      'Technologies I master and use to build solutions',
    // Services
    'services.title':       'What I can do for you',
    'services.subtitle':    'Specialized software solutions to bring robust ideas to life',
    'services.featured':    'Specialty',
    'svc.backend.title':    'Backend & Architecture',
    'svc.backend.desc':     'Design and development of robust RESTful APIs and scalable microservices architectures, prioritizing security and performance.',
    'svc.db.title':         'SQL Databases',
    'svc.db.desc':          'Modeling, normalization and optimization of relational databases, stored procedures and efficient functions.',
    'svc.desktop.title':    'Desktop Software',
    'svc.desktop.desc':     'Robust enterprise applications with modern interfaces using the MVVM pattern to automate complex business processes.',
    'svc.frontend.title':   'Frontend Development',
    'svc.frontend.desc':    'Modern, interactive and responsive user interfaces, optimized for efficient consumption of backend services.',
    // Experience
    'exp.title':            'Experience',
    'exp.subtitle':         'My academic journey, projects and technical training',
    'exp.section':          'Academic Journey & Projects',
    'exp.job1.company':     'University',
    'exp.job1.role':        'Software Engineering Student',
    'exp.job1.date':        '2022 — Present',
    'exp.job1.badge':       'Academic',
    'exp.job1.desc':        'Training in software fundamentals, data structures, relational databases, object-oriented programming and systems architecture.',
    'exp.job2.company':     'GameMatch Tracker',
    'exp.job2.role':        'Personal Project — Backend Lead',
    'exp.job2.date':        '2024',
    'exp.job2.badge':       'Project',
    'exp.job2.desc':        'Video game tracking platform with 7 microservices integrated with Steam and RAWG APIs, orchestrated with Eureka and Docker.',
    'exp.job3.company':     'Payroll Manager MVVM',
    'exp.job3.role':        'Academic Project — Full Developer',
    'exp.job3.date':        '2023 – 2024',
    'exp.job3.badge':       'Academic',
    'exp.job3.desc':        '.NET 8 system with MVVM pattern for deduction automation, RBAC and analytical reports exported to PDF and Excel.',
    'exp.job4.company':     'Pura Vida PC',
    'exp.job4.role':        'Group Project — Fullstack Developer',
    'exp.job4.date':        '2024 – 2025',
    'exp.job4.badge':       'Project',
    'exp.job4.desc':        'Web platform with 5 microservices, Spring Cloud Gateway, JWT security, automated notifications and React 19 frontend.',
    'exp.job5.company':     'Continuous Learning',
    'exp.job5.role':        'Online Courses & Certifications',
    'exp.job5.date':        '2022 — Present',
    'exp.job5.badge':       'Training',
    'exp.job5.desc':        'Courses in Spring Boot, Docker, software architecture, REST API design and design patterns. Platforms: Udemy, YouTube, official docs.',
    // Projects
    'projects.title':       'Featured Projects',
    'projects.subtitle':    'Projects and solutions that reflect my technical capabilities',
    'proj.github':          'GitHub',
    'proj.see-all':         'See all on GitHub',
    // Contact
    'contact.title':        "Let's Talk",
    'contact.subtitle':     'Have a project in mind? I am available to collaborate',
    'contact.ready-title':  'Ready to work together?',
    'contact.ready-text':   "I'm open to freelance projects, academic collaborations, and internship positions. Let's talk!",
    'contact.email':        'Email',
    'contact.email-sub':    'Write me directly',
    'contact.location':     'Location',
    'contact.location-val': 'Dominican Republic',
    // Form
    'form.name':            'Full name',
    'form.email':           'Email address',
    'form.service':         'Service of interest',
    'form.message':         'Message',
    'form.submit':          'Send Message',
    'form.sending':         'Sending...',
    'form.success':         'Message sent! I will get in touch soon.',
    'form.ph.name':         'Your name',
    'form.ph.email':        'you@email.com',
    'form.ph.message':      'Tell me about your project...',
    'form.opt.select':      'Select a service...',
    'form.opt.web':         'Web Development',
    'form.opt.sql':         'SQL Database',
    'form.opt.csharp':      'C# Application',
    'form.opt.support':     'Project Support',
    'form.opt.other':       'Other',
    'form.err.required':    'Required field',
    'form.err.email':       'Invalid email',
    // Footer
    'footer.built':         'Built with HTML & CSS · Dominican Republic',
  }
};

/* ═══════════════════════════════════════════════════════
   STATE
   ═══════════════════════════════════════════════════════ */
let currentLang  = localStorage.getItem('lang')  || 'es';
let currentTheme = localStorage.getItem('theme') || 'light'; // light default
let currentPanel = 'inicio';

/* ═══════════════════════════════════════════════════════
   PANEL NAVIGATION
   ═══════════════════════════════════════════════════════ */
function showPanel(panelId) {
  if (panelId === currentPanel) return;

  // Hide all
  document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));

  // Show target
  const target = document.getElementById('panel-' + panelId);
  if (!target) return;
  target.classList.add('active');
  currentPanel = panelId;

  // Scroll to top
  target.scrollTop = 0;
  window.scrollTo(0, 0);

  // Update desktop tabs
  document.querySelectorAll('.nav-tab').forEach(t => {
    t.classList.toggle('active', t.dataset.panel === panelId);
    t.setAttribute('aria-selected', t.dataset.panel === panelId ? 'true' : 'false');
  });

  // Update drawer tabs
  document.querySelectorAll('.drawer-tab').forEach(t => {
    t.classList.toggle('active', t.dataset.panel === panelId);
  });

  // Close mobile drawer
  closeMobileDrawer();

  // Animate skill bars if switching to habilidades
  if (panelId === 'habilidades') animateSkillBars();
}

/* Delegate all [data-panel] clicks */
document.addEventListener('click', (e) => {
  const trigger = e.target.closest('[data-panel]');
  if (trigger) {
    e.preventDefault();
    showPanel(trigger.dataset.panel);
  }
});

/* ═══════════════════════════════════════════════════════
   THEME TOGGLE
   ═══════════════════════════════════════════════════════ */
function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  currentTheme = theme;
  localStorage.setItem('theme', theme);
}

function toggleTheme() {
  applyTheme(currentTheme === 'dark' ? 'light' : 'dark');
}

document.getElementById('themeToggle')?.addEventListener('click', toggleTheme);
applyTheme(currentTheme); // apply on load

/* ═══════════════════════════════════════════════════════
   i18n — LANGUAGE TOGGLE
   ═══════════════════════════════════════════════════════ */
function applyLang(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);
  document.documentElement.lang = lang;

  const t = translations[lang] || translations.es;

  // Text nodes
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key  = el.dataset.i18n;
    const text = t[key];
    if (text !== undefined) el.textContent = text;
  });

  // Placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key  = el.dataset.i18nPlaceholder;
    const text = t[key];
    if (text !== undefined) el.placeholder = text;
  });

  // Lang toggle button UI
  const active   = document.getElementById('langActive');
  const inactive = document.getElementById('langInactive');
  if (active && inactive) {
    active.textContent   = lang === 'es' ? 'ES' : 'EN';
    inactive.textContent = lang === 'es' ? 'EN' : 'ES';
  }
}

function toggleLang() {
  applyLang(currentLang === 'es' ? 'en' : 'es');
}

document.getElementById('langToggle')?.addEventListener('click', toggleLang);
applyLang(currentLang); // apply on load

/* ═══════════════════════════════════════════════════════
   MOBILE HAMBURGER DRAWER
   ═══════════════════════════════════════════════════════ */
const navToggle = document.getElementById('navToggle');
const navDrawer = document.getElementById('navDrawer');

function closeMobileDrawer() {
  navToggle?.classList.remove('active');
  navDrawer?.classList.remove('open');
  navToggle?.setAttribute('aria-expanded', 'false');
  navDrawer?.setAttribute('aria-hidden', 'true');
}

navToggle?.addEventListener('click', () => {
  const isOpen = navDrawer.classList.toggle('open');
  navToggle.classList.toggle('active', isOpen);
  navToggle.setAttribute('aria-expanded', String(isOpen));
  navDrawer.setAttribute('aria-hidden', String(!isOpen));
});

/* ═══════════════════════════════════════════════════════
   TYPEWRITER
   ═══════════════════════════════════════════════════════ */
(function initTypewriter() {
  const el = document.getElementById('typewriter');
  if (!el) return;

  const phrasesList = {
    es: ['Backend Engineer', 'C# Developer', 'Java Dev', 'API Builder', 'SQL Wizard'],
    en: ['Backend Engineer', 'C# Developer', 'Java Dev', 'API Builder', 'SQL Wizard'],
  };

  let idx = 0, charIdx = 0, deleting = false;

  function type() {
    const phrases = phrasesList[currentLang] || phrasesList.es;
    const phrase  = phrases[idx % phrases.length];
    let speed;

    el.textContent = deleting
      ? phrase.slice(0, charIdx - 1)
      : phrase.slice(0, charIdx + 1);

    if (deleting) { charIdx--; speed = 45; }
    else          { charIdx++; speed = 90; }

    if (!deleting && charIdx === phrase.length) { speed = 1800; deleting = true; }
    else if (deleting && charIdx === 0)          { deleting = false; idx++; speed = 400; }

    setTimeout(type, speed);
  }
  setTimeout(type, 1200);
})();

/* ═══════════════════════════════════════════════════════
   ANIMATED COUNTERS
   ═══════════════════════════════════════════════════════ */
(function initCounters() {
  const counters = document.querySelectorAll('.stat-number[data-count]');
  if (!counters.length) return;

  function animateNum(el) {
    const target = +el.dataset.count;
    const step   = 16;
    const inc    = target / (900 / step);
    let cur      = 0;
    const timer  = setInterval(() => {
      cur += inc;
      if (cur >= target) { cur = target; clearInterval(timer); }
      el.textContent = Math.floor(cur) + '+';
    }, step);
  }

  const io = new IntersectionObserver(
    entries => entries.forEach(e => {
      if (e.isIntersecting) { animateNum(e.target); io.unobserve(e.target); }
    }),
    { threshold: 0.5 }
  );
  counters.forEach(c => io.observe(c));
})();

/* ═══════════════════════════════════════════════════════
   SKILL BARS
   ═══════════════════════════════════════════════════════ */
let skillBarsAnimated = false;

function animateSkillBars() {
  if (skillBarsAnimated) return;
  skillBarsAnimated = true;
  setTimeout(() => {
    document.querySelectorAll('.skill-progress').forEach(b => b.classList.add('animated'));
  }, 100);
}

/* ═══════════════════════════════════════════════════════
   SPOTLIGHT EFFECT
   ═══════════════════════════════════════════════════════ */
document.addEventListener('mousemove', (e) => {
  document.querySelectorAll('[data-spotlight]').forEach(el => {
    const rect = el.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width)  * 100;
    const y = ((e.clientY - rect.top)  / rect.height) * 100;
    el.style.setProperty('--x', `${x}%`);
    el.style.setProperty('--y', `${y}%`);
  });
});

/* ═══════════════════════════════════════════════════════
   CHARACTER CARD MOUSE TILT
   ═══════════════════════════════════════════════════════ */
(function initCharTilt() {
  const wrap = document.getElementById('charCard');
  const card = wrap?.querySelector('.char-card');
  if (!wrap || !card) return;

  wrap.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const cx   = rect.left + rect.width  / 2;
    const cy   = rect.top  + rect.height / 2;
    const dx   = (e.clientX - cx) / (rect.width  / 2);
    const dy   = (e.clientY - cy) / (rect.height / 2);
    card.style.transform = `perspective(900px) rotateY(${dx * 10}deg) rotateX(${-dy * 8}deg) scale(1.02)`;
  });

  wrap.addEventListener('mouseleave', () => {
    card.style.transition = 'transform 0.6s cubic-bezier(0.23,1,0.32,1)';
    card.style.transform  = '';
    setTimeout(() => { card.style.transition = ''; }, 650);
  });
})();

/* ═══════════════════════════════════════════════════════
   CONTACT FORM
   ═══════════════════════════════════════════════════════ */
(function initForm() {
  const form      = document.getElementById('contactForm');
  const submitBtn = document.getElementById('contact-submit-btn');
  const success   = document.getElementById('formSuccess');
  if (!form) return;

  function t(key) { return (translations[currentLang] || translations.es)[key] || key; }

  function validateField(input) {
    const errorEl = input.closest('.form-group')?.querySelector('.form-error');
    let msg = '';

    if (input.required && !input.value.trim()) {
      msg = t('form.err.required');
    } else if (input.type === 'email' && input.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value)) {
      msg = t('form.err.email');
    } else if (input.minLength > 0 && input.value.length < input.minLength && input.value) {
      msg = `Mínimo ${input.minLength} caracteres`;
    }

    if (errorEl) errorEl.textContent = msg;
    input.classList.toggle('error', !!msg);
    return !msg;
  }

  form.querySelectorAll('input, textarea').forEach(f => {
    f.addEventListener('blur', () => validateField(f));
    f.addEventListener('input', () => { if (f.classList.contains('error')) validateField(f); });
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let valid = true;
    form.querySelectorAll('input[required], textarea[required]').forEach(f => {
      if (!validateField(f)) valid = false;
    });
    if (!valid) return;

    const btnText = submitBtn.querySelector('.btn-text');
    btnText.textContent = t('form.sending');
    submitBtn.disabled  = true;

    setTimeout(() => {
      form.reset();
      success.classList.add('visible');
      btnText.textContent = t('form.submit');
      submitBtn.disabled  = false;
      setTimeout(() => success.classList.remove('visible'), 5000);
    }, 1500);
  });
})();

/* ═══════════════════════════════════════════════════════
   FOOTER YEAR
   ═══════════════════════════════════════════════════════ */
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

/* ═══════════════════════════════════════════════════════
   SCROLL-IN ANIMATIONS (Intersection Observer)
   ═══════════════════════════════════════════════════════ */
(function initScrollAnimations() {
  const style = document.createElement('style');
  style.textContent = `
    .anim-fadein { opacity: 0; transform: translateY(20px); transition: opacity 0.55s ease, transform 0.55s ease; }
    .anim-fadein.visible { opacity: 1; transform: translateY(0); }
  `;
  document.head.appendChild(style);

  const targets = document.querySelectorAll(
    '.skill-card, .service-card, .project-card, .timeline-card, .about-bio-card, .bento-card, .code-snippet, .contact-card, .contact-form'
  );

  targets.forEach((el, i) => {
    el.classList.add('anim-fadein');
    el.style.transitionDelay = `${(i % 4) * 0.06}s`;
  });

  const io = new IntersectionObserver(
    entries => entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        io.unobserve(e.target);
      }
    }),
    { threshold: 0.08 }
  );
  targets.forEach(el => io.observe(el));
})();