import { useEffect, useState } from 'react';

export default function usePromise<T>(func: () => Promise<T>): [boolean, T | null] {
  const [data, setData] = useState<T | null>(null);

  useEffect(() => {
    (async () => {
      try {
        setData(await func());
      } catch (e) {
        setData(null);
      }
    })();
  }, []);

  return [data === null, data];
}
