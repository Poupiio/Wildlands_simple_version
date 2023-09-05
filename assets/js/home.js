const discover = document.querySelector('#discover-species');
const safariChoice = document.querySelector('#safari-choice');
const logo = document.querySelector('.main-logo');


// Fonctions de redirection vers les pages des espèces et des safaris
function redirectToSpeciesPage() {
    window.location.href = "species.html";
}

function redirectToSafarisPage() {
    window.location.href = "safaris.html";
}

// Redirection au clic sur le logo
function redirectToHomePage() {
    window.location.href = "index.html";
}

let swiper = new Swiper(".mySwiper", {
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
    },
    loop: true
});
