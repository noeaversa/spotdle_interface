function loadDataUser(){
    let boton_nav = document.getElementById("container-button");
    let welcome = document.getElementById("welcome-user");

    if(hasCookie("spotdle-access")){
        getUserImages().then(data => {
            if(data[0].url != null && data[0].url != undefined && data[0].url != "")
                document.getElementById("user").src = data[0].url; 
        });

        getUser().then(data => {
            if(data.name !== null && data.name !== undefined && data.name !== ""){
                document.getElementById("name-user").innerText = "@" + data.name;
                if(elementExists("welcome-user")) {
                    welcome.innerHTML = "¡Hola, " + data.name + "!";
                }
            }
        }); 
        if(elementExists("container-button") && elementExists("boton-nav")){
            boton_nav.style.display = "none";
            document.getElementById("boton-nav").style.display = "none";
        } 
    }else{
        if(elementExists("container-button") && elementExists("boton-nav")){
            boton_nav.style.display = "flex";
            document.getElementById("boton-nav").style.display = "flex";
        }
    }
}


function logOut(showMsg){
        if(showMsg == true) {
            window.alert("ATENCION, los datos del juegos no seran guardados ¿Esta seguro que quiere salir?");
        }
        clearCookies();
        window.location.reload(); 
}


function elementExists(elementId) {
    return document.getElementById(elementId) !== null;
}