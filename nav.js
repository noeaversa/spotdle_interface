function chargeImgUser(){
    if(document.cookie != null || document.cookie != undefined || document.cookie != " "){
        fetch("https://nigga.spotdle.ar/me/user/image", {
            credentials: "include",
        }).then(data => data.json()).then(data => {
            console.log(data[0].url);
            if(data[0].url != null || data[0].url != undefined || data[0].url != " "){
                document.getElementById("user").src = data[0].url;
                
            }
        });
    }
}

function logOut(bool){
    if(document.cookie != null || document.cookie != undefined || document.cookie != " "){
        if(bool == true)
            window.alert("ATENCION, los datos del juegos no seran guardados ¿Esta seguro que quiere salir?");
        console.log(document.cookie);
    }
   
}