import CounterApp from "../CounterApp";
import React from "react";
import "./setupTests";
import { shallow } from "enzyme";
import "@testing-library/jest-dom";

describe("Pruebas en CounterApp", () => {
  let wrapper = shallow(<CounterApp />);
  //Reinicializar antes de cada prueba
  beforeEach(() => {
    wrapper = shallow(<CounterApp />);
  })
  test("Debe mostrar <CounterApp/> correctamente", () => {
    
    expect(wrapper).toMatchSnapshot();
  });
  test("Debe mostrar el valor por defecto de 100", () => {
    const wrapper = shallow(<CounterApp value={100} />);
    const counterText = wrapper.find("h2").text().trim();
    console.log(counterText);
    expect(counterText).toBe("100");
  });
  test('Debe incrementar con el boton +1', () => {
    const btn1 = wrapper.find('button').at(0).simulate('click');
    console.log(btn1.html())
    const counterText = wrapper.find("h2").text().trim();
    expect(counterText).toBe('11')
  })
  test('Debe disminuir con el boton -1', () => {
    wrapper.find('button').at(1).simulate('click');
    const counterText = wrapper.find("h2").text().trim();
    expect(counterText).toBe('9')
  })
  test('Debe colocar el valor por defecto con el boton reset', () => {
    const wrapper = shallow(<CounterApp value={105} />);
    wrapper.find('button').at(0).simulate('click');
    wrapper.find('button').at(2).simulate('click');
    const counterText = wrapper.find("h2").text().trim();
    expect(counterText).toBe('105')
  })
});
