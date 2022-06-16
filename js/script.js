function alerta(ciudad) {
    alert("Cargando informe meteorológico "+ciudad+"...");
}

function aceptar() {
    var cookie = document.querySelector(".cookie"); //Seleccionando la etiqueta con clase cookie

    //document.getElementById('IDENTIFICADOR');

    cookie.remove();
}

function cambiaTemperatura(elementoSelect) {
    var fOc = elementoSelect.value;
    console.log(fOc);
    /*
    i = 1
    elementoTemperatura = <span id="temperatura1" class="tempMax">25</span>
    temperatura = "25";
    temperatura = 25;
    newTemp = 0;

     */
    for(var i=1; i<=8; i++) {
        var elementoTemperatura = document.querySelector('#temperatura'+i);
        var temperatura = elementoTemperatura.innerText;
        temperatura = parseInt(temperatura);
        console.log(temperatura);
        var newTemp = 0;
        if(fOc === "C") {
            //F -> C
            newTemp = Math.round((temperatura - 32) * 5 / 9);
        } else {
            //C -> F
            newTemp = Math.round((temperatura * 9 / 5) + 32);
        }

        elementoTemperatura.innerText = newTemp;
    }

}