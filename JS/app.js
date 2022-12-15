let monId = document.getElementById("monIds");

try {
    monId.innerHTML = "il n'y a pas d'erreur";
}
catch (e) {
    alert("l'élément monId n'existe pas !");
}