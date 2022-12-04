const nombre =document.querySelector('#nombre')
const numero =document.querySelector('#numero')
const agregar = document.querySelector('#boton_agregar')

agregar.addEventListener('click', function(){
   window.location.href = `agregar/${nombre.value}/${numero.value}`
})