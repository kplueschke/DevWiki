document.addEventListener("DOMContentLoaded", () => {
    initApp();
});

function initApp() {
    renderNavigation();
    renderContent();
    setupRouting();
    setupSearch();
    setupMobileMenu();
}

function renderNavigation() {
    const navUl = document.getElementById("nav-list");
    if (!navUl) return;

    let navHtml = "";
    wikiData.forEach((sec) => {
        // Deep linking hash
        navHtml += `<li><a href="#${sec.id}" id="l-${sec.id}">${sec.nav_title}</a></li>`;
    });
    navUl.innerHTML = navHtml;
}

function renderContent() {
    const mainContainer = document.getElementById("main-container");
    if (!mainContainer) return;

    let mainHtml = "";
    wikiData.forEach((sec) => {
        mainHtml += `<div id="${sec.id}" class="content-section">`;
        if (sec.sec_title) {
            mainHtml += `<h2 class="section-title">${sec.sec_title}</h2>`;
        }
        mainHtml += `<div class="grid">`;

        sec.cards.forEach((card) => {
            if (card.onclick) {
                mainHtml += `<div class="card" onclick="${card.onclick}">`;
            } else {
                mainHtml += `<div class="card">`;
            }
            mainHtml += `<span class="term">${card.term}</span><div class="desc">${card.desc}</div></div>`;
        });

        mainHtml += `</div></div>`;
    });

    mainContainer.innerHTML = mainHtml;
}

function setupRouting() {
    window.addEventListener("hashchange", handleRouting);

    // Initial load
    if (!window.location.hash) {
        if (wikiData.length > 0) {
            window.location.hash = "#" + wikiData[0].id;
        }
    } else {
        handleRouting();
    }
}

function handleRouting() {
    const hash = window.location.hash.substring(1); // remove '#'
    if (!hash) return;

    // Content umschalten
    document.querySelectorAll('.content-section').forEach(s => s.classList.remove('active'));
    const activeSection = document.getElementById(hash);
    if (activeSection) {
        activeSection.classList.add('active');
    }

    // Sidebar-Links umschalten
    document.querySelectorAll('nav a').forEach(l => l.classList.remove('active'));
    const activeLink = document.getElementById('l-' + hash);
    if (activeLink) {
        activeLink.classList.add('active');
    }

    // Suche zurücksetzen
    const searchInput = document.getElementById('search');
    if (searchInput) {
        searchInput.value = "";
        filter();
    }

    // Close mobile menu on navigation
    closeMobileMenu();
}

function setupSearch() {
    const searchInput = document.getElementById('search');
    if (searchInput) {
        // Change from onkeyup to input event for better UX
        searchInput.addEventListener("input", filter);
    }
}

function filter() {
    let input = document.getElementById('search').value.toLowerCase();
    let sections = document.querySelectorAll('.content-section');

    // Wenn das Suchfeld leer ist, zeige nur die aktuell aktive Sektion
    if (input.length === 0) {
        const hash = window.location.hash.substring(1);
        sections.forEach(sec => {
            sec.style.display = (sec.id === hash) ? 'block' : 'none';
        });
        return;
    }

    // Wenn gesucht wird: Gehe durch jede Sektion
    sections.forEach(section => {
        let cards = section.querySelectorAll('.card');
        let hasVisibleCards = false;

        cards.forEach(card => {
            let text = card.innerText.toLowerCase();
            if (text.includes(input)) {
                card.style.display = "block";
                hasVisibleCards = true; // Wir haben einen Treffer in dieser Sektion
            } else {
                card.style.display = "none";
            }
        });

        // Zeige die Sektion nur an, wenn sie mindestens eine passende Karte hat
        section.style.display = hasVisibleCards ? "block" : "none";
    });
}

function openPDF(dateiname) {
    const modal = document.getElementById('pdfModal');
    const iframe = document.getElementById('pdfFrame');

    iframe.src = dateiname;
    modal.style.display = "block";
}

function closePDF() {
    const modal = document.getElementById('pdfModal');
    const iframe = document.getElementById('pdfFrame');

    modal.style.display = "none";
    iframe.src = "";
    document.body.style.overflow = "auto";
}

// Schließen mit der "Escape"-Taste
document.addEventListener('keydown', function(event) {
    if (event.key === "Escape") {
        closePDF();
    }
});

function setupMobileMenu() {
    const toggleBtn = document.getElementById('menu-toggle-btn');
    if (toggleBtn) {
        toggleBtn.addEventListener('click', () => {
            document.querySelector('nav').classList.toggle('open');
        });
    }
}

function closeMobileMenu() {
    const nav = document.querySelector('nav');
    if (nav && nav.classList.contains('open')) {
        nav.classList.remove('open');
    }
}

// Global functions accessible via onclick in cards/modals
window.openPDF = openPDF;
window.closePDF = closePDF;
