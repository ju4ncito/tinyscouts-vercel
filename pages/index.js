import Head from 'next/head';

import Navbar from '../components/es/navigation/Navbar';
import Footer from '../components/es/navigation/Footer';

import HeroHome from '../components/es/HeroHome';
import NFT from '../components/es/NFT';
import Feature from '../components/es/Feature';

import AgroHome from '../components/es/AgroHome';
import BusinessHome from '../components/es/BusinessHome';

export default function Page() {
  return (
    <>
      <Head>
        <title>Utopian Lemurs</title>
      </Head>
      <header>
        <Navbar />
      </header>
      <main className='overflow-hidden'>
        <div className='hidden sm:block mt-20' />
        <HeroHome />
        <Feature />
        <NFT />
        <AgroHome />
        {/* <AgroDescription /> */}
        <BusinessHome />
        {/* <BusinessDescription /> */}
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
