import { checkSafeInt } from '../checkSafeInt';

/**
 * Get the version for MAJOR.MINOR.PATCH formats
 */
export const getExactVersion = (version: string): string => {
  try {
    const versionParts = version.split('.');
    if (versionParts.length === 3 && versionParts.every(checkSafeInt)) {
      return version;
    }

    throw new Error(`${version} is not an exact version number`);
  } catch (err) {
    return '';
  }
};
