// Dejo este codigo aca porque github pages no soporta el back y no lo puedo hacer para enviar el formulario
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
        msj.style.display = 'flex';
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