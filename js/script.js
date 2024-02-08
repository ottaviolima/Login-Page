function login(){
    passForm();
}

function checkUsuario(){
    const usuario = document.getElementById('usuario');
    const usuarioValue = usuario.value;
    try {
        if (usuarioValue.length > 12 || usuarioValue.length < 3){
            throw new error;
        } else {
            console.log('Name Passed');    
    } 
    } catch(error) {
        console.log('Error in entering username');
        throw new error;
    }
}

function checkPassword(){
    const password = document.getElementById('password');
    const passwordValue = password.value;
    try {
        if(passwordValue.length > 12 || passwordValue.length < 3){
            throw new error;
        } else {
            console.log('Password Passed');
        }
    } catch (error) {
        console.log('Error in entering password');
        throw new error;
    }
}

function passForm(){
    checkUsuario();
    checkPassword();

    window.location.href = "" // <-  url;
}