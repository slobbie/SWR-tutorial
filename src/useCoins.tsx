import React, { useEffect } from 'react';
import useSWR from 'swr';
interface coin {
  id: string;

  name: string;
}

const fetcher = (url: string) =>
  fetch(url)
    .then((response) => response.json())
    .then((json) => {
      json.slice(1, 10);
      console.log(json.slice(1, 10));
    });

const useCoins = () => {
  const { data, error } = useSWR<any>(
    'https://api.coinpaprika.com/v1/tickers',
    fetcher
  );

  return {
    coins: data,
  };
};

export default useCoins;
