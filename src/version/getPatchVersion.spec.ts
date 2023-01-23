import { getPatchVersion } from './getPatchVersion';

type InputOutput = [string, string];

describe('#getPatchVersion', () => {
  (<Array<InputOutput>>[
    ['~0.0.7', '0.0.7'],
    ['~1.0.1', '1.0.1']
  ]).forEach(([input, output]) =>
    it(`should get ${output} for ${input}`, () => {
      expect(getPatchVersion(input)).toBe(output);
    })
  );

  ['', '0', '1.0', '^1.0.1', '1.0.0.0', '2-alpha'].forEach((invalid) => {
    it(`should return an empty string for ${invalid || '""'}`, () => {
      expect(getPatchVersion(invalid)).toBe('');
    });
  });
});
