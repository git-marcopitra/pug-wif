import { FC } from 'react';

import { Layout } from '@/components';
import About from '@/components/about';
import Hero from '@/components/hero';
import Liquidity from '@/components/liquidity';
import Pugnomics from '@/components/pugnomics';
import Utility from '@/components/utility';

const Home: FC = () => (
  <Layout>
    <Hero />
    <About />
    <Pugnomics />
    <Liquidity />
    <Utility />
  </Layout>
);

export default Home;
