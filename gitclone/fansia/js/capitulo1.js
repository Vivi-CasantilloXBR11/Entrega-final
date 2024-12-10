const pantalla = document.querySelector("#num")
const btnAdd = document.querySelector("#btnAdd")
let count = 1

/* let todosCapitulos = JSON.parse( localStorage.getItem('todosCapitulos') )
localStorage.setItem('todosCapitulos', JSON.stringify( todosCapitulos )) */

console.log(JSON.parse(localStorage.todosCapitulos))

btnAdd.addEventListener( "click", function(){
    pantalla.textContent = count++

    if(count == 4){
        console.log('Habilitaste el cap 2')
        let cap2 = JSON.parse( localStorage.getItem('todosCapitulos') )
        cap2[1].habilitado = true
        localStorage.setItem( 'todosCapitulos', JSON.stringify(cap2) ) 
        console.log(cap2)
    }

} )

let video1 = document.getElementById("videoElement1");
let video2 = document.getElementById("videoElement2");
let button1 = document.getElementById("playButton1");
let button2 = document.getElementById("playButton2");

// Función para controlar la reproducción del video 1
button1.addEventListener("click", () => {
    if (video1.paused) {
        video1.play(); // Reproducir video 1
        button1.textContent = "Pausar Video"; // Cambiar el texto del botón
    } else {
        video1.pause(); // Pausar video 1
        button1.textContent = "Reproducir Video"; // Cambiar el texto del botón
    }
});

// Función para controlar la reproducción del video 2
button2.addEventListener("click", () => {
    if (video2.paused) {
        video2.play(); // Reproducir video 2
        button2.textContent = "Pausar Video"; // Cambiar el texto del botón
    } else {
        video2.pause(); // Pausar video 2
        button2.textContent = "Reproducir Video"; // Cambiar el texto del botón
    }
});


