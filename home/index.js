function EnterAlbum(){
    fetch("https://nigga.spotdle.ar/me/user", {
            credentials: "include",
        }).then(data => data.json()).then(data => {
            if(data.status === 200 || data.status === undefined) {
                window.location = "/album_game/album.html";
            } else {
                window.alert("logueate primero");
            }
        }).catch(error => {
            window.alert("logueate primero");
        });
}