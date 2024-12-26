const button = document.getElementById("btn");
const mybg   = document.getElementById("my-div")

function start(){

    button.style.backgroundColor = generateRGB();
    setInterval(function(){

        mybg.style.backgroundColor=generateRGB();
    },2000);

}
function genrateRandomNumber(){
    return Math.floor(Math.random()*255)+1;
}
function generateRGB(){
    var randomR = genrateRandomNumber();
    var randomG = genrateRandomNumber();
    var randomB = genrateRandomNumber();
    return `rgb(${randomR},${randomG},${randomB})`;
}