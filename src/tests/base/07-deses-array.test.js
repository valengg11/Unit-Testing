import { retornaArreglo } from "../../base/07-deses-arr";

describe("Pruebas en 07-desestructuracion-arreglos", () => {
  test("Debe retornar un string y un numero", () => {
    // const arr = retornaArreglo();
    const [letras, numeros] = retornaArreglo();
    // expect(arr).toEqual(["ABC", 123]);
    expect(letras).toEqual("ABC");
    expect(numeros).toEqual(123);
    expect(typeof letras).toEqual("string");
    expect(typeof numeros).toEqual("number");
  });
});
