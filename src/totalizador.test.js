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

    it("deberia mostrar 3% de descuento para un total de 1000 o mas", () => {
        let totalizador = new Totalizador();
        expect(totalizador.obtenerDescuento(100, 10)).toEqual("Descuento (3%): 30.00");
    });

    it("deberia mostrar 5% de descuento para un total de 3000 o mas", () => {
        let totalizador = new Totalizador();
        expect(totalizador.obtenerDescuento(300, 10)).toEqual("Descuento (5%): 150.00");
    });
    it("deberia mostrar 7% de descuento para un total de 7000 o mas", () => {
        let totalizador = new Totalizador();
        expect(totalizador.obtenerDescuento(700, 10)).toEqual("Descuento (7%): 490.00");
    });

    it("deberia mostrar 10% de descuento para un total de 10000 o mas", () => {
        let totalizador = new Totalizador();
        expect(totalizador.obtenerDescuento(1000, 10)).toEqual("Descuento (10%): 1000.00");
    });

    it("deberia mostrar 15% de descuento para un total de 30000 o mas", () => {
        let totalizador = new Totalizador();
        expect(totalizador.obtenerDescuento(3000, 10)).toEqual("Descuento (15%): 4500.00");
    });
});