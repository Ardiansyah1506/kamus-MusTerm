import Model from "../components/model/model";
import PatologiButton from "../components/patologi/patologiButton";
import AnatomiButton from "../components/anatomiButton";
import TerminologiButton from "../components/terminologi/button";

const Page = () => {
  return (
    <>
    <div className="relative w-full min-h-screen sm:py-16 py-16">
      <div className="max-w-full h-max">
        <div className="flex flex-col md:flex-row justify-center items-center">
          <div className="w-3/4 md:mx-5 items-center sm:text-center md:flex md:flex-row-reverse flex-col justify-center py-15">
          <div class="text-left md:items-left md:flex md:justify-center md:w-full w-1/2 md:ml-0 ml-14">
              <Model />
            </div>
            <div className="flex flex-col sm:justify-center md:text-start lg:text-[20px] text-white md:items-start">
              <h1 className="text-3xl font-extrabold leading-none md:text-4xl xl:text-5xl dark:text-white">
                Kamus Digital <br />{" "}
                Terminologi Medis <br /> Sistem Muskoloskeletal
              </h1>

              <p className="font-light max-w-6xl text-gray-500 lg:mb-8 md:text-lg lg:text-xl">
                Sistem muskuloskeletal adalah sistem tubuh yang terdiri dari
                otot, tulang, sendi dan jaringan penghubung lainnya. Sistem ini
                berfungsi untk mendukung dan melindungi pergerakan, serta
                menjaga postur dan keseimbangan.
              </p>
              <div className="flex justify gap-x-4 md:gap-x-12 mt-4">
               <TerminologiButton/>
               <PatologiButton/>
              </div>
              <div className="flex w-full mt-4">
              <AnatomiButton/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Page;
