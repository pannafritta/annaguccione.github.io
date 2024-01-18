const jokes = ["Ci son due rane e una dice all'altra - Come mai hai gli occhi rossi? - e l'altra - Crack.", "Qual è il colmo per una rana? Nuotare a stile libero.", "Why are frogs so happy? They eat whatever bugs them.", "How does a frog feel when he has a broken leg? Unhoppy.", "Qual è la macchina preferita di una rana? Il maggiolino.", "Come chiami una rana che va a scuola? Saltinbanco.", "Qual è il genere musicale preferito da una rana? Hip-hop.", "The fly said to the frog, - Time flies when you’re having fun. - The frog replied, - Actually, time’s fun when you’re having flies!", "Qual è un difetto delle rane? Saltare alle conclusioni."];

function barzelletta() {
  document.getElementById("demo").innerHTML = jokes[Math.floor(Math.random() * 9)];}

function mouseOver1() {
  document.getElementById("demo1").style.color = "yellow";
}

function mouseOut1() {
  document.getElementById("demo1").style.color = "#fefcdd";
}

function mouseOver2() {
  document.getElementById("demo2").style.color = "yellow";
}

function mouseOut2() {
  document.getElementById("demo2").style.color = "#fefcdd";
}

function bigImg(x) {
  x.style.width = "100%";
}

function normalImg(x) {
  x.style.width = "400px";
}