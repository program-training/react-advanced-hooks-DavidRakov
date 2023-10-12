import { useState } from "react";
type StorageType = "sessionStorage" | "localStorage";

export const useLocalStorage = <T,>(
  key: string,
  initialValue: T,
  storageType: StorageType = "localStorage"
) => {
  const storage =
    storageType === "localStorage" ? localStorage : sessionStorage;
  const [value, setValue] = useState<T>(() => {
    const storedValue = storage.getItem(key);
    return storedValue ? (JSON.parse(storedValue) as T) : initialValue;
  });

  const setStoredValue = (newValue: T) => {
    setValue(newValue);
    storage.setItem(key, JSON.stringify(newValue));
  };

  const removeStoredValue = () => {
    setValue(initialValue);
    storage.removeItem(key);
  };
  return { value, setStoredValue, removeStoredValue };
};
