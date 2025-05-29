function showCookieBanner() {
  document.getElementById('cookie-banner').style.display = 'block';
}

function loadIframes() {
  document.querySelectorAll('iframe[data-src]').forEach(iframe => {
    iframe.src = iframe.dataset.src;
  });
}

document.addEventListener("DOMContentLoaded", () => {
  // Verificăm dacă utilizatorul a acceptat cookies
  if (localStorage.getItem('cookiesAccepted') === 'true') {
    loadIframes();
  } else {
    showCookieBanner();
  }

  document.getElementById('accept-cookies').addEventListener('click', () => {
    localStorage.setItem('cookiesAccepted', 'true');
    document.getElementById('cookie-banner').style.display = 'none';
    loadIframes();
  });
});
