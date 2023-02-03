import { getExternalDependencies } from './getExternalDependencies';
import { PackageJson } from './getPackageJson';

describe('#getExternalDependencies', () => {
  const packageJson = <PackageJson>{
    name: '',
    dependencies: {
      '@surikat/things': '^3.0.4',
      lodash: '^1.3.4',
      saft: '^1.3.4'
    },
    devDependencies: {
      '@surikat/internal-dep': '3.0.3',
      '@other/tool': '^0.0.1',
      'eslint-config-surikat': '^4.0.4'
    }
  };

  describe('default pattern', () => {
    it('should exclude packages starting with "@surikat"', () => {
      expect(getExternalDependencies(packageJson)).toEqual([
        {
          name: '@other/tool',
          version: '^0.0.1',
          license: ''
        },
        {
          name: 'eslint-config-surikat',
          version: '^4.0.4',
          license: ''
        },
        {
          name: 'lodash',
          version: '^1.3.4',
          license: ''
        },
        {
          name: 'saft',
          version: '^1.3.4',
          license: ''
        }
      ]);
    });
  });

  describe('provided pattern', () => {
    it('should exclude packages including "surikat"', () => {
      expect(getExternalDependencies(packageJson, /surikat/)).toEqual([
        {
          name: '@other/tool',
          version: '^0.0.1',
          license: ''
        },
        {
          name: 'lodash',
          version: '^1.3.4',
          license: ''
        },
        {
          name: 'saft',
          version: '^1.3.4',
          license: ''
        }
      ]);
    });
  });
});
