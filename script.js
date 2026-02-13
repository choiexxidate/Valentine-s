const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const hint = document.getElementById('hint');

let tries = 0;

// Наведение на "Нет"
noBtn.addEventListener('mouseover', () => {
  tries++;

  hint.textContent = 'Think twice, bruh!';


  // Убегаем
  noBtn.style.position = 'absolute';
  noBtn.style.left = Math.random() * 80 + 'vw';
  noBtn.style.top = Math.random() * 80 + 'vh';

  // Увеличиваем "Да"
  yesBtn.style.transform = `scale(${1 + tries * 0.15})`;
});

// Клик по "Да"
yesBtn.addEventListener('click', () => {
  window.location.href = 'yes_page.html';
});

function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";

    // случайная позиция по горизонтали
    heart.style.left = Math.random() * 100 + "vw";

    // случайный размер
    heart.style.fontSize = (15 + Math.random() * 30) + "px";

    document.querySelector(".hearts-container").appendChild(heart);

    // удаляем после завершения анимации
    setTimeout(() => {
        heart.remove();
    }, 4000);
}

// создаём сердечки каждые 300 мс
setInterval(createHeart, 300);

function createHeart(x = null, y = null) {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "💖";

    heart.style.left = (x !== null ? x : Math.random() * window.innerWidth) + "px";
    heart.style.top = (y !== null ? y : window.innerHeight) + "px";

    heart.style.fontSize = (20 + Math.random() * 25) + "px";

    document.querySelector(".hearts-container").appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 4000);
}

// постоянные сердечки
setInterval(() => createHeart(), 400);

// взрыв сердечек при загрузке
window.addEventListener("load", () => {
    for (let i = 0; i < 20; i++) {
        createHeart(window.innerWidth / 2, window.innerHeight / 2);
    }
});




