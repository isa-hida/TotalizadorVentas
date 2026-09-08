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

    it("deberia devolver el porcentaje de impuesto correcto para cada estado de la tabla", () => {
        let totalizador = new Totalizador();

        expect(totalizador.obtenerPorcentajeImpuesto("UT")).toEqual("6.65%");
        expect(totalizador.obtenerPorcentajeImpuesto("NV")).toEqual("8.00%");
        expect(totalizador.obtenerPorcentajeImpuesto("TX")).toEqual("6.25%");
        expect(totalizador.obtenerPorcentajeImpuesto("AL")).toEqual("4.00%");
        expect(totalizador.obtenerPorcentajeImpuesto("CA")).toEqual("8.25%");
    });

    it("deberia mostrar la linea de impuesto calculada para el estado UT", () => {
        let totalizador = new Totalizador();
        expect(totalizador.calcularImpuestoUT(20, 3)).toEqual("Impuesto para UT(%6.65): $3.99");
    });
});