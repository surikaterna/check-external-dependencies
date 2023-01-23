import * as core from '@actions/core';
import { ExternalDependency } from '../getExternalDependencies';
import { getNpmVersion } from '../version/getNpmVersion';
import { getLicense } from './getLicense';

export const updateLicenses = async (dependencies: Array<ExternalDependency>): Promise<void> => {
  await Promise.all(
    dependencies.map(async (dependency) => {
      try {
        dependency.license = await getLicense(dependency.name, getNpmVersion(dependency.version));
      } catch (err) {
        core.warning(`Could not get license for ${dependency.name}:${dependency.version}`);
      }
    })
  );
};
