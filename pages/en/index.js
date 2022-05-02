import Head from 'next/head';
import Favicons from '../../components/Favicons';
import Navbar from '../../components/es/navigation/NavBar';
import Footer from '../../components/es/navigation/Footer';
import Fondo from '../../components/es/navigation/Fondo';

export default function Home() {
  return (
    <>
      <Head>
        <title>Dreamurs</title>
        <Favicons />
      </Head>
      
      <header>
        <Navbar />
      </header>
     
      <main className='Amx-auto grid h-screen min-h-full  bg-gradient-to-tr from-red-500 to-yellow-500 items-center justify-center'>
      

        <span className='sr-only'>Dreamurs</span>
        <img className='w-80 rounded-3xl' src='/images/LogoComing  Soon-03.svg' alt='' />
        
      </main>


      
      {/* <footer>
        <Footer />
      </footer> */}
    </>
  );
}
