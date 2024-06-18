const datos = {
    nombre: '',
    celular: '',
    correo: '',
    mensaje: ''
}

// QuerySelector
let nombre = document.querySelector('#nombre')
let celular = document.querySelector('#celular')
let correo = document.querySelector('#correo')
let mensaje = document.querySelector('#mensaje')

// AddEventListener

nombre.addEventListener('input', leerTexto)
celular.addEventListener('input', leerTexto)
correo.addEventListener('input', leerTexto)
mensaje.addEventListener('input', leerTexto)

function leerTexto(e) {
    datos[e.target.id] = e.target.value
    // console.log(datos)
}


let formulario = document.querySelector('#contacto')
let mensajes = document.querySelector('#mensajes')

formulario.addEventListener('submit', function(e) {
    e.preventDefault()
    const {nombre, celular, correo, mensaje} = datos

    // console.log(nombre)
    // console.log(celular)
    // console.log(correo)
    // console.log(mensaje)
    
    if(nombre == '' || celular == '' || correo == '' || mensaje == '') {
        mostrarMensaje('Todos los campos son obligatorios', 'error')
        return
    }
    mostrarMensaje('El mensaje fue enviado correctamente', 'correcto')
})

function mostrarMensaje(texto, clase) {
    let mensaje = document.createElement('p')
    mensaje.textContent = texto
    mensaje.classList.add(clase)
    mensaje.classList.add('sombra')
    mensajes.appendChild(mensaje)

    setTimeout(() => {
        mensaje.classList.add('sacar')
    },4000)
    
    setTimeout(() => {
        mensaje.remove()
    },5000)

}

