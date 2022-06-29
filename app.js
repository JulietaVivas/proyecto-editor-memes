//Variables
let body = document.getElementsByTagName("body")[0];
let btnModoOscuro = document.getElementById("modo-oscuro-boton");

//Funciones

let switchDarkTheme = () => {
    if(body.classList.contains("light-theme")) {
        body.classList.remove("light-theme");
    }
    else {
        body.classList.add("light-theme")
    }
}


//Listeners

btnModoOscuro.addEventListener("click",switchDarkTheme);


