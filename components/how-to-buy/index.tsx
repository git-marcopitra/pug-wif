import { Article, Button, Div, H2, H3, P, Span } from '@stylin.js/elements';
import { FC } from 'react';
import Slider from 'react-slick';
import unikey from 'unikey';

import BuyButton from '../buy-button';
import { DATA } from './how-to-buy.data';

const HowToBuy: FC = () => (
  <>
    <H2
      mt="6rem"
      color="#ffffff"
      fontSize={['2rem', '2rem', '6rem']}
      textAlign={['left', 'left', 'center']}
    >
      How to buy Pugwif
    </H2>
    <P
      color="#ffffff"
      textAlign={['left', 'left', 'center']}
      fontSize={['1rem', '1rem', '1.75rem']}
      fontFamily={['Rubik', 'Rubik', 'Sniglet']}
    >
      Join the relentless pug, get started in three easy steps.
    </P>
    <Div
      mx="auto"
      mt="5rem"
      gap="3rem"
      maxWidth="66rem"
      justifyContent="center"
      gridTemplateColumns="1fr 1fr 1fr"
      display={['none', 'none', 'none', 'grid']}
    >
      {DATA.map(({ number, title, description, link, button }) => (
        <Article
          p="2rem"
          gap="2rem"
          bg="#FEF5C1"
          key={unikey()}
          display="flex"
          borderRadius="1rem"
          flexDirection="column"
          alignItems="flex-start"
          justifyContent="space-between"
          boxShadow="0.5rem 0 0 0 #EDCF4E"
        >
          <Div
            gap="0.75rem"
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
          >
            <Span fontFamily="Sniglet">{number}</Span>
            <H3 fontSize="2.5rem" letterSpacing="-6%">
              {title}
            </H3>
            <P fontFamily="Sniglet">{description}</P>
          </Div>
          {button === 'Buy' ? (
            <BuyButton
              all="unset"
              py="1rem"
              px="2.5rem"
              bg="#1C2E3B"
              height="1rem"
              fontSize="1rem"
              color="#ffffff"
              borderRadius="2rem"
            />
          ) : (
            <a href={link} target="_blank" rel="noreferrer">
              <Button
                all="unset"
                py="1rem"
                px="2.5rem"
                bg="#1C2E3B"
                color="#ffffff"
                borderRadius="2rem"
              >
                {button}
              </Button>
            </a>
          )}
        </Article>
      ))}
    </Div>
    <Div display={['block', 'block', 'block', 'none']} mt="4rem">
      <Slider
        speed={500}
        arrows={false}
        slidesToShow={2}
        infinite={false}
        slidesToScroll={1}
      >
        {DATA.map(({ number, title, description, link, button }) => (
          <Article
            p="1rem"
            gap="1rem"
            bg="#FEF5C1"
            key={unikey()}
            height="17rem"
            borderRadius="1rem"
            flexDirection="column"
            alignItems="flex-start"
            display="flex !important"
            justifyContent="space-between"
            boxShadow="0.5rem 0 0 0 #EDCF4E"
            width="calc(100% - 2rem) !important"
          >
            <Div
              gap="0.75rem"
              display="flex"
              flexDirection="column"
              justifyContent="space-between"
            >
              <Span fontFamily="Sniglet">{number}</Span>
              <H3 fontSize={['1.15rem', '2.5rem']} letterSpacing="-6%">
                {title}
              </H3>
              <P fontFamily="Rubik">{description} </P>
            </Div>
            {button === 'Buy' ? (
              <BuyButton
                all="unset"
                py="1rem"
                px="1.5rem"
                bg="#1C2E3B"
                color="#ffffff"
                fontSize="0.75rem"
                borderRadius="2rem"
              />
            ) : (
              <a href={link} target="_blank" rel="noreferrer">
                <Button
                  all="unset"
                  py="1rem"
                  px="1.5rem"
                  bg="#1C2E3B"
                  color="#ffffff"
                  fontSize="0.75rem"
                  borderRadius="2rem"
                >
                  {button}
                </Button>
              </a>
            )}
          </Article>
        ))}
      </Slider>
    </Div>
  </>
);

export default HowToBuy;
