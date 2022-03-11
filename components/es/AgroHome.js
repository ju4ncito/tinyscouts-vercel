import { Fade } from 'react-awesome-reveal';

export default function Component() {
  return (
    <div className='relative'>
      <div className='bg-gray-100 relative shadow-md sm:overflow-hidden'>
        <Fade>
          <div className='relative pt-4 pb-16 max-w-7xl mx-auto md:flex md:items-center md:justify-between sm:px-4'>
            <img
              className='sm:hidden h-80 w-50 py-7'
              width={600}
              height={600}
              src='/images/tarjeta-agro-simple.svg'
              alt=''
            />
            <div className='md:w-3/5 lg:w-2/5'>
              <div className='rounded-lg shadow-xl bg-white overflow-hidden'>
                <div className='border-b-2'>
                  <div className='grid dark:border-gray-700 p-4'>
                    <h1 className='font-bold tracking-tight text-3xl sm:text-5xl leading-none sm:leading-none text-gray-700 flex items-center'>
                      <span>
                        <span className='dark:text-white'>
                          Sumate a la{' '}
                          <span className='text-lime-700'>
                            {' '}
                            revolución financiera
                          </span>{' '}
                          del <span className='text-lime-700'>agro</span>
                        </span>
                        <span className='dark:text-white'>!</span>
                      </span>
                    </h1>
                  </div>
                </div>
                <div className='p-4'>
                  <p className='text-gray-800 dark:text-white text-md leading-none sm:max-w-lg sm:leading-none sm:text-lg tracking-tight mb-3'>
                    Las finanzas del agro en tu bolsillo.
                  </p>
                  <p className='text-gray-800 dark:text-white text-md leading-none sm:max-w-lg sm:leading-none sm:text-lg tracking-tight'>
                    Combinamos los beneficios de las tecnologías fintech y
                    cripto para que cada productor pueda ahorrar, financiarse,
                    invertir y ganar. Trabajamos codo a codo con el agro
                    argentino. Acompañando, impulsando y eficientizando al
                    sector más productivo del país.
                  </p>
                </div>
              </div>
              <div className='rounded-lg shadow-xl bg-white mt-20 sm:mt-8 overflow-hidden'>
                <div className=''></div>
              </div>
            </div>
            <div className='md:w-2/6'>
              <img
                className='hidden sm:block mx-auto sm:mt-0 sm:pr-20'
                width={800}
                height={850}
                src='/images/tarjeta-agro-simple.svg'
                alt=''
              />
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
}
