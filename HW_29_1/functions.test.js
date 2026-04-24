const { ageClassification, weekFn } = require('./functions');

describe('Age Classification Tests', () => {
  test('перевірка всіх діапазонів віку', () => {
    expect(ageClassification(-1)).toBeNull();
    expect(ageClassification(1)).toBe('Дитинство');
    expect(ageClassification(24)).toBe('Дитинство');
    expect(ageClassification(24.01)).toBe('Молодість');
    expect(ageClassification(44)).toBe('Молодість');
    expect(ageClassification(65)).toBe('Зрілість');
    expect(ageClassification(75)).toBe('Старість');
    expect(ageClassification(90)).toBe('Довголіття');
    expect(ageClassification(122)).toBe('Рекорд');
    expect(ageClassification(122.01)).toBeNull();
  });
});

describe('Week Function Tests', () => {
  test('перевірка днів тижня', () => {
    expect(weekFn(1)).toBe('Понеділок');
    expect(weekFn(7)).toBe('Неділя');
    expect(weekFn(9)).toBeNull();
    expect(weekFn(1.5)).toBeNull();
    expect(weekFn('2')).toBeNull();
  });
});