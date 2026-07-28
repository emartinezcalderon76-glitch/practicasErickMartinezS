/*alert("Hola soy la nueva alerta");

document.write("Hola soy un mensaje en el documento");

console.log("Hola soy un mensaje en la consola");*/

/*let nom = document.getElementById("jose");
nom.innerHTML = "Hola";*/

function comprar (){
    let saldo = 90;
    let precio = 100;

    let parrafoAlerta = document.getElementById("alerta");
    parrafoAlerta.innerHTML = "Compra exitosa";

    parrafoAlerta.classList.add("exito");
}