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

const ningunContorno = document.getElementById("ningun-contorno");
const contornoClaro = document.getElementById("contorno-claro");
const contornoOscuro = document.getElementById("contorno-oscuro");

const interlineadoInput = document.getElementById("interlineado-input");

const blendModeSelector = document.getElementById("blend-mode");

const filtersDefaultBtn = document.getElementById("filters-default-btn");

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



//FILTROS

const brillo = document.getElementById("brightness");
const opacidad = document.getElementById("opacity");
const contraste = document.getElementById("contrast");
const desenfoque = document.getElementById("blur");
const escalaDeGrises = document.getElementById("grayscale");
const sepia = document.getElementById("sepia");
const hue = document.getElementById("hue");
const saturado = document.getElementById("saturate");
const negativo = document.getElementById("negative");
const panelFiltros = document.getElementById("panel-control-filtros");

let filterValues = [];

const filter = (element) => {
  const brigtnessValue = brillo.value;
  const opacityValue = opacity.value;
  const contrastValue = contrast.value;
  const blueValue = desenfoque.value;
  const grayscaleValue = escalaDeGrises.value;
  const sepiaValue = sepia.value;
  const hueValue = hue.value;
  const saturadoValue = saturado.value;
  const negativeValue = negativo.value;

  let filterValues =
    "opacity(" +
    opacity.value +
    ") " +
    "contrast(" +
    contrast.value +
    "%) " +
    "blur(" +
    desenfoque.value +
    "px) " +
    "brightness(" +
    brillo.value +
    ") " +
    "grayscale(" +
    escalaDeGrises.value +
    "%) " +
    "sepia(" +
    sepia.value +
    "%) " +
    "hue-rotate(" +
    hue.value +
    "deg) " +
    "saturate(" +
    saturado.value +
    "%) " +
    "invert(" +
    negativo.value +
    ")";
  canvaImg.style.filter = filterValues;
};


// Reestablecer Filtros

const reestablecerFiltros = () => {
  let filterValues =
    "opacity(1) contrast(100%) blur(0px) brightness(1) grayscale(0%) sepia(0%) hue-rotate(0deg) saturate(100%) invert(0)";

  canvaImg.style.filter = filterValues;

  brillo.value = 1;
  opacidad.value = 1;
  contraste.value = 100;
  desenfoque.value = 0;
  escalaDeGrises.value = 0;
  sepia.value = 0;
  hue.value = 0;
  saturado.value = 100;
  negativo.value = 0;
};



brillo.addEventListener("input", filter);
opacidad.addEventListener("input", filter);
contraste.addEventListener("input", filter);
desenfoque.addEventListener("input", filter);
escalaDeGrises.addEventListener("input", filter);
sepia.addEventListener("input", filter);
hue.addEventListener("input", filter);
saturado.addEventListener("input", filter);
negativo.addEventListener("input", filter);
//dento de la funcion filter, deben meter los filtros que faltan con los valores correspondientes

filtersDefaultBtn.addEventListener("click",reestablecerFiltros);




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
  modifyMemeText1.style.justifyContent = "flex-start"
  modifyMemeText2.style.justifyContent = "flex-start"
  console.log(alignLeft)
});

alignRight.addEventListener("click", () => {
  modifyMemeText1.style.justifyContent = "flex-end"
  modifyMemeText2.style.justifyContent = "flex-end"
  console.log(alignRight)
});

alignCenter.addEventListener("click", () => {
  modifyMemeText1.style.justifyContent = "center";
  modifyMemeText2.style.justifyContent = "center";
  console.log(alignCenter)
});



//Color de texto y color de fondo

colorTextoInput.addEventListener("input", (event) => {
  modifyMemeText1.style.color = event.target.value;
  modifyMemeText2.style.color = event.target.value;
 
});

colorFondoInput.addEventListener("input", (event) => {
  modifyMemeText1.style.backgroundColor = event.target.value;
  modifyMemeText2.style.backgroundColor = event.target.value;
  
});

// fondo del meme 
const fondoMeme =  document.getElementById("color");

fondoMeme.addEventListener("input", (event) =>{
  canvaImg.style.backgroundColor= event.target.value;
  
});

//Fondo transparente

const fondoTransparente = document.getElementById("check-trans");

fondoTransparente.addEventListener("click", () => {
  console.log(fondoTransparente);
  if (body.classList.contains("meme")) {
    body.classList.remove("meme");
  } else {
    body.classList.add("meme");
  }

});

//Contorno



const agregarContorno = (element) => {
  if (element.target.id === "contorno-claro") {
    modifyMemeText1.classList.add("claro-contorno")
    modifyMemeText2.classList.add("claro-contorno")
    modifyMemeText1.classList.remove("oscuro-contorno")
    modifyMemeText2.classList.remove("oscuro-contorno")
   
  } else if (element.target.id === "contorno-oscuro") { 
    modifyMemeText1.classList.add("oscuro-contorno")
    modifyMemeText2.classList.add("oscuro-contorno")
    modifyMemeText1.classList.remove("claro-contorno")
    modifyMemeText2.classList.remove("claro-contorno")
    
  } else {
    modifyMemeText1.classList.remove("claro-contorno")
    modifyMemeText2.classList.remove("claro-contorno")
    modifyMemeText1.classList.remove("oscuro-contorno")
    modifyMemeText2.classList.remove("oscuro-contorno")
  }
};

//Espaciado

const espaciado = document.getElementById("input-espaciado");

espaciado.addEventListener("input", () => {
  modifyMemeText1.style.padding = `${espaciado.value}px`;
  modifyMemeText2.style.padding = `${espaciado.value}px`;
});


// Interlineado

const interlineadoChange = (element)  => {
  const value = element.target.value;
  modifyMemeText1.style.lineHeight = value;
  modifyMemeText2.style.lineHeight = value;
}

// Image Blend

const blendModeChange = (element) => {
  console.log("blend",element)
  const value = element.target.value;

  if(value === "aclarar") {
    canvaImg.style.backgroundBlendMode =  "luminosity";
  } else if (value === "oscurecer") {
    canvaImg.style.backgroundBlendMode = "darken";
  } else if(value === "multiplicar") {
    canvaImg.style.backgroundBlendMode = "multiply";
  } else if(value === "diferencia") {
    canvaImg.style.backgroundBlendMode = "difference;"
  } else if (value === "ninguno") {
    canvaImg.style.backgroundBlendMode = "initial";
  }
  
}


//Listeners

btnModoOscuro.addEventListener("click", switchDarkTheme);
botonImagen.addEventListener("click", switchPanelContent);
botonTexto.addEventListener("click", switchPanelContent);

urlInput.addEventListener("change", loadImage);

botonCerrar.addEventListener("click",closePanelesControl);
botonCerrar2.addEventListener("click",closePanelesControl);

interlineadoInput.addEventListener("change",interlineadoChange);
blendModeSelector.addEventListener("change",blendModeChange);

addEventListener("click", agregarContorno);
