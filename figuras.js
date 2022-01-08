/// Código del Cuadrado
// perímetro del cuadrado
function perimetroCuadrado(lado) {
    return "El perímetro es de: " +( 4 * lado) + "cm";
}
// área del cuadrado
function areaCuadrado(lado){
    return "El área es de: " + (lado * lado) + "cm^2";
} 


/// Código del triangulo
// perímetro del triangulo
function perimetroTriangulo(lado1, lado2, base) {
    return "El perímetro es de: " + (lado1 + lado2 + base) + "cm" ;
} 

// área del triangulo
function areaTriangulo(base, altura) {
    return "El área es de: " + ((base * altura) / 2) + "cm^2";
}


/// Código del círculo
// Diámetro del círculo
function diametroCirculo(radio) {
    return radio * 2;
}

// Pi
const PI = Math.PI;
//console.log("PI es " + PI);

// Perímetro del círculo
function perimetroCirculo (radio) {
    return "El perímetro es de: "  + (2 * PI * radio) + "cm";
} 

// Área del círculo
function areaCirculo(radio) {
    return "El área es de: " (PI * (radio * radio)) + "cm^2";
} 

/// Triángulo isosceles
// Altura triángulo isosceles
function alturaIsosceles(lado1, lado2, base) {
  
    if (((lado1 == lado2) && (lado1 == base)) || (lado1 != lado2)) {
        return "No es un triángulo isosceles";
    }
    if (lado1 == lado2){
        return "La altura es de: "  + (Math.sqrt(lado1**2-(base**2/4))) + "cm";
    }
}

/// Interacción con HTML
// Cuadrado
function calcularPerimetroCuadrado() {
    const input = document.getElementById("ladoCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    document.getElementById("resultadoCuadrado").textContent = "El resultado es: " + perimetro;
}

function calcularAreaCuadrado() {
    const input = document.getElementById("ladoCuadrado");
    const value = parseFloat(input.value);
    const area = areaCuadrado(value);
    document.getElementById("resultadoCuadrado").textContent = "El resultado es: " + area;
}

//triangulo
function calcularPerimetroTriangulo() {
    const ladoTriangulo1 = document.getElementById("ladoTriangulo1");
    const lado1 = parseFloat(ladoTriangulo1.value);

    const ladoTriangulo2 = document.getElementById("ladoTriangulo2");
    const lado2 = parseFloat(ladoTriangulo2.value);

    const baseTriangulo = document.getElementById("baseTriangulo");
    const base = parseFloat(baseTriangulo.value);
    const perimetro = perimetroTriangulo(lado1, lado2, base);
    document.getElementById("resultadoTriangulo").textContent = perimetro;
}

function calcularAreaTriangulo() {
    const input1 = document.getElementById("baseTriangulo");
    const base = parseFloat(input1.value);
    const input2 = document.getElementById("alturaTriangulo");
    const altura = parseFloat(input2.value);
    const area = areaTriangulo(base, altura);
    document.getElementById("resultadoTriangulo").textContent = area;
}

function calcularPerimetroCirculo() {
    const input =document.getElementById("radioCirculo");
    const value = parseFloat(input.value);
    const perimetro = perimetroCirculo(value);
    document.getElementById("resultadoCirculo").textContent = perimetro;
}
function calcularAreaCirculo() {
    const input = document.getElementById("radioCirculo");
    const value = parseFloat(input.value);
    const area = areaCirculo(value);
    document.getElementById("resultadoCirculo").textContent = area;
}

function calcularAlturaIsosceles() {
    const input1 = document.getElementById("ladoIsosceles1");
    const lado1 = parseFloat(input1.value);
    const input2 = document.getElementById("ladoIsosceles2");
    const lado2 = parseFloat(input2.value);
    const input3 = document.getElementById("baseIsosceles");
    const base = parseFloat(input3.value);
    const altura = alturaIsosceles(lado1, lado2, base);
    document.getElementById("resultadoIsosceles").textContent = altura;
}