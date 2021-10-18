import Big from 'big.js';

const operate = (numOne, numTwo, operation) => {
  const a = new Big(numOne);
  const b = new Big(numTwo);
  let result;
  if (operation === '+') {
    result = b.add(a);
  } else if (operation === '-') {
    result = b.sub(a);
  } else if (operation === 'X') {
    result = b.times(a);
  } else if (operation === '/') {
    result = b.div(a);
  } else if (operation === '%') {
    if (a) {
      result = a.div(100);
    } else {
      result = a.div(100);
    }
  }
  return result.toString();
};

export default operate;
