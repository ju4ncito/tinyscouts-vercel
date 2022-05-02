export default function Footer() {
    return (
      <footer
        className='bg-gray-50 dark:bg-black border-t-2'
        aria-labelledby='footerHeading'
      >
        <h2 id='footerHeading' className='sr-only'>
          Footer
        </h2>
        <div className='max-w-7xl mx-auto py-2 px-4'>
          <div className='border-black dark:border-white flex items-center justify-between '>
            <p className='my-8 text-base text-gray-600 dark:text-white leading-tight'>
              Dreamurs Collection &copy; 
              <br />
              <span className='hidden sm:inline-block'>All Rights Reserved.</span>
            </p>
            <a
              target='_blank'
              rel='noopener noreferrer'
            >
            </a>
          </div>
        </div>
      </footer>
    );
  }
  