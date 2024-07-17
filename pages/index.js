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
          <div className="w-3/4 md:mx-5 items-center sm:text-center md:flex md:flex-row-reverse flex-col justify-center">
          <div class="text-left md:items-left md:flex md:justify-center md:w-full w-1/2 md:ml-0 ml-14">
              <Model />
            </div>
            <div className="flex tracking-wide flex-col sm:justify-center gap-10 md:text-start lg:text-[20px] text-white md:items-start">
              <h1 className="text-3xl font-extrabold  md:text-4xl xl:text-5xl dark:text-white">
                Kamus Digital <br />{" "}
                Terminologi Medis <br /> Sistem Muskoloskeletal
              </h1>

              <p className="font-semibold max-w-6xl text-gray-200 md:text-lg lg:text-xl">
                Sistem muskuloskeletal adalah sistem tubuh yang terdiri dari
                otot, tulang, sendi dan jaringan penghubung lainnya. Sistem ini
                berfungsi untk mendukung dan melindungi pergerakan, serta
                menjaga postur dan keseimbangan.
              </p>
              <div class="flex flex-col gap-5 mt-3">
                <div className="flex justify md:gap-x-12">
                 <TerminologiButton/>
                 <PatologiButton/>
                </div>
                <div className="flex w-full">
                <AnatomiButton/>
                </div>
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
