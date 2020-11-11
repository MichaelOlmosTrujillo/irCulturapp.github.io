const botonIniciarSesion = document.getElementById("iniciarSesion");
const botonRegistro = document.getElementById("botonRegistro");
const botonCancelarRegistro = document.getElementById("botonCancelarRegistro");
const botonCancelarsesion = document.getElementById("botonCancelarsesion");
const formRegistro = document.getElementById("formRegistro");
const formIniciarSesion = document.getElementById('formIniciarSesion');
const iniciarSesionBoton = document.getElementById("iniciarSesion");
console.log(botonIniciarSesion);
console.log(botonRegistro);
console.log(iniciarSesionBoton);

//Eventos

botonRegistro.addEventListener('click', (e) => {
    e.preventDefault();
    formRegistro.style.top = "100px";
})

botonCancelarRegistro.addEventListener('click', ()=>{
    formRegistro.style.top = '-500px';
} )
botonCancelarsesion.addEventListener('click', ()=>{
    formIniciarSesion.style.top = "-500px";
})
iniciarSesionBoton.addEventListener('click', (e)=>{
    e.preventDefault();
formIniciarSesion.style.top = "100px"
})

//Script para cambiar el tiempo en el carrusel de bootstrap
$('.carousel').carousel({
  interval: 1000 * 8
});