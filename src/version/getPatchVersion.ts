import { checkSafeInt } from '../checkSafeInt';

/**
 * Get the version for ~MAJOR.MINOR.PATCH formats
 */
export const getPatchVersion = (version: string): string => {
  try {
    const error = new Error(`${version} is not an patch level version number`);
    if (!version.startsWith('~')) {
      throw error;
    }

    const versionWithoutTilde = version.substring(1);
    if (versionWithoutTilde.split('.').every(checkSafeInt)) {
      return versionWithoutTilde;
    }

    throw error;
  } catch (err) {
    return '';
  }
};
