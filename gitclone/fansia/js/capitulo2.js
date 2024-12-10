const pantalla = document.querySelector("#num")
const btnAdd = document.querySelector("#btnAdd")
let count = 1

/* let todosCapitulos = JSON.parse( localStorage.getItem('todosCapitulos') )
let currentCapitulo = JSON.parse( localStorage.getItem('currentCapitulo') )

todosCapitulos[1] = currentCapitulo

localStorage.setItem( 'todosCapitulos', JSON.stringify(todosCapitulos) )

console.log(todosCapitulos) */

btnAdd.addEventListener( "click", function(){
    pantalla.textContent = count++

    if(count == 4){
        console.log('Habilitaste el cap 3')
        let cap3 = JSON.parse( localStorage.getItem('todosCapitulos') )
        cap3[2].habilitado = true
        localStorage.setItem( 'todosCapitulos', JSON.stringify(cap3) ) 
        console.log(cap3)
    }

} )
// Obtener el video y el botón
let video = document.querySelector(".video");
let button = document.getElementById("playButton");

// Función que reproduce o pausa el video
button.addEventListener("click", () => {
  if (video.paused) {
    video.play(); // Reproducir video
    button.textContent = "Pausar Video"; // Cambiar el texto del botón
  } else {
    video.pause(); // Pausar video
    button.textContent = "Reproducir Video"; // Cambiar el texto del botón
  }
});
