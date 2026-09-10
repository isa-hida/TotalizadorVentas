class Totalizador {
    mostrarDetalle(cantidad, precio) {
        if (cantidad <= 0 || precio <= 0) return "Error: La cantidad y el precio deben ser mayores a 0";
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

        if (neto >= 30000) {
            porcentaje = 15;
        } else if (neto >= 10000) {
            porcentaje = 10;
        } else if (neto >= 7000) {
            porcentaje = 7;
        } else if (neto >= 3000) {
            porcentaje = 5;
        } else if (neto >= 1000) {
            porcentaje = 3;
        }

        let montoDescuento = neto * (porcentaje / 100);
        return "Descuento (" + porcentaje + "%): " + montoDescuento.toFixed(2);
    }

    calcularPrecioTotal(cantidad, precio, estado, categoria, peso_volumetrico) {
        let neto = parseFloat(this.calcularPrecioNeto(cantidad, precio).split(": ")[1]);
        let impuesto = parseFloat(this.calcularImpuesto(cantidad, precio, estado).split("$")[1]);
        let descuento = parseFloat(this.obtenerDescuento(cantidad, precio).split(": ")[1]);
        let impuesto_adicional = parseFloat(this.calcularImpuestoAdicional(cantidad, precio, categoria).split("$")[1]);
        let descuento_adicional = parseFloat(this.obtenerDescuentoAdicional(cantidad, precio, categoria).split("$")[1]);
        let costo_envio = parseFloat(this.calcularCostoEnvioTotal(cantidad, precio, peso_volumetrico).split("$")[1]);
        let total = neto + impuesto + impuesto_adicional - descuento - descuento_adicional + costo_envio;

        return "Precio total: $" + total.toFixed(2);
    }

    obtenerTasasImpuestoAdicional() {
        return {
            "Bebidas alcoholicas": 0.07,
            "Muebles": 0.03,
            "Electronicos": 0.04,
            "Vestimenta": 0.02
        };
    }
    calcularImpuestoAdicional(cantidad, precio, categoria) {
        let neto = cantidad * precio;
        let tasas = this.obtenerTasasImpuestoAdicional();
        let tasa = tasas[categoria] || 0;
        let impuesto_adicional = neto * tasa;
        let porcentajeTexto = (tasa * 100).toFixed(2);

        return "Impuesto para " + categoria + "(%" + porcentajeTexto + "): $" + impuesto_adicional.toFixed(2);
    }

    obtenerDescuentoAdicional(cantidad, precio, categoria) {
        let neto = cantidad * precio;
        let porcentaje = 0;
        if (categoria === "Alimentos") {
            porcentaje = 2;
        } else if (categoria === "Material de escritorio") {
            porcentaje = 1.5;
        } else if (categoria === "Electronicos") {
            porcentaje = 1;
        }

        let montoDescuento = neto * (porcentaje / 100);
        return "Descuento adicional para " + categoria + "(%" + porcentaje.toFixed(2) + "): $" + montoDescuento.toFixed(2);
    }

    calcularCostoEnvio(cantidad, precio, pesoVolumetrico) {
        let neto = cantidad * precio;
        let costoEnvio = 0;
        if (pesoVolumetrico >= 0 && pesoVolumetrico <= 10) {
            costoEnvio = 0;
        } else if (pesoVolumetrico > 10 && pesoVolumetrico <= 20) {
            costoEnvio = 3.50;
        } else if (pesoVolumetrico > 20 && pesoVolumetrico <= 40) {
            costoEnvio = 5.00;
        } else if (pesoVolumetrico > 40 && pesoVolumetrico <= 80) {
            costoEnvio = 6.00;
        } else if (pesoVolumetrico > 80 && pesoVolumetrico <= 100) {
            costoEnvio = 6.50;
        } else if (pesoVolumetrico > 100 && pesoVolumetrico <= 200) {
            costoEnvio = 8.00;
        } else if (pesoVolumetrico > 200) {
            costoEnvio = 9.00;
        }
        return "Costo de envio por peso volumetrico: $" + costoEnvio.toFixed(2);
    }

    calcularCostoEnvioTotal(cantidad, precio, pesoVolumetrico) {
        let costoUnitarioTexto = this.calcularCostoEnvio(cantidad, precio, pesoVolumetrico);
        let costoUnitario = parseFloat(costoUnitarioTexto.split("$")[1]);
        let totalEnvio = cantidad * costoUnitario;

        return "Costo de envio: $" + totalEnvio.toFixed(2);
    }
    obtenerDescuentoEnvioCliente(cantidad, precio, tipoCliente) {
        let neto = cantidad * precio;
        let porcentaje = 0;
        if (tipoCliente === "Recurrente") {
            porcentaje = 0.5;
        }
        let montoDescuento = neto * (porcentaje / 100);

        return "Descuento en costo de envio para cliente " + tipoCliente + "(%" + porcentaje.toFixed(2) + "): $" + montoDescuento.toFixed(2);
    }
}


export default Totalizador;