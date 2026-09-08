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

});