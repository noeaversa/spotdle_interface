let lifeCounter = 2;
let puntos = 0;
let name_album;
let image_url;
let used_albums_names = [];
//let totalPointsUser = algo de la api;

function nuevaIMG(){
    return new Promise(function(resolve, reject) {
        fetch("https://nigga.spotdle.ar/me/user/topartists", {
            credentials: "include",
        }).then(data => data.json()).then(data => {
            const randN = (Math.floor(Math.random() * data.items.length));
            fetch("https://nigga.spotdle.ar/me/user/artist/albums?id=" + data.items[randN].id, {
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
    document.getElementById("right-answer").innerText = "";
    document.getElementById("album-img").classList.add("blur");

    nuevaIMG().then(data => {
        toDataUrl(data.image, setIMG);
    })
}


function changeLife(){
    var imgRight = document.getElementById("heart-right");
    var imgCenter = document.getElementById("heart-center");
    var imgLeft = document.getElementById("heart-left");

    
    if(lifeCounter > 0){
        if(lifeCounter == 2)
            imgRight.src = "/images/cora_no_vida.png";
        else 
            imgCenter.src = "/images/cora_no_vida.png";
        setTimeout(cofigurationImg, 2000);
    }else{
        imgLeft.src = "/images/cora_no_vida.png";
        restart();
    }
}

function showAnswer(name){
    let image = document.getElementById("album-img");
    
    image.style.height = (275 + "px");
    image.style.width = (275 + "px");
    image.style.margin = 0 + "px";

    document.getElementById("right-answer").innerText = name;
}

function correctAnswer(name){
    showAnswer(name);
    puntos += 2;
    document.getElementById("points").innerText = puntos;
}

function almostCorrect(name){
    showAnswer(name);
    puntos ++;
    document.getElementById("points").innerText = puntos;
}

function verifyKey(){
    console.log("entre");
    let value_input = document.getElementById("input-search").value;
    let value_input_lowerCase = value_input.toLowerCase();
    let correctLetter = true;
    let aux = 0;
    if(name_album.toLowerCase() == value_input_lowerCase){
        correctAnswer(name_album);
        setTimeout(cofigurationImg, 2000);
    }
    else{
        for(let i = 0; i < name_album.length; i++){
            if(value_input_lowerCase[i] == name_album[i].toLowerCase())
                aux++;
        }   

        if((name_album.length / 2) <= aux){
            almostCorrect(name_album);
            setTimeout(cofigurationImg, 2000);
        } 
        else {
            showAnswer(name_album);
            changeLife();
            lifeCounter--;
        }
    }

    document.getElementById("input-search").value = "";
}

function enterKeyPressed(event) {
    if (event.keyCode == 13) {
        verifyKey();  
    }
 }

 function restart(){
    saveScore(puntos).then( data => {
        window.alert("perdiste, hiciste " + puntos + " puntos en total");
        lifeCounter = 2;
        puntos = 0;
        window.location.reload();
    }).catch( error => {
        window.alert("Ocurrio un error al guardar los puntos");
        window.location.reload();
    });
    
}