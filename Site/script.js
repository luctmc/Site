// Animação ao carregar a página
document.addEventListener('DOMContentLoaded', function() {
    const elementos = document.querySelectorAll('.membro, .produto');
    elementos.forEach((el, index) => {
        el.style.opacity = 0;
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        setTimeout(() => {
            el.style.opacity = 1;
            el.style.transform = 'translateY(0)';
        }, index * 200);
    });
});

// Validação do Formulário de Contato
document.getElementById('formContato').addEventListener('submit', function(event) {
    let nome = document.getElementById('nome').value.trim();
    let email = document.getElementById('email').value.trim();
    let mensagem = document.getElementById('mensagem').value.trim();

    if (nome === '' || email === '' || mensagem === '') {
        alert('Por favor, preencha todos os campos obrigatórios.');
        event.preventDefault();
    } else if (!validateEmail(email)) {
        alert('Por favor, insira um e-mail válido.');
        event.preventDefault();
    }
});

function validateEmail(email) {
    // Expressão regular para validar e-mail
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\\.,;:\s@"]+\.)+[^<>()[\]\\.,;:\s@"]{2,})$/i;
    return re.test(email);
}
