//Función general que nos permite ir mostrando las distintas partes del html en función de lo que se pretende mostrar.
var actualSection = 'primeraPlana';
function changeSection(section){
    document.getElementById(actualSection).classList.remove('activa');
    document.getElementById(section).classList.add('activa');
    actualSection = section;
}


function login() {

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let data = { username: username, password: password };
    let dataJSON = JSON.stringify(data);

    fetch("http://localhost:8080/api/v1/workouts/login", {
        method: "POST",
        headers: {'Accept': 'application/json',
        'Content-Type': 'application/json'},
        body: dataJSON,
    })
    .then(function(res){ 
        return res.json(); 
    })
    .then(function(dataJSON){ 
        console.log( JSON.stringify( dataJSON ));
        if (dataJSON.status != 404) {
            accesopagina(dataJSON.data);
        }    
    });
}

function accesopagina(idUser){
    changeSection("paginaInicio");
}