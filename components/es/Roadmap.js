import { Fade } from 'react-awesome-reveal';

export default function Component() {
  return (
    <div className="relative h-screen pt-16 bg-gray-700 overflow-hidden">
    
      <div className='relative sm:overflow-hidden'>
        <Fade>
          <div className='relative pt-4 pb-16 max-w-7xl mx-auto md:flex md:items-center md:justify-between sm:px-4'>
            <div className='md:w-2/6'>
              <img
                className='hidden sm:block mx-auto sm:mt-0 sm:pl-20'
                width={800}
                height={850}
                src='/images/lemur1.png'
                alt=''
              />
              <img
                className='sm:hidden h-80 w-50 py-7'
                width={600}
                height={600}
                src='/images/business-card.svg'
                alt=''
              />
            </div>

            <div className='md:w-3/5 lg:w-2/5 pt-16'>
              <div className='rounded-lg shadow-xl bg-white overflow-hidden'>
                <div className='border-b-2'>
                  <div className='grid dark:border-gray-700 p-5'>
                    <h1 className='font-bold tracking-tight text-5xl sm:text-7xl leading-none sm:leading-none text-gray-700 flex items-center'>
                      <span>
                        <span className='dark:text-white'>
                          Get to know{' '}
                          <span className='text-black'>
                            {' '}
                            our roadmap!
                          </span>
                         <span className='text-gray-900'></span>
                        </span>
                        <span className='dark:text-white'></span>
                      </span>
                    </h1>
                  </div>
                </div>
                
              </div>
              <div className='rounded-lg shadow-xl bg-white mt-20 sm:mt-8 overflow-hidden'>
                <div className=''></div>
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
}
