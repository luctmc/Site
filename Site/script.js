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
const navLinks = document.querySelector('.nav-container ul');

menuToggle.addEventListener('click', function() {
    navLinks.classList.toggle('active');
});

// GSAP e ScrollTrigger para Parallax
gsap.registerPlugin(ScrollTrigger);

gsap.to('.banner', {
    backgroundPosition: '50% 100%',
    ease: 'none',
    scrollTrigger: {
        trigger: '.banner',
        start: 'top top',
        end: 'bottom top',
        scrub: true,
    }
});

// Animações GSAP nas seções
gsap.from('.quem-somos h1', {
    x: -200,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: '.quem-somos',
        start: 'top 80%',
    }
});

gsap.from('.quem-somos p', {
    x: 200,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: '.quem-somos',
        start: 'top 75%',
    }
});

gsap.from('.membro', {
    y: 100,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    scrollTrigger: {
        trigger: '.quem-somos',
        start: 'top 70%',
    }
});

gsap.from('.produtos h1', {
    x: 200,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: '.produtos',
        start: 'top 80%',
    }
});

gsap.from('.produto', {
    y: 100,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    scrollTrigger: {
        trigger: '.produtos',
        start: 'top 70%',
    }
});

// Swiper.js inicialização para o carrossel de depoimentos
const swiperDepoimentos = new Swiper('.swiper-container', {
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
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

// Animações dos Ícones Sociais
const socialIcons = document.querySelectorAll('.social-icon');

socialIcons.forEach(icon => {
    icon.addEventListener('mouseover', () => {
        gsap.to(icon, { rotationY: '+=360', duration: 1 });
    });
});

// Inicialização do Mapa Personalizado
function initMap() {
    const localizacao = { lat: -23.55052, lng: -46.633308 }; // Substitua pelas coordenadas da sua empresa
    const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: localizacao,
        styles: [/* Opcional: adicione um estilo personalizado para o mapa */]
    });
    const marker = new google.maps.Marker({
        position: localizacao,
        map: map,
        title: 'Sua Empresa',
        icon: 'imagens/marker.png' // Opcional: adicione um ícone personalizado para o marcador
    });
}

// Validação do Formulário de Contato com Mensagens em Tempo Real
const formContato = document.getElementById('formContato');
const campos = formContato.querySelectorAll('input[required], textarea[required]');

campos.forEach(campo => {
    campo.addEventListener('input', () => {
        if (campo.checkValidity()) {
            campo.classList.remove('invalido');
            campo.classList.add('valido');
        } else {
            campo.classList.remove('valido');
            campo.classList.add('invalido');
        }
    });
});

formContato.addEventListener('submit', function(event) {
    let formValido = true;
    campos.forEach(campo => {
        if (!campo.checkValidity()) {
            formValido = false;
            campo.classList.add('invalido');
        }
    });
    if (!formValido) {
        event.preventDefault();
        alert('Por favor, preencha todos os campos corretamente.');
    }
});
