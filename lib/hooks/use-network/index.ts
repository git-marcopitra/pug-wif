import { useSuiClientContext } from '@mysten/dapp-kit';

import { Network } from '@/lib/constants';

export const useNetwork = () => {
  const { network } = useSuiClientContext();

  return network as Network;
};
