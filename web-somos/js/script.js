const main = document.querySelector('main.text-container');
const body = document.querySelector('body');

main.addEventListener('animationend', () => {
  // Suaviza la transición al ocultar el main y cambiar el fondo
  main.style.transition = 'opacity 1s ease-in-out';
  main.style.opacity = '0';
  body.style.transition = 'background 1s ease-in-out';
  body.style.background = 'none';
});
