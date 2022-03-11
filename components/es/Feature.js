import { Fade } from 'react-awesome-reveal';

export default function Example() {
  return (
    <div className='relative py-16 overflow-hidden'>
      <div className='relative pb-16'>
        <Fade>
          <div className='lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24 items-center'>
            <div className='px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0'>
              <div>
                <div className=''>
                  <h1 className='font-bold tracking-tight text-3xl sm:text-5xl leading-none sm:leading-none text-gray-800 flex items-center'>
                    <span>
                      <span className='dark:text-white'>
                        Ahorrá y disfrutá!
                      </span>
                    </span>
                  </h1>
                  <p className='mt-4 text-lg text-gray-800 leading-tight'>
                    Ahorrá en dólar cripto y disfrutá con tu Tarjeta Mastercard
                    en más de 40 millones de comercios adheridos a lo largo de
                    Argentina y el Mundo. Con cashback: Te reintegramos el 2% de
                    la compra en Bitcoin.
                  </p>
                </div>
              </div>
            </div>
            <div className='mt-12 sm:mt-16 lg:mt-0 px-4'>
              <img
                className='w-full'
                width={800}
                height={800}
                src='/images/card-1.svg'
              />
            </div>
          </div>
        </Fade>
      </div>
      <div className='pt-24 sm:pt-0 pb-12 bg-gray-100'>
        <Fade>
          <div className='lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24 items-center'>
            <div className='px-4 max-w-xl mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2'>
              <div>
                <div className=''>
                  <h1 className='font-bold tracking-tight text-3xl sm:text-5xl leading-none sm:leading-none text-gray-800 flex items-center'>
                    <span>
                      <span className='dark:text-white'>Invertí y ganá!</span>
                    </span>
                  </h1>
                  <p className='mt-4 text-lg text-gray-800 leading-tight'>
                    Las Finanzas Descentralizadas a solo un click. Con DeFi
                    accedé a retornos de hasta 15% (*) en DAI al año.
                  </p>
                </div>
              </div>
              <div className='mt-8 border-t border-gray-200 pt-6'>
                <blockquote>
                  <div>
                    <p className='text-sm text-gray-500 leading-none tracking-tight'>
                      (*) 256cripto no garantiza ningún retorno asegurado.
                      Tampoco intermedia o comercializa ningún producto
                      financiero. Las finanzas descentralizadas son protocolos
                      experimentales con un riesgo inherente. Las inversiones
                      son hechas directamente por cada usuario, asumiendo el
                      riesgo correspondiente.
                    </p>
                  </div>
                </blockquote>
              </div>
            </div>
            <div className='mt-12 sm:mt-16 lg:mt-0 items-center flex px-4'>
              <img
                className='w-full '
                width={800}
                height={800}
                src='/images/coins.svg'
              />
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
}
