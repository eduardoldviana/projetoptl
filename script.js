document.getElementById("devo1").addEventListener("click", function() {
    window.open("https://open.spotify.com/intl-pt/track/0TrqJmSgH8iRoWKVNgfz90", "_blank");
});
function atualizarTitulo() {
    const titulo = document.getElementById("devottl");
    if (window.innerWidth < 600) {
        titulo.textContent = "PTL";
    }
    else {
        titulo.textContent = "Post Tenebras Lux";
    }
}
atualizarTitulo();
window.addEventListener("resize", atualizarTitulo);