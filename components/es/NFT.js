import { Fade } from "react-awesome-reveal";

export default function Component() {
  return (
    <section>
      <div class="py-4 bg-gray-800 text-white grid place-items-center ">
        <div className="md:w-3/5 lg:w-2/5 pt-16 place-content-center">
          <div className="rounded-lg shadow-xl bg-white overflow-hidden">
            <div className="border-b-2">
              <div className="grid dark:border-gray-700 p-5">
                <h1 className="font-bold tracking-tight text-5xl sm:text-7xl leading-none sm:leading-none text-gray-700 flex items-center">
                  <span>
                    <span className="dark:text-white">
                      Meet{" "}
                      <span className="text-blue-900"> our team!</span>
                      <span className="text-gray-900"></span>
                    </span>
                    <span className="dark:text-white"></span>
                  </span>
                </h1>
              </div>
            </div>
          </div>
          <div className="rounded-lg shadow-xl bg-white mt-20 sm:mt-8 overflow-hidden">
            <div className=""></div>
          </div>
        </div>

        <div class="flex flex-wrap text-center md:text-center px-8 md:px-4 lg:px-8">
          
        <div class="my-4 px-9 w-1/2 md:w-1/5 lg:w-1/5" />
          <div class="my-4 px-9 w-1/2 md:w-1/5 lg:w-1/5">
            <div>
              <img
                class="border-4 border-blue-900 rounded-full transition duration-500 hover:border-white mx-auto md:mx-0 w-24 md:w-auto"
                src="https://pbs.twimg.com/profile_images/1502432648060305415/p-9PrVdB_400x400.jpg"
                alt="user-avatar"
              />
              <p class="text-lg mt-4 md:mt-8">
                <b>lozada.eth</b>
              </p>
              <p class="text-gray-100">Leader</p>
            </div>
          </div>


          <div class="my-4 px-9 w-1/2 md:w-1/5 lg:w-1/5">
            <div>
              <img
                class="border-4 border-blue-900 rounded-full transition duration-500 hover:border-white mx-auto md:mx-0 w-24 md:w-auto"
                src="https://pbs.twimg.com/profile_images/1487818339636461569/uXLgCaGh_400x400.jpg"
                alt="user-avatar"
              />
              <p class="text-lg mt-4 md:mt-8">
                <b>0xju4ncito</b>
              </p>
              <p class="text-gray-100">Community Manager</p>
            </div>
          </div>

          <div class="my-4 px-9 w-1/2 md:w-1/5 lg:w-1/5">
            <div>
              <img
                class="border-4 border-blue-900 rounded-full transition duration-500 hover:border-white mx-auto md:mx-0 w-24 md:w-auto"
                src="https://pbs.twimg.com/profile_images/1487818339636461569/uXLgCaGh_400x400.jpg"
                alt="user-avatar"
              />
              <p class="text-lg mt-4 md:mt-8">
                <b>JMZ</b>
              </p>
              <p class="text-gray-100">Artist</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
