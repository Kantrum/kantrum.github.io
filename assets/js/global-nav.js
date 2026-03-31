(() => {
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const navLinks = document.querySelector('.nav-links');

  if (!mobileMenuBtn || !navLinks) return;

  const setExpanded = (expanded) => {
    mobileMenuBtn.setAttribute('aria-expanded', expanded ? 'true' : 'false');
  };

  const closeMenu = () => {
    mobileMenuBtn.classList.remove('active');
    navLinks.classList.remove('active');
    document.body.style.overflow = '';
    setExpanded(false);
  };

  const openMenu = () => {
    mobileMenuBtn.classList.add('active');
    navLinks.classList.add('active');
    document.body.style.overflow = 'hidden';
    setExpanded(true);
  };

  mobileMenuBtn.addEventListener('click', () => {
    const isOpen = navLinks.classList.contains('active');
    if (isOpen) closeMenu();
    else openMenu();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMenu();
  });

  navLinks.addEventListener('click', (e) => {
    const target = e.target;
    if (target && target.tagName === 'A') closeMenu();
  });

  // Scroll effect (match home feel, but keep it simple)
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    const onScroll = () => {
      if (window.scrollY > 50) {
        navbar.classList.add('navbar--scrolled');
      } else {
        navbar.classList.remove('navbar--scrolled');
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }
})();

