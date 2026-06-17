'use strict';

/* ================================================================
   MATRIX CODE RAIN — Canvas Animation
   ================================================================ */
(function initMatrixRain() {
  const canvas = document.getElementById('matrixCanvas');
  if (!canvas) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const ctx = canvas.getContext('2d');

  // Caracteres de programación
  const chars = '01アイウエオabcdefABCDEF{}[]()<>=><=!==&&||+=->function return class const let var import export async await if else for while switch case break void null true false console.log() new this super extends implements public private static interface enum type'.split('');

  const fontSize = 14;
  let columns, drops;
  let animFrame;

  function resize() {
    canvas.width  = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    columns = Math.floor(canvas.width / fontSize);
    drops   = new Array(columns).fill(0).map(() => Math.random() * -50);
  }

  function draw() {
    // Fade effect
    ctx.fillStyle = 'rgba(4, 13, 8, 0.055)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.font = `${fontSize}px 'JetBrains Mono', monospace`;

    for (let i = 0; i < columns; i++) {
      const char = chars[Math.floor(Math.random() * chars.length)];
      const y = drops[i] * fontSize;

      // Color gradient: bright green at head, darker further back
      const brightness = Math.random();
      if (brightness > 0.96) {
        // Ultra bright head
        ctx.fillStyle = '#ffffff';
      } else if (brightness > 0.85) {
        ctx.fillStyle = '#00ff88';
      } else if (brightness > 0.6) {
        ctx.fillStyle = '#00cc6a';
      } else {
        ctx.fillStyle = '#006633';
      }

      ctx.fillText(char, i * fontSize, y);

      // Reset drop randomly after passing bottom
      if (y > canvas.height && Math.random() > 0.975) {
        drops[i] = 0;
      }
      drops[i] += 0.5;
    }

    animFrame = requestAnimationFrame(draw);
  }

  window.addEventListener('resize', () => {
    cancelAnimationFrame(animFrame);
    resize();
    draw();
  }, { passive: true });

  // Pause when tab hidden (performance)
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      cancelAnimationFrame(animFrame);
    } else {
      draw();
    }
  });

  resize();
  draw();
})();

/* ================================================================
   TERMINAL ANIMATION
   ================================================================ */
(function initTerminal() {
  const cmdEl    = document.getElementById('termCmd');
  const outputEl = document.getElementById('terminalOutput');
  if (!cmdEl || !outputEl) return;

  const sessions = [
    {
      cmd: 'whoami',
      output: [
        { key: '▸', value: 'Desarrollador de Software', cls: 'bool' },
        { key: '▸', value: 'Estudiante de Ingeniería',  cls: 'str'  },
        { key: '▸', value: 'República Dominicana 🇩🇴',   cls: 'value'},
      ],
    },
    {
      cmd: 'cat skills.json',
      output: [
        { key: 'csharp:',      value: '"Intermedio"',   cls: 'str'  },
        { key: 'sql:',         value: '"Intermedio"',   cls: 'str'  },
        { key: 'javascript:',  value: '"En progreso"',  cls: 'value'},
        { key: 'html:',        value: '"Intermedio"',   cls: 'str'  },
        { key: 'css:',         value: '"Intermedio"',   cls: 'str'  },
        { key: 'disponible:',  value: 'true',           cls: 'bool' },
      ],
    },
    {
      cmd: 'git log --oneline -4',
      output: [
        { key: 'a1b2c3d', value: 'feat: portfolio web completado', cls: 'str' },
        { key: '4e5f6g7', value: 'fix: responsive en móviles',     cls: 'value'},
        { key: '8h9i0j1', value: 'feat: chatbot integrado',        cls: 'bool' },
        { key: 'k2l3m4n', value: 'docs: README actualizado',       cls: 'str' },
      ],
    },
    {
      cmd: 'node server.js',
      output: [
        { key: '✓', value: 'Servidor iniciado en :3000', cls: 'bool'  },
        { key: '✓', value: 'Base de datos conectada',    cls: 'bool'  },
        { key: '>', value: 'Listo para recibir peticiones', cls: 'str'},
      ],
    },
  ];

  let sessionIdx = 0;

  function typeCommand(text, callback) {
    cmdEl.textContent = '';
    let i = 0;
    const cursor = document.querySelector('.t-cursor');
    if (cursor) cursor.style.display = 'inline';

    const timer = setInterval(() => {
      cmdEl.textContent += text[i];
      i++;
      if (i >= text.length) {
        clearInterval(timer);
        if (cursor) cursor.style.display = 'none';
        setTimeout(callback, 300);
      }
    }, 60);
  }

  function showOutput(lines, callback) {
    outputEl.innerHTML = '';
    let i = 0;

    function addLine() {
      if (i >= lines.length) {
        setTimeout(callback, 2000);
        return;
      }

      const line  = lines[i];
      const div   = document.createElement('div');
      div.className = 't-out-line';
      div.innerHTML = `<span class="t-arrow">${line.key}</span> <span class="t-${line.cls}">${line.value}</span>`;
      div.style.opacity = '0';
      div.style.transform = 'translateX(-8px)';
      outputEl.appendChild(div);

      requestAnimationFrame(() => {
        div.style.transition = 'opacity 0.25s ease, transform 0.25s ease';
        div.style.opacity = '1';
        div.style.transform = 'translateX(0)';
      });

      i++;
      setTimeout(addLine, 160);
    }

    addLine();
  }

  function clearAndNext() {
    // Fade out output
    outputEl.style.transition = 'opacity 0.4s ease';
    outputEl.style.opacity = '0';

    setTimeout(() => {
      outputEl.innerHTML = '';
      outputEl.style.opacity = '1';
      cmdEl.textContent = '';
      const cursor = document.querySelector('.t-cursor');
      if (cursor) cursor.style.display = 'inline';
      sessionIdx = (sessionIdx + 1) % sessions.length;
      runSession();
    }, 500);
  }

  function runSession() {
    const session = sessions[sessionIdx];
    setTimeout(() => {
      typeCommand(session.cmd, () => {
        showOutput(session.output, clearAndNext);
      });
    }, 600);
  }

  // Start after short delay
  setTimeout(runSession, 1000);
})();

