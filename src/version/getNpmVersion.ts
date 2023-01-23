import { getMinorVersion } from './getMinorVersion';
import { getExactVersion } from './getExactVersion';
import { getPatchVersion } from './getPatchVersion';

export const getNpmVersion = (version: string): string => getExactVersion(version) || getPatchVersion(version) || getMinorVersion(version) || version || '';
