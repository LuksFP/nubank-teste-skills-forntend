/* ═══════════════════════════════════════════════════════════
   NUBANK LANDING PAGE — script.js
   ═══════════════════════════════════════════════════════════ */

'use strict';

/* ─────────────────────────────────────────
   1. NAVBAR — scroll state
───────────────────────────────────────── */
(function initNavbar() {
  const navbar    = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');

  // Scroll state
  let lastY = 0;
  let ticking = false;

  function onScroll() {
    if (!ticking) {
      requestAnimationFrame(() => {
        const y = window.scrollY;
        if (y > 30) {
          navbar.classList.add('scrolled');
        } else {
          navbar.classList.remove('scrolled');
        }
        lastY = y;
        ticking = false;
      });
      ticking = true;
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // run once on load

  // Mobile menu toggle
  hamburger.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.toggle('open');
    hamburger.classList.toggle('open', isOpen);
    hamburger.setAttribute('aria-expanded', isOpen);
  });

  // Close mobile menu on link click
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
      hamburger.classList.remove('open');
    });
  });
})();


/* ─────────────────────────────────────────
   2. 3D CARD TILT — mouse tracking
───────────────────────────────────────── */
(function initCardTilt() {
  const cardScene = document.getElementById('cardScene');
  const mainCard  = document.getElementById('mainCard');
  const cardShine = document.getElementById('cardShine');

  if (!cardScene || !mainCard) return;

  let rafId = 0;
  let isHovered = false;

  // Spring smoothing
  let currentTiltX = 0, currentTiltY = 0;
  let targetTiltX  = 0, targetTiltY  = 0;
  const SPRING = 0.12;

  function lerp(a, b, t) { return a + (b - a) * t; }

  function animate() {
    if (!isHovered) {
      // Spring back to flat
      currentTiltX = lerp(currentTiltX, 0, SPRING);
      currentTiltY = lerp(currentTiltY, 0, SPRING);
    } else {
      currentTiltX = lerp(currentTiltX, targetTiltX, SPRING);
      currentTiltY = lerp(currentTiltY, targetTiltY, SPRING);
    }

    const tx = currentTiltX;
    const ty = currentTiltY;

    mainCard.style.transform =
      `perspective(900px) rotateX(${tx}deg) rotateY(${ty}deg) scale3d(${isHovered ? 1.04 : 1}, ${isHovered ? 1.04 : 1}, 1)`;

    // Shadow depth
    const shadowStrength = isHovered ? 0.6 : 0.4;
    const offsetX = -ty * 1.5;
    const offsetY =  tx * 1.5;
    mainCard.style.boxShadow =
      `${offsetX}px ${20 + offsetY}px 60px rgba(130,10,209,${shadowStrength}), 0 0 0 1px rgba(212,180,255,0.15)`;

    if (Math.abs(currentTiltX) > 0.02 || Math.abs(currentTiltY) > 0.02 || isHovered) {
      rafId = requestAnimationFrame(animate);
    }
  }

  cardScene.addEventListener('mousemove', (e) => {
    const rect = cardScene.getBoundingClientRect();
    const dx = (e.clientX - (rect.left + rect.width  / 2)) / (rect.width  / 2);
    const dy = (e.clientY - (rect.top  + rect.height / 2)) / (rect.height / 2);

    targetTiltX = -dy * 14;
    targetTiltY =  dx * 14;

    // Move sheen
    const px = ((e.clientX - rect.left) / rect.width)  * 100;
    const py = ((e.clientY - rect.top)  / rect.height) * 100;
    if (cardShine) {
      cardShine.style.background =
        `radial-gradient(ellipse 65% 55% at ${px}% ${py}%, rgba(255,255,255,0.16), transparent 70%)`;
      cardShine.style.transition = 'none';
    }
  });

  cardScene.addEventListener('mouseenter', () => {
    isHovered = true;
    cancelAnimationFrame(rafId);
    rafId = requestAnimationFrame(animate);
  });

  cardScene.addEventListener('mouseleave', () => {
    isHovered = false;
    if (cardShine) {
      cardShine.style.background = 'radial-gradient(ellipse 65% 55% at 50% 50%, rgba(255,255,255,0.08), transparent 70%)';
      cardShine.style.transition = 'all 0.5s ease';
    }
    cancelAnimationFrame(rafId);
    rafId = requestAnimationFrame(animate);
  });

  // Touch tilt support
  cardScene.addEventListener('touchmove', (e) => {
    const touch = e.touches[0];
    const rect  = cardScene.getBoundingClientRect();
    const dx = (touch.clientX - (rect.left + rect.width  / 2)) / (rect.width  / 2);
    const dy = (touch.clientY - (rect.top  + rect.height / 2)) / (rect.height / 2);
    targetTiltX = -dy * 8;
    targetTiltY =  dx * 8;
    isHovered = true;
    cancelAnimationFrame(rafId);
    rafId = requestAnimationFrame(animate);
  }, { passive: true });

  cardScene.addEventListener('touchend', () => {
    isHovered = false;
    cancelAnimationFrame(rafId);
    rafId = requestAnimationFrame(animate);
  });
})();


