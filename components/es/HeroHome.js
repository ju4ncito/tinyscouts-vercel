import { Fade } from 'react-awesome-reveal';
import Subscribe from './Subscribe';


export default function Component() {
  return (
    <div className='relative' >
      <div className='bg-gray-100 relative shadow-md sm:overflow-hidden' style={{backgroundImage: "url(" + "https://i.ibb.co/QpCbnGC/fondoaaa.png" + ")",
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat'}}>
        <Fade>
          <div className='relative pt-4 pb-16 max-w-7xl mx-auto md:flex md:items-center md:justify-between sm:px-4' >
            <img
              className='sm:hidden w-full py-16'
              width={600}
              height={600}
              src='/images/sailor_pet.png'
              alt=''
            />
            <div className='md:w-3/5 lg:w-2/5'>
              <div className='rounded-lg shadow-xl bg-white overflow-hidden'>
                <div className='border-b-2'>

                  <div className='grid dark:border-gray-700 p-4'>
                    <h1 className='font-bold tracking-tight text-3xl sm:text-5xl leading-none sm:leading-none text-gray-700 flex items-center'>
                      <span>
                        <span className='dark:text-white'>
                          Welcome to the Utopian Lemurs NFT official website!
                        </span>
                        <span className='text-purple-100'>.</span>
                      </span>
                    </h1>
                  </div>
                </div>
              </div>
            </div>
            <div className='md:w-3/5'>
              <img
                className='hidden sm:block w-full p-4 mt-12 sm:mt-0 sm:pl-20'
                width={800}
                height={850}
                src='/images/epicccc.png'
                alt=''
              />
              <img
                className='w-full p-4 mt-12 sm:hidden'
                width={800}
                height={400}
                src='/images/sailor_pet.png'
                alt=''
              />
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
}
