import React, { useState } from 'react';
import Wrapper from './Wrapper';
import Display from './Display';
import Button from './Button';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

const btnValues = [
  ['AC', '+-', '%', '/'],
  ['7', '8', '9', 'X'],
  ['4', '5', '6', '-'],
  ['1', '2', '3', '+'],
  ['0', '.', '='],
];

function Calculator() {
  const [calc, setCalc] = useState({ total: '', next: '', operation: '' });
  const { total, next, operation } = calc;

  const handleClick = (buttonName) => {
    setCalc(calculate({ total, next, operation }, buttonName));
  };

  return (
    <>
      <div className="container">
        <h4 className="text-center top-head pb-0">
          <strong>Calculator App</strong>
        </h4>
        <h5 className="text-center sub-head pt-0">Built by Tanzila Abedin</h5>
        <div
          className="d-flex justify-content-center p-2"
          data-testid="wrapper"
        >
          <Wrapper>
            <Display value={total} />
            <ButtonPanel>
              {btnValues.flat().map((btn) => (
                <Button
                  key={btn}
                  className={btn === '=' ? 'equals' : ''}
                  value={String(btn)}
                  onClick={() => handleClick(btn)}
                />
              ))}
            </ButtonPanel>
          </Wrapper>
        </div>
      </div>
    </>
  );
}

export default Calculator;
