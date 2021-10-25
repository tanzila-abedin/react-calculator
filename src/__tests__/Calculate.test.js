/* eslint-disable no-unused-expressions */
import Calculate from '../logic/calculate';

test('should clear display when clicked on AC', () => {
  const result = Calculate({ total: 9, next: 4, operation: '+' }, 'AC');
  expect(result).toHaveProperty('total');
  expect(result.total).toBe('');
});

test('should calculate the sum of numbers when clicked add +', () => {
  const result = Calculate({ total: 4, next: 10, operation: '+' }, '=');
  expect(result).toHaveProperty('total');
  expect(result.total).toBe('14');
});

test('should NOT equal to a wrong sum of  numbers when clicked add +', () => {
  const result = Calculate({ total: 10, next: 4, operation: '+' }, '=');
  expect(result.total === 15).toBeFalsy();
});

test('should calculate the difference of numbers when clicked subtract -', () => {
  const result = Calculate({ total: 8, next: 9, operation: '-' }, '=');
  expect(result).toHaveProperty('total');
  expect(result.total).toBe('1');
});

test('should calculate the multiple when clicked times X', () => {
  const result = Calculate({ total: 5, next: 4, operation: 'X' }, '=');
  expect(result).toHaveProperty('total');
  expect(result.total).toBe('20');
});

test('should NOT equal to wrong number when clicked times X', () => {
  const result = Calculate({ total: 5, next: 4, operation: 'X' }, '=');
  expect(result.total === 65).toBeFalsy();
});

test('should return negative or positive when clicked  +/-', () => {
  const result = Calculate({ total: 9, next: '', operation: '' }, '+/-');
  expect(result).toHaveProperty('total');
  expect(result.total).toBe(-9);
});

test('Should calculate the percentatge when clicked %', () => {
  const result = Calculate({ total: 9, next: '', operation: '' }, '%');
  expect(result).toHaveProperty('total');
  expect(result.total).toBe('0.09');
});

test('Should calculate the division when clicked /', () => {
  const result = Calculate({ total: 3, next: 9, operation: '/' }, '=');
  expect(result.total).toBe('3');
});
