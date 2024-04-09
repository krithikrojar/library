
const expandArrows = document.querySelectorAll('.ExpandArrow');

expandArrows.forEach(arrow => {
  arrow.addEventListener('click', () => {
    const dropdown = arrow.previousElementSibling;
    dropdown.classList.toggle('open');
    arrow.classList.toggle('rotated');
  });
});

const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetId = e.target.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    targetElement.scrollIntoView({ behavior: 'smooth' });
  });
});


const header = document.querySelector('header');
const sticky = header.offsetTop;

window.onscroll = () => {
  if (window.pageYOffset > sticky) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }
};


const slider = document.querySelector('.slider');
const slides = slider.querySelectorAll('.slide');
let currentSlide = 0;

const showSlide = n => {
  slides.forEach(slide => slide.style.display = 'none');
  slides[n].style.display = 'block';
};

const nextSlide = () => {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
};

const prevSlide = () => {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
};

showSlide(currentSlide);

setInterval(nextSlide, 5000);
