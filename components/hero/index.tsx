import { Div, H1, Header, Img, P } from '@stylin.js/elements';
import { FC } from 'react';
import unikey from 'unikey';

import Navbar from './navbar';

const Hero: FC = () => (
  <Header
    height="100vh"
    overflow="hidden"
    position="relative"
    backgroundImage="url(/background.webp)"
    backgroundPosition="center center"
    backgroundSize="cover"
  >
    <Navbar />
    <H1 fontSize="15vw" width="9ch" textAlign="center" mx="auto">
      PUGWIFHAT
    </H1>
    <Div
      bottom="0"
      width="100vw"
      display="flex"
      position="absolute"
      justifyContent="center"
    >
      <Img height="72vh" alt="The Pug" src="/the-pug.webp" />
    </Div>
    <Div
      p="0.5rem"
      gap="1rem"
      bg="#EDCF4E"
      left="-10vw"
      right="-10vw"
      bottom="3rem"
      width="120vw"
      display="flex"
      rotate="-7.5deg"
      position="absolute"
      borderTop="3px solid #000000"
      borderBottom="3px solid #000000"
    >
      {/* <Slider
        autoplay
        infinite
        centerMode
        dots={false}
        speed={2000}
        variableWidth
        arrows={false}
        cssEase="linear"
        slidesToScroll={1}
        autoplaySpeed={2000}
      > */}
      {Array.from({ length: 10 }, () => (
        <P key={unikey()} fontSize="2.5rem">
          Pugzone
        </P>
      ))}
      {/* </Slider> */}
    </Div>
  </Header>
);

export default Hero;
