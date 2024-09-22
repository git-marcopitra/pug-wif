import { Box, Button, Typography } from '@interest-protocol/ui-kit';
import { FC } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';

import { SwapForm } from '../swap.types';
import { InputProps } from './input.types';

const HeaderInfo: FC<InputProps> = ({ label }) => {
  const { control } = useFormContext<SwapForm>();

  const symbol = useWatch({ control, name: `${label}.symbol` });

  return (
    <Box display="flex" justifyContent="space-between" alignItems="center">
      <Typography variant="label" size="medium" fontSize="s">
        {label == 'from' ? 'Sell' : 'BUY'}
        <Typography
          as="span"
          size="small"
          variant="label"
          fontSize="s"
          display={['inline-block', 'none']}
        >
          : {symbol}
        </Typography>
      </Typography>
      {label === 'from' && (
        <Box display="flex" gap="s">
          <a
            href="https://changenow.io/exchange?from=&to=sui"
            target="_blank"
            rel="noreferrer"
          >
            <Button
              px="xs"
              py="2xs"
              variant="outline"
              borderRadius="full"
              fontFamily="Satoshi"
              borderColor="outlineVariant"
            >
              Bridge SUI
            </Button>
          </a>
          <a
            href="https://changenow.io/exchange?from=&to=sui&fiatMode=true  "
            target="_blank"
            rel="noreferrer"
          >
            <Button
              px="xs"
              py="2xs"
              variant="outline"
              borderRadius="full"
              fontFamily="Satoshi"
              borderColor="outlineVariant"
            >
              Buy SUI
            </Button>
          </a>
        </Box>
      )}
    </Box>
  );
};

export default HeaderInfo;
