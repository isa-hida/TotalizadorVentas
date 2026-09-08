import totalizador from './totalizador';

describe("Ingresar cantidad de items", () => {
    it("deberia mostrar la cantidad ingresada", () => {
        expect(totalizador(5)).toEqual("Cantidad de item: 5");
    });
});