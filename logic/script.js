const images = [
    './imges/school1.jpg',
    './imges/school2.jpg',
    './imges/school3.jpg',
   ];

const container = document.querySelector('.bg-container');

// Create background divs
images.forEach((img) => {
  const div = document.createElement('div');
  div.classList.add('bg-image');
  div.style.backgroundImage = `url(${img})`;
  container.appendChild(div);
});

const bgDivs = document.querySelectorAll('.bg-image');
let current = 0;
bgDivs[current].classList.add('show');

// Change background every 5 seconds
setInterval(() => {
  bgDivs[current].classList.remove('show');
  current = (current + 1) % bgDivs.length;
  bgDivs[current].classList.add('show');
}, 5000);
