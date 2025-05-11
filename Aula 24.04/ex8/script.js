function contarTexto() {
    const texto = document.getElementById("texto").value;
    const quantidade = texto.length;
    document.getElementById("resultado").innerText = "Quantidade de caracteres: " + quantidade;
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("ex8").addEventListener("click", contarTexto);
});