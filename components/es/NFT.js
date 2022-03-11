import { Fade } from 'react-awesome-reveal';

export default function Component() {
  return (
    <div className='relative pb-20'>
      <Fade>
        <div className='relative max-w-7xl mx-auto px-4'>
          <div className='bg-gradient-to-r from-purple-200 to-orange-700 rounded-lg shadow-xl lg:grid lg:grid-cols-2 lg:gap-4 items-center'>
            <div className='pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20'>
              <div className='lg:self-center'>
                <h2 className='text-3xl font-extrabold text-white sm:text-4xl'>
                  <span className='block leading-none'>Un NFT gratis</span>
                  <span className='block text-white leading-none'>
                    a los primeros 10,000
                  </span>
                </h2>
                <p className='mt-4 text-lg leading-tight text-white'>
                  Un NFT gratuito a los primeros 10k usuarios, no te pierdas la
                  ola y ganale a la inflación.
                </p>
              </div>
            </div>
            <div className=''>
              <img className='rounded-md' src='/images/nft.jpg' />
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
}
