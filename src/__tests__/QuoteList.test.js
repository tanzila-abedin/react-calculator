import { expect, test } from '@jest/globals';
import { render } from '@testing-library/react';
import QuoteTemplate from '../components/QuoteList';

test('Quote template component to display heading', async () => {
  const templateRender = render(<QuoteTemplate quotes={[{}]} />);
  const template = await templateRender.findByTestId('test-temp');
  expect(template.textContent).toBe('Quotes by Famous Mathmaticians');
});

// test('find object id', async () => {
//   const quoteArray = [
//     {
//       Images: 'image',
//       body: 'Hello there',
//       author: 'tanzila',
//       id: 1,
//     },
//     {
//       images: 'image',
//       body: 'Hello world',
//       author: 'john',
//       id: 2,
//     },
//   ];

//   const templateRender = render(<QuoteTemplate quotes={quoteArray} />);
//   const template = await templateRender.findByTestId('data-quote');
//   console.log(template.key);
//   expect(template.key).toContainEqual(
//     expect.arrayContaining([
//       expect.objectContaining({ id: 1 }),
//       expect.objectContaining({ id: 2 }),
//     ]),
//   );
// });
