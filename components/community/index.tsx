import { A, Button, Div, H2, Img, P, Section } from '@stylin.js/elements';
import { FC } from 'react';
import Slider from 'react-slick';

import Partners from '../partners';

const Community: FC = () => (
  <Section bg="#123D84" py="8rem">
    <Div px={['1rem', '3rem']}>
      <H2
        fontSize={['4rem', '4rem', '6rem']}
        textAlign="center"
        color="#ffffff"
      >
        THE HAT STAYS ON
      </H2>
      <P
        color="#ffffff"
        textAlign="center"
        fontSize="1.75rem"
        fontFamily="Rubik"
      >
        Get yourself hatted using our AR Filter!
      </P>
    </Div>
    <Div mt="5rem" display="flex" flexDirection="column">
      <Slider
        autoplay
        centerMode
        arrows={false}
        slidesToShow={4}
        slidesToScroll={1}
        responsive={[
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 425,
            settings: {
              slidesToShow: 1,
            },
          },
        ]}
      >
        <Img
          src="/community/smurf.webp"
          alt="Smurf Wif Hat"
          width="100%"
          px="0.5rem"
        />
        <Img
          src="/community/adeniyi.webp"
          alt="Adeniyi Wif Hat"
          width="100%"
          px="0.5rem"
        />
        <Img
          src="/community/sam.webp"
          alt="Sam Wif Hat"
          width="100%"
          px="0.5rem"
        />
        <Img
          src="/community/kostas.webp"
          alt="Kostas Wif Hat"
          width="100%"
          px="0.5rem"
        />
      </Slider>
      <A
        mt="2rem"
        target="_blank"
        rel="noreferrer"
        alignSelf="center"
        href="https://isstudios.8thwall.app/pugwifsui/"
      >
        <Button
          all="unset"
          py="1rem"
          px="3rem"
          bg="#FEF5C1"
          color="#163979"
          fontSize="1.5rem"
          borderRadius="2rem"
        >
          Try the hat
        </Button>
      </A>
    </Div>
    <Div mx="1rem">
      <Partners />
    </Div>
  </Section>
);

export default Community;
