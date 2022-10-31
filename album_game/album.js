let lifeCounter = 1;
let puntos = 0;
let name_album;
let image_url;
let used_albums_names = [];
//let totalPointsUser = algo de la api;

function nuevaIMG(){
    return new Promise(function(resolve, reject) {
        fetch("http://localhost:3000/me/user/topartists", {
            credentials: "include",
        }).then(data => data.json()).then(data => {
            const randN = (Math.floor(Math.random() * data.items.length));
            fetch("http://localhost:3000/me/user/artist/albums?id=" + data.items[randN].id, {
                credentials: "include",
            }).then(data => data.json()).then(data => {
                console.log(data);
                
                const filteredData = data.filter(album => 
                    album.albumType.toLowerCase() === "album" 
                    && album.albumGroup.toLowerCase() === "album" 
                    && !used_albums_names.includes(album.name.toLowerCase())
                );

                const randN2 = (Math.floor(Math.random() * filteredData.length));
                if(filteredData[randN2] === undefined){
                    name_album = data[randN2].name;
                    image_url = data[randN2].images[0].url;
                } else{
                    name_album = filteredData[randN2].name;
                    image_url = filteredData[randN2].images[0].url;
                    console.log(filteredData)
                }

                if(!used_albums_names.includes(name_album.toLowerCase())){
                    used_albums_names.push(name_album.toLowerCase());
                }
                resolve({
                    "name": name_album,
                    "image": image_url
                })
            })
        });      
    })
}


function toDataUrl(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.onload = function() {
        var reader = new FileReader();
        reader.onloadend = function() {
            callback(reader.result);
        }
        reader.readAsDataURL(xhr.response);
    };
    xhr.open('GET', url);
    xhr.responseType = 'blob';
    xhr.send();
}

function randomNumber(){
    return -(Math.floor(Math.random() * 225) + 1);
}

function setIMG(imgUrl) {
    document.getElementById("album-img").src = imgUrl;

    let margin_left = randomNumber();
    let margin_top = randomNumber();

    let image = document.getElementById("album-img");

    image.style.height = (550 + "px");
    image.style.width = (550 + "px");

    image.style.marginLeft = (margin_left + "px");
    image.style.marginTop = (margin_top + "px");

    document.getElementById("album-img").classList.remove("blur");
}

function cofigurationImg(){
    document.getElementById("album-img").classList.add("blur");
    nuevaIMG().then(data => {
        toDataUrl(data.image, setIMG);
    })
    
}


function changeLife(){
    var imgRight = document.getElementById("heart-right");
    var imgLeft = document.getElementById("heart-left");

    if(lifeCounter == 1){
        imgRight.src = "/spotdle_interface/images/cora_no_vida.png";
        cofigurationImg();
    }else if(lifeCounter == 0){
        imgLeft.src = "/spotdle_interface/images/cora_no_vida.png";
        restart();
    }
}

function correctAnswer(){
    let image = document.getElementById("album-img");
    
    image.style.height = (275 + "px");
    image.style.width = (275 + "px");
    image.style.margin = 0 + "px";
    puntos++;
    document.getElementById("points").innerText = puntos;

    
}

function verifyKey(){
    let value_input = document.getElementById("input-search").value;

    if(value_input != name_album && value_input != name_album.toLowerCase()){
        changeLife();
        lifeCounter--;
    }
    else{
        correctAnswer()
        setTimeout(cofigurationImg, 1000);
    }
    document.getElementById("input-search").value = "";
}

function enterKeyPressed(event) {
    if (event.keyCode == 13) {
        verifyKey();  
    }
 }

 function restart(){
    window.alert("perdiste ESTUPIDO ESTUPIDO ESTUPIDO :)");
    lifeCounter = 1;
    puntos = 0;
    window.location.reload();
}