import Totalizador from './totalizador';

describe("Totalizador", () => {
    it("deberia mostrar la cantidad y el precio por item", () => {
        let totalizador = new Totalizador();
        expect(totalizador.mostrarDetalle(20, 3)).toEqual("Cantidad de item: 20\nPrecio por item: 3");
    });

    it("deberia mostrar el precio neto", () => {
        let totalizador = new Totalizador();
        expect(totalizador.calcularPrecioNeto(20, 3)).toEqual("Precio neto: 60");
    });

    it("deberia calcular el impuesto de forma generalizada para cada estado", () => {
        let totalizador = new Totalizador();

        expect(totalizador.calcularImpuesto(20, 3, "UT")).toEqual("Impuesto para UT(%6.65): $3.99");
        expect(totalizador.calcularImpuesto(20, 3, "NV")).toEqual("Impuesto para NV(%8): $4.80");
        expect(totalizador.calcularImpuesto(20, 3, "TX")).toEqual("Impuesto para TX(%6.25): $3.75");
        expect(totalizador.calcularImpuesto(20, 3, "AL")).toEqual("Impuesto para AL(%4): $2.40");
        expect(totalizador.calcularImpuesto(20, 3, "CA")).toEqual("Impuesto para CA(%8.25): $4.95");
    });

    it("deberia mostrar el descuento", () => {
        let totalizador = new Totalizador();

        expect(totalizador.obtenerDescuento(20, 3)).toEqual("Descuento (0%): 0.00");
        expect(totalizador.obtenerDescuento(100, 10)).toEqual("Descuento (3%): 30.00");
        expect(totalizador.obtenerDescuento(300, 10)).toEqual("Descuento (5%): 150.00");
        expect(totalizador.obtenerDescuento(700, 10)).toEqual("Descuento (7%): 490.00");
        expect(totalizador.obtenerDescuento(1000, 10)).toEqual("Descuento (10%): 1000.00");
        expect(totalizador.obtenerDescuento(3000, 10)).toEqual("Descuento (15%): 4500.00");
    });

    it("deberia calcular el precio total", () => {
        let totalizador = new Totalizador();

        expect(totalizador.calcularPrecioTotal(20, 3, "UT", "Bebidas alcoholicas", 30)).toEqual("Precio total: $168.19");
        expect(totalizador.calcularPrecioTotal(20, 3, "NV", "Muebles", 30)).toEqual("Precio total: $166.60");
        expect(totalizador.calcularPrecioTotal(20, 3, "TX", "Electronicos", 30)).toEqual("Precio total: $165.55");
        expect(totalizador.calcularPrecioTotal(20, 3, "AL", "Vestimenta", 30)).toEqual("Precio total: $163.60");
        expect(totalizador.calcularPrecioTotal(20, 3, "CA", "Alimentos", 30)).toEqual("Precio total: $163.75");
    });

    it("deberia mostrar mensaje de error en el detalle si la cantidad o el precio son 0 o negativos", () => {
        let totalizador = new Totalizador();

        expect(totalizador.mostrarDetalle(0, 10)).toEqual("Error: La cantidad y el precio deben ser mayores a 0");
        expect(totalizador.mostrarDetalle(5, -10)).toEqual("Error: La cantidad y el precio deben ser mayores a 0");
    });

    it("deberia mostrar el impuesto adicional por categoria", () => {
        let totalizador = new Totalizador();
        expect(totalizador.calcularImpuestoAdicional(20, 3, "Alimentos")).toEqual("Impuesto para Alimentos(%0.00): $0.00");
        expect(totalizador.calcularImpuestoAdicional(20, 3, "Bebidas alcoholicas")).toEqual("Impuesto para Bebidas alcoholicas(%7.00): $4.20");
        expect(totalizador.calcularImpuestoAdicional(20, 3, "Material de escritorio")).toEqual("Impuesto para Material de escritorio(%0.00): $0.00");
        expect(totalizador.calcularImpuestoAdicional(20, 3, "Varios")).toEqual("Impuesto para Varios(%0.00): $0.00");
        expect(totalizador.calcularImpuestoAdicional(20, 3, "Muebles")).toEqual("Impuesto para Muebles(%3.00): $1.80");
        expect(totalizador.calcularImpuestoAdicional(20, 3, "Electronicos")).toEqual("Impuesto para Electronicos(%4.00): $2.40");
        expect(totalizador.calcularImpuestoAdicional(20, 3, "Vestimenta")).toEqual("Impuesto para Vestimenta(%2.00): $1.20");
    });

    it("deberia calcular el descuento adicional por categoria", () => {
        let totalizador = new Totalizador();
        expect(totalizador.obtenerDescuentoAdicional(20, 3, "Alimentos")).toEqual("Descuento adicional para Alimentos(%2.00): $1.20");
        expect(totalizador.obtenerDescuentoAdicional(20, 3, "Bebidas alcoholicas")).toEqual("Descuento adicional para Bebidas alcoholicas(%0.00): $0.00");
        expect(totalizador.obtenerDescuentoAdicional(20, 3, "Material de escritorio")).toEqual("Descuento adicional para Material de escritorio(%1.50): $0.90");
        expect(totalizador.obtenerDescuentoAdicional(20, 3, "Electronicos")).toEqual("Descuento adicional para Electronicos(%1.00): $0.60");
        expect(totalizador.obtenerDescuentoAdicional(20, 3, "Varios")).toEqual("Descuento adicional para Varios(%0.00): $0.00");
        expect(totalizador.obtenerDescuentoAdicional(20, 3, "Vestimenta")).toEqual("Descuento adicional para Vestimenta(%0.00): $0.00");
        expect(totalizador.obtenerDescuentoAdicional(20, 3, "Muebles")).toEqual("Descuento adicional para Muebles(%0.00): $0.00");
    });

    it("deberia mostrar el costo de envio por peso volumetrico", () => {
        let totalizador = new Totalizador();
        expect(totalizador.calcularCostoEnvio(20, 3, 10)).toEqual("Costo de envio por peso volumetrico: $0.00");
        expect(totalizador.calcularCostoEnvio(20, 3, 12)).toEqual("Costo de envio por peso volumetrico: $3.50");
        expect(totalizador.calcularCostoEnvio(20, 3, 30)).toEqual("Costo de envio por peso volumetrico: $5.00");
        expect(totalizador.calcularCostoEnvio(20, 3, 70)).toEqual("Costo de envio por peso volumetrico: $6.00");
        expect(totalizador.calcularCostoEnvio(20, 3, 100)).toEqual("Costo de envio por peso volumetrico: $6.50");
        expect(totalizador.calcularCostoEnvio(20, 3, 130)).toEqual("Costo de envio por peso volumetrico: $8.00");
        expect(totalizador.calcularCostoEnvio(20, 3, 300)).toEqual("Costo de envio por peso volumetrico: $9.00");
    });
    it("deberia calcular el costo total de envio multiplicando la cantidad por la tarifa por unidad", () => {
        let totalizador = new Totalizador();
        expect(totalizador.calcularCostoEnvioTotal(10, 3, 30)).toEqual("Costo de envio: $50.00");
    });

    it("deberia mostrar el porcentaje de descuento en costo de envio por tipo de cliente", () => {
        let totalizador = new Totalizador();

        expect(totalizador.obtenerDescuentoEnvioCliente(20, 3, "Normal")).toEqual("Descuento en costo de envio para cliente Normal(%0.00): $0.00");
        expect(totalizador.obtenerDescuentoEnvioCliente(20, 3, "Recurrente")).toEqual("Descuento en costo de envio para cliente Recurrente(%0.50): $0.30");
        expect(totalizador.obtenerDescuentoEnvioCliente(20, 3, "Antiguo Recurrente")).toEqual("Descuento en costo de envio para cliente Antiguo Recurrente(%1.00): $0.60");
    });
});