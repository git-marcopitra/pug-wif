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
import { FC } from 'react';
import toast from 'react-hot-toast';

import { CA } from '@/constants';

import { CopySVG, TraceSVG } from '../svg';

const Liquidity: FC = () => (
  <Section
    py="6rem"
    px="2rem"
    backgroundImage="url(/liquidity.webp)"
    backgroundPosition="center center"
    backgroundSize="cover"
  >
    <H2 color="#244683" textAlign="center" fontSize={['4rem', '4rem', '6rem']}>
      Liquidity
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
    <Div display="flex" gap="5rem" justifyContent="center" mt="1rem">
      <A
        display="flex"
        target="_blank"
        rel="noreferrer"
        alignItems="center"
        flexDirection="column"
        href="https://app.turbos.finance/#/pools/0x1269abf04c9057e359bb2e41288e64088a0d98fde841e22312dfeb4fb56df927/add-liquidity"
      >
        <Img src="/turbos.webp" width="12rem" alt="Turbos" />
        <H3 fontSize="2rem">Turbos</H3>
      </A>
      <A
        display="flex"
        target="_blank"
        rel="noreferrer"
        alignItems="center"
        flexDirection="column"
        href="https://app.cetus.zone/liquidity/deposit?poolAddress=0x964b391c0255120984000735d381d62fe4608e5330ddd15042e41ad3fdab5f24"
      >
        <Img src="/cetus.webp" width="12rem" alt="Turbos" />
        <H3 fontSize="2rem">Cetus</H3>
      </A>
    </Div>
    <P textAlign="center" fontFamily="Rubik" fontSize="1.25rem" mt="2rem">
      Provide liquidity to our pools
    </P>
    <Div display="flex" gap="2rem" flexDirection="column" mt="5rem" mx="3rem">
      <H2
        color="#244683"
        textAlign="center"
        fontSize={['4rem', '4rem', '6rem']}
      >
        CA
      </H2>
      <Div
        display="flex"
        gap="2rem"
        alignItems="center"
        flexDirection={['column', 'column', 'column', 'row']}
      >
        <P wordBreak="break-word" fontSize="3rem">
          {CA}
        </P>
        <Button
          all="unset"
          px="2.5rem"
          bg="#1C2E3B"
          height="4rem"
          display="flex"
          color="#ffffff"
          fontSize="2rem"
          gap="0.5rem"
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

export default Liquidity;
