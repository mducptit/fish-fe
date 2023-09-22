import { parse } from 'postcss';
import { useEffect, useState } from 'react';

export const useLocalStorage = (key, initialValue) => {
  // Retrieve the value from local storage if it exists
  const storedValue = typeof window !== "undefined" ?  window.localStorage.getItem(key) : null;

  // Initialize the state with the stored value, or the provided initial value
  const [value, setValue] = useState(storedValue ? JSON.parse(storedValue) : initialValue);

  // Update the local storage whenever the state changes
  const setStoredValue = (newValue) => {
    setValue(newValue);
    localStorage.setItem(key, JSON.stringify(newValue));
  };

  return [value, setStoredValue];
};
