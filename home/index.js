function EnterAlbum(){
    fetch("https://nigga.spotdle.ar/me/user/image", {
            credentials: "include",
        }).then(data => data.json()).then(data => {
            window.location = "/album_game/album.html";
        }).catch(error => {
            window.alert("logueate primero");
        });
}