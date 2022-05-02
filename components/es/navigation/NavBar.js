export default function Navbar() {
    return (
      <div
        className={
          'fixed w-full z-20 border-b-1  backdrop-filter backdrop-blur-lg  sm:block'
        }
      >
        <div className='max-w-auto mx-auto px-4'>
          <div className='flex justify-center items-center py-3 lg:justify-end lg:space-x-8 px-4'>
            <div className='flex justify-between lg:w-0 lg:flex-1'>
              <a href='/es'>
                <span className='sr-only'>Dreamurs</span>
                {/* <img
                  className='h-14 md:h-16 w-auto hidden dark:block'
                  src='/images/Logo-01.png'
                  alt=''
                  width={540}
                  height={160}
                /> */}
                </a>
            </div>
            <a href='https://instagram.com/dreamursnft?utm_medium=copy_link'>
                <img
                  className='h-6 md:h-8 w-auto  dark:block px-2'
                  src='/images/instagram.svg'
                  alt=''
                  width={540}
                  height={160}
                />
            </a>
            <a href='https://twitter.com/dreamursNFT'>
                <img
                  className='h-6 md:h-8 w-auto  dark:block px-2'
                  src='/images/twitter.svg'
                  alt=''
                  width={540}
                  height={160}
                />
            </a>
            <a href='https://discord.gg/w77yQ6QDPp'>
                <img
                  className='h-6 md:h-9 w-auto  dark:block px-2'
                  src='/images/discord.svg'
                  alt=''
                  width={540}
                  height={160}
                />
                </a>
            
          </div>
        </div>
      </div>
    );
  }
  
