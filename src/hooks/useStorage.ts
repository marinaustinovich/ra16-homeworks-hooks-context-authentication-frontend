import { useState, useEffect } from "react";

export default function useStorage<T>(
  storage: Storage,
  key: string,
  jsonify: boolean = false
): [T | null, React.Dispatch<React.SetStateAction<T | null>>] {
  const [value, setValue] = useState<T | null>(
    jsonify
      ? JSON.parse(storage.getItem(key) || "null")
      : (storage.getItem(key) as T | null)
  );

  useEffect(() => {
    if (value === null) {
      storage.removeItem(key);
    } else {
      storage.setItem(key, jsonify ? JSON.stringify(value) : (value as string));
    }
  }, [value, storage, key, jsonify]);

  return [value, setValue];
}
