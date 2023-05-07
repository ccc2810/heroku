//Función general que nos permite ir mostrando las distintas partes del html en función de lo que se pretende mostrar.
var actualSection = 'primeraPlana';
function changeSection(section){
    document.getElementById(actualSection).classList.remove('activa');
    document.getElementById(section).classList.add('activa');
    actualSection = section;
}

//Función que permite generar un identificador único
function generateUUID() {
    var d = new Date().getTime();
    var uuid = 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
    return uuid;
}

//Funciones acerca del asistente virtual a partir de la plataforma Kommunicate:
function kommunicateOnit(usuario){
    if (usuario.idKommunicate == ""){
        var newidKomunnicate = generateUUID()
        usuario.idKommunicate = newidKomunnicate
        console.log(usuario.idKommunicate)
    }
    console.log(usuario);
    (function(d, m){
        var kommunicateSettings ={
            "appId":"4409197bbed9ba14fade31ab98e3584b",
            "popupWidget":true, 
            "automaticChatOpenOnNavigation":false,
            //userId: Asignar a cada usuario el mismo flujo de conversación.
            "userId": usuario.idKommunicate,
            "userName": usuario.name,
            "onInit": function() {
                window.Kommunicate.customizeWidgetCss("div#mck-agent-status-text { display: none !important; } span.mck-agent-status-indicator { display: none !important }");
            }
        };
        var s = document.createElement("script"); 
        s.type = "text/javascript"; 
        s.async = true;
        s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
        var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
        window.kommunicate = m;
        m._globals = kommunicateSettings;
    })(document, window.kommunicate || {});

}


function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var data = { username: username, password: password };
    var dataJSON = JSON.stringify(data);

    //fetch("https://cvd-prediction.herokuapp.com/api/v1/patients/login", {
    fetch("http://localhost:8080/api/v1/patients/login", {
        method: "POST",
        headers: {'Accept': 'application/json',
        'Content-Type': 'application/json'},
        mode: "cors",
        body: dataJSON,
    })
    .then(function(res){
        return res.json(); 
    })
    .then(function(dataJSON){ 
        console.log( JSON.stringify(dataJSON));
        if (dataJSON.status != 404) {
            accesoPagina(dataJSON.data);
        } 
    });
}

function accesoPagina(idUser){
    //fetch("https://cvd-prediction.herokuapp.com/api/v1/patients/"+idUser, {
    fetch("http://localhost:8080/api/v1/patients/"+idUser, {
        method: "GET",
        headers: {'Accept': 'application/json',
        'Content-Type': 'application/json'},
        mode: "cors"
    })
    .then(function(res){
        return res.json(); 
    })
    .then(function(informacionUsuario){ 
        console.log( JSON.stringify(informacionUsuario));
        if (informacionUsuario.status != 404) {
            changeSection("paginaInicio");
            console.log(informacionUsuario.data);
            document.getElementById("mensajeBienvenida").innerHTML = "Usuario: " + informacionUsuario.data.name
            kommunicateOnit(informacionUsuario.data);
        }
        else{
            changeSection("error404");
        } 
    });
}

