export default function Navbar() {
  return (
    <div
      className={
        'fixed w-full z-20 border-b-1 bg-green-300 bg-opacity-70 backdrop-filter backdrop-blur-lg hidden sm:block'
      }
    >
      <div className='max-w-7xl px-12'>
        <div className='flex justify-center items-center py-3 lg:justify-start lg:space-x-10'>
        <h1 className='font-bold tracking-tight text-3xl sm:text-4xl leading-none sm:leading-none text-gray-700 flex items-center'>
                      <span>
                        <span className='dark:text-white'>
                          Utopian Lemurs 
                        </span>
                      </span>
                    </h1>
          <div className='flex justify-between lg:w-0 lg:flex-1'>
            <a href='/es'>
              <span className='sr-only'>256cripto</span>
              <img
                className='h-14 md:h-16 w-auto dark:hidden'
                src='/images/sailor_pet.png'
                alt=''
                width={540}
                height={160}
              />
              <img
                className='h-14 md:h-16 w-auto hidden dark:block'
                src='/images/sailor_pet.png'
                alt=''
                width={540}
                height={160}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