/* ─────────────────────────────────────────
   3. SCROLL REVEAL — IntersectionObserver
───────────────────────────────────────── */
(function initScrollReveal() {
  if (!window.IntersectionObserver) {
    // Fallback: just show everything
    document.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // animate once
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
})();


/* ─────────────────────────────────────────
   4. PARALLAX HERO — subtle on scroll
───────────────────────────────────────── */
(function initParallax() {
  const hero    = document.getElementById('hero');
  const heroBg  = hero?.querySelector('.hero-bg');
  const heroCards = hero?.querySelector('.floating-bg-cards');

  if (!hero || !heroBg) return;

  let ticking = false;

  function onScroll() {
    if (!ticking) {
      requestAnimationFrame(() => {
        const y = window.scrollY;
        // Subtle parallax — bg moves slower than scroll
        heroBg.style.transform  = `translateY(${y * 0.3}px)`;
        if (heroCards) heroCards.style.transform = `translateY(${y * 0.15}px)`;
        ticking = false;
      });
      ticking = true;
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
})();


/* ─────────────────────────────────────────
   5. TESTIMONIALS CAROUSEL
───────────────────────────────────────── */
(function initCarousel() {
  const track   = document.getElementById('tcTrack');
  const prevBtn = document.getElementById('tcPrev');
  const nextBtn = document.getElementById('tcNext');
  const dotsContainer = document.getElementById('tcDots');

  if (!track) return;

  const cards = track.querySelectorAll('.tc-card');
  const dots  = dotsContainer ? dotsContainer.querySelectorAll('.tc-dot') : [];
  const total = cards.length;
  let current = 0;
  let intervalId = null;
  let itemsPerView = 1;

  function getItemsPerView() {
    if (window.innerWidth >= 1024) return 3;
    if (window.innerWidth >= 768)  return 2;
    return 1;
  }

  function goTo(idx) {
    itemsPerView = getItemsPerView();
    const maxIdx = total - itemsPerView;
    current = Math.max(0, Math.min(idx, maxIdx));

    // Calculate card width including gap
    const cardWidth = track.parentElement.offsetWidth;
    const gapPx = 24;
    const itemWidth = (cardWidth - (gapPx * (itemsPerView - 1))) / itemsPerView;
    const offset = current * (itemWidth + gapPx);

    track.style.transform = `translateX(-${offset}px)`;

    // Update dots
    dots.forEach((dot, i) => dot.classList.toggle('active', i === current));

    // Update card highlight
    cards.forEach((card, i) => {
      if (i === current) {
        card.classList.add('tc-card-main');
        card.style.background = '';
        card.style.boxShadow  = '';
        card.style.borderColor = '';
      } else {
        card.classList.remove('tc-card-main');
      }
    });
  }

  function next() { goTo(current + 1 >= total - getItemsPerView() + 1 ? 0 : current + 1); }
  function prev() { goTo(current - 1 < 0 ? total - getItemsPerView() : current - 1); }

  nextBtn?.addEventListener('click', () => { next(); resetInterval(); });
  prevBtn?.addEventListener('click', () => { prev(); resetInterval(); });

  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      goTo(parseInt(dot.dataset.idx, 10));
      resetInterval();
    });
  });

  function startInterval() {
    intervalId = setInterval(next, 5000);
  }
  function resetInterval() {
    clearInterval(intervalId);
    startInterval();
  }

  // Touch / swipe
  let touchStartX = 0;
  track.addEventListener('touchstart', e => {
    touchStartX = e.touches[0].clientX;
    clearInterval(intervalId);
  }, { passive: true });
  track.addEventListener('touchend', e => {
    const delta = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(delta) > 40) delta > 0 ? next() : prev();
    startInterval();
  });

  // Pause on hover
  track.addEventListener('mouseenter', () => clearInterval(intervalId));
  track.addEventListener('mouseleave', startInterval);

  // Init
  goTo(0);
  startInterval();

  // Recalc on resize
  window.addEventListener('resize', () => goTo(current), { passive: true });
})();


