
let simbolos = ["♠", "♣","♥", "♦" ];
let pintas = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

let i = Math.floor(Math.random()*simbolos.length);
let cardsig = simbolos[i];



let e = Math.floor(Math.random()*pintas.length);
 let cardcenter = pintas[e];


 
 (function cargar(){

    if (cardsig == "♥"){
        document.querySelector(".card-pic1").style.color="red";
        document.querySelector(".card-pic1").innerHTML = cardsig;
        document.querySelector(".card-center").innerHTML = cardcenter;
        document.querySelector(".card-pic2").style.color="red";
        document.querySelector(".card-pic2").innerHTML = cardsig;
    }else{

        document.querySelector(".card-pic1").innerHTML = cardsig;
        document.querySelector(".card-center").innerHTML = cardcenter;
        document.querySelector(".card-pic2").innerHTML = cardsig;
    }
})();

