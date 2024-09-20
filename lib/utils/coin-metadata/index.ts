import { normalizeStructTag } from '@mysten/sui/utils';

import { Network } from '@/lib/constants';
import { CoinMetadataWithType } from '@/lib/interface';

import coinMetadataJsonRaw from './coin-metadata.data';
import {
  FetchCoinMetadata,
  FetchCoinMetadataMultipleTypeArg,
  FetchCoinMetadataSingleTypeArg,
} from './coin-metadata.types';

const coinMetadataMap = coinMetadataJsonRaw as unknown as Record<
  Network,
  Record<string, CoinMetadataWithType>
>;

const isSingleType = (
  args: FetchCoinMetadataSingleTypeArg | FetchCoinMetadataMultipleTypeArg
): args is FetchCoinMetadataSingleTypeArg =>
  !!(args as FetchCoinMetadataSingleTypeArg).type;

const metadatas: Record<string, CoinMetadataWithType> = {};

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const fetchCoinMetadata: FetchCoinMetadata = async (args) => {
  if (isSingleType(args)) {
    const localMetadata =
      coinMetadataMap[args.network][normalizeStructTag(args.type as string)];

    if (localMetadata) return localMetadata;

    if (metadatas[args.type]) return metadatas[args.type];

    const searchParams = new URLSearchParams();
    searchParams.set('type', args.type);
    searchParams.set('network', args.network);

    return await fetch(`/api/v1/coin-metadata?${searchParams.toString()}`, {
      method: 'GET',
      mode: 'no-cors',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        metadatas[args.type] = data;
        return data as CoinMetadataWithType;
      });
  }

  const uniqueTypes = Array.from(new Set(args.types));

  const cachedMetadatas = uniqueTypes.reduce((acc, type) => {
    const metadata =
      coinMetadataMap[args.network][normalizeStructTag(type)] ??
      metadatas[type];
    if (!metadata) return acc;
    return [...acc, metadata];
  }, [] as ReadonlyArray<CoinMetadataWithType>);

  const missingTypes = uniqueTypes.filter(
    (type) => !coinMetadataMap[args.network][normalizeStructTag(type)]
  );

  if (!missingTypes.length) return cachedMetadatas;

  const searchParams = new URLSearchParams();

  searchParams.set('network', args.network);
  searchParams.set('coinsType', missingTypes.join());

  const missingMetadatas = await fetch(
    `/api/v1/coin-metadata?${searchParams.toString()}`,
    {
      method: 'GET',
      mode: 'no-cors',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    }
  )
    .then((res) => res.json())
    .then((value) => {
      value.forEach(
        (metadata: CoinMetadataWithType) =>
          (metadatas[metadata.type] = metadata)
      );

      return value as ReadonlyArray<CoinMetadataWithType>;
    });

  return [...missingMetadatas, ...cachedMetadatas];
};
