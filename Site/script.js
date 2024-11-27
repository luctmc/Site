// Pré-carregador
window.addEventListener('load', function() {
    // Inicialização do Mapa
    initMap();

    // Oculta o pré-carregador
    const preloader = document.getElementById('preloader');
    preloader.style.opacity = '0';
    preloader.style.visibility = 'hidden';
    preloader.style.transition = 'opacity 0.5s ease';
});

// Alterar cor do menu ao rolar a página
window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.pageYOffset > 100) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// Menu Responsivo (Mobile)
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', function() {
    navLinks.classList.toggle('active');
});

// Swiper.js inicialização para o carrossel de depoimentos
const swiperDepoimentos = new Swiper('.swiper-depoimentos', {
    loop: true,
    pagination: {
        el: '.swiper-pagination',
    },
    autoplay: {
        delay: 5000,
    },
});

// Swiper.js inicialização para o carrossel de posts sociais
const socialSwiper = new Swiper('.social-swiper', {
    loop: true,
    pagination: {
        el: '.swiper-pagination',
    },
    autoplay: {
        delay: 5000,
    },
    spaceBetween: 30,
    effect: 'fade',
});

// Inicialização do Mapa Personalizado
function initMap() {
    const localizacao = { lat: -23.55052, lng: -46.633308 }; // Substitua pelas coordenadas da sua empresa
    const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: localizacao,
        styles: [
            // Estilo personalizado do mapa (opcional)
            {
                "featureType": "all",
                "elementType": "geometry",
                "stylers": [
                    { "color": "#e3f2fd" }
                ]
            },
            // ... (adicione mais estilos se desejar)
        ]
    });
    const marker = new google.maps.Marker({
        position: localizacao,
        map: map,
        title: 'Kainon Lab',
        icon: 'imagens/marker.png' // Ícone personalizado para o marcador
    });
}
