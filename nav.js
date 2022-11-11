function loadDataUser(){
    let boton_nav = document.getElementById("container-button");
    let welcome = document.getElementById("welcome-user");
    console.log(boton_nav)

    if(document.cookie != null && document.cookie != undefined && document.cookie != ""){
        console.log("Hay cookies")
        fetch("https://nigga.spotdle.ar/me/user/image", {
            credentials: "include",
        }).then(data => data.json()).then(data => {
            if(data[0].url != null && data[0].url != undefined && data[0].url != "")
                document.getElementById("user").src = data[0].url; 
        });   fetch("https://nigga.spotdle.ar/me/user/image", {
            credentials: "include",
        }).then(data => data.json()).then(data => {
            if(data[0].url != null && data[0].url != undefined && data[0].url != "")
                document.getElementById("user").src = data[0].url; 
        });

        fetch("https://nigga.spotdle.ar/me/user/", {
            credentials: "include"
        }).then(data => data.json()).then(data => {
            console.log(data.name);
            if(data.name !== null && data.name !== undefined && data.name !== ""){
                document.getElementById("name-user").innerText = "@" + data.name;
                if(welcome !== null && welcome !== undefined && welcome !== "") {
                    document.getElementById("welcome-user").innerHTML = "¡Hola, " + data.name + "!";
                }
            }
        }); 
        if(boton_nav !== null && boton_nav !== undefined && boton_nav !== ""){
            console.log("Hay boton con cookies")
            document.getElementById("container-button").style.display = "none";
            document.getElementById("boton-nav").style.display = "none";
        } 
    }else{
        console.log("No hay cookies");
        if(boton_nav !== null && boton_nav !== undefined && boton_nav !== ""){
            console.log("Hay boton")
            document.getElementById("container-button").style.display = "flex";
            document.getElementById("boton-nav").style.display = "flex";
        }
    }
}

function logOut(bool){
        if(bool == true) {
            window.alert("ATENCION, los datos del juegos no seran guardados ¿Esta seguro que quiere salir?");
        }
        clearCookies();
        window.location.reload(); 
}

function clearCookies() {
    var cookies = document.cookie.split("; ");
    for (var c = 0; c < cookies.length; c++) {
        var d = window.location.hostname.split(".");
        while (d.length > 0) {
            var cookieBase = encodeURIComponent(cookies[c].split(";")[0].split("=")[0]) + '=; expires=Thu, 01-Jan-1970 00:00:01 GMT; domain=' + d.join('.') + ' ;path=';
            var p = location.pathname.split('/');
            document.cookie = cookieBase + '/';
            while (p.length > 0) {
                document.cookie = cookieBase + p.join('/');
                p.pop();
            };
            d.shift();
        }
    }
}