/* ================================================================
   NAVBAR
   ================================================================ */
(function initNavbar() {
  const navbar   = document.getElementById('navbar');
  const toggle   = document.getElementById('navToggle');
  const menu     = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
    highlightActiveLink();
    handleBackToTop();
  }, { passive: true });

  if (!toggle) return;
  toggle.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('open');
    toggle.classList.toggle('active', isOpen);
    toggle.setAttribute('aria-expanded', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.remove('open');
      toggle.classList.remove('active');
      toggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    });
  });

  document.addEventListener('click', (e) => {
    if (!navbar.contains(e.target) && menu.classList.contains('open')) {
      menu.classList.remove('open');
      toggle.classList.remove('active');
      toggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }
  });

  function highlightActiveLink() {
    const scrollPos = window.scrollY + 100;
    let current = '';
    sections.forEach(s => { if (scrollPos >= s.offsetTop) current = s.id; });
    navLinks.forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === '#' + current);
    });
  }
})();

/* ================================================================
   TYPEWRITER EFFECT
   ================================================================ */
(function initTypewriter() {
  const el = document.getElementById('typewriter');
  if (!el) return;

  const phrases = [
    'C# & SQL Developer',
    'Estudiante de Ing. Software',
    'Desarrollador Web',
    'Apasionado por el código',
    'Construyendo el futuro ',
  ];

  let phraseIndex = 0, charIndex = 0, isDeleting = false, speed = 90;

  function type() {
    const phrase = phrases[phraseIndex];
    if (isDeleting) {
      el.textContent = phrase.substring(0, charIndex - 1);
      charIndex--;
      speed = 45;
    } else {
      el.textContent = phrase.substring(0, charIndex + 1);
      charIndex++;
      speed = 90;
    }

    if (!isDeleting && charIndex === phrase.length) { speed = 1800; isDeleting = true; }
    else if (isDeleting && charIndex === 0)         { isDeleting = false; phraseIndex = (phraseIndex + 1) % phrases.length; speed = 400; }

    setTimeout(type, speed);
  }

  setTimeout(type, 1200);
})();

/* ================================================================
   SCROLL REVEAL
   ================================================================ */
