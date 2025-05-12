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
const visibleCards = 3;

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
  const cardWidth = slider.querySelector('.customer_card').offsetWidth + 20; 
  slider.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
}

const dropdownToggle = document.getElementById('dropdownToggle');
const dropdownList = document.getElementById('dropdownList');
const dropdownValue = document.getElementById('dropdownValue');
const selectedText = dropdownToggle.querySelector('.selected_text');

dropdownToggle.addEventListener('click', () => {
dropdownToggle.parentElement.classList.toggle('dropdown_open');
  });

dropdownList.querySelectorAll('li').forEach(item => {
    item.addEventListener('click', () => {
      const value = item.getAttribute('data-value');
      const text = item.querySelector('.name').textContent + ' ' + item.querySelector('.price').textContent;
      selectedText.textContent = text;
      selectedText.style.color = '#000';
      dropdownValue.value = value;
      dropdownToggle.parentElement.classList.remove('dropdown_open');
    });
  });


document.addEventListener('click', (e) => {
    if (!dropdownToggle.parentElement.contains(e.target)) {
      dropdownToggle.parentElement.classList.remove('dropdown_open');
    }
  });


const modal = document.getElementById("tariffModal");
const modalTitle = document.getElementById("modalTitle");
const modalBody = document.getElementById("modalBody");
const modalClose = document.getElementById("modalClose");

const tariffTitles = {
    BASE: "BASE",
    MEDIUM: "MEDIUM",
    PREMIUM: "PREMIUM",
    INDUSTRIAL: "INDUSTRIAL"
};

document.querySelectorAll(".tarif-button").forEach(button => {
    button.addEventListener("click", e => {
        e.preventDefault(); 
        const tariff = button.getAttribute("data-tariff");
        modalTitle.textContent = tariffTitles[tariff] || "Тариф";
        modal.classList.add("open");
    });
});


modalClose.addEventListener("click", () => {
    modal.classList.remove("open");
});

// Плавная прокрутка к якорям
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if(targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if(targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});