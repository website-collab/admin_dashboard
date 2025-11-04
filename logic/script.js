const images = [
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
  "https://images.unsplash.com/photo-1519125323398-675f0ddb6308",
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
  "https://images.unsplash.com/photo-1517433456452-f9633a875f6f",
  "https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf"
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
