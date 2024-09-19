import { Box } from '@interest-protocol/ui-kit';
import { FC, useEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import Provider from '@/lib/components/provider';
import Web3Manager from '@/lib/components/web3-manager';

import Swap from './swap';
import { Aggregator, SwapForm } from './swap/swap.types';
import SwapInitManager from './swap/swap-init-manager';

export interface SwapInterfaceProps {
  typeIn: string;
  typeOut: string;
  fixedIn?: boolean;
  fixedOut?: boolean;
  interval?: `${number}`;
  slippage?: `${number}`;
  aggregator?: Aggregator;
}

export const SwapInterface: FC<SwapInterfaceProps> = ({
  typeIn,
  typeOut,
  fixedIn,
  fixedOut,
  interval,
  slippage,
  aggregator,
}) => {
  const form = useForm<SwapForm>({
    defaultValues: {
      focus: true,
      loading: true,
      fixedIn: fixedIn ?? false,
      fixedOut: fixedOut ?? false,
      settings: {
        interval: interval ?? '10',
        slippage: slippage ?? '0.1',
        aggregator: aggregator ?? Aggregator.Hop,
      },
    },
  });

  useEffect(() => {
    if (fixedIn) form.setValue('fixedIn', fixedIn);
    if (fixedOut) form.setValue('fixedOut', fixedOut);
    if (interval) form.setValue('settings.interval', interval);
    if (slippage) form.setValue('settings.slippage', slippage);
    if (aggregator) form.setValue('settings.slippage', aggregator);
  }, [fixedIn, fixedOut, interval, slippage, aggregator]);

  return (
    <Provider>
      <Box
        p="xs"
        gap="xs"
        mx="auto"
        width="25rem"
        display="flex"
        overflowY="auto"
        bg="lowContainer"
        borderRadius="xs"
        position="relative"
        flexDirection="column"
        maxHeight="calc(95vh - 4rem)"
      >
        <Web3Manager />
        <FormProvider {...form}>
          <SwapInitManager from={typeIn} to={typeOut} />
          <Swap />
        </FormProvider>
      </Box>
    </Provider>
  );
};