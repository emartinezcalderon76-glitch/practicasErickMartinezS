function cambiar() {
document.getElementById("tarjeta").classList.toggle("oculto");
}
function claro() {
document.getElementById("tarjeta").classList.remove("azul");
document.getElementById("tarjeta").classList.add("verde");
}
function oscuro() {
document.getElementById("tarjeta").classList.remove("verde");
document.getElementById("tarjeta").classList.add("azul");
}