/* ─────────────────────────────────────────
   6. PRODUCT CARD MICRO-INTERACTIONS
───────────────────────────────────────── */
(function initProductCards() {
  document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('mouseenter', (e) => {
      // Subtle magnetic attraction
      const rect = card.getBoundingClientRect();
      const cx = rect.left + rect.width  / 2;
      const cy = rect.top  + rect.height / 2;
      const dx = (e.clientX - cx) / rect.width  * 6;
      const dy = (e.clientY - cy) / rect.height * 4;
      card.style.transform = `translateY(-6px) rotateY(${dx}deg) rotateX(${-dy}deg)`;
    });

    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const cx = rect.left + rect.width  / 2;
      const cy = rect.top  + rect.height / 2;
      const dx = (e.clientX - cx) / rect.width  * 5;
      const dy = (e.clientY - cy) / rect.height * 3;
      card.style.transform = `translateY(-6px) rotateY(${dx}deg) rotateX(${-dy}deg)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });
})();


/* ─────────────────────────────────────────
   7. STAT CARDS — count-up animation
───────────────────────────────────────── */
(function initCountUp() {
  const statValues = document.querySelectorAll('.stat-value');
  if (!statValues.length) return;

  const numericStats = [];
  statValues.forEach(el => {
    const text = el.textContent.trim();
    const match = text.match(/^([\d,.]+)/);
    if (match) {
      const end = parseFloat(match[1].replace(',', '.'));
      const suffix = text.slice(match[0].length);
      const prefix = '';
      numericStats.push({ el, end, suffix, prefix });
      el.textContent = '0' + suffix;
    }
  });

  if (!numericStats.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const stat = numericStats.find(s => s.el === entry.target);
      if (!stat) return;

      const duration = 1600;
      const start = performance.now();
      const endVal = stat.end;

      function update(now) {
        const progress = Math.min((now - start) / duration, 1);
        const ease = 1 - Math.pow(1 - progress, 3); // cubic ease-out
        const current = endVal * ease;
        const display = Number.isInteger(endVal) ? Math.floor(current) : current.toFixed(1);
        stat.el.textContent = display + stat.suffix;
        if (progress < 1) requestAnimationFrame(update);
      }
      requestAnimationFrame(update);
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.5 });

  numericStats.forEach(({ el }) => observer.observe(el));
})();


/* ─────────────────────────────────────────
   8. SMOOTH SCROLL — anchor links
───────────────────────────────────────── */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const offset = 80; // navbar height
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});


/* ─────────────────────────────────────────
   9. BUTTON RIPPLE EFFECT
───────────────────────────────────────── */
(function initRipple() {
  document.querySelectorAll('.btn-shimmer, .btn-primary, .btn-outline-light, .btn-outline-white').forEach(btn => {
    btn.style.position = 'relative';
    btn.style.overflow = 'hidden';

    btn.addEventListener('click', function(e) {
      const rect = this.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const size = Math.max(rect.width, rect.height) * 2;

      const ripple = document.createElement('span');
      ripple.style.cssText = `
        position:absolute;
        border-radius:50%;
        background:rgba(255,255,255,0.25);
        width:${size}px; height:${size}px;
        left:${x - size/2}px; top:${y - size/2}px;
        pointer-events:none;
        transform:scale(0);
        animation:rippleAnim 0.6s ease-out forwards;
      `;
      this.appendChild(ripple);
      setTimeout(() => ripple.remove(), 700);
    });
  });

  // Inject ripple keyframe
  const style = document.createElement('style');
  style.textContent = `
    @keyframes rippleAnim {
      to { transform: scale(1); opacity: 0; }
    }
  `;
  document.head.appendChild(style);
})();


/* ─────────────────────────────────────────
   10. FLOATING CARDS — pause on tab hidden
───────────────────────────────────────── */
document.addEventListener('visibilitychange', () => {
  const cards = document.querySelectorAll('.bg-card');
  cards.forEach(c => {
    c.style.animationPlayState = document.hidden ? 'paused' : 'running';
  });
});
