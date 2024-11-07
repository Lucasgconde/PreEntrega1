// Función principal del simulador
function simuladorTienda() {
    alert("¡Bienvenido a la tienda de SponsorDios de YSY A!");

    let totalGeneral = 0; // Variable para acumular el total de la compra
    let resumenCompra = ""; // Variable para almacenar el resumen de la compra

    // Ciclo para permitir múltiples selecciones en una misma compra
    do {
        // Solicita al usuario elegir un producto
        const producto = prompt("Seleccione el producto que desea comprar: remera, buzo, o gorra");

        // Solicita al usuario ingresar la cantidad
        const cantidad = parseInt(prompt("Ingrese la cantidad que desea comprar:"), 10);

        // Precios de los productos
        const precioRemera = 25000;
        const precioBuzo = 72500;
        const precioGorra = 13500;

        let precioUnitario = 0;

        // Asigna el precio unitario según el producto seleccionado
        switch (producto) {
            case "remera":
                precioUnitario = precioRemera;
                break;
            case "buzo":
                precioUnitario = precioBuzo;
                break;
            case "gorra":
                precioUnitario = precioGorra;
                break;
            default:
                alert("Producto no válido. Inténtelo de nuevo.");
                continue; // Continua al inicio del ciclo si el producto no es válido
        }

        // Calcula el total del producto actual y lo agrega al total general
        const totalProducto = cantidad * precioUnitario;
        totalGeneral += totalProducto;

        // Agrega el detalle del producto al resumen de la compra
        resumenCompra += `${cantidad} x ${producto}(s) - $${totalProducto}\n`;

        // Muestra el total del producto actual en la consola
        console.log(`El total por ${cantidad} ${producto}(s) es: $${totalProducto}`);

    } while (confirm("¿Desea agregar otro producto a su compra?"));

    // Muestra el resumen final de la compra y el total general
    alert(`Resumen de su compra:\n${resumenCompra}\nTotal general: $${totalGeneral}`);
}

// Llamada a la función para iniciar el simulador
simuladorTienda();