import { expect, test } from '@jest/globals';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import Button from '../components/Button';

test(' Snapshot of Button component', () => {
  const onClick = jest.fn();
  const tree = renderer
    .create(<Button onClick={onClick} value="AC" className="equals" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test('Button component to display button value', async () => {
  const onClick = jest.fn();
  const buttonRender = render(
    <Button onClick={onClick} value="AC" className="equals" />,
  );
  const button = await buttonRender.findByTestId('test-btn');
  expect(button.innerHTML).toBe('AC');
});

test('Button component  to be able to click a button', async () => {
  const onClick = jest.fn();
  const buttonRender = render(
    <Button onClick={onClick} value="AC" className="equals" />,
  );
  const button = await buttonRender.findByTestId('test-btn');
  button.click();
  expect(onClick).toBeCalled();
});

test('Button component  returns a button element', async () => {
  const onClick = jest.fn();
  const buttonRender = render(
    <Button onClick={onClick} value="AC" className="equals" />,
  );
  const button = await buttonRender.findByTestId('test-btn');
  expect(button.type).toBe('button');
});
