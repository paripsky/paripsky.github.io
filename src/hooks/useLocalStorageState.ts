import { useEffect, useState } from 'react';

export type useLocalStorageStateProps = {
  key: string;
};

function useLocalStorageState<T>(key: string, defaultValue: T): [T, (value: T) => void] {
  const [state, setState] = useState<T>(defaultValue);

  useEffect(() => {
    const item = localStorage.getItem(key);

    setState(item ? JSON.parse(item) : defaultValue);
  }, []);

  const setStateAndKey = (value: T) => {
    localStorage.setItem(key, JSON.stringify(value));
    setState(value);
  };

  return [state, setStateAndKey];
}

export default useLocalStorageState;
