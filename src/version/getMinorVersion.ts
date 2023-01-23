import { checkSafeInt } from '../checkSafeInt';

/**
 * Get the version for ^MAJOR.MINOR.PATCH formats
 * Technically, caret version allow updates not modifying the left-most non-zero version
 */
export const getMinorVersion = (version: string): string => {
  try {
    const error = new Error(`${version} is not an minor level version number`);
    if (!version.startsWith('^')) {
      throw error;
    }

    const versionWithoutCaret = version.substring(1);
    if (versionWithoutCaret.split('.').every(checkSafeInt)) {
      return versionWithoutCaret;
    }

    throw error;
  } catch (err) {
    return '';
  }
};
