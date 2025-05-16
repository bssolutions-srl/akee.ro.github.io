
    let lastScroll = window.scrollY;

  window.addEventListener('scroll', () => {
    const logo = document.getElementById('logo');
    const currentScroll = window.scrollY;

    if (currentScroll > lastScroll) {
      // Scroll în jos
      logo.classList.add('scrolled');
    } else if (currentScroll < lastScroll && currentScroll < 100) {
      // Scroll în sus (dar doar până în top)
      logo.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
  });

