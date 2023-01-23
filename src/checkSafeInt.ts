export const checkSafeInt = (text: unknown): boolean => text !== '' && Number.isSafeInteger(Number(text));
