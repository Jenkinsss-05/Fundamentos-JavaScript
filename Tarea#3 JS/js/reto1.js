
/*ME PUEDE AYUDAR A LA HORA DE HACER UN LOGIN AQUÍ HAY ANIMACIONES, EL USUARIO Y LA CONTRASEÑA*/






/*conexion con HTML usando el id btn-login y cargando la funcion llamada login*/
document.getElementById("btn-login").addEventListener("click", login);

/*funcion que valida el login*/
function validation_alert(ptext) {
    swal.fire({
        /* icon: "error",*/
        title: "Ojo!!",
        text: ptext,
        confirmButtonText: "Intentar de nuevo",
        confirmButtonColor: "#0063be",
        html: ' <br><p>' + ptext + " </p>", /*AQUÍ VA EL LINK DE MI ANIMACION LOTTIE*/ 
    });
}

//funcion login
function login() {
    let user_input = document.getElementById("in-txt-user").value;
    let pass_input = document.getElementById("in-txt-pass").value;
    let username = "cenfo";
    let password = "123";
    let input = [user_input, pass_input];
    let input_id = ["in-txt-user", "in-txt-pass"];
    let error_count = 0;
    let text = "";
    for (let i = 0; i < input.length; i++) {
        document.getElementById(input_id[i]).classList.remove("error");
        if (input[i] == "") {
            text = "Debe completar los espacios vacíos.";
            validation_alert(text);
            document.getElementById(input_id[i]).classList.add("error");
            error_count++;
        }
    }

    if (error_count == 0) {
        if (user_input == username && pass_input == password) {
            Swal.fire({
                //icon: "success",
                title: "Credenciales correctas",
                showConfirmButton: false,
                timer: 5000,
                html: ' <br><br><p>Un momento!</p>',

            }).then(() => {
                window.location.href = "https://www.ucenfotec.ac.cr", "blank";
            });
        } else {
            text = "Usuario o contraseña incorrecta.";
            validation_alert(text);
        }
    }
} 