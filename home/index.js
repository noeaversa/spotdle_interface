function EnterAlbum(){
    fetch("http://localhost:3000/me/user", {
            credentials: "include",
        }).then(data => data.json()).then(data => {
            window.location = "/album_game/album.html";
        }).catch(error => {
            window.alert("logueate primero");
        });
}