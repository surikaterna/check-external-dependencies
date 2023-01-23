import { checkSafeInt } from './checkSafeInt';

describe('#checkSafeInt', () => {
  [0, 24, 2000, '0', '24', '2000'].forEach((valid) => {
    it(`should return true for ${valid}`, () => {
      expect(checkSafeInt(valid)).toBe(true);
    });
  });

  ['', '^2', '~4', '2-alpha'].forEach((invalid) => {
    it(`should return false for ${invalid || '""'}`, () => {
      expect(checkSafeInt(invalid)).toBe(false);
    });
  });
});
