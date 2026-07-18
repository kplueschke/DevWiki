document.addEventListener("DOMContentLoaded", () => {
    initApp();
});

function initApp() {
    renderNavigation();
    renderContent();
    setupRouting();
    setupSearch();
    setupMobileMenu();
    setupControls();
    setupScroll();
    registerServiceWorker();
}

function registerServiceWorker() {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('./sw.js')
            .then(reg => console.log('Service Worker registered', reg))
            .catch(err => console.error('Service Worker registration failed', err));
    }
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
            const isFavorite = getFavorites().includes(card.term);
            const activeClass = isFavorite ? 'active' : '';

            if (card.onclick) {
                mainHtml += `<div class="card" onclick="${card.onclick}" data-term="${card.term}">`;
            } else {
                mainHtml += `<div class="card" data-term="${card.term}">`;
            }

            // Escape quotes for inline event handlers
            const escapedTerm = card.term.replace(/'/g, "\\'").replace(/"/g, '&quot;');
            const escapedDesc = card.desc.replace(/'/g, "\\'").replace(/"/g, '&quot;');

            // Card actions (Favorite & Copy)
            mainHtml += `<div class="card-actions">
                <button class="copy-btn" onclick="copyTerm(event, '${escapedTerm}', '${escapedDesc}')" title="Kopieren">📋</button>
                <button class="star-btn ${activeClass}" onclick="toggleFavorite(event, '${escapedTerm}')" title="Favorit">★</button>
            </div>`;

            mainHtml += `<span class="term">${card.term}</span>`;

            // Tags
            if (card.tags && card.tags.length > 0) {
                mainHtml += `<div class="tags-container">`;
                card.tags.forEach(tag => {
                    mainHtml += `<span class="tag-badge">${tag}</span>`;
                });
                mainHtml += `</div>`;
            }

            mainHtml += `<div class="desc" onclick="revealQuizDesc(event, this)">${card.desc}</div></div>`;
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
    const showOnlyFavorites = document.getElementById('favorites-toggle') ? document.getElementById('favorites-toggle').checked : false;
    const favorites = getFavorites();

    // Wenn das Suchfeld leer ist und kein Favoriten-Filter aktiv ist, zeige nur die aktuell aktive Sektion
    if (input.length === 0 && !showOnlyFavorites) {
        const hash = window.location.hash.substring(1);
        sections.forEach(sec => {
            sec.style.display = (sec.id === hash) ? 'block' : 'none';
        });

        // Reset all highlighting
        document.querySelectorAll('.card').forEach(card => {
            card.style.display = "block";
            const termSpan = card.querySelector('.term');
            if (termSpan && termSpan.dataset.original) {
                termSpan.innerHTML = termSpan.dataset.original;
            }
        });
        return;
    }

    // Wenn gesucht wird oder gefiltert wird: Gehe durch jede Sektion
    sections.forEach(section => {
        let cards = section.querySelectorAll('.card');
        let hasVisibleCards = false;

        cards.forEach(card => {
            let text = card.innerText.toLowerCase();
            let matchesSearch = input.length === 0 || text.includes(input);
            let matchesFavorite = !showOnlyFavorites || favorites.includes(card.dataset.term);

            if (matchesSearch && matchesFavorite) {
                card.style.display = "block";
                hasVisibleCards = true; // Wir haben einen Treffer in dieser Sektion

                // Search Highlighting
                const termSpan = card.querySelector('.term');
                if (termSpan) {
                    if (!termSpan.dataset.original) {
                        termSpan.dataset.original = termSpan.innerHTML; // Store original
                    }
                    if (input.length > 0) {
                        const originalText = termSpan.dataset.original;
                        // Escape regex special characters
                        const escapedInput = input.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
                        const regex = new RegExp(`(${escapedInput})`, 'gi');
                        termSpan.innerHTML = originalText.replace(regex, '<mark class="highlight">$1</mark>');
                    } else {
                        termSpan.innerHTML = termSpan.dataset.original;
                    }
                }
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

// --- New Features Logic ---

function setupControls() {
    const quizToggle = document.getElementById('quiz-mode-toggle');
    if (quizToggle) {
        quizToggle.addEventListener('change', (e) => {
            if (e.target.checked) {
                document.body.classList.add('quiz-mode');
            } else {
                document.body.classList.remove('quiz-mode');
                // Reset revealed items
                document.querySelectorAll('.desc.revealed').forEach(el => el.classList.remove('revealed'));
            }
        });
    }

    const favToggle = document.getElementById('favorites-toggle');
    if (favToggle) {
        favToggle.addEventListener('change', () => {
            filter();
        });
    }

    // Keyboard shortcut for search
    document.addEventListener('keydown', (e) => {
        if ((e.ctrlKey && e.key === 'k') || e.key === '/') {
            if (document.activeElement.tagName !== 'INPUT' && document.activeElement.tagName !== 'TEXTAREA') {
                e.preventDefault();
                const searchBox = document.getElementById('search');
                if (searchBox) {
                    searchBox.focus();
                }
            }
        }
    });
}

function revealQuizDesc(event, element) {
    if (document.body.classList.contains('quiz-mode')) {
        event.stopPropagation();
        element.classList.toggle('revealed');
    }
}

// Favorites Management
function getFavorites() {
    const favs = localStorage.getItem('devwiki-favorites');
    return favs ? JSON.parse(favs) : [];
}

function toggleFavorite(event, term) {
    event.stopPropagation(); // Prevent card click

    let favs = getFavorites();
    const btn = event.currentTarget;

    if (favs.includes(term)) {
        favs = favs.filter(f => f !== term);
        btn.classList.remove('active');
    } else {
        favs.push(term);
        btn.classList.add('active');
    }

    localStorage.setItem('devwiki-favorites', JSON.stringify(favs));

    // If we are currently filtering by favorites, re-filter
    const favToggle = document.getElementById('favorites-toggle');
    if (favToggle && favToggle.checked) {
        filter();
    }
}

// Copy to Clipboard
function copyTerm(event, term, desc) {
    event.stopPropagation(); // Prevent card click
    const textToCopy = `${term}: ${desc.replace(/<[^>]*>?/gm, '')}`; // strip HTML tags from desc if any

    navigator.clipboard.writeText(textToCopy).then(() => {
        const btn = event.currentTarget;
        const originalText = btn.innerHTML;
        btn.innerHTML = '✔';
        btn.classList.add('copied');

        setTimeout(() => {
            btn.innerHTML = originalText;
            btn.classList.remove('copied');
        }, 1500);
    }).catch(err => {
        console.error('Failed to copy!', err);
    });
}

// Back to Top functionality
function setupScroll() {
    const btn = document.getElementById('back-to-top');
    const mainArea = document.querySelector('main');

    if (btn && mainArea) {
        mainArea.addEventListener('scroll', () => {
            if (mainArea.scrollTop > 300) {
                btn.style.display = "block";
            } else {
                btn.style.display = "none";
            }
        });
    }
}

function scrollToTop() {
    const mainArea = document.querySelector('main');
    if (mainArea) {
        mainArea.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

// Global functions accessible via onclick in cards/modals
window.openPDF = openPDF;
window.closePDF = closePDF;
window.revealQuizDesc = revealQuizDesc;
window.toggleFavorite = toggleFavorite;
window.copyTerm = copyTerm;
window.scrollToTop = scrollToTop;
