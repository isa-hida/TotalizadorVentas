class Totalizador {
    mostrarDetalle(cantidad, precio) {
        return "Cantidad de item: " + cantidad + "\nPrecio por item: " + precio;
    }

    calcularPrecioNeto(cantidad, precio) {
        let neto = cantidad * precio;
        return "Precio neto: " + neto;
    }

    obtenerTasasImpuesto() {
        return {
            "UT": 0.0665,
            "NV": 0.0800,
            "TX": 0.0625,
            "AL": 0.0400,
            "CA": 0.0825
        };
    }

    obtenerPorcentajeImpuesto(estado) {
        let tasas = this.obtenerTasasImpuesto();
        let tasa = tasas[estado] || 0;
        return (tasa * 100).toFixed(2) + "%";
    }

    calcularImpuesto(cantidad, precio, estado) {
        let neto = cantidad * precio;
        let tasas = this.obtenerTasasImpuesto();
        let tasa = tasas[estado] || 0;
        let impuesto = neto * tasa;
        let porcentajeTexto = (tasa * 100).toString();

        return "Impuesto para " + estado + "(%" + porcentajeTexto + "): $" + impuesto.toFixed(2);
    }

    obtenerDescuento(cantidad, precio) {
        let neto = cantidad * precio;
        let porcentaje = 0;

        if (neto >= 3000) {
            porcentaje = 5;
        } else if (neto >= 1000) {
            porcentaje = 3;
        }

        let montoDescuento = neto * (porcentaje / 100);
        return "Descuento (" + porcentaje + "%): " + montoDescuento;
    }
}

export default Totalizador;