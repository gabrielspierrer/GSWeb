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

// mensaje de envio del formulario
const ok = document.getElementById('btn-ok');
const msj = document.getElementById('form-msj');
const exito = document.getElementById('res1');
const error = document.getElementById('res2');

ok.addEventListener('click', () => {
  msj.style.display = 'none';
  form.reset();
});

// Envio de formulario y respuesta
const enviar = document.getElementById('btn-enviar');
const form = document.getElementById('form');

enviar.addEventListener('click', (e) => {
  e.preventDefault();
  
  if (form.checkValidity()) {
    const datos = {
      nombre: form.nombre.value,
      email: form.email.value,
      mensaje: form.mensaje.value
    };
  
    postData('../php/contacto.php', datos)
    .then(res => {
      if (res === true) {
        msj.style.display = 'flex';
        exito.style.display = 'block';
      } else {
        error.style.display = 'block';
      }
    });
  } else {
    form.reportValidity();
  }
});

async function postData(url, data) {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
  return response.json();
};