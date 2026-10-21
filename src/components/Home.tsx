import {useEffect, useMemo, useState} from "react";

const URL = 'https://api.coingecko.com/api/v3/' +
    'simple/price?ids=bitcoin&vs_currencies=usd,eur';
type Rates = {
  usd: number;
  eur: number;
}

type Currency = 'usd' | 'eur';

export function Home() {
  const [rates, setRates] = useState<Rates>()
  const [c, st] = useState<number>(0)

  useEffect(() => {
    // passa primer
    fetch(URL)
        .then(res => res.json())
        .then(data => {
          // passa segon
          setRates(data.bitcoin);
        })
  }, [])

  const [cur, setCur] = useState<Currency>('usd')

  const value = useMemo(() => {
    // pasasria primer, despres del segon
    return rates && rates[cur];
  }, [rates, cur]);

  function switchCurrency() {
    setCur(cur === 'usd' ? 'eur' : 'usd')
  }
  if (!rates || !value ) return <p>Loading...</p>
  // passara despres del segon
  return (
      <p>
        Current {cur} rate is: {value}
        <button onClick={switchCurrency}>
          Switch currency
        </button>
        <button onClick={() => st(c + 1)}>
          Set count        </button>
      </p>
  )
}
