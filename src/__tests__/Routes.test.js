import renderer from 'react-test-renderer';
import Routes from '../Route';

test('Routes snapshot testing', () => {
  const tree = renderer.create(<Routes />).toJSON();
  expect(tree).toMatchSnapshot();
});
