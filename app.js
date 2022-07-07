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
const modifyMemeText1 = document.getElementById("top-text");
const modifyMemeText2 = document.getElementById("bottom-text");

const seleccionarFuente = document.getElementById("seleccionar-fuente");//este es mi select

const noTopText = document.getElementById("checkbox-sin-texto-superior");
const noBottomText = document.getElementById("checkbox-sin-texto-inferior");

const tamanoDeFuente =document.getElementById("tamaño-fuente-input");

const alignLeft = document.getElementById("btn-alinear-izquierda")
const alignCenter = document.getElementById("btn-alinear-centro");
const alignRight = document.getElementById("btn-alinear-derecha");

let colorTextoInput = document.getElementById("color-text-input");
let colorFondoInput = document.getElementById("fondo-text-input");


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
});

noBottomText.addEventListener( 'click', (event) =>{
  modifyMemeText2.classList.toggle("esconder");
});

//Cambiar fuentes


seleccionarFuente.addEventListener("change", ()=> {
  modifyMemeText1.style.fontFamily = seleccionarFuente.value;
  modifyMemeText2.style.fontFamily = seleccionarFuente.value;
  console.log(seleccionarFuente.value)
  
});

// Tamaño de fuente


tamanoDeFuente.addEventListener("input", () => {
  modifyMemeText1.style.fontSize = `${tamanoDeFuente.value}px`;
  modifyMemeText2.style.fontSize = `${tamanoDeFuente.value}px`;
  console.log(tamanoDeFuente.value)
});

//Alinear Fuentes - no sale

alignLeft.addEventListener("click", () => {
  modifyMemeText1.style.textAlign = "left";
  modifyMemeText2.style.textAlign = "left";
});



alignRight.addEventListener("click", () => {
  modifyMemeText1.style.textAlign = "right";
  modifyMemeText2.style.textAlign = "right";
});



//Color de texto y color de fondo

colorTextoInput.addEventListener("input", (event) => {
  modifyMemeText1.style.color = event.target.value;
  modifyMemeText2.style.color = event.target.value;
  console.log(colorTextoInput)
});
colorFondoInput.addEventListener("input", (event) => {
  modifyMemeText1.style.backgroundColor = event.target.value;
  modifyMemeText2.style.backgroundColor = event.target.value;
  console.log(colorFondoInput);
});

//Fondo transparente- no me sale

const fondoTransparente = document.getElementById("check-trans");

fondoTransparente.addEventListener("click", () => {
  if (fondoTransparente.checked){
    modifyMemeText1.classList.toggle("ocultar");
    modifyMemeText1.classList.add("ocultar");
    modifyMemeText2.classList.toggle("ocultar");
    modifyMemeText2.classList.add("ocultar");
    } else {
      modifyMemeText1.classList.toggle("ocultar");
      modifyMemeText2.classList.toggle("ocultar");
      modifyMemeText1.classList.remove("ocultar");
      modifyMemeText2.classList.remove("ocultar");
    }
    console.log(fondoTransparente);
})

//Listeners

btnModoOscuro.addEventListener("click", switchDarkTheme);
botonImagen.addEventListener("click", switchPanelContent);
botonTexto.addEventListener("click", switchPanelContent);

urlInput.addEventListener("change", loadImage);

botonCerrar.addEventListener("click",closePanelesControl);
botonCerrar2.addEventListener("click",closePanelesControl);


