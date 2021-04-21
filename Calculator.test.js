import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Calculator from './client/components/Calculator';
import App, { ThemeContext } from './client/components/App';
import ShallowRenderer from 'react-test-renderer/shallow';


const simulateChangeOnInput = (wrapper, inputSelector, newValue) => {
  const input = wrapper.find(inputSelector);
  input.simulate('change', {
    target: { value: newValue },
  });
  return wrapper.find(inputSelector);
};

/* -------- TESTS IF EQUATION INPUT HAS THE CORECT PLACEHOLDER ----*/

describe('Calculator', () => {
  it('calculator input has the correct placeholder name', () => {
    const wrapper = shallow(<Calculator />);
    const input = wrapper.find('.calculator-input');
    expect(input.props().placeholder).toEqual('Write an equation');
  });

/* -------- TESTS IF IT CAN CORRECTLY SET EQUATIONS TO INPUT ----*/

  it('lets me change the equation input', () => {
    const wrapper = shallow(<Calculator />);
    const addition = simulateChangeOnInput(wrapper, '.calculator-input', '1+2');
    const multiplcationDivision = simulateChangeOnInput(wrapper, '.calculator-input', '4*5/2');
    const negativeNumbers = simulateChangeOnInput(wrapper, '.calculator-input', '-5+-8--11*2');
    const decimal = simulateChangeOnInput(wrapper, '.calculator-input', '-.32       /.52');
    const parentheses = simulateChangeOnInput(wrapper, '.calculator-input', '2+-+-4');
    const syntaxError = simulateChangeOnInput(wrapper, '.calculator-input', '4-2)*3.5');
    const invalidInput = simulateChangeOnInput(wrapper, '.calculator-input', '.19 + cinnamon');
    expect(addition.props().value).toEqual('1+2');
    expect(multiplcationDivision.props().value).toEqual('4*5/2');
    expect(negativeNumbers.props().value).toEqual('-5+-8--11*2');
    expect(decimal.props().value).toEqual('-.32       /.52');
    expect(parentheses.props().value).toEqual('2+-+-4');
    expect(syntaxError.props().value).toEqual('4-2)*3.5');
    expect(invalidInput.props().value).toEqual('.19 + cinnamon');
  });
});

/* -------- TESTS IF CALCULATOR GENERATES ACCURATE RESULTS ----*/

const simulateSubmitClick = (wrapper, inputSelector, btnClick, value) => {
  let input = wrapper.find(inputSelector);
  input.simulate('change', {
    target: { value  },
  });
  const submitBtn = wrapper.find(btnClick);

  submitBtn.simulate('click');
  return wrapper.find(inputSelector);
}

describe('check calculations', () => {
  test('lets me add equations correctly', () => {
    const wrapper = shallow(<Calculator />);
    const addition = simulateSubmitClick(wrapper, '.calculator-input', '.submit-btn', '1+2');
    expect(addition.props().value).toEqual('1+2 = 3');
  });

  test('lets me subtract correctly', () => {
    const wrapper = shallow(<Calculator />);
    const subtraction = simulateSubmitClick(wrapper, '.calculator-input', '.submit-btn', '4-2');
    expect(subtraction.props().value).toEqual('4-2 = 2');
  })

  test('lets me multiply correctly', () => {
    const wrapper = shallow(<Calculator />);
    const multiplication = simulateSubmitClick(wrapper, '.calculator-input', '.submit-btn', '7*9');
    expect(multiplication.props().value).toEqual('7*9 = 63');
  })

  test('lets me divide correctly', () => {
    const wrapper = shallow(<Calculator />);
    const division = simulateSubmitClick(wrapper, '.calculator-input', '.submit-btn', '100/10');
    expect(division.props().value).toEqual('100/10 = 10');
  })

  test('takes parentheses into account when solving', () => {
    const wrapper = shallow(<Calculator />);
    const parentheses = simulateSubmitClick(wrapper, '.calculator-input', '.submit-btn', '100/10+(7+3)');
    expect(parentheses.props().value).toEqual('100/10+(7+3) = 20');
  })

  test('Throws syntax error correctly', () => {
    const wrapper = shallow(<Calculator />);
    const syntaxError = simulateSubmitClick(wrapper, '.calculator-input', '.submit-btn', '100/+10+(7+3)');
    expect(syntaxError.props().value).toEqual('100/+10+(7+3) = Syntax Error');
  })

  test('Throws invalid input correctly', () => {
    const wrapper = shallow(<Calculator />);
    let invalidInput = simulateSubmitClick(wrapper, '.calculator-input', '.submit-btn', '19 + cinnamon ');
    expect(invalidInput.props().value).toEqual('19 + cinnamon  = Invalid Input');
  });
})


Enzyme.configure({ adapter: new Adapter() });
