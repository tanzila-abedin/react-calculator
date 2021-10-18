import React from 'react';
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

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: '',
      next: '',
      operation: '',
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (buttonName) => {
    const { total, next, operation } = this.state;
    const result = calculate({ total, next, operation }, buttonName);
    this.setState({
      total: result.total,
      next: result.next,
      operation: result.operation,
    });
  };

  render() {
    const { total } = this.state;
    return (
      <>
        <Wrapper>
          <Display value={total} />
          <ButtonPanel>
            {btnValues.flat().map((btn) => (
              <Button
                key={btn}
                className={btn === '=' ? 'equals' : ''}
                value={String(btn)}
                onClick={() => this.handleClick(btn)}
              />
            ))}
          </ButtonPanel>
        </Wrapper>
      </>
    );
  }
}

export default App;
