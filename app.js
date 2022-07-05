//Variables
let body = document.getElementsByTagName("body")[0];
let btnModoOscuro = document.getElementById("modo-oscuro-boton");

let panelDeImagen = document.getElementsByClassName("imagen-panel")[0];
let botonTexto = document.getElementById("text-boton");
let botonImagen = document.getElementById("img-boton");
let panelDeTexto = document.getElementsByClassName("texto-panel")[0];

let urlInput = document.getElementById("insertar-img-url");
let canvaImg = document.getElementsByClassName("imagen-meme")[0];


let btnCerrarPaneles = document.getElementById("panel-control-imagen");
let botonCerrar = document.getElementById("cerrar-panel");
let botonCerrar2 = document.getElementById("cerrar-panel2");


const modifyTopText = document.getElementById("top-text-input");
const modifyBottomText = document.getElementById("bottom-text-input");
const modifyMemeText1 = document.getElementById("text-meme1");
const modifyMemeText2 = document.getElementById("text-meme2");

const noTopText = document.getElementById("checkbox-sin-texto-superior");
const noBottomText = document.getElementById("checkbox-sin-texto-inferior");


//Funciones

//Modo oscuro/claro
const switchDarkTheme = () => {
  if (body.classList.contains("light-theme")) {
    body.classList.remove("light-theme");
  } else {
    body.classList.add("light-theme");
  }
};

//Cambiar de panel
const switchPanelContent = (element) => {
  if (element.target.id === "img-boton") {
    panelDeTexto.classList.add("hide");
    panelDeImagen.classList.remove("hide");
    btnCerrarPaneles.classList.add("aparecer")
    btnCerrarPaneles.classList.remove("esconder")
  } else if (element.target.id === "text-boton") {
    panelDeImagen.classList.add("hide");
    panelDeTexto.classList.remove("hide");
    btnCerrarPaneles.classList.add("aparecer")
    btnCerrarPaneles.classList.remove("esconder")
  }
};


//Cargar imagen url
const loadImage = (element) => {
  canvaImg.style.backgroundImage = "url('" + element.target.value + "')";
};

//Cerrar paneles
const closePanelesControl = () => {
  if(btnCerrarPaneles.classList.contains("esconder")){
  } else {
    btnCerrarPaneles.classList.add("esconder")
    btnCerrarPaneles.classList.remove("aparecer")
  }

}

//Cambiar texto de arriba y abajo 

// const editText = () => {
//   // const valorActual = event.target.value
//   modifyMemeText1.innerHTML = valorActual;
//   // const valorActual = event.target.value
//   modifyMemeText2.innerHTML = valorActual;
// }

modifyTopText.addEventListener('input', (event) => {
  const valorActual = event.target.value
  modifyMemeText1.innerHTML = valorActual; 
});

modifyBottomText.addEventListener('input', (event) => {
  const valorActual = event.target.value
  modifyMemeText2.innerHTML = valorActual; 
});

//Sin texto superior - sin texto inferior

noTopText.addEventListener( 'click', (event) =>{
  modifyMemeText1.classList.toggle("esconder");
})
noBottomText.addEventListener( 'click', (event) =>{
  modifyMemeText2.classList.toggle("esconder");
})

//Cambiar fuentes


//Listeners

btnModoOscuro.addEventListener("click", switchDarkTheme);
botonImagen.addEventListener("click", switchPanelContent);
botonTexto.addEventListener("click", switchPanelContent);

urlInput.addEventListener("change", loadImage);

botonCerrar.addEventListener("click",closePanelesControl);
botonCerrar2.addEventListener("click",closePanelesControl);

// modifyTopText.addEventListener('input', editText);
// modifyBottomText.addEventListener('input', editText);
