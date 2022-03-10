import Link from 'next/link';

export const Navbar = () => {
  return (
    <>
      <nav class="flex items-center justify-between flex-wrap bg-teal-500 p-6">
  <div class="flex items-center flex-shrink-0 text-white mr-6">
    <h2 class="font-semibold text-xl tracking-tight">Tiny Scouts NFT</h2>
  </div>
  <div class="block lg:hidden">
    <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
      <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
    </button>
  </div>
  <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
    <div class="text-sm lg:flex-grow">
      <a href="/team" class="block mt-4 lg:inline-block lg:mt-0 text-teal-100 hover:text-white mr-4">
        Team
      </a>
      <a href="/roadmap" class="block mt-4 lg:inline-block lg:mt-0 text-teal-100 hover:text-white mr-4">
        Roadmap
      </a>
    </div>
    <div>
      <a href="https://discord.gg/mtPzKtNAM9" class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Join our Discord!</a>
    </div>
  </div>
</nav>
    </>
  );
};