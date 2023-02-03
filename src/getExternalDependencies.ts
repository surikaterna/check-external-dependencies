import { PackageJson } from './getPackageJson';
import { FALLBACK_LICENSE_VALUE } from './license/getLicense';

export interface ExternalDependency {
  name: string;
  version: string;
  license: string;
}

export const getExternalDependencies = (packageJson: PackageJson, internalDepsRegex = /^@surikat/): Array<ExternalDependency> =>
  Object.entries(packageJson.dependencies)
    .concat(Object.entries(packageJson.devDependencies))
    .filter(([name]) => !internalDepsRegex.test(name))
    .reduce(
      (acc, [name, version]) =>
        acc.concat({
          name,
          version,
          license: FALLBACK_LICENSE_VALUE
        }),
      <Array<ExternalDependency>>[]
    )
    .sort((a, b) => a.name.localeCompare(b.name));
