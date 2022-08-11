import React, { useEffect } from 'react';
import useSWR from 'swr';
import useCoins from './useCoins';

// const fetcher = (url: string) =>
//   fetch(url)
//     .then((r) => r.json())
//     .then((json) => {
//       json.slice(1, 10);
//     });

const fetcher = (url: string) => fetch(url).then((r) => r.json());
function App() {
  const { data, error } = useSWR<any>(
    'https://api.coinpaprika.com/v1/tickers',
    fetcher
  );
  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return <div>{JSON.stringify(data.slice(1, 10), null, 2)}</div>;
}

export default App;
