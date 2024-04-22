let pasajeros = [];

function comprarBoleto(event) {
  event.preventDefault();

  const nombre = document.getElementById('nombre').value;
  const apellidoPaterno = document.getElementById('apellidoPaterno').value;
  const apellidoMaterno = document.getElementById('apellidoMaterno').value;
  const edad = parseInt(document.getElementById('edad').value);
  const asiento = parseInt(document.getElementById('asiento').value);

  if (edad < 0 || edad > 120) {
    alert("Por favor ingrese una edad válida.");
    return;
  }

  const precioBoleto = 20000;

  const pasajero = {
    nombre: nombre,
    apellidoPaterno: apellidoPaterno,
    apellidoMaterno: apellidoMaterno,
    edad: edad,
    asiento: asiento,
    precio: precioBoleto
  };

  pasajeros.push(pasajero);

  actualizarListaPasajeros();

  document.getElementById('totalAsientos').textContent = pasajeros.length;

  const dineroRecaudado = pasajeros.length * precioBoleto;
  document.getElementById('dineroRecaudado').textContent = "$" + dineroRecaudado.toLocaleString();
}

function actualizarListaPasajeros() {
  const listaPasajeros = document.getElementById('listaPasajeros');
  listaPasajeros.innerHTML = '';

  pasajeros.sort((a, b) => {
    const apellidoA = a.apellidoPaterno.toLowerCase();
    const apellidoB = b.apellidoPaterno.toLowerCase();
    if (apellidoA < apellidoB) return -1;
    if (apellidoA > apellidoB) return 1;
    return 0;
  });

  pasajeros.forEach(pasajero => {
    const li = document.createElement('li');
    li.textContent = `${pasajero.apellidoPaterno} ${pasajero.apellidoMaterno}, ${pasajero.nombre} - Asiento: ${pasajero.asiento}`;
    listaPasajeros.appendChild(li);
  });
}

document.getElementById('formulario').addEventListener('submit', comprarBoleto);
