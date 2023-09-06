
/*const textContainer = document.querySelector('.text-container');
const animationContainer = document.querySelector('.animation-container');
const mainElement = document.querySelector('main.oculto');
const footerContainer = document.querySelector('.site-footer');

textContainer.addEventListener('animationend', () => {
  // Suaviza la transición al ocultar el text-container y cambiar el fondo
  textContainer.style.transition = 'opacity 1s ease-in-out';
  textContainer.style.opacity = '0';
  animationContainer.style.transition = 'background 1s ease-in-out';
  animationContainer.style.background = 'none';
  mainElement.classList.remove('oculto');
  footerContainer.classList.remove('oculto');
  animationContainer.classList.add('oculto');
});
*/
window.addEventListener('pageshow', () => {
  // Comprobar si ya se mostró la animación
  const preloaderShown = sessionStorage.getItem('preloaderShown');

  const currentUrl = window.location.href;

  if (!preloaderShown && currentUrl === '/') {
    const textContainer = document.querySelector('.text-container');
    const animationContainer = document.querySelector('.animation-container');
    const mainElement = document.querySelector('main');
    const footerContainer = document.querySelector('.site-footer');
    const preloader = document.querySelector('.preloader');

    textContainer.addEventListener('animationend', () => {
      // Suaviza la transición al ocultar el text-container y cambiar el fondo
      textContainer.style.transition = 'opacity 1s ease-in-out';
      textContainer.style.opacity = '0';
      animationContainer.style.transition = 'background 1s ease-in-out';
      animationContainer.style.background = 'none';
      mainElement.classList.remove('oculto');
      footerContainer.classList.remove('oculto');

      // Marcar que la animación ya se mostró
      sessionStorage.setItem('preloaderShown', 'true');
    });
  } else {
    // Si la animación ya se mostró antes, simplemente oculta el preloader
    const preloader = document.querySelector('.preloader');
    const mainElement = document.querySelector('main');
    const footerContainer = document.querySelector('.site-footer');

    preloader.style.display = 'none';
    mainElement.classList.remove('oculto');
    footerContainer.classList.remove('oculto');

  }
});


