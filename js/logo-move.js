let lastScroll = window.scrollY;

window.addEventListener('scroll', () => {
  const logo = document.getElementById('logo');
  const currentScroll = window.scrollY;
  const scrollThreshold = 200; // pragul după care se activează clasa

  if (currentScroll > lastScroll && currentScroll > scrollThreshold) {
    // Scroll în jos și am depășit pragul
    logo.classList.add('scrolled');
  } else if (currentScroll < lastScroll && currentScroll < 100) {
    // Scroll în sus spre top
    logo.classList.remove('scrolled');
  }

  lastScroll = currentScroll;
});
