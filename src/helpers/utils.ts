export const LS_APP_KEY = "ANNOUNCE_BOARD";
export const LS_ANNOUNCEMENTS_KEY = "announcments";

export const isUndefined = (variable: object | undefined) =>
  typeof variable === "undefined";

export const isObject = (variable: object) => typeof variable === "object";

export const isObjectEmpty = (
  object: Record<string, object> | null | undefined
) => !object || !isObject(object) || !Object.keys(object).length;

export const getLocalStorage = <T>(
  key: string,
  defaultValue: T | null = null
): T | null => {
  const jsonData = localStorage.getItem(LS_APP_KEY);
  const data = jsonData ? JSON.parse(jsonData) : null;

  if (isObjectEmpty(data) || isUndefined(data[key])) {
    return defaultValue;
  }

  return data[key];
};

export const setLocalStorage = (key: string, value: object) => {
  const jsonData = localStorage.getItem(LS_APP_KEY);
  const data = jsonData ? JSON.parse(jsonData) : null;
  const newData = { ...data, [key]: value };

  localStorage.setItem(LS_APP_KEY, JSON.stringify(newData));
};

export const findInString = (string: string, value: string): boolean => {
  if (!string || !value) return true;

  return string.toLowerCase().includes(value.toLowerCase());
};
