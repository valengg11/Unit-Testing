import React from "react";
// import { render } from "@testing-library/react";
import "./setupTests";
import { shallow } from "enzyme";
import "@testing-library/jest-dom";
import PrimeraApp from "../PrimeraApp";

describe("Pruebas en PrimeraApp", () => {
  //   test("Debe mostrar el mensaje Hola, soy Val.expect", () => {
  //     const saludo = "Hola, soy Val.";
  //     const {getByText} = render(<PrimeraApp saludo={saludo} />);

  //     expect(getByText(saludo)).toBeInTheDocument();
  //   });
  test("Debe mostrar <PrimeraApp/> correctamente", () => {
    const saludo = "Hola, soy Val.";
    const wrapper = shallow(
      <PrimeraApp saludo={saludo} />);
    expect(wrapper).toMatchSnapshot();
  });
  test("Debe mostrar el subtitulo entregado por props", () => {
    const saludo = "Hola, soy Val.";
    const subtitulo = "Soy el subtitulo";
    const wrapper = shallow(
      <PrimeraApp saludo={saludo} subtitulo={subtitulo} />
    );
    const textoParrafo = wrapper.find("p").text();

    expect(textoParrafo).toBe(subtitulo);
  });
});
