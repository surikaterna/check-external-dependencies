import * as core from '@actions/core';
import { createDependencyTable } from './createDependencyTable';
import { updateLicenses } from './license/updateLicenses';
import { getExternalDependencies } from './getExternalDependencies';
import { getPackageJson } from './getPackageJson';

async function run(): Promise<void> {
  try {
    const packageJson = await getPackageJson();
    const dependencies = getExternalDependencies(packageJson);
    await updateLicenses(dependencies);
    const dependencyTable = createDependencyTable(packageJson.name, dependencies);

    core.info(dependencyTable);
  } catch (error) {
    if (error instanceof Error) {
      core.setFailed(error.message);
    }
  }
}

run();
