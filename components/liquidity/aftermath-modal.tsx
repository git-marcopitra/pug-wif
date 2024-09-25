import { Button, Div, H3, P } from '@stylin.js/elements';
import { FC } from 'react';

import { CloseSVG } from '../svg';
import { AftermathModalProps } from './liquidity.types';

const AftermathModal: FC<AftermathModalProps> = ({ isOpen, handleClose }) => {
  if (!isOpen) return;

  return (
    <Div
      inset="0"
      bg="#00000022"
      display="flex"
      position="fixed"
      alignItems="center"
      onClick={handleClose}
      justifyContent="center"
    >
      <Div
        bg="#ffffff"
        width="20rem"
        overflow="hidden"
        borderRadius="2rem"
        onClick={(e) => e.stopPropagation()}
      >
        <Div
          height="10rem"
          position="relative"
          backgroundImage="url(/modal.webp)"
          backgroundPosition="center bottom"
          backgroundSize="cover"
        >
          <Button
            all="unset"
            top="2rem"
            right="2rem"
            color="#ffffff"
            cursor="pointer"
            position="absolute"
            onClick={handleClose}
          >
            <CloseSVG maxWidth="1rem" maxHeight="1rem" width="100%" />
          </Button>
        </Div>
        <Div p="1rem 1.5rem" display="grid" gap="0.5rem">
          <H3>liquidity POOLS available</H3>
          <a
            href="https://aftermath.finance/pools/0x7f4724cf6dc9a9582a625218f9b4b5399a8fccba57b79b1f1350d897dd641e17"
            target="_blank"
            rel="noreferrer"
          >
            <P textDecoration="underline" fontFamily="Rubik">
              PUGWIF-BLUB
            </P>
          </a>
          <a
            href="https://aftermath.finance/pools/0x4c91ac996b1516558b782b269097beaee695cfd155215222ae7bfdd4e7a432c2"
            target="_blank"
            rel="noreferrer"
          >
            <P textDecoration="underline" fontFamily="Rubik">
              PUGWIF-SUISHI
            </P>
          </a>
          <a
            href="https://aftermath.finance/pools/0xf709181d879565c7bb6f6df791616f14d8ee9af406c70ca7cfbebc38b6a8c1b6"
            target="_blank"
            rel="noreferrer"
          >
            <P textDecoration="underline" fontFamily="Rubik">
              PUGWIF-BB
            </P>
          </a>
          <a
            href="https://aftermath.finance/pools/0x5baa4a7e40af6beb1542af5b6860018e89a9419c96fff5417267e48b35ef1c74"
            target="_blank"
            rel="noreferrer"
          >
            <P textDecoration="underline" fontFamily="Rubik">
              PUGWIF-FUD
            </P>
          </a>
          <a
            href="https://aftermath.finance/pools/0x7448fb379409fa5f806dd0efbc4efcb3826c8bb1f5a45421fe574a47571644f7"
            target="_blank"
            rel="noreferrer"
          >
            <P textDecoration="underline" fontFamily="Rubik">
              PUGWIF-LIQ
            </P>
          </a>
          <a
            href="https://aftermath.finance/pools/0xa22beb569dca0b192babac79dbd52907bdce203d7b04bfa653ce656280bdf172"
            target="_blank"
            rel="noreferrer"
          >
            <P textDecoration="underline" fontFamily="Rubik">
              PUGWIF-WUSDC
            </P>
          </a>
        </Div>
      </Div>
    </Div>
  );
};

export default AftermathModal;
