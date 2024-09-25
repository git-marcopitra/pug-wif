import {
  A,
  Button,
  Div,
  H2,
  H3,
  Img,
  P,
  Section,
  Span,
} from '@stylin.js/elements';
import { FC, useState } from 'react';
import toast from 'react-hot-toast';

import { CA } from '@/constants';

import { CopySVG, TraceSVG } from '../svg';
import AftermathModal from './aftermath-modal';

const Liquidity: FC = () => {
  const [afOpen, setAfOpen] = useState(false);
  const handleClose = () => setAfOpen(false);

  return (
    <Section
      py="6rem"
      id="liquidity"
      px={['0.5rem', '2rem']}
      backgroundImage="url(/liquidity.webp)"
      backgroundPosition="center center"
      backgroundSize="cover"
    >
      <H2
        color="#244683"
        textAlign="center"
        fontSize={['3rem', '4rem', '6rem']}
      >
        Where to buy
      </H2>
      <Div
        display="flex"
        color="#000000"
        maxWidth="42.5rem"
        maxHeight="4.5rem"
        justifyContent="center"
        mx={['2rem', '2rem', 'auto']}
      >
        <TraceSVG maxWidth="42.5rem" maxHeight="4.5rem" width="100%" />
      </Div>
      <Div
        mt="1rem"
        mb="6rem"
        gap="5rem"
        display="flex"
        justifyContent="center"
      >
        <A
          display="flex"
          target="_blank"
          rel="noreferrer"
          alignItems="center"
          flexDirection="column"
          href="https://hop.ag/swap/SUI-PUGWIF"
        >
          <Img
            alt="Hop"
            src="/hop-aggregator.webp"
            width={['7rem', '7rem', '12rem']}
          />
          <H3 fontSize="2rem" textDecoration="underline">
            Hop
          </H3>
        </A>
      </Div>
      <H2
        color="#244683"
        textAlign="center"
        fontSize={['3rem', '4rem', '6rem']}
      >
        Provide Liquidity
      </H2>
      <Div
        display="flex"
        color="#000000"
        maxWidth="42.5rem"
        maxHeight="4.5rem"
        justifyContent="center"
        mx={['2rem', '2rem', 'auto']}
      >
        <TraceSVG maxWidth="42.5rem" maxHeight="4.5rem" width="100%" />
      </Div>
      <Div
        mt="1rem"
        display="flex"
        justifyContent="center"
        gap={['2rem', '2rem', '5rem']}
      >
        <A
          display="flex"
          target="_blank"
          rel="noreferrer"
          alignItems="center"
          flexDirection="column"
          href="https://app.turbos.finance/#/pools/0x1269abf04c9057e359bb2e41288e64088a0d98fde841e22312dfeb4fb56df927/add-liquidity"
        >
          <Img
            alt="Turbos"
            src="/turbos.webp"
            width={['7rem', '7rem', '12rem']}
          />
          <H3 fontSize={['1rem', '1rem', '2rem']} textDecoration="underline">
            Turbos
          </H3>
        </A>
        <Div
          display="flex"
          alignItems="center"
          flexDirection="column"
          onClick={() => setAfOpen(true)}
        >
          <Img
            src="/aftermath.webp"
            alt="Turbos"
            width={['7rem', '7rem', '12rem']}
          />
          <H3 fontSize={['1rem', '1rem', '2rem']} textDecoration="underline">
            Aftermath
          </H3>
          <AftermathModal isOpen={afOpen} handleClose={handleClose} />
        </Div>
        <A
          display="flex"
          target="_blank"
          rel="noreferrer"
          alignItems="center"
          flexDirection="column"
          href="https://app.cetus.zone/liquidity/deposit?poolAddress=0x964b391c0255120984000735d381d62fe4608e5330ddd15042e41ad3fdab5f24"
        >
          <Img
            src="/cetus.webp"
            width={['7rem', '7rem', '12rem']}
            alt="Turbos"
          />
          <H3 fontSize={['1rem', '1rem', '2rem']} textDecoration="underline">
            Cetus
          </H3>
        </A>
      </Div>
      <Div display="flex" gap="2rem" flexDirection="column" mt="5rem" mx="3rem">
        <H2
          color="#244683"
          textAlign="center"
          fontSize={['4rem', '4rem', '6rem']}
        >
          CA
        </H2>
        <Div
          gap="2rem"
          display="flex"
          alignItems="center"
          flexDirection={['column', 'column', 'column', 'row']}
        >
          <P wordBreak="break-word" fontSize={['2rem', '2rem', '3rem']}>
            {CA}
          </P>
          <Button
            all="unset"
            px="2.5rem"
            bg="#1C2E3B"
            gap="0.5rem"
            height="4rem"
            display="flex"
            color="#ffffff"
            fontSize="2rem"
            alignItems="center"
            justifyContent="center"
            borderRadius="1.625rem"
            onClick={() => {
              window.navigator.clipboard.writeText(CA);
              toast('Copied');
            }}
          >
            <Span>Copy</Span>
            <Span width="1.5rem">
              <CopySVG maxWidth="1.5rem" maxHeight="1.5rem" width="100%" />
            </Span>
          </Button>
        </Div>
      </Div>
    </Section>
  );
};

export default Liquidity;
