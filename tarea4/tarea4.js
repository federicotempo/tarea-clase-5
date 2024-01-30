//TAREA: En otro archivo distinto,
// Crear una lista de <ol> y <li> que contengan sólo números.
// Convertir esos números a un array y:
// 1. calcular el promedio y mostrarlo en un <em> pre-creado con el texto "El promedio es..."
// 2. obtener el número más pequeño y mostrarlo en un <em> pre-creado con el texto "El número más pequeño es..."
// 3. obtener el número más grande y mostrarlo en un <em> pre-creado con el texto "El número más grande es..."
// 4. obtener el número que más se repite y mostrarlo en un <em> pre-creado con el texto "El número más frecuente es..."


function generarLista() {
  const tamañoLista = Number(prompt('Cuantos números desea agregar a la lista?'))
  for (i = 0; i < tamañoLista; i++) {
    let numero = Number(prompt('Ingrese un número'));
    let lista = document.createElement('li');
    lista.innerHTML = numero;

    document.querySelector("#lista").appendChild(lista);
  }
}

function convertirLista() {
  const $listaNumeros = document.querySelectorAll('li');
  let numeros = [];

  for (i = 0; i < $listaNumeros.length; i++) {
    numeros.push(Number($listaNumeros[i].innerText));
  }
  return numeros
}

function promedio(numeros) {
  let sumaNumeros = 0;
  const cantidadNumeros = numeros.length;

  for (i = 0; i < cantidadNumeros; i++) {
    sumaNumeros += numeros[i];
  }

  return sumaNumeros / cantidadNumeros;
} 

generarLista()