document.querySelector('.burger').addEventListener('click', function () {
    this.classList.toggle('active');
    const navList = document.querySelector('.header_nav ul');
    navList.classList.toggle('open');

    // Проверка: если меню открыто и дополнительные элементы ещё не добавлены — добавить
    if (navList.classList.contains('open') && !navList.querySelector('.extra-link')) {
        const privacy = document.createElement('li');
        privacy.classList.add('extra-link');
        privacy.innerHTML = '<a href="#">Политика конфиденциальности</a>';

        const offer = document.createElement('li');
        offer.classList.add('extra-link');
        offer.innerHTML = '<a href="#">Договор оферты</a>';

        navList.appendChild(privacy);
        navList.appendChild(offer);
    }

    // Если меню закрывается — удалить эти элементы
    if (!navList.classList.contains('open')) {
        document.querySelectorAll('.extra-link').forEach(el => el.remove());
    }
});


const slider = document.getElementById('slider');
const btnLeft = document.getElementById('slider-left');
const btnRight = document.getElementById('slider-right');

let currentIndex = 0;
const cardCount = 7;
const visibleCards = 2;

btnRight.addEventListener('click', () => {
  if (currentIndex < cardCount - visibleCards) {
    currentIndex++;
    updateSlider();
  }
});

btnLeft.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateSlider();
  }
});

function updateSlider() {
  const cardWidth = slider.querySelector('.gallery_img').offsetWidth + 20; 
  slider.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
}