export default function getLocalStorage<T>(key: string, initialValue: T): T {
  if (typeof window !== "undefined") {
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue;
  }
  return initialValue;
}
