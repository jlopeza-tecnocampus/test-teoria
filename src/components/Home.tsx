import {useMemo, useState} from "react";
import {useRating} from "./useRating.ts";

type Currency = 'usd' | 'eur';

export function Home() {
    const rates = useRating();

    const [cur, setCur] = useState<Currency>('usd')

    const value = useMemo(() => {
        // pasasria primer, despres del segon
        return rates && rates[cur];
    }, [rates, cur]);

    function switchCurrency() {
        setCur(cur === 'usd' ? 'eur' : 'usd')
    }

    if (!rates || !value) return <p>Loading...</p>
    // passara despres del segon
    return (
        <p>
            Current {cur} rate is: {value}
            <button onClick={switchCurrency}>
                Switch currency
            </button>
        </p>
    )
}
