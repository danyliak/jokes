import { ChangeEvent, useCallback, useMemo, useState } from 'react';

import { Joke } from './types';
import { useDebounce } from './hooks';
import { formatTime } from './helpers';

const Jokes = ({ jokes }: { jokes: Joke[] }) => {
  const [searchString, setSearchString] = useState<string>('');

  const handleInputChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setSearchString(e.target.value);
  }, []);

  const debouncedSearchString = useDebounce<string>(searchString, 300);

  const filteredJokes = useMemo<Joke[]>(
    () =>
      debouncedSearchString
        ? jokes.filter(({ value }) =>
            value.toLowerCase().includes(debouncedSearchString.trim().toLowerCase()),
          )
        : jokes,
    [jokes, debouncedSearchString],
  );

  return (
    <>
      <input onInput={handleInputChange} placeholder="Search" />
      <hr />
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Created At</th>
            <th>Updated At</th>
          </tr>
        </thead>
        <tbody>
          {filteredJokes.map(j => (
            <tr key={j.id}>
              <td>
                <img src={j.icon_url} alt={j.value} />
              </td>
              <td>
                <a href={j.url} target="_blank">
                  {j.value}
                </a>
              </td>
              <td>{formatTime(j.created_at)}</td>
              <td>{formatTime(j.updated_at)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {!filteredJokes.length && <span>Nothing found</span>}
    </>
  );
};

export { Jokes };
