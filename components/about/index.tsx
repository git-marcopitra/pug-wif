import { Aside, H2, H3, Img, P, Section } from '@stylin.js/elements';
import { FC } from 'react';

import BuyButton from '../buy-button';

const About: FC = () => (
  <Section
    my="6rem"
    mx="auto"
    id="about"
    gap="2rem"
    display="flex"
    maxWidth="90rem"
    px={['3rem', '6rem']}
    justifyContent="space-evenly"
    alignItems={['flex-start', 'center']}
    flexDirection={[
      'column-reverse',
      'column-reverse',
      'column-reverse',
      'row',
    ]}
  >
    <Aside
      gap="1rem"
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
    >
      <H2 fontSize={['2rem', '2rem', '3rem']}>ABOUT PUGWIFHAT</H2>
      <P
        fontFamily="Rubik"
        fontSize={['1.5rem', '1.5rem', '1.8rem']}
        lineHeight={['2.2rem', '2.2rem', '3rem']}
      >
        Resurging from the ashes of a premature rug, arose the pug that
        {" doesn't"}
        quit. His message is clear: he {"won't"} stand for scams.
      </P>
      <br />
      <P
        fontFamily="Rubik"
        fontSize={['1.5rem', '1.5rem', '1.8rem']}
        lineHeight={['2.2rem', '2.2rem', '3rem']}
      >
        The Sui ecosystem now rallies behind this unsuspected hero. All he has
        is his resilient spirit, a blue Sui hat and the support of the whole
        community.
      </P>
      <H3 fontSize={['1.25rem', '2rem', '2rem']}>THE HAT STAYS ON THE PUG</H3>
      <BuyButton
        mt="1rem"
        px="2.5rem"
        bg="#1C2E3B"
        height="4rem"
        display="flex"
        color="#ffffff"
        fontSize="2rem"
        alignItems="center"
        alignSelf="flex-start"
        borderRadius="1.625rem"
        justifyContent="center"
      />
    </Aside>
    <Aside>
      <Img
        scale="1.2"
        alt="The Hat"
        src="the-hat.webp"
        height={['15rem', '22rem', '35rem']}
      />
    </Aside>
  </Section>
);

export default About;
