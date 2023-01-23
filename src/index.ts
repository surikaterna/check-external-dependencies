import * as core from '@actions/core';
import { getExternalDependencies } from './getExternalDependencies';
import { getPackageJson } from './getPackageJson';
import { updateLicenses } from './license/updateLicenses';

async function run(): Promise<void> {
  try {
    const packageJson = await getPackageJson();
    const dependencyPattern = core.getInput('internal-dependency-pattern');
    const pattern = dependencyPattern ? new RegExp(dependencyPattern) : undefined;

    const dependencies = getExternalDependencies(packageJson, pattern);
    await updateLicenses(dependencies);

    core.setOutput('external-dependencies', dependencies);
    core.info(JSON.stringify(dependencies, null, 2));
  } catch (error) {
    if (error instanceof Error) {
      core.setFailed(error.message);
    }
  }
}

run();
