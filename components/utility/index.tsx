import { A, Button, Div, H2, H3, Img, P, Section } from '@stylin.js/elements';
import { FC } from 'react';

import { TelegramSVG, XSVG } from '../svg';

const Utility: FC = () => (
  <Section
    py="8rem"
    px={['1rem', '3rem']}
    backgroundImage="url(/pugnomics.webp), linear-gradient(0deg, #123D84, #123D84)"
    backgroundPosition="center center"
    backgroundSize="cover"
  >
    <H2 fontSize={['4rem', '4rem', '6rem']} textAlign="center" color="#ffffff">
      Utility?
    </H2>
    <P fontSize="2rem" textAlign="center" color="#ffffff" fontFamily="Sniglet">
      (stay tuned for announcements ⏳)
    </P>
    <Div
      mx="auto"
      mt="9rem"
      gap="1.5rem"
      bg="#A56A58"
      display="flex"
      maxWidth="1440px"
      position="relative"
      p={['3rem', '5rem']}
      flexDirection="column"
      boxShadow="0 18px 0 0 #ffffff"
      borderRadius={['3rem', '5rem']}
    >
      <Img
        width="30rem"
        right="-10rem"
        bottom="-4rem"
        position="absolute"
        src="/pugwifhat.webp"
        display={['none', 'none', 'block']}
      />
      <H3 color="#fff" fontSize={['2rem', '2.5rem', '4rem']}>
        Join the community
      </H3>
      <Div display="flex" gap="2rem" justifyContent={['center', 'flex-start']}>
        <A href="https://t.me/pugwifportal" target="_blank" rel="noreferrer">
          <Button
            all="unset"
            bg="#000000"
            width="4rem"
            height="4rem"
            display="flex"
            color="#ffffff"
            borderRadius="50%"
            alignItems="center"
            justifyContent="center"
            boxShadow="3px 3px 0 0 #ffffff"
          >
            <TelegramSVG maxWidth="2rem" maxHeight="2rem" width="100%" />
          </Button>
        </A>
        <A href="https://x.com/SuiPugwif" target="_blank" rel="noreferrer">
          <Button
            all="unset"
            bg="#000000"
            width="4rem"
            height="4rem"
            display="flex"
            color="#ffffff"
            borderRadius="50%"
            alignItems="center"
            justifyContent="center"
            boxShadow="3px 3px 0 0 #ffffff"
          >
            <XSVG maxWidth="1.4rem" maxHeight="1.4rem" width="100%" />
          </Button>
        </A>
      </Div>
    </Div>
  </Section>
);

export default Utility;
