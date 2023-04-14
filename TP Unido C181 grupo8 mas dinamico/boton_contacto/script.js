console.log(typeof(document.getElementById("email").value))
console.log(document.getElementById("email").value)

const email = document.getElementById("email")
email.addEventListener("focusout", (e) => {
    let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(!email.value.match(validRegex)){
        document.getElementById("nombre").focus()
        swal.fire({
            title: 'Cuidado!',
            text: 'Debes usar el formato ejemplo@gmail.com',
            icon: 'info',
            confirmButtonText: 'Ok'
          }) 
    }
})

const formSubmit = document.querySelector("#formMensaje")

formSubmit.addEventListener("submit", (event) =>{
    event.preventDefault()
    if(document.getElementById("nombre").value == "" || document.getElementById("email").value == "" || document.getElementById("asunto").value == "" || document.getElementById("mensaje").value == ""){
        document.getElementById("nombre").focus()
        swal.fire({
            title: 'Espera!',
            text: 'Debes completar todos los campos',
            icon: 'info',
            confirmButtonText: 'Entendido'
          })
    }else{
        swal.fire({
            title: 'Genial!',
            text: 'Mensaje enviado',
            icon: 'success',
            confirmButtonText: 'Ok'
          })
        /*alert("Mensaje Enviado")*/
        formSubmit.reset()
    }
} )

/*document.getElementsByClassName("btn-menu")[0].onclick = function(){
    document.getElementsByClassName("lista-menu")[0].style.display = "block"
}*/
document.getElementsByClassName("btn-menu")[0].addEventListener("click", (event) =>{
    if(document.getElementsByClassName("lista-menu")[0].style.display == "none"){
        document.getElementsByClassName("lista-menu")[0].style.display = "block"
    }else{
        document.getElementsByClassName("lista-menu")[0].style.display = "none"
    }
    /*document.getElementsByClassName("lista-menu")[0].style.display = "block"*/
})