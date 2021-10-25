import { expect, test } from '@jest/globals';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { StaticRouter } from 'react-router-dom';
import Home from '../components/Home';

test('Snapshot of Home Component', () => {
  const tree = renderer
    .create(
      <StaticRouter>
        <Home />
      </StaticRouter>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test('Displays welcome text on homepage', async () => {
  const home = render(
    <StaticRouter>
      <Home />
    </StaticRouter>,
  );

  const welcomeText = await home.findByTestId('welcomeText');
  expect(welcomeText.textContent).toBe('Welcome to Math Magician website');
});

test('For presence of classnames in p', async () => {
  const home = render(
    <StaticRouter>
      <Home />
    </StaticRouter>,
  );

  const welcomeText = await home.findByTestId('welcomeText');
  expect(welcomeText.className).toContain('text-center', 'welcome-text');
});
