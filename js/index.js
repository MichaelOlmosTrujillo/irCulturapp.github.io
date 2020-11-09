const botonIniciarSesion = document.getElementById("iniciarSesion");
const botonRegistro = document.getElementById("botonRegistro");
const formRegistro = document.getElementById("formRegistro");
console.log(botonIniciarSesion);
console.log(botonRegistro);

//Eventos

botonRegistro.addEventListener('click', (e)=>{
    e.preventDefault();
formRegistro.style.top = "100px";
})
