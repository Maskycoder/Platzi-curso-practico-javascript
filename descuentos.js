const coupons = [
    {
        name: "enero",
        discount: 15,
    },
    {
        name: "verano",
        discount: 30,
    },
    {
        name: "blackfriday",
        discount: 25,
    },
    {
        name: "navidad",
        discount: 20,
    },
];
    

// cálculo del porcentaje a pagar 
function calcularDescuento(descuento) {
    return 100-descuento;
}

// Cálculo del precio final
function precioFinal(precioOriginal, descuento){
    return (precioOriginal * calcularDescuento(descuento)/100);
}

// integración con HTML
function calcularPrecioConDescuento() {
    const inicial = parseFloat(document.getElementById("precioOriginal").value);
    const descuento = parseFloat(document.getElementById("descuento").value);
    const final = precioFinal(inicial, descuento);
    
    document.getElementById("precioFinal").textContent = "El resultado es: " + final;
}


function calcularPrecioConCupon() {
    const inicial = parseFloat(document.getElementById("precioOriginal").value);
    var descuento = parseFloat(document.getElementById("descuento").value);
    const couponValue = document.getElementById("cupon").value;
    const isCouponValueValid = function (coupon) {
        return coupon.name === couponValue;
    };
    
    const userCoupon = coupons.find(isCouponValueValid);
    if(!userCoupon) {
        alert('El cupón '+couponValue +' no existe');
    } else {
        descuento = descuento + userCoupon.discount;
    }
    const descuentoCupon = precioFinal(inicial, descuento);

    document.getElementById("precioFinal").textContent = "El resultado es: " + descuentoCupon; 
}