// creo las costantes 
const Name = document.querySelector('#nombre');
const surname = document.querySelector('#apellido');
const dir = document.querySelector('#direccion');
const ciudad = document.querySelector('#ciudad');
const email = document.querySelector('#email');
const telef = document.querySelector('#teléfono');

const nameError = document.querySelector('#nombre-error');
const surnameError = document.querySelector('#apellido-error');
const dirError = document.querySelector('#dir-error');
const ciudadError = document.querySelector('#ciudad-error');
const emailError = document.querySelector('#email-error');
const telefError = document.querySelector('#Telef-error')

const botton =document.querySelector('#button');

//asigno las funciones del botón confirmar
botton.addEventListener('click', (event)=>{
    event.preventDefault();
    validateEmpty(Name.value, Name, nameError, 'Nombre no debe estar vacio');
    validateEmpty(surname.value, surname, surnameError, 'Apellido no debe estar vacio');
    validateEmpty(dir.value, dir, dirError, 'Dirección no debe estar vacio');
    validateEmpty(ciudad.value, ciudad, ciudadError,'Ciudad no debe estar vacio');
    validateEmail(email.value, email,emailError);
    validateNumber(telef.value, telef, telefError);
});
//asigno el evento al botón enviar
window.addEventListener('load', function(){
    document.getElementById('button1').addEventListener('click', function(){
        alert('Tu registro ha sido exitoso')
    })
    })

// creo la función para validar el campo de número de teléfono
function validateNumber(valueInput, divInput,divError){
    let regEpx = /^\s*(?:\+?(\d{1,3}))?([-. (]*(\d{3})[-. )]*)?((\d{3})[-. ]*(\d{2,4})(?:[-.x ]*(\d+))?)\s*$/gm
    if (regEpx.test(valueInput)== true){
        hideError(divInput, divError)
    }else{
        showError(divInput, divError, 'Ingrse sólo números del 0 al 9')
    }
}
// creo la función para validar el campo de email
function validateEmail(valueInput, divInput, divError){
    let regExp = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g
    if (regExp.test(valueInput)== true){
        hideError(divInput, divError);
    }else{
        showError(divInput, divError,'Parece que el email no es correcto');
    }
}
// creo la función para validar los input
function validateEmpty(valueInput, divInput, divError, naneInput){
    if(valueInput.length == 0){
        showError(divInput, divError, naneInput);
    }else{
        hideError(divInput, divError);
    }
}
// creo la función para mostrar el error en los campos
function showError(divInput, divError, error){
    divInput.style.border = "1px solid red";
    divError.innerHTML = `<img class="error-image" src="./iconos/error.png" alt="">
    <p class="error">${error}</p>`;
}
// creo la función para ocultar los campo de error y mostrar que el campo fue llenado correctamente.
function hideError(divInput, divError){
    divInput.style.border ='1px solid #ccc';
    divError.innerHTML = `<img class="error-image" src="./iconos/validar.png" alt="">`;
}

