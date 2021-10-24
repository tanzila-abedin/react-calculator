import renderer from 'react-test-renderer';
import { StaticRouter } from 'react-router-dom';
import Navbar from '../Navbar';

test('Navbar snapshot testing', () => {
  const tree = renderer
    .create(
      <StaticRouter>
        <Navbar />
      </StaticRouter>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
