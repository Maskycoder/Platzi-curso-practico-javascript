// cálculo del porcentaje a pagar 
function porcentajeApagar(descuento) {
    return 100-descuento;
}

// Cálculo del precio final
function precioFinal(precioOriginal, descuento){
    return (precioOriginal * porcentajeApagar(descuento)/100);
}


// integración con HTML
function calcularPrecioConDescuento() {
    const inicial = parseFloat(document.getElementById("precioOriginal").value);
    const descuento = parseFloat(document.getElementById("descuento").value);
    const final = precioFinal(inicial, descuento);

    document.getElementById("precioFinal").textContent = "El resultado es: " + final;
}