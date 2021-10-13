// import './App.css';
import Wrapper from './components/Wrapper';
import Display from './components/Display';
import Button from './components/Button';
import ButtonPanel from './components/ButtonPanel';

const btnValues = [
  ['C', '+-', '%', '/'],
  [7, 8, 9, 'X'],
  [4, 5, 6, '-'],
  [1, 2, 3, '+'],
  [0, '.', '='],
];

function App() {
  return (
    <div className="App">
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

      {/* <div className="content">
        <h1>App components</h1>
      </div> */}
    </div>
  );
}

export default App;
