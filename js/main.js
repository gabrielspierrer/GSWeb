// Abrir y cerrar el menu movil
const menu = document.getElementById('menu');
const close = document.getElementById('close');
const nav = document.querySelector('nav');

menu.addEventListener('click', () => {
  nav.classList.add('nav-movil');
});

close.addEventListener('click', () => {
  nav.classList.remove('nav-movil');
});

// Mostrar año actual en el footer
const d = new Date();

let year = d.getFullYear();

document.getElementById('year').innerHTML = year;

//Boton para volver al inicio
const boton = document.getElementById('boton');

// Cuando scrolleo hacia abajo muestro el boton
window.onscroll = function() {
  mostrarBoton();
};

function mostrarBoton() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    boton.style.display = 'block';
  } else {
    boton.style.display = 'none';
  }
};

// Cuando se clickea el boton se scrollea hacia el inicio
boton.addEventListener('click', () => {
  document.body.scrollTop = 0; // Para safari
  document.documentElement.scrollTop = 0; // Para otros navegadores
});

// Slideshow

// Slideshow manualmente con las flechas
const btnIzq = document.getElementById('btn-izq');
const btnDer = document.getElementById('btn-der');

btnIzq.addEventListener('click', () => {
  cambiarDivs(-1)
});

btnDer.addEventListener('click', () => {
  cambiarDivs(+1)
});

var slideIndex = 1;
mostrarDivs(slideIndex);

function cambiarDivs(n) {
  clearTimeout(timer);
  mostrarDivs(slideIndex += n);
};

function mostrarDivs(n) {
  var imagenes = document.getElementsByClassName('slides');

  if (n > imagenes.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = imagenes.length;
  }
  for (let i = 0; i < imagenes.length; i++) {
    imagenes[i].style.display = 'none';
  }

  imagenes[slideIndex-1].style.display = 'block';
};

// Slideshow automatico
var slideItem = 0;
var timer = null;
automatico();

function automatico() {
  var imgs = document.getElementsByClassName('slides');

  for (let i = 0; i < imgs.length; i++) {
    imgs[i].style.display = 'none';
  }
  slideItem++;

  if (slideItem > imgs.length) {
    slideItem = 1;
  }

  imgs[slideItem-1].style.display = 'block';
  
  timer = setTimeout(automatico, 5000);
};

// Limpiar el formulario
const form = document.getElementById('form');
const enviar = document.getElementById('btn-enviar');

enviar.addEventListener('click', (e) => {
  e.preventDefault();
  if (form.checkValidity()) {
    form.submit();
    form.reset();
  } else {
    form.reportValidity();
  }
});