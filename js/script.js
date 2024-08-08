const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const gameOver = document.querySelector('.game-over');
const btn = document.querySelector('.btn');


const jump = () => {
    if (!mario.classList.contains('jump')) {
        mario.classList.add('jump');

        setTimeout(() => {
            mario.classList.remove('jump');
        }, 500);
    }
}


const restart = () => {
    
    mario.style.animation = '';
    mario.style.bottom = '0';
    mario.src = '../img/mario.gif';

    if (window.innerWidth <= 1000) {
        mario.style.width = '80px';
        pipe.style.width = '50px';
        pipe.style.height = '50px';
    } else {
        mario.style.width = '150px';
        pipe.style.width = '80px';
        pipe.style.height = '100px';
    }

    mario.style.marginLeft = '0';

    pipe.style.animation = 'pipe-animation 2s infinite linear';
    pipe.style.left = '100%';

    gameOver.style.display = 'none';
    btn.style.display = 'none';

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
