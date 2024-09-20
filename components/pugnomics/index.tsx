import { Div, H2, Img, P, Section } from '@stylin.js/elements';
import { FC, useEffect, useState } from 'react';

import { MAX_SUPPLY } from '@/constants';
import { getBurnedAmount, reverseStringChunk } from '@/utilts';

import Partners from '../partners';
import { TraceSVG } from '../svg';

const Pugnomics: FC = () => {
  const [burned, setBurned] = useState('0');
  const [burnedPer, setBurnedPer] = useState(0);

  useEffect(() => {
    getBurnedAmount().then((value) => {
      const numberValue = Number(String(value).slice(0, -9));

      setBurnedPer(+((numberValue / MAX_SUPPLY) * 100).toPrecision(2));
      setBurned(String(numberValue));
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
            circulating supply-{' '}
            {reverseStringChunk(String(MAX_SUPPLY - Number(burned)), 3).join()}
          </P>
        </Div>
        <Div display="flex" alignItems="center" gap="1rem" color="#fff">
          <Img src="/pug-icon.webp" alt="Pug Icon" width={['4rem', '6rem']} />
          <P fontSize={['2rem', '2.5rem', '3rem']}>
            % Burned- {burnedPer}% ({reverseStringChunk(burned, 3).join()})
          </P>
        </Div>
      </Div>
      <Partners />
    </Section>
  );
};

export default Pugnomics;
