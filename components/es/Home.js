import { Fade } from "react-awesome-reveal";


export default function Component() {
  return (
    <div className="relative h-screen pt-16" style={{
      backgroundImage:
        "url(" + "https://wallpaperaccess.com/full/1347872.jpg" + ")",
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
    }}>
      <div
        className=""
        
      >
        <Fade>
          <div className="relative pt-16 pb-16 max-w-7xl mx-auto md:flex md:items-center md:justify-between sm:px-4">
            <img
              className="sm:hidden w-full py-16"
              width={600}
              height={600}
              src="/images/sailor_pet.png"
              alt=""
            />
            <div className="md:w-3/5 lg:w-2/5 pt-">
              <div className="rounded-lg shadow-xl bg-gray-300 overflow-hidden">
                  <div className=" dark:border-gray-700 p-3">
                    <h1 className="font-bold tracking-tight text-3xl sm:text-5xl leading-none text-center sm:leading-none text-gray-800 flex items-center">
                      <span>
                        <span className="dark:text-white ">
                          Welcome to the Tiny Scouts NFT official website!
                        </span>
                      </span>
                    </h1>
                </div>
              </div>
            </div>
            <div className="md:w-3/5">
              <img
                className="hidden sm:block w-full p-4 mt-12 sm:mt-0 sm:pl-20"
                width={800}
                height={850}
                src="/images/epicccc.png"
                alt=""
              />
              <img
                className="w-full p-4 mt-12 sm:hidden"
                width={800}
                height={400}
                src="/images/sailor_pet.png"
                alt=""
              />
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
}
