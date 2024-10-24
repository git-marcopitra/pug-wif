import { A, Div, Footer as Foot, H3, Img } from '@stylin.js/elements';
import { FC } from 'react';

const Footer: FC = () => (
  <Foot
    mx="auto"
    py="3rem"
    px="1rem"
    display="grid"
    maxWidth="1440px"
    gridTemplateColumns={['1fr', '1fr', '15rem auto']}
  >
    <Div mt={['-6rem', '-6rem', 'unset']} textAlign="center">
      <Img
        src="/logo.webp"
        alt="$PUGWIF logo"
        borderRadius="4rem"
        width={['8rem', '6.25rem']}
        height={['8rem', '6.25rem']}
        border="0.35rem solid #ffffff"
      />
      <H3 fontSize="1.5rem" color="#1C2E3B" display={['none', 'none', 'block']}>
        PUGWIFHAT
      </H3>
      <H3
        fontSize="1.5rem"
        color="#1C2E3B"
        display={['block', 'block', 'none']}
      >
        The hat stays on
      </H3>
    </Div>
    <Div display="flex" flexDirection="column" gap="1rem" mt={['3rem']}>
      <H3 fontSize="2.5rem" color="#1C2E3B">
        Relevant Links
      </H3>
      <Div
        display="grid"
        rowGap={['1rem', '3rem']}
        gridTemplateColumns={['1fr', '1fr 1fr', '1fr 1fr 1fr 1fr']}
      >
        <A
          href="https://dexscreener.com/sui/0xd7b55da72dca913b072a0e2842b44dbce68d9d88cc9b0626b1262659ce060c46"
          fontFamily="Rubik"
          target="_blank"
          rel="noreferrer"
          fontSize={['1.2rem', '1.8rem']}
        >
          Dexscreener
        </A>
        <A
          href="https://birdeye.so/token/0x2cd6f14a4b64c3a0fa9c644e8ed88d9c91d789a071886d67d24e6b435147063d::pugwif::PUGWIF?chain=sui"
          fontFamily="Rubik"
          target="_blank"
          rel="noreferrer"
          fontSize={['1.2rem', '1.8rem']}
        >
          BirdEYE
        </A>
        <A
          href="https://www.geckoterminal.com/sui-network/pools/0x964b391c0255120984000735d381d62fe4608e5330ddd15042e41ad3fdab5f24?utm_source=coingecko&utm_medium=referral&utm_campaign=searchresults"
          fontFamily="Rubik"
          target="_blank"
          rel="noreferrer"
          fontSize={['1.2rem', '1.8rem']}
        >
          CoinGecko
        </A>
        <A
          href="https://coinmarketcap.com/currencies/pugwifhat/"
          fontFamily="Rubik"
          target="_blank"
          rel="noreferrer"
          fontSize={['1.2rem', '1.8rem']}
        >
          Coin Market Cap
        </A>
        <A
          href="https://simpleswap.io/exchange?from=&to=sui"
          fontFamily="Rubik"
          target="_blank"
          rel="noreferrer"
          fontSize={['1.2rem', '1.8rem']}
        >
          SimpleSwap
        </A>
        <A
          href="https://changenow.io/exchange?from=&to=sui"
          fontFamily="Rubik"
          target="_blank"
          rel="noreferrer"
          fontSize={['1.2rem', '1.8rem']}
        >
          ChangeNow
        </A>
        <A
          target="_blank"
          rel="noreferrer"
          fontFamily="Rubik"
          fontSize={['1.2rem', '1.8rem']}
          gridColumn={['unset', 'span 2']}
          href="https://www.amazon.com/s?rh=n%3A7141123011%2Cp_4%3APUG+WIF+SUI"
        >
          PUGWIF Merch Store
        </A>
      </Div>
    </Div>
  </Foot>
);

export default Footer;
