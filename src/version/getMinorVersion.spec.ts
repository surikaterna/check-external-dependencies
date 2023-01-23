import { getMinorVersion } from './getMinorVersion';

type InputOutput = [string, string];

describe('#getMinorVersion', () => {
  (<Array<InputOutput>>[['^0.0.7', '0.0.7']]).forEach(([input, output]) =>
    it(`should get ${output} for ${input}`, () => {
      expect(getMinorVersion(input)).toBe(output);
    })
  );

  ['', '0', '1.0', '~1.0.1', '1.0.0.0', '2-alpha'].forEach((invalid) => {
    it(`should return an empty string for ${invalid || '""'}`, () => {
      expect(getMinorVersion(invalid)).toBe('');
    });
  });
});
