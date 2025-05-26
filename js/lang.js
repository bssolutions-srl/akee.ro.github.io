const texts = {
    ro: {
        navAbout: "ACASĂ",
        navServices: "SERVICII",
        sectionTitleServices: "Servicii oferite",
        serviceProducingTitle: "PRODUCȚIE",
        serviceProducingDesc: "DAM VIAȚĂ IDEILOR TALE CU PRODUCȚIE PROFESIONALĂ DE MUZICĂ — DE LA BEAT LA PIESĂ COMPLETĂ.",
        serviceMixingTitle: "MIXAJ",
        serviceMixingDesc: "CURAT, ECHILIBRAT, PUTERNIC. SERVICIUL NOSTRU DE MIXAJ FACE PIESA TA CLARĂ ȘI PREGĂTITĂ PENTRU RADIO.",
        serviceMasteringTitle: "MASTERIZARE",
        serviceMasteringDesc: "TARE, POLISAT, PREGĂTIT PENTRU INDUSTRIE. MASTERIZAREA CARE DĂ PIESIEI TALE ATINGEREA FINALĂ.",
        buyBeatsTitle: "Cumpără beat-uri",
        contactTitle: "Contact",
        contactEmail: "Email: ",
        contactPhone: "Telefon: "
    },
    en: {
        navAbout: "HOME",
        navServices: "SERVICES",
        sectionTitleServices: "Offered services",
        serviceProducingTitle: "PRODUCING",
        serviceProducingDesc: "WE BRING YOUR IDEAS TO LIFE WITH PROFESSIONAL MUSIC PRODUCTION — FROM BEAT TO FULL TRACK.",
        serviceMixingTitle: "MIXING",
        serviceMixingDesc: "CLEAN, BALANCED, POWERFUL. OUR MIXING SERVICE MAKES YOUR TRACK SOUND CLEAR AND RADIO-READY.",
        serviceMasteringTitle: "MASTERING",
        serviceMasteringDesc: "LOUD, POLISHED, INDUSTRY-READY. MASTERING THAT GIVES YOUR SONG THE FINAL TOUCH.",
        buyBeatsTitle: "Buy beats",
        contactTitle: "Contact",
        contactEmail: "Email: ",
        contactPhone: "Phone: "
    }
};

function switchLanguage(lang) {
    localStorage.setItem('language', lang); // ✅ salvăm limba

    // Nav links
    const navLinks = document.querySelectorAll("#nav-links a");
    if (navLinks.length >= 2) {
        navLinks[0].textContent = texts[lang].navAbout;
        navLinks[1].textContent = texts[lang].navServices;
    }

    // Services section
    document.querySelector('#servicii > .section-title').textContent = texts[lang].sectionTitleServices;

    const cards = document.querySelectorAll('#servicii .card');
    if(cards.length === 3) {
        cards[0].querySelector('h3').textContent = texts[lang].serviceProducingTitle;
        cards[0].querySelector('p').textContent = texts[lang].serviceProducingDesc;

        cards[1].querySelector('h3').textContent = texts[lang].serviceMixingTitle;
        cards[1].querySelector('p').textContent = texts[lang].serviceMixingDesc;

        cards[2].querySelector('h3').textContent = texts[lang].serviceMasteringTitle;
        cards[2].querySelector('p').textContent = texts[lang].serviceMasteringDesc;
    }

    // Buy beats section
    document.querySelector('#buy_beats > .section-title').textContent = texts[lang].buyBeatsTitle;

    // Contact section
    document.querySelector('#contact > .section-title').textContent = texts[lang].contactTitle;

    const footerContact = document.querySelector('.footer-contact');
    if (footerContact) {
        footerContact.querySelector('p:nth-child(1)').innerHTML = `${texts[lang].contactEmail} <a href="mailto:exemplu@email.com">akeeprod@gmail.com</a>`;
        footerContact.querySelector('p:nth-child(2)').innerHTML = `${texts[lang].contactPhone} <a href="tel:+40712345678">+40 758 701 140</a>`;
    }

    // Update active button styling
    document.querySelectorAll('.lang').forEach(btn => {
        btn.classList.toggle('active', btn.id === 'btn-' + lang || btn.id === 'btn-' + lang + '-mobile');
    });
}

// ✅ Adaugă evenimente
document.getElementById('btn-ro')?.addEventListener('click', () => switchLanguage('ro'));
document.getElementById('btn-en')?.addEventListener('click', () => switchLanguage('en'));
document.getElementById('btn-ro-mobile')?.addEventListener('click', () => switchLanguage('ro'));
document.getElementById('btn-en-mobile')?.addEventListener('click', () => switchLanguage('en'));

// ✅ Aplică limba salvată la încărcare
window.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('language') || 'en';
    switchLanguage(savedLang);
});
