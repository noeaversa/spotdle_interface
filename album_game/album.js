let lifeCounter = 1;
let puntos = 0;
//let totalPointsUser = algo de la api;

function randomNumber(){
    return -(Math.floor(Math.random() * 225) + 1);
}

function cofigurationImg(){
    let margin_left = randomNumber();
    let margin_top = randomNumber();

    let image = document.getElementById("album-img");

    image.style.height = (500 + "px");
    image.style.width = (500 + "px");

    image.style.marginLeft = (margin_left + "px");
    image.style.marginTop = (margin_top + "px");
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
    let key = "no se";

    if(value_input != key){
        changeLife();
        lifeCounter--;
    }
    else{
        correctAnswer()
        setTimeout(cofigurationImg, 1000);
    }
}

function enterKeyPressed(event) {
    if (event.keyCode == 13) {
        verifyKey();  
    }
 }

 function restart(){
    window.alert("perdiste ESTUPIDO ESTUPIDO ESTUPIDO :)");
    lifeCounter = 1;
    /*
        if(totalPointsUser < puntos)
            totalPointsUser = puntos;
    */
    puntos = 0;
}