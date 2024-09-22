import { A, Div, H3, H4, Img } from '@stylin.js/elements';
import { FC } from 'react';

import { TraceSVG } from '../svg';

const Partners: FC = () => (
  <Div
    py="3rem"
    px="4rem"
    mx="auto"
    mt="9rem"
    bg="#ffffff"
    maxWidth="70rem"
    position="relative"
    borderRadius="4rem"
    boxShadow="0 18px 0 0 #D7D7D7"
  >
    <H3 color="#1C2E3B" fontSize="3rem" textAlign="center">
      Partners
    </H3>
    <Div
      my="1rem"
      mx="auto"
      color="#EDCF4E"
      display="flex"
      maxWidth="22rem"
      maxHeight="4.5rem"
      justifyContent="center"
    >
      <TraceSVG maxWidth="42.5rem" maxHeight="4.5rem" width="100%" />
    </Div>
    <Div
      my="2rem"
      gap="2rem"
      display="flex"
      flexWrap="wrap"
      alignItems="center"
      justifyContent="center"
    >
      <A
        gap="1rem"
        display="flex"
        target="_blank"
        rel="noreferrer"
        alignItems="center"
        href="https://interestprotocol.com"
      >
        <Img
          width="4rem"
          src="/interest-protocol.webp"
          alt="Interest Protocol Logo"
        />
        <H4 fontSize="2rem" lineHeight="1.8rem">
          Interest
          <br />
          Protocol
        </H4>
      </A>
      <A
        gap="1rem"
        display="flex"
        target="_blank"
        rel="noreferrer"
        alignItems="center"
        href="https://turbos.finance"
      >
        <Img
          width="4rem"
          src="/turbos-finance.webp"
          alt="Turbos Finance Logo"
        />
        <H4 fontSize="2rem" lineHeight="1.8rem">
          Turbos
          <br />
          Finance
        </H4>
      </A>
      <A
        gap="1rem"
        display="flex"
        target="_blank"
        rel="noreferrer"
        alignItems="center"
        href="https://nozomi.world/"
      >
        <Img width="4rem" src="/studio-mirai.webp" alt="Studio Mirai Logo" />
        <H4 fontSize="2rem" lineHeight="1.8rem">
          Studio
          <br />
          Mirai
        </H4>
      </A>
      <A
        gap="1rem"
        display="flex"
        target="_blank"
        rel="noreferrer"
        alignItems="center"
        href="https://dsllegacy.xyz"
      >
        <Img width="4rem" src="/dsl-legacy.webp" alt="DSL Legacy Logo" />
        <H4 fontSize="2rem" lineHeight="1.8rem">
          Legacy
          <br />
          DAO
        </H4>
      </A>
      <A
        gap="1rem"
        display="flex"
        target="_blank"
        rel="noreferrer"
        alignItems="center"
        href="https://hop.ag"
      >
        <Img
          width="4rem"
          src="/hop-aggregator.webp"
          alt="Hop Aggregator Logo"
        />
        <H4 fontSize="2rem" lineHeight="1.8rem">
          Hop
          <br />
          Aggregator
        </H4>
      </A>
    </Div>
  </Div>
);

export default Partners;
