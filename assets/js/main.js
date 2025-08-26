const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);

// Duplicar slides para loop infinito
slides.forEach(slide => {
  const clone = slide.cloneNode(true);
  track.appendChild(clone);
});
