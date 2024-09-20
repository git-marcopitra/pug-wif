import { Div, H2, Img, P, Section } from '@stylin.js/elements';
import { FC, useEffect, useState } from 'react';

import { getBurnedAmount, reverseStringChunk } from '@/utilts';

import { TraceSVG } from '../svg';

const Pugnomics: FC = () => {
  const [burned, setBurned] = useState('0');
  const [burnedPer, setBurnedPer] = useState(0);

  useEffect(() => {
    getBurnedAmount().then((value) => {
      setBurnedPer(
        +(
          (Number(String(value).slice(0, -9)) / 1_000_000_000) *
          100
        ).toPrecision(2)
      );
      setBurned(reverseStringChunk(String(value).slice(0, -9), 3).join());
    });
  }, []);

  return (
    <Section
      py="8rem"
      px={['1rem', '3rem']}
      backgroundImage="url(/pugnomics.webp), linear-gradient(0deg, #123D84, #123D84)"
      backgroundPosition="center center"
      backgroundSize="cover"
    >
      <H2
        fontSize={['4rem', '4rem', '6rem']}
        textAlign="center"
        color="#ffffff"
      >
        Pugnomics
      </H2>
      <Div
        color="#EDCF4E"
        display="flex"
        maxWidth="42.5rem"
        maxHeight="4.5rem"
        justifyContent="center"
        mx={['2rem', '2rem', 'auto']}
      >
        <TraceSVG maxWidth="42.5rem" maxHeight="4.5rem" width="100%" />
      </Div>
      <Div
        my="2rem"
        mx="auto"
        gap="1.5rem"
        display="flex"
        maxWidth="60rem"
        flexDirection="column"
      >
        <Div display="flex" alignItems="center" gap="1rem" color="#fff">
          <Img src="/pug-icon.webp" alt="Pug Icon" width={['4rem', '6rem']} />
          <P fontSize={['2rem', '2.5rem', '3rem']}>
            Total Supply- 1,000,000,000
          </P>
        </Div>
        <Div display="flex" alignItems="center" gap="1rem" color="#fff">
          <Img src="/hat-icon.webp" alt="Hat Icon" width={['4rem', '6rem']} />
          <P fontSize={['2rem', '2.5rem', '3rem']}>
            circulating supply- 924,994,569
          </P>
        </Div>
        <Div display="flex" alignItems="center" gap="1rem" color="#fff">
          <Img src="/pug-icon.webp" alt="Pug Icon" width={['4rem', '6rem']} />
          <P fontSize={['2rem', '2.5rem', '3rem']}>
            % Burned- {burnedPer}% ({burned})
          </P>
        </Div>
      </Div>
    </Section>
  );
};

export default Pugnomics;
