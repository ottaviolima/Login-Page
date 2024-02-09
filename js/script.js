function login(){
    passForm();
}

function checkUsuario() {
    const usuario = document.getElementById('usuario').value;
    const usuarioMessage = document.getElementById('usuario-message');

    if (usuario.length < 3 || usuario.length > 12) {
        usuarioMessage.textContent = "Username must be between 3 and 12 characters long.";
        usuarioMessage.classList.add("error-message-visible");
        console.log('Error in entering username');
        return false;
    } else {
        usuarioMessage.textContent = "";
        usuarioMessage.classList.remove("error-message-visible");
        console.log('Username passed validation');
        return true;
    }
}

function checkPassword() {
    const password = document.getElementById('password').value;
    const passwordMessage = document.getElementById('password-message');

    if (password.length < 3 || password.length > 12) {
        passwordMessage.textContent = "Password must be between 3 and 12 characters long.";
        passwordMessage.classList.add("error-message-visible");
        console.log('Error in entering password');
        return false;
    } else {
        passwordMessage.textContent = "";
        passwordMessage.classList.remove("error-message-visible");
        console.log('Password passed validation');
        return true;
    }
}

function passForm() {
    try {
        const isUsuarioValid = checkUsuario();
        const isPasswordValid = checkPassword();

        if (isUsuarioValid && isPasswordValid) {
            // Abaixo, coloque a url do site que você quer ir
            window.location.href = ""; // <-  url
        }
    } catch (error) {
        console.error(error);
    }
}