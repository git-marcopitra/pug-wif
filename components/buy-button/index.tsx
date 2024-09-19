import { Modal, Motion } from '@interest-protocol/ui-kit';
import { SUI_TYPE_ARG } from '@mysten/sui/utils';
import { Button, ButtonProps, Div } from '@stylin.js/elements';
import dynamic from 'next/dynamic';
import { FC, useState } from 'react';

import { CA } from '../../constants';
import { TimesSVG } from '../svg';

const SwapInterface = dynamic(
  import('../../lib/terminal').then(({ SwapInterface }) => SwapInterface),
  { ssr: false }
);

const BuyButton: FC<ButtonProps> = (props) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        all="unset"
        px="2.5rem"
        bg="#2076B4"
        height="4rem"
        display="flex"
        color="#ffffff"
        fontSize="2rem"
        alignItems="center"
        borderRadius="1.625rem"
        justifyContent="center"
        onClick={() => setOpen(true)}
        {...props}
      >
        Buy
      </Button>
      <Modal custom isOpen={open} onClose={() => setOpen(false)}>
        <Div display="flex" flexDirection="column" gap="0.5rem">
          <Button
            all="unset"
            bg="#2076B4"
            display="flex"
            color="#ffffff"
            borderRadius="50%"
            alignItems="center"
            alignSelf="flex-end"
            justifyContent="center"
            onClick={() => setOpen(false)}
            width={['2rem', '2rem', '3rem']}
            height={['2rem', '2rem', '3rem']}
          >
            <TimesSVG maxWidth="0.85rem" maxHeight="0.85rem" width="100%" />
          </Button>
          <Motion
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <SwapInterface fixedOut typeIn={SUI_TYPE_ARG} typeOut={CA} />
          </Motion>
        </Div>
      </Modal>
    </>
  );
};

export default BuyButton;
