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
        fetch("https://nigga.spotdle.ar/me/user/name", {
            credentials: "include"
        }).then(data => data.json()).then(data => {
            console.log(data);
            /*
            if(data[0].url != null || data[0].url != undefined || data[0].url != " ")
                document.getElementById("name-user").value = data; 
            */
        });
    }
}

/*
function logOut(bool){
    if(document.cookie != null || document.cookie != undefined || document.cookie != " "){
        if(bool == true)
            window.alert("ATENCION, los datos del juegos no seran guardados ¿Esta seguro que quiere salir?");
        clearCookies();
        document.getElementById("user").src = "/images/user.png";    
        window.location.reload(); 
    }
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
*/