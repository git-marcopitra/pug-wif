import { A, Button, Div, Img, Nav } from '@stylin.js/elements';
import { FC } from 'react';

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
        width="6.25rem"
        height="6.25rem"
        src="/logo.webp"
        alt="$PUGWIF logo"
      />
    </Div>
    <Nav
      gap="4rem"
      fontSize="2rem"
      justifyContent="center"
      display={['none', 'none', 'none', 'flex']}
    >
      <A href="#home">Home</A>
      <A href="#pugnomics">Pugnomics</A>
      <A href="#roadmap">Roadmap</A>
    </Nav>
    <Div display="flex" gap="2rem" justifyContent="flex-end">
      <Div display={['none', 'none', 'flex']} gap="2rem">
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
        <Button
          all="unset"
          bg="#DAE2E9"
          width="4rem"
          height="4rem"
          display="flex"
          color="#000000"
          borderRadius="50%"
          alignItems="center"
          justifyContent="center"
          boxShadow="3px 3px 0 0 #0A4E8D"
        >
          <XSVG maxWidth="1.4rem" maxHeight="1.4rem" width="100%" />
        </Button>
      </Div>
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
        boxShadow="-3px -3px 0 0 #1C2E3B"
      >
        Buy
      </Button>
    </Div>
  </Div>
);

export default Navbar;
