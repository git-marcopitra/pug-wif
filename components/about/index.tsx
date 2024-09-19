import { Aside, Button, H2, H3, Img, P, Section } from '@stylin.js/elements';
import { FC } from 'react';

const About: FC = () => (
  <Section
    my="6rem"
    mx="auto"
    gap="2rem"
    display="flex"
    maxWidth="90rem"
    alignItems="center"
    px={['3rem', '6rem']}
    justifyContent="space-evenly"
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
      alignItems={['center', 'center', 'flex-start']}
    >
      <H2 fontSize={['3rem', '3rem', '4rem']}>ABOUT PUGWIFHAT</H2>
      <P fontFamily="Rubik" fontSize={['1.5rem', '1.5rem', '2rem']}>
        Born out of the ashes, rises the pug that just never quits. Resilient
        dog here to take over, {"we've"} got the {"pug's"} paws to make it, the
        nose to find the way, and the energy to take it far beyond just a cute
        dog.
      </P>
      <H3 fontSize={['2rem', '2rem', '3rem']}>the hat STAYS on the pug</H3>
      <Button
        all="unset"
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
      >
        Buy
      </Button>
    </Aside>
    <Aside>
      <Img
        scale="1.2"
        alt="The Hat"
        src="the-hat.webp"
        height={['22rem', '22rem', '35rem']}
      />
    </Aside>
  </Section>
);

export default About;
