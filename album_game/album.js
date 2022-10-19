function randomNumber(){
    return -(Math.floor(Math.random() * 225) + 1);
}

function cofigurationImg(){
    let margin_left = randomNumber();
    let margin_top = randomNumber();

    let image = document.getElementById("album-img");

    image.style.marginLeft = (margin_left + "px");
    image.style.marginTop = (margin_top + "px");
}

function enterKeyPressed(event) {
    if (event.keyCode == 13) {
        cofigurationImg();
    }
 }