import type { Trade } from '@hop.ag/sdk';
import { Transaction } from '@mysten/sui/transactions';

import { JSONQuoteResponse } from '../../terminal/swap/swap.types';

export const useHopSdk = () => ({
  quote: (coinIn: string, coinOut: string, amountIn: string) =>
    fetch(
      `/api/v1/hop/quote?coinIn=${coinIn}&coinOut=${coinOut}&amountIn=${amountIn}`,
      {
        mode: 'no-cors',
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
      }
    ).then((response) => response.json?.()) as Promise<JSONQuoteResponse>,
  swap: (trade: Trade, account: string, slippage: number) => {
    const searchParams = new URLSearchParams();

    searchParams.set('account', account);
    searchParams.set('slippage', String(slippage));
    searchParams.set('trade', JSON.stringify(trade));

    return fetch(`/api/v1/hop/swap?${searchParams.toString()}`)
      .then((response) => response.json?.())
      .then(({ txb }: { txb: string }) =>
        Transaction.fromKind(txb)
      ) as Promise<Transaction>;
  },
});
