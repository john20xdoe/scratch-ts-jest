const sum = require('./index');

test('that 1 + 1 equals 2', () => {
  expect(sum(1, 1)).toBe(2);
})