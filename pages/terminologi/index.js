import {CardList} from "../../components/terminologi/Card";

const Terminologi = () => {
  return (
    <>
      <div className="relative w-full min-h-screen py-16 md:py-28">
        <div className="w-full h-max">
          <div className="flex w-full flex-col justify-center items-center gap-10">
          <h1 className="font-bold text-white text-3xl md:text-4xl text-center w-full md:w-1/2">
          Kamus Terminologi Medis Sistem Muskuloskeletal
        </h1>
            <div>
              <CardList/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Terminologi;
