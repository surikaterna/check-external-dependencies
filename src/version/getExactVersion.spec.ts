import { getExactVersion } from './getExactVersion';

describe('#getExactVersion', () => {
  ['0.0.7', '4.2.0', '1.0.1'].forEach((valid) => {
    it(`should return ${valid} for ${valid}`, () => {
      expect(getExactVersion(valid)).toBe(valid);
    });
  });

  ['', '0', '1.0', '^1.0.1', '1.0.0.0', '~4.0.0', '2-alpha'].forEach((invalid) => {
    it(`should return an empty string for ${invalid || '""'}`, () => {
      expect(getExactVersion(invalid)).toBe('');
    });
  });
});
