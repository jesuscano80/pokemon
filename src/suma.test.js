
const suma = require('./suma');

describe('test de prueba', () => {
  test('suma', () => {
    expect(suma.suma(2,3)).toBe(5);
  });
});
