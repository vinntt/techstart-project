import * as React from 'react';

const useLocalStorage = (storageKey, fallbackState) => {
  const [storedValue, setStoredValue] = React.useState(() => {
    try {
      const value = window.localStorage.getItem(storageKey);

      if (value) {
        return JSON.parse(value);
      } else {
        window.localStorage.setItem(storageKey, JSON.stringify(fallbackState));
        return fallbackState;
      }
    } catch (err) {
      return fallbackState;
    }
  });

  const setValue = newValue => {
    try {
      window.localStorage.setItem(storageKey, JSON.stringify(newValue));
    } catch (err) {}
    
    setStoredValue(newValue);
  };

  return [storedValue, setValue];
};
  
export default useLocalStorage;