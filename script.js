// 1. Contador de tiempo juntos (Desde 26/01/2024)
const startDate = new Date(2024, 0, 26, 0, 0, 0);

function updateTimer() {
    const now = new Date();
    const diff = now - startDate;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / 1000 / 60) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    const timerElement = document.getElementById('timer');
    if (timerElement) {
        timerElement.textContent = `${days} días, ${hours}hs, ${minutes}m, ${seconds}s`;
    }
}

setInterval(updateTimer, 1000);
updateTimer();

// 2. Abrir / Cerrar Sobre Antiguo
function openEnvelope() {
    const envelope = document.getElementById('envelope');
    if (envelope) {
        envelope.classList.toggle('open');
    }
}

// 3. Control de Audio
const musicBtn = document.getElementById('music-btn');
const bgMusic = document.getElementById('bg-music');
const playBtn = document.querySelector('.spotify-play-btn');
const progressBar = document.querySelector('.spotify-progress');
let isPlaying = false;

if (musicBtn && bgMusic) {
    musicBtn.addEventListener('click', () => {
        if (isPlaying) {
            bgMusic.pause();
            playBtn.textContent = '▶';
        } else {
            bgMusic.play();
            playBtn.textContent = '⏸';
        }
        isPlaying = !isPlaying;
    });

    bgMusic.addEventListener('timeupdate', () => {
        if (bgMusic.duration) {
            const percentage = (bgMusic.currentTime / bgMusic.duration) * 100;
            progressBar.style.width = `${percentage}%`;
        }
    });
}

// 4. Lluvia de corazones
function createYellowHeart() {
    const container = document.getElementById('hearts-container');
    if (!container) return;

    const heart = document.createElement('div');
    heart.classList.add('heart-particle');
    
    const yellowEmojis = ['💛', '🌻', '✨', '⭐'];
    heart.textContent = yellowEmojis[Math.floor(Math.random() * yellowEmojis.length)];

    heart.style.left = Math.random() * 100 + 'vw';
    const size = Math.random() * 1.2 + 0.8;
    heart.style.fontSize = `${size}rem`;

    const duration = Math.random() * 3 + 3;
    heart.style.animationDuration = `${duration}s`;

    container.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, duration * 1000);
}

setInterval(createYellowHeart, 450);