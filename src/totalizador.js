class Totalizador {
    mostrarDetalle(cantidad, precio) {
        return "Cantidad de item: " + cantidad + "\nPrecio por item: " + precio;
    }

    calcularPrecioNeto(cantidad, precio) {
        let neto = cantidad * precio;
        return "Precio neto: " + neto;
    }
}

export default Totalizador;