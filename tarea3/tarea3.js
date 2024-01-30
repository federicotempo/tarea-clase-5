//TAREA: En otro archivo distinto,
// Por cada clase de r/argentina programa existente, vamos a pedir:
// horas, minutos y segundos de cada video. Ej. Si un video dura
// 2 horas, 38 minutos y 20 segundos, vamos a rellenar 3 campos de texto con
// cada dato.
// al apretar el botón "Calcular tiempo total", debe mostrar en un
// <strong> pre-creado el tiempo total de los videos.

const $botonCantidadVideos = document.querySelector("#boton-cantidad-videos");

$botonCantidadVideos.onclick = function () {
  const cantidadVideos = Number(document.querySelector("#cantidad-videos").value);
  document.querySelector("#formularios").innerHTML = '';

  for (i = 1; i <= cantidadVideos; i++) {
    let formulario = document.createElement('form');
    formulario.innerHTML =
      `<h3> Video de la clase ${i}</h3>`
      + '<input type="number" id="horas-video' + i + '" placeholder="Ingresá las horas">'
      + '<input type="number" id="minutos-video' + i + '" placeholder="Ingresá los minutos">'
      + '<input type="number" id="segundos-video' + i + '" placeholder="Ingresá los segundos">';

    document.querySelector("#formularios").appendChild(formulario);
  }
  return false;
}

const $botonCalcularTiempo = document.querySelector("#boton-calcular-tiempo");

$botonCalcularTiempo.onclick = function () {
  const cantidadVideos = Number(document.querySelector("#cantidad-videos").value);
  let sumaHoras = 0;
  let sumaMinutos = 0;
  let sumaSegundos = 0;

  for (i = 1; i <= cantidadVideos; i++) {
    let segundosVideo = Number(document.querySelector("#segundos-video" + i).value);
    sumaSegundos += segundosVideo;

    let minutosVideo = Number(document.querySelector("#minutos-video" + i).value);
    sumaMinutos += minutosVideo;

    let horasVideo = Number(document.querySelector("#horas-video" + i).value);
    sumaHoras += horasVideo;
  }

  const horaEnSegundos = 3600;
  const minutosEnSegundos = 60;
  let tiempoTotalEnSegundos = sumaHoras * horaEnSegundos
    + sumaMinutos * minutosEnSegundos + sumaSegundos;


  const horasTotales = Math.floor(tiempoTotalEnSegundos / horaEnSegundos);
  const minutosTotales = Math.floor((tiempoTotalEnSegundos % horaEnSegundos) / minutosEnSegundos);
  const segundosTotales = tiempoTotalEnSegundos % minutosEnSegundos;

  document.querySelector("#tiempo-total").innerText =
    `En total son: ${horasTotales} horas, ${minutosTotales} minutos y ${segundosTotales} segundos`;

  return false;
}
