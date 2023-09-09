
/*
const textContainer = document.querySelector('.text-container');
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
        // Llama a la función para calcular e imprimir las fechas
        insertarFechas();

        $('.owl-carousel').owlCarousel({
          center: true,
          loop: true,
          margin: 30,
          autoplay: true,
          responsiveClass: true,
          responsive:{
              0:{
                  items: 2,
              },
              767:{
                  items: 3,
              },
              1200:{
                  items: 4,
              }
          }
      });

  } else {
    // Si la animación ya se mostró antes, simplemente oculta el preloader
    const preloader = document.querySelector('.preloader');
    const mainElement = document.querySelector('main');
    const footerContainer = document.querySelector('.site-footer');

    preloader.style.display = 'none';
    mainElement.classList.remove('oculto');
    footerContainer.classList.remove('oculto');
    // Llama a la función para calcular e imprimir las fechas
    insertarFechas();

    $('.owl-carousel').owlCarousel({
      center: true,
      loop: true,
      margin: 30,
      autoplay: true,
      responsiveClass: true,
      responsive:{
          0:{
              items: 2,
          },
          767:{
              items: 3,
          },
          1200:{
              items: 4,
          }
      }
  });
  }
});

function insertarFechas() {
  // Obtener la fecha actual
  const fechaActual = new Date();

  // Encontrar el próximo viernes (día 5 de la semana, donde 0 es domingo)
  const proximoViernes = new Date();
  proximoViernes.setDate(fechaActual.getDate() + (5 + 7 - fechaActual.getDay()) % 7);

  // Encontrar el próximo domingo (día 0 de la semana)
  const proximoDomingo = new Date();
  proximoDomingo.setDate(fechaActual.getDate() + (7 + 0 - fechaActual.getDay()) % 7);

  // Obtener los elementos por sus IDs
  const diaDomingo = document.getElementById("diaDomingo");
  const mesDomingo = document.getElementById("mesDomingo");
  const diaViernes = document.getElementById("diaViernes");
  const mesViernes = document.getElementById("mesViernes");

  // Actualizar los valores de los elementos con las fechas calculadas
  diaDomingo.textContent = proximoDomingo.getDate().toString().padStart(2, "0");
  mesDomingo.textContent = obtenerNombreMes(proximoDomingo.getMonth()) + " " + proximoDomingo.getFullYear();

  diaViernes.textContent = proximoViernes.getDate().toString().padStart(2, "0");
  mesViernes.textContent = obtenerNombreMes(proximoViernes.getMonth()) + " " + proximoViernes.getFullYear();
}

// Función para obtener el nombre del mes a partir de su número
function obtenerNombreMes(numeroMes) {
  const meses = [
    "Ene", "Feb", "Mar", "Abr", "May", "Jun",
    "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"
  ];
  return meses[numeroMes];
}

// Obtén la URL actual
const url = window.location.href;

// Verifica si la URL contiene "event-sunday.html" en ella
if (url.includes("event-sunday.html")) {
    // Obtiene la fecha actual
    const fechaActual = new Date();

    // Obtiene el día y el mes actual
    const dia = fechaActual.getDate() + (7 + 0 - fechaActual.getDay()) % 7;
    const mes = fechaActual.toLocaleString("default", { month: "short" }); // Obtiene el nombre abreviado del mes

    // Obtén el elemento <p> con el ID "diaDomingo"
    const diaDomingo = document.getElementById("diaDomingo");

    // Actualiza el contenido del elemento con la fecha actual
    diaDomingo.textContent = `${dia} ${mes} ${fechaActual.getFullYear()}`;
    
}

// Verifica si la URL contiene "event-sunday.html" en ella
if (url.includes("event-mesas.html")) {
  // Obtiene la fecha actual
  const fechaActual = new Date();

  // Obtiene el día y el mes actual
  const dia = fechaActual.getDate() + (5 + 7 - fechaActual.getDay()) % 7;
  const mes = fechaActual.toLocaleString("default", { month: "short" }); // Obtiene el nombre abreviado del mes

  // Obtén el elemento <p> con el ID "diaDomingo"
  const diaDomingo = document.getElementById("diaViernes");

  // Actualiza el contenido del elemento con la fecha actual
  diaDomingo.textContent = `${dia} ${mes} ${fechaActual.getFullYear()}`;
  
}



