// Создаем фейерверки из сердец
const flowerContainer = document.querySelector('.flower');
const hearts = [];

function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.top = `${Math.random() * 200}px`;
    heart.style.left = `${Math.random() * 200}px`;
    flowerContainer.appendChild(heart);
    hearts.push(heart);
}

function animateHearts() {
    hearts.forEach(heart => {
        heart.style.top = `${parseFloat(heart.style.top) - Math.random() * 3}px`;
        heart.style.left = `${parseFloat(heart.style.left) + Math.random() * 3}px`;
    });
    requestAnimationFrame(animateHearts);
}

setInterval(createHeart, 200);
animateHearts();

// Создаем медленно опускающиеся лепестки
const petals = document.querySelectorAll('.petal');

function animatePetals() {
    petals.forEach((petal, index) => {
        const delay = index * 100; // Добавляем задержку для каждого лепестка
        setTimeout(() => {
            petal.style.transform = 'translateY(200px) rotate(720deg)';
            petal.style.opacity = '0';
        }, delay);
    });
}

animatePetals();

// Добавляем взаимодействие с листьями
const leaf = document.querySelector('.leaf');
let rotation = 5;

function swayLeaf() {
    leaf.style.transform = `rotate(${rotation}deg)`;
    rotation = -rotation; // Меняем направление вращения
    setTimeout(swayLeaf, 2000); // Запускаем функцию повторно через 2 секунды
}

swayLeaf();