(function initReveal() {
  const elements = document.querySelectorAll(
    '.section-header, .skill-card, .service-card, .project-card, ' +
    '.about-image-wrapper, .about-content, .contact-card, .contact-form, ' +
    '.stat, .highlight-item'
  );

  elements.forEach(el => {
    el.classList.add('reveal');
    const siblings = Array.from(el.parentNode.children).filter(c => c.classList.contains('reveal'));
    const idx = siblings.indexOf(el);
    if (idx > 0 && idx <= 5) el.classList.add(`reveal-delay-${idx}`);
  });

  const io = new IntersectionObserver(
    entries => entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); }
    }),
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );

  elements.forEach(el => io.observe(el));
})();

/* ================================================================
   ANIMATED COUNTERS
   ================================================================ */
(function initCounters() {
  const counters = document.querySelectorAll('.stat-number[data-count]');
  if (!counters.length) return;

  function animate(el) {
    const target = parseInt(el.dataset.count, 10);
    const suffix = '+';
    const step   = 16;
    const inc    = target / (1500 / step);
    let current  = 0;

    const timer = setInterval(() => {
      current += inc;
      if (current >= target) { current = target; clearInterval(timer); }
      el.textContent = Math.floor(current) + suffix;
    }, step);
  }

  const io = new IntersectionObserver(
    entries => entries.forEach(e => { if (e.isIntersecting) { animate(e.target); io.unobserve(e.target); } }),
    { threshold: 0.5 }
  );

  counters.forEach(c => io.observe(c));
})();

/* ================================================================
   SKILL BARS
   ================================================================ */
(function initSkillBars() {
  const bars = document.querySelectorAll('.skill-progress[data-width]');
  if (!bars.length) return;

  const io = new IntersectionObserver(
    entries => entries.forEach(e => {
      if (e.isIntersecting) {
        requestAnimationFrame(() => { e.target.style.width = e.target.dataset.width + '%'; });
        io.unobserve(e.target);
      }
    }),
    { threshold: 0.3 }
  );

  bars.forEach(b => io.observe(b));
})();

/* ================================================================
   CONTACT FORM
   ================================================================ */
(function initContactForm() {
  const form    = document.getElementById('contactForm');
  const success = document.getElementById('formSuccess');
  if (!form) return;

  const isValidEmail = e => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);

  function setError(input, msg) {
    input.classList.add('error');
    const err = input.parentNode.querySelector('.form-error');
    if (err) err.textContent = msg;
  }

  function clearError(input) {
    input.classList.remove('error');
    const err = input.parentNode.querySelector('.form-error');
    if (err) err.textContent = '';
  }

  function validateField(input) {
    const val = input.value.trim();
    if (!val)                                      { setError(input, 'Este campo es obligatorio'); return false; }
    if (input.type === 'email' && !isValidEmail(val)) { setError(input, 'Correo inválido');            return false; }
    clearError(input);
    return true;
  }

  form.querySelectorAll('.form-input[required]').forEach(input => {
    input.addEventListener('blur',  () => validateField(input));
    input.addEventListener('input', () => clearError(input));
  });

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const fields  = form.querySelectorAll('.form-input[required]');
    let isValid   = true;
    fields.forEach(f => { if (!validateField(f)) isValid = false; });
    if (!isValid) return;

    const btn  = document.getElementById('contact-submit-btn');
    const text = btn.querySelector('.btn-text');
    btn.disabled = true;
    text.textContent = 'Enviando...';

    await new Promise(r => setTimeout(r, 1400));

    form.reset();
    btn.disabled = false;
    text.textContent = 'Enviar Mensaje';
    success.classList.add('show');
    setTimeout(() => success.classList.remove('show'), 5000);
  });
})();

/* ================================================================
   BACK TO TOP
   ================================================================ */
function handleBackToTop() {
  const btn = document.getElementById('backToTop');
  if (btn) btn.classList.toggle('visible', window.scrollY > 400);
}

(function initBackToTop() {
  const btn = document.getElementById('backToTop');
  if (btn) btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
})();

/* ================================================================
   YEAR
   ================================================================ */
(function () {
  const el = document.getElementById('year');
  if (el) el.textContent = new Date().getFullYear();
})();

/* ================================================================
   KEYBOARD NAV
   ================================================================ */
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    const menu   = document.getElementById('navMenu');
    const toggle = document.getElementById('navToggle');
    if (menu && menu.classList.contains('open')) {
      menu.classList.remove('open');
      toggle.classList.remove('active');
      toggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }
  }
});

/* ================================================================
   BOTUI CHATBOT INTEGRATION
   ================================================================ */
(function initBotUI() {
  if (typeof BotUI === 'undefined') return;
  
  const toggleBtn = document.getElementById('chat-toggle-btn');
  const windowWrapper = document.getElementById('chat-window-wrapper');
  const iconOpen = document.getElementById('chat-icon-open');
  const iconClose = document.getElementById('chat-icon-close');
  const widgetContainer = document.getElementById('chat-widget-container');
  
  let isOpen = false;
  let isInitialized = false;
  let botui;

  function toggleChat() {
    isOpen = !isOpen;
    if (isOpen) {
      windowWrapper.style.display = 'flex';
      iconOpen.style.display = 'none';
      iconClose.style.display = 'block';
      widgetContainer.classList.add('is-open');
      if (!isInitialized) {
        startBotFlow();
        isInitialized = true;
      }
    } else {
      windowWrapper.style.display = 'none';
      iconOpen.style.display = 'block';
      iconClose.style.display = 'none';
      widgetContainer.classList.remove('is-open');
    }
  }

  toggleBtn.addEventListener('click', toggleChat);

  function startBotFlow() {
    botui = new BotUI('my-botui-app');
    
    botui.message.add({
      delay: 500,
      loading: true,
      content: '¡Hola! Soy el asistente virtual de Luis. 👋'
    }).then(() => {
      return botui.message.add({
        delay: 800,
        loading: true,
        content: '¿En qué puedo ayudarte hoy?'
      });
    }).then(() => {
      return botui.action.button({
        delay: 500,
        action: [
          { text: '¿Qué servicios ofreces?', value: 'servicios' },
          { text: 'Ver proyectos', value: 'proyectos' },
          { text: 'Contactar a Luis', value: 'contacto' }
        ]
      });
    }).then(function (res) {
      if (res.value === 'servicios') {
        botui.message.add({
          delay: 800,
          loading: true,
          content: 'Luis ofrece Desarrollo Web, Bases de Datos SQL, Apps de Escritorio C# y Apoyo académico. 💻'
        }).then(askMore);
      } else if (res.value === 'proyectos') {
        botui.message.add({
          delay: 800,
          loading: true,
          content: 'Puedes ver todos los proyectos de Luis en su GitHub: [github.com/luisbravobello](https://github.com/luisbravobello)'
        }).then(askMore);
      } else {
        botui.message.add({
          delay: 800,
          loading: true,
          content: 'Puedes enviarle un mensaje directamente usando el formulario en la sección de [Contacto](#contacto). 📩'
        }).then(() => {
          setTimeout(() => {
             document.getElementById('contacto').scrollIntoView({behavior: 'smooth'});
             toggleChat();
          }, 1500);
        });
      }
    });
  }

  function askMore() {
    botui.message.add({
      delay: 1500,
      loading: true,
      content: '¿Hay algo más en lo que pueda ayudarte?'
    }).then(() => {
      return botui.action.button({
        delay: 500,
        action: [
          { text: 'Sí, volver al menú', value: 'menu' },
          { text: 'No, gracias', value: 'fin' }
        ]
      });
    }).then(res => {
      if (res.value === 'menu') {
        // Reiniciar flujo básico sin la bienvenida larga
        botui.action.button({
          delay: 500,
          action: [
            { text: '¿Qué servicios ofreces?', value: 'servicios' },
            { text: 'Ver proyectos', value: 'proyectos' },
            { text: 'Contactar a Luis', value: 'contacto' }
          ]
        }).then(function (r) {
           if (r.value === 'servicios') {
             botui.message.add({ delay: 600, content: 'Luis ofrece Desarrollo Web, Bases de Datos SQL, Apps de Escritorio C# y Apoyo académico. 💻' }).then(askMore);
           } else if (r.value === 'proyectos') {
             botui.message.add({ delay: 600, content: 'Puedes ver todos los proyectos de Luis en su GitHub: [github.com/luisbravobello](https://github.com/luisbravobello)' }).then(askMore);
           } else {
             botui.message.add({ delay: 600, content: 'Usa el formulario en la sección de Contacto. 📩' });
             setTimeout(toggleChat, 2000);
           }
        });
      } else {
        botui.message.add({
          delay: 500,
          content: '¡Perfecto! Que tengas un excelente día. 👋'
        });
      }
    });
  }
})();