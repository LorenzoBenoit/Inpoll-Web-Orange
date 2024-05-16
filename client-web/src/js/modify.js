document.getElementById("user").addEventListener("mouseover", function() {
    document.getElementById("modif").style.display = "flex";
});

document.getElementById("user").addEventListener("mouseout", function() {
    document.getElementById("modif").style.display = "none";
});

var bouton = document.getElementById("modif");

bouton.addEventListener("click", function() {
  alert("En cours de développement");
});