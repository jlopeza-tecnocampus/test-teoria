import {useEffect, useState} from "react";

const URL = 'https://api.coingecko.com/api/v3/' +
    'simple/price?ids=bitcoin&vs_currencies=usd,eur';

type Rates = {
    usd: number;
    eur: number;
}

export function useRating(): Rates | undefined {

    const [rates, setRates] = useState<Rates>();
    useEffect(() => {
        // passa primer
        fetch(URL)
            .then(res => res.json())
            .then(data => {
                // passa segon
                setRates(data.bitcoin);
            })
    }, []);

    return rates;
}