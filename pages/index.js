import Head from 'next/head';

import Footer from '../components/es/navigation/Footer';

import Home from '../components/es/Home';
import NFT from '../components/es/NFT';
import Roadmap from '../components/es/Roadmap';

export default function Page() {
  return (
    <>
      <Head>
        <title>Utopian Lemurs</title>
      </Head>
      <main className='overflow-hidden'>
        <div className='' />
        <Home />
        <Roadmap />
        <NFT/>
        {/* <BusinessDescription /> */}
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
