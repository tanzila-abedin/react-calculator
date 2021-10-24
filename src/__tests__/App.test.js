import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import Calculator from '../components/App';

test(' Snapshot Calculator app and nested componets', () => {
  const tree = renderer.create(<Calculator />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('App renders Wrapper component', async () => {
  const app = render(<Calculator />);
  const wrapper = await app.findAllByTestId('wrapper');
  expect(wrapper).toBeDefined();
});
