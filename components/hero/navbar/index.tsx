import { A, Button, Div, Img, Nav } from '@stylin.js/elements';
import { FC } from 'react';

import BuyButton from '@/components/buy-button';
import { TelegramSVG, XSVG } from '@/components/svg';

const Navbar: FC = () => (
  <Div
    p="2rem"
    gap="2rem"
    display="grid"
    alignItems="center"
    gridTemplateColumns={['1fr 1fr', '1fr 1fr', '1fr 1fr', '1fr 1fr 1fr']}
  >
    <Div>
      <Img
        src="/logo.webp"
        alt="$PUGWIF logo"
        width={['5rem', '6.25rem']}
        height={['5rem', '6.25rem']}
      />
    </Div>
    <Nav
      gap="4rem"
      fontSize="2rem"
      justifyContent="center"
      display={['none', 'none', 'none', 'flex']}
    >
      <A href="#about">about</A>
      <A href="#pugnomics">Pugnomics</A>
      <A href="#liquidity">liquidity</A>
    </Nav>
    <Div display="flex" gap="2rem" justifyContent="flex-end">
      <Div display={['none', 'none', 'flex']} gap="2rem">
        <A href="https://t.me/pugwifportal" target="_blank" rel="noreferrer">
          <Button
            all="unset"
            bg="#A56A58"
            width="4rem"
            height="4rem"
            display="flex"
            color="#ffffff"
            borderRadius="50%"
            alignItems="center"
            justifyContent="center"
            boxShadow="3px 3px 0 0 #341A12"
          >
            <TelegramSVG maxWidth="2rem" maxHeight="2rem" width="100%" />
          </Button>
        </A>
        <A href="https://x.com/pugwifsui2" target="_blank" rel="noreferrer">
          <Button
            all="unset"
            bg="#A56A58"
            width="4rem"
            height="4rem"
            display="flex"
            color="#ffffff"
            borderRadius="50%"
            alignItems="center"
            justifyContent="center"
            boxShadow="3px 3px 0 0 #341A12"
          >
            <XSVG maxWidth="1.4rem" maxHeight="1.4rem" width="100%" />
          </Button>
        </A>
      </Div>
      <BuyButton boxShadow="-3px -3px 0 0 #1C2E3B">Buy</BuyButton>
    </Div>
  </Div>
);

export default Navbar;
