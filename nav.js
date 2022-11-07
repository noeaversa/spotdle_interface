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