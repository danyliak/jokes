import { useEffect, useState } from 'react';
import { Joke } from '../types';

const useJokes = (count: number): { jokes: Joke[]; loading: boolean } => {
  const [loading, setLoading] = useState<boolean>(true);
  const [jokes, setJokes] = useState<Joke[]>([]);

  useEffect(() => {
    Promise.all(
      Array(count)
        .fill(null)
        .map(() => window.fetch('https://api.chucknorris.io/jokes/random').then(r => r.json())),
    )
      .then(setJokes)
      .finally(() => setLoading(false));
  }, []);

  return {
    jokes,
    loading,
  };
};

export { useJokes };
