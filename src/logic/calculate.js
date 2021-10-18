import Operate from './operate';

const Calculate = (calcData, buttonName) => {
  let { total, next, operation } = calcData;

  const symbol = ['+', '-', 'X', '/'];
  const number = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];

  if (buttonName === 'AC') {
    total = '';
    next = '';
    operation = '';
  } else if (number.includes(buttonName) && operation === '') {
    total += buttonName;
  } else if (number.includes(buttonName) && operation !== '') {
    total += buttonName;
  } else if (symbol.includes(buttonName)) {
    operation = buttonName;
    next = total;
    total = '';
  } else if (buttonName === '=') {
    total = Operate(total, next, operation);
    next = '';
    operation = '';
  } else if (buttonName === '+/-') {
    total = -total;
  } else if (buttonName === '%') {
    total /= 100;
    total = total.toString();
  }

  return { total, next, operation };
};

export default Calculate;
