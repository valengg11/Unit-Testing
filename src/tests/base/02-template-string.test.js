import { getSaludo } from "../../base/02-template-string";
import "@testing-library/jest-dom";

describe("Pruebas en 02-template-string.js", () => {
  test("getSaludo debe retornar Hola Valentina", () => {
    const nombre = "Valentina";
    const saludo = getSaludo(nombre);
    expect(saludo).toBe("Hola " + nombre);
  });
  test('getSaludo debe retornar Hola Antonia! si no hay argumento nombre', () => {
    const saludo = getSaludo();
    expect(saludo).toBe('Hola Antonia')
  })
});

