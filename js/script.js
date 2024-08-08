const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const gameOver = document.querySelector('.game-over');
const btn = document.querySelector('.btn');

// Função para o Mario pular
const jump = () => {
    if (!mario.classList.contains('jump')) {
        mario.classList.add('jump');

        setTimeout(() => {
            mario.classList.remove('jump');
        }, 500); // Duração da animação de pulo
    }
}

// Função para reiniciar o jogo
const restart = () => {
    // Reseta as propriedades do Mario
    mario.style.animation = ''; // Remove qualquer animação aplicada
    mario.style.bottom = '0';
    mario.src = '../img/mario.gif';
    mario.style.width = '150px';
    mario.style.marginLeft = '0';

    // Reseta a animação do tubo
    pipe.style.animation = 'pipe-animation 2s infinite linear';
    pipe.style.left = '100%';

    // Esconde o game over e o botão
    gameOver.style.display = 'none';
    btn.style.display = 'none';

    // Reinicia o loop de jogo
    loop = setInterval(() => {
        const pipePosition = pipe.offsetLeft;
        const marioPosition = +getComputedStyle(mario).bottom.replace('px', '');

        if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
            pipe.style.animation = 'none';
            pipe.style.left = `${pipePosition}px`;

            mario.style.animation = 'none';
            mario.style.bottom = `${marioPosition}px`;

            mario.src = '../img/game-over.png';
            mario.style.width = '75px';
            mario.style.marginLeft = '50px';

            gameOver.style.display = 'flex';
            btn.style.display = 'block';

            clearInterval(loop);
        }
    }, 10);
}

// Inicializa o loop de jogo
let loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +getComputedStyle(mario).bottom.replace('px', '');

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = '../img/game-over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';

        gameOver.style.display = 'flex';
        btn.style.display = 'block';

        clearInterval(loop);
    }
}, 10);

// Adiciona o evento de pressionar qualquer tecla ou tocar na tela
document.addEventListener('keydown', () => {
    jump();
    if (gameOver.style.display === 'flex') {
        restart();
    }
});

document.addEventListener('touchstart', () => {
    jump();
    if (gameOver.style.display === 'flex') {
        restart();
    }
});
