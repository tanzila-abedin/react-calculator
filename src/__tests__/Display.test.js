import renderer from 'react-test-renderer';
import Display from '../components/Display';

test(' Snapshot of Display component to show output of a button when clicked', () => {
  const display = renderer.create(<Display value="10" />).toJSON();
  expect(display).toMatchSnapshot();
});
