const body = document.querySelector("body");

const IMG_NUMBER =4;

function paintImage(imgNumber){
    const image = new Image();
    image.src=`images/${imgNumber +1}.jpg`;
    //0+1을 넣어서 첫번째가 됨
    image.classList.add("bgImage")
    body.prepend(image);
    //appendChild에서 prepend로 수정
}

function genRandom(){
    const number = Math.floor(Math.random() * IMG_NUMBER);
    return number;
}

function init(){
    const randomNumber = genRandom();
    paintImage(randomNumber);
}

init();