const values = require('./joinStrings')

describe('step 2', () => {
  test('firstName is Andres', () => {
    expect(values.firstName).toEqual('Andres');
  });
  test('lastName is Vina', () => {
    expect(values.lastName).toEqual('Vina');
  });
  test('thisYear is 2026', () => {
    expect(values.thisYear).toEqual(2026);
  });
  test('birthYear is 29', () => {
    expect(values.birthYear).toEqual(1997);
  });
  test('greeting is properly output', () => {
    expect(values.greeting).toEqual('Hello! My name is Andres Vina and I am 29 years old.');
  });
});

describe('step 3', () => {
  test('fullName is Andres Vina', () => {
    expect(values.fullName).toEqual('Andres Vina');
  });
  test('age is 29', () => {
    expect(values.age).toEqual(29);
  });
});
