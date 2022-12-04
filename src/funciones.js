

const nombre =document.querySelector('#nombre')
const numero =document.querySelector('#numero')
const agregar = document.querySelector('#boton_agregar')
const borrar = document.getElementsByClassName('eliminar')

agregar.addEventListener('click', function(){
   window.location.href = `agregar/${nombre.value}/${numero.value}`
})

for(let i of borrar ){
   i.addEventListener('click', function(){
      let id = this.getAttribute('id')
      window.location.href = `borrar/${id}`
   })
}