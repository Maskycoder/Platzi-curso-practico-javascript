// calcula la media aritmética de un array
function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );
    const promedioLista = sumaLista / lista.length;

    return promedioLista;
}


// comprueba que un número es par o impar
function esPar(numero) {
    if (numero % 2 === 0) { 
        return true;
    } else { 
        return false;
    }
}

// calcula la mediana de un array
function calcularMediana(lista){
    const mitadLista = parseInt(lista.length / 2);
    let mediana;
    let listaOrdenada = lista.sort(
        function (a,b) {
            return a-b;
        });
    if (esPar(lista.length)) {
        const elemento1 = listaOrdenada[mitadLista - 1];
        const elemento2 = listaOrdenada[mitadLista];
        const promedioElemento1y2 = calcularMediaAritmetica([
            elemento1, 
            elemento2,
        ]);
        mediana = promedioElemento1y2;
        mediana = (elemento1 + elemento2) /2;
        return mediana;
    } else {
        mediana = listaOrdenada[mitadLista];  
        return mediana;  
    }

}