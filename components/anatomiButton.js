import Link from "next/link";

const AnatomiButton = () => {
  return (
    <>
      <Link
        href="/anatomi"
        className="relative min-w-[120px] inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
      >
        <span className="w-full relative md:px-5 py-2.5 text-center  transition-all ease-in duration-75  bg-hero rounded-md group-hover:bg-opacity-0">
          Anatomi
        </span>
      </Link>
    </>
  );
};

export default AnatomiButton;
