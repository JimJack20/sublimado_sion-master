const images = document.querySelectorAll('.carousel-item');
const indicators = document.querySelectorAll('.indicator');
let currentIndex = 0;

function showSlide(index) {
  images.forEach((img, i) => {
    img.classList.toggle('active', i === index);
    indicators[i].classList.toggle('active', i === index);
  });
  const offset = -index * 100;
  document.querySelector('.carousel-images').style.transform = `translateX(${offset}%)`;
}

setInterval(() => {
  currentIndex = (currentIndex + 1) % images.length;
  showSlide(currentIndex);
}, 5000);

indicators.forEach((indicator, index) => {
  indicator.addEventListener('click', () => {
    currentIndex = index;
    showSlide(currentIndex);
  });
});
