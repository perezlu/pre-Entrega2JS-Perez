//Variables
let nombre;
let nombreRes;
let apellido;
let apellidoRes;
let usuario;
let diaReserva;
let numAsistentes;
let asistentes = [];
let mailContacto;
//Constantes
const recReserva = 7;
const anfitrion = {nombreRes, apellidoRes, mailContacto};
const botonRes = document.getElementById('buttonReserva');
//Funciones
function Reservar(nombreRes, apellidoRes, numAsistentes, diaReserva){
    alert(`tu reserva está a nombre de ${nombreRes} ${apellidoRes}. los asistentes son ${numAsistentes} y la reserva es para el día ${diaReserva}`);
}

//
botonRes.addEventListener('click',() =>{
    nombreRes = document.getElementById('form4Example2').value
    apellidoRes = document.getElementById('form4Example25').value
    numAsistentes = document.getElementById('numNames').value
    diaReserva = document.getElementById('form4Example4').value;

    if (nombreRes == null || apellidoRes == null || diaReserva == null || nombreRes == "" || apellidoRes == "" || diaReserva == "") {
        let p = document.createElement("p");
        p.innerText= "CASILLAS REQUERIDAS"
        const camposReq = document.getElementById('camposReq')
        camposReq.appendChild(p).style.color = 'red'
    }else{
    Reservar(nombreRes, apellidoRes, numAsistentes, diaReserva);
    let confirmacion = document.createElement("div");
    const divConfirmacion = document.getElementById('confirmacion');
    confirmacion.innerText = "Muchas gracias por su reserva! En los próximos minutos podrá recibir un mail a su cuenta donde aparecerán todos los datos de la reserva. En caso de no recibirlo, escribanos a cualquiera de nuestras redes sociales para solucionar el problema. Bon appetit!"
    divConfirmacion.appendChild(confirmacion);
}
})


anfitrion.nombreRes = nombreRes
anfitrion.apellidoRes = apellidoRes
anfitrion.mailContacto = mailContacto

