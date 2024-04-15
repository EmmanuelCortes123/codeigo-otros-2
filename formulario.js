var formulario = document.querySelector("#form"); /* faltaba un punto y coma */

formulario.onsubmit = function(e) {

  e.preventDefault();/* Faltaba agregar el Default */
  
  var n = formulario.elements[0];
  var e = formulario.elements[1];
  var na = formulario.elements[2];

  var nombre = n.value;
  var edad = e.value;

  var i = na.selectedIndex;
  var nacionalidad = na.options[i].value;
  console.log(nombre, edad);
  console.log(nacionalidad);/* En todo este bloque faltaban los ";" */

  if (nombre.length === 0) {
    n.classList.add("error");/* faltaba un punto y coma */
  }
  if (edad < 18 || edad > 120) {
    e.classList.add("error");/* faltaba un punto y coma */
  }

if (nombre.length > 0 
  && (edad > 18 
    && edad < 120) ) {
  agregarInvitado(nombre, edad, nacionalidad);/* faltaba un punto y coma */
  }
}

var botonBorrar = document.createElement("button");/* faltaba un punto y coma */
botonBorrar.textContent = "Eliminar invitado";/* faltaba un punto y coma */
botonBorrar.id = "boton-borrar";/* faltaba un punto y coma */
var corteLinea = document.createElement("br");/* faltaba un punto y coma */
document.body.appendChild(corteLinea);/* faltaba un punto y coma */
document.body.appendChild(botonBorrar);

function agregarInvitado(nombre, edad, nacionalidad) {

  if (nacionalidad === "ar") {
    nacionalidad = "Argentina";/* faltaba un punto y coma */
  }
  else if (nacionalidad === "mx") {
    nacionalidad = "Mexicana";/* faltaba un punto y coma */
  }
  else if (nacionalidad === "vnzl") {
    nacionalidad = "Venezolana";/* faltaba un punto y coma */
  }
  else if (nacionalidad === "per") {
    nacionalidad = "Peruana";/* faltaba un punto y coma */
  }

var lista = document.getElementById("lista-de-invitados");/* faltaba un punto y coma */

var elementoLista = document.createElement("div");/* faltaba un punto y coma */
elementoLista.classList.add("elemento-lista");/* correccion de added por add */
lista.appendChild(elementoLista);/* faltaba un punto y coma */

/* var spanNombre = document.createElement("span") Este bloque de codigo esta repetido de la funcion crear elemento
var inputNombre = document.createElement("input")
var espacio = document.createElement("br")
spanNombre.textContent = "Nombre: "
inputNombre.value = nombre 
elementoLista.appendChild(spanNombre)
elementoLista.appendChild(inputNombre)
elementoLista.appendChild(espacio) */

function crearElemento(descripcion, valor) {
var spanNombre = document.createElement("span");/* faltaba un punto y coma */
var inputNombre = document.createElement("input");/* faltaba un punto y coma */
var espacio = document.createElement("br");/* faltaba un punto y coma */
spanNombre.textContent = descripcion + ": ";/* faltaba un punto y coma */
inputNombre.value = valor;
elementoLista.appendChild(spanNombre);/* faltaba un punto y coma */
elementoLista.appendChild(inputNombre);/* faltaba un punto y coma */
elementoLista.appendChild(espacio);/* faltaba un punto y coma */
}

crearElemento("Nombre", nombre);/* faltaba un punto y coma */
crearElemento("Edad", edad);/* faltaba un punto y coma */
crearElemento("Nacionalidad", nacionalidad);/* faltaba un punto y coma */


var botonBorrar = document.createElement("button");/* faltaba un punto y coma */
botonBorrar.textContent = "Eliminar invitado";/* faltaba un punto y coma */
botonBorrar.id = "boton-borrar";/* faltaba un punto y coma */
var corteLinea = document.createElement("br");/* faltaba un punto y coma */
elementoLista.appendChild(corteLinea);/* faltaba un punto y coma */
elementoLista.appendChild(botonBorrar);/* faltaba un punto y coma */

botonBorrar.onclick = function() {
this.parentNode.style.display = 'none';
botonBorrar.parentNode.remove();
  }
}