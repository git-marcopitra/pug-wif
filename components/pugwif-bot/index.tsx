import { A, Aside, Button, H2, H3, Img, P, Section } from '@stylin.js/elements';
import { FC } from 'react';

const PugwifBot: FC = () => (
  <Section
    my="6rem"
    mx="auto"
    id="about"
    gap="2rem"
    display="grid"
    maxWidth="90rem"
    px={['3rem', '6rem']}
    justifyContent="space-evenly"
    alignItems={['flex-start', 'center']}
    gridTemplateColumns={['1fr', '1fr', '1fr', '4fr 1fr']}
    flexDirection={['column', 'column', 'column', 'row']}
  >
    <Aside
      gap="1rem"
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
    >
      <H2 fontSize={['2rem', '2rem', '3rem']}>PUGWIF BOT</H2>
      <P
        fontFamily="Rubik"
        fontSize={['1.5rem', '1.5rem', '1.8rem']}
        lineHeight={['2.2rem', '2.2rem', '3rem']}
      >
        The most complete TG trading bot on Sui, @PugWifBot combines speed,
        customization, and features like multi-wallet support, autobuy, built-in
        bridges, RugCheck by @insidex_trade, DexScreener insights, PnL cards,
        transparent fees, straightforward referrals, and private or custom RPCs
        to redefine your trading experience.
      </P>
      <H3 fontSize={['1.25rem', '2rem', '2rem']}>THE HAT STAYS ON THE BOT!</H3>
    </Aside>
    <Aside mx="auto">
      <Img alt="The Hat" src="pugwif-bot.webp" height={['20rem', '25rem']} />
    </Aside>
    <A
      target="_blank"
      rel="noreferrer"
      href="https://t.me/PWifBot?start=PugWifT120ZD"
    >
      <Button
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
        width={['100%', '100%', '100%', 'auto']}
      >
        Start trading
      </Button>
    </A>
  </Section>
);

export default PugwifBot;
