import Wrapper from './Wrapper';
import Display from './Display';
import Button from './Button';
import ButtonPanel from './ButtonPanel';

const btnValues = [
  ['C', '+-', '%', '/'],
  [7, 8, 9, 'X'],
  [4, 5, 6, '-'],
  [1, 2, 3, '+'],
  [0, '.', '='],
];

function App() {
  return (
    <>
      <Wrapper>
        <Display value="0" />
        <ButtonPanel>
          {btnValues.flat().map((btn) => (
            <Button
              key={btn}
              className={btn === '=' ? 'equals' : ''}
              value={String(btn)}
              onClick={() => {
                console.log(`${btn} clicked!`);
              }}
            />
          ))}
        </ButtonPanel>
      </Wrapper>
    </>
  );
}

export default App;
