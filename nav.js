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
        let value_cookie = document.cookie;
        document.cookie = value_cookie + '; Expires=Thu, 01 Jan 1970 00:00:01 GMT;'
        window.location.replace("https://spotdle.ar/"); 
        document.getElementById("user").src = "/images/user.png";    
    }
}