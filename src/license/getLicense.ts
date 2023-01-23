import axios from 'axios';

const NPM_BASE_URL = 'https://registry.npmjs.com';
export const FALLBACK_LICENSE_VALUE = '';

export const getLicense = async (name: string, version: string): Promise<string> => {
  try {
    const url = `${NPM_BASE_URL}/${name}/${version}`;
    const res = await axios({
      method: 'get',
      url
    });

    return res.data.license;
  } catch (err) {
    return FALLBACK_LICENSE_VALUE;
  }
};
