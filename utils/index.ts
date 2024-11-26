import { getFullnodeUrl, SuiClient } from '@mysten/sui/client';
import { normalizeSuiAddress } from '@mysten/sui/utils';

import { CA } from '@/constants';

const client = new SuiClient({ url: getFullnodeUrl('mainnet') });

export const getBurnedAmount = async (cursor?: string): Promise<bigint> => {
  const { data, nextCursor, hasNextPage } = await client.getCoins({
    cursor,
    coinType: CA,
    owner: normalizeSuiAddress('0x0'),
  });

  const totalBalance = data.reduce(
    (acc, { balance }) => acc + BigInt(balance),
    BigInt(0)
  );

  if (!hasNextPage || !nextCursor) return totalBalance;

  return totalBalance + (await getBurnedAmount(nextCursor));
};

export const reverseStringChunk = (
  list: string,
  length: number
): ReadonlyArray<string> => [
  ...(list.length > length
    ? reverseStringChunk(list.slice(0, -length), length)
    : []),
  list.slice(-length),
];
