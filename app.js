//Variables
let body = document.getElementsByTagName("body")[0];
let btnModoOscuro = document.getElementById("modo-oscuro-boton");

let panelDeImagen = document.getElementsByClassName("imagen-panel")[0];
let botonTexto = document.getElementById("text-boton");
let botonImagen = document.getElementById("img-boton");
let panelDeTexto = document.getElementsByClassName("texto-panel")[0];

let urlInput = document.getElementById("insertar-img-url");
let canvaImg = document.getElementsByClassName("imagen-meme")[0];


// let btnCloseImg = document.getElementsById("cerrar-panel");
// let btnCloseTxt = document.getElementsById("cerrar-panel");

//Funciones

const switchDarkTheme = () => {
  if (body.classList.contains("light-theme")) {
    body.classList.remove("light-theme");
  } else {
    body.classList.add("light-theme");
  }
};

const switchPanelContent = (element) => {
  if (element.target.id === "img-boton") {
    panelDeTexto.classList.add("hide");
    panelDeImagen.classList.remove("hide");
  } else if (element.target.id === "text-boton") {
    panelDeImagen.classList.add("hide");
    panelDeTexto.classList.remove("hide");
  }
};

const loadImage = (element) => {
  canvaImg.style.backgroundImage = "url('" + element.target.value + "')";
};

// const closePanelesControl = (element) => {
//   if (element.target.id === "cerrar-panel"){
//     btnCloseImg.classList.add("esconder");
//     btnCloseTxt.classList.remove("esconder");
//   } else if (element.target.id === "cerrar-panel") {
//     btnCloseTxt.classList.add("esconder");
//     btnCloseImg.classList.remove("esconder");

//   }
// }


//Listeners

btnModoOscuro.addEventListener("click", switchDarkTheme);
botonImagen.addEventListener("click", switchPanelContent);
botonTexto.addEventListener("click", switchPanelContent);
urlInput.addEventListener("change", loadImage);
// btnClose.addEventListener("click",closePanelesControl);
