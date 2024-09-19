import { getFullnodeUrl, SuiClient } from '@mysten/sui/client';
import { Model } from 'mongoose';

import { Network } from '@/lib/constants';
import CoinMetadata, { CoinMetadataModel } from '@/server/model/coin-metadata';

const mainnetClient = new SuiClient({
  url: process.env.NEXT_PUBLIC_SUI_MAINNET_RPC_URL || getFullnodeUrl('mainnet'),
});

export const SUI_CLIENT_PROVIDER_MAP = {
  [Network.MAINNET]: mainnetClient,
} as Record<Network, SuiClient>;

export const COIN_METADATA_MODEL_MAP = {
  [Network.MAINNET]: CoinMetadata,
} as Record<Network, Model<CoinMetadataModel>>;
