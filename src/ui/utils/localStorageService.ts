export const setLocalStorageItem = (key: string, value: string): void => {
  localStorage.setItem(key, value);
};

export const getLocalStorageItem = (key: string): string | null =>
  localStorage.getItem(key);

export const removeLocalStorageItem = (key: string): void => {
  if (getLocalStorageItem(key) !== null) {
    localStorage.removeItem(key);
  }
};

export const clearLocalStorage = (): void => localStorage.clear();

export const isAuthenticated =
  typeof getLocalStorageItem("Id") === "string" &&
  Object.keys(localStorage).length > 0;

export const getTokenFromStorage = (): string | null =>
  localStorage.getItem("accessToken");

export const getRefreshToken = (): string | null =>
  localStorage.getItem("refreshToken");
