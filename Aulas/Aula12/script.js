alert("hello world!");

let titulo = document.querySelector("#titulo");
titulo.textContent = "Boa noite!";
titulo.style.color = "red";

function mostraAlerta() {
    alert("funciona");
}

titulo.onclick = mostraAlerta;

function mostraTexto(texto) {
    alert(texto);
}

titulo.onclick = mostraTexto("palco");
