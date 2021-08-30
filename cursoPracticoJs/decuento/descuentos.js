// const precioOriginal = 120;
// const descuento = 15



function calcularPrecioConDescuento(precio, descuento){
    const porcentajePrecioConDescuento = 100 - descuento
    const precioConDescuento = (precio * porcentajePrecioConDescuento)/100
    return precioConDescuento
}

function handlePriceDiscount(){
    const inputPrice = document.getElementById("inputPrice").value
    const inputDiscount = document.getElementById("inputDiscount").value

    const precioConDescuento = calcularPrecioConDescuento(inputPrice, inputDiscount)
    const resultPrice = document.getElementById("resultPrice")
    resultPrice.innerText = "El precio con descuento es de: $" + precioConDescuento



}
// console.log({
//     precioOriginal,
//     descuento,
//     porcentajePrecioConDescuento,
//     precioConDescuento
// })
