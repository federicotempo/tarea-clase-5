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

function encontrarNumeroMasPequenio(numeros) {
  let numeroPequenio = numeros[0];
  for (i = 1; i < numeros.length; i++) {
    if (numeroPequenio > numeros[i]) {
      numeroPequenio = numeros[i];
    }
  }
  return numeroPequenio;
}

function encontrarNumeroMasGrande(numeros) {
  let numeroGrande = numeros[0];
  for (i = 1; i < numeros.length; i++) {
    if (numeroGrande < numeros[i]) {
      numeroGrande = numeros[i];
    }
  }
  return numeroGrande;
}

function encontrarNumeroMasFrecuente(numeros) {
  let frecuencia = {};
  let numeroMasFrecuente;
  let maxFrecuencia = 0;

  for (i = 0; i < numeros.length; i++) {
    let numero = numeros[i];

    if (!frecuencia[numero]) {
      frecuencia[numero] = 1;
    } else {
      frecuencia[numero]++;
    }
  }

  for (let numero in frecuencia) {
    if (frecuencia.hasOwnProperty(numero)) {
      if (frecuencia[numero] > maxFrecuencia) {
        maxFrecuencia = frecuencia[numero];
        numeroMasFrecuente = numero;
      }
    }
  }

  if (maxFrecuencia === 1){
    return "Ninguno";
  }

  return numeroMasFrecuente;
}

function mostrarEnHtml(numeroPromedio, numeroPequenio, numeroGrande, numeroFrecuente) {
  document.querySelector("#promedio").innerText = `El promedio es: ${numeroPromedio}`;
  document.querySelector("#pequeño").innerText = `El más pequeño es: ${numeroPequenio}`;
  document.querySelector("#grande").innerText = `El más grande es: ${numeroGrande}`;
  document.querySelector("#frecuente").innerText = `El más frecuente es: ${numeroFrecuente}`;
}

function main() {
  generarLista();
  const numeros = convertirLista();
  let numeroPromedio = promedio(numeros);
  let numeroPequenio = encontrarNumeroMasPequenio(numeros);
  let numeroGrande = encontrarNumeroMasGrande(numeros);
  let numeroFrecuente = encontrarNumeroMasFrecuente(numeros);
  mostrarEnHtml(numeroPromedio, numeroPequenio, numeroGrande, numeroFrecuente);

}

main();
