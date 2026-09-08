class Totalizador {
    mostrarDetalle(cantidad, precio) {
        return "Cantidad de item: " + cantidad + "\nPrecio por item: " + precio;
    }

    calcularPrecioNeto(cantidad, precio) {
        let neto = cantidad * precio;
        return "Precio neto: " + neto;
    }

    obtenerPorcentajeImpuesto(estado) {
        const impuestos = {
            "UT": "6.65%",
            "NV": "8.00%",
            "TX": "6.25%",
            "AL": "4.00%",
            "CA": "8.25%"
        };

        return impuestos[estado] || "0%";
    }
}

export default Totalizador;