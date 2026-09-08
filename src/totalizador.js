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

    calcularImpuestoUT(cantidad, precio) {
        let neto = cantidad * precio;
        let impuesto = neto * 0.0665;
        return "Impuesto para UT(%6.65): $" + impuesto.toFixed(2);
    }

    calcularImpuestoNV(cantidad, precio) {
        let neto = cantidad * precio;
        let impuesto = neto * 0.0800;
        return "Impuesto para NV(%8.00): $" + impuesto.toFixed(2);
    }

    calcularImpuestoTX(cantidad, precio) {
        let neto = cantidad * precio;
        let impuesto = neto * 0.0625;
        return "Impuesto para TX(%6.25): $" + impuesto.toFixed(2);
    }
    calcularImpuestoAL(cantidad, precio) {
        let neto = cantidad * precio;
        let impuesto = neto * 0.0400;
        return "Impuesto para AL(%4.00): $" + impuesto.toFixed(2);
    }
}

export default Totalizador;