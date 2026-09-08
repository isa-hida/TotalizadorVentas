import totalizador from './totalizador';

describe("Ingresar cantidad de items", () => {
    it("deberia mostrar la cantidad ingresada", () => {
        expect(totalizador(5, 10)).toEqual("Cantidad de item: 5, Precio por item: 10");
    });

});