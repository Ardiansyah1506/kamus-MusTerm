import { useState, useEffect } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { IoClose } from "react-icons/io5";
import Link from "next/link";
import Image from "next/image";

const Navbar = (props) => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <nav
        className="w-full fixed px-6 z-20 py-3 sm:px-6 inset-x-0 top-0 justify-between flex items-center"
        {...props}
      >
        <div className="flex w-full items-center justify-between">
        
        <div className="flex items-center justify-center">
      <Link href="/">
        <div className="flex items-center">
          <Image src="/assets/image/logo.png" width={50} height={60} alt="Logo" />
          <h1 className="text-blue-500 text-xl font-bold ml-2">MusTerm</h1>
        </div>
      </Link>
    </div>
          <ul className="list-none hidden md:flex justify-end text-white items-start gap-4">
                <li
                  className={`${
                    active === "Home" ? "text-white" : "text-secondary"
                  } font-poppins text-[16px] font-medium cursor-pointer`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive("Home");
                  }}
                >
                  <Link href="/">Home</Link>
                </li>
                <li
                  className={`${
                    active === "About" ? "text-white" : "text-secondary"
                  } font-poppins text-[16px] font-medium cursor-pointer`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive("About");
                  }}
                >
                  <Link href="/anatomi">Anatomi</Link>
                </li>
                <li
                  className={`${
                    active === "Team" ? "text-white" : "text-secondary"
                  } font-poppins text-[16px] font-medium cursor-pointer`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive("team");
                  }}
                >
                  <Link href="/terminologi">Terminologi</Link>
                </li>
                <li
                  className={`${
                    active === "Services" ? "text-white" : "text-secondary"
                  } font-poppins text-[16px] font-medium cursor-pointer`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive("Services");
                  }}
                >
                  <Link href="/patologi">Patologi</Link>
                </li>
                <li
                  className={`${
                    active === "Contact" ? "text-white" : "text-secondary"
                  } font-poppins text-[16px] font-medium cursor-pointer`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive("Contact");
                  }}
                >
                </li>
              </ul>
          <div className="flex md:hidden">
            <div className="cursor-pointer text-white" onClick={() => setToggle(!toggle)}>
              {toggle ? (
                <IoClose className=" w-8 h-8 cursor-pointer" />
              ) : (
                <BiMenuAltRight className=" w-8 h-8 cursor-pointer" />
              )}
            </div>

            <div
              className={`${
                !toggle ? "hidden" : "flex"
              } p-6 bg-slate-800 absolute top-16 right-0 mx-6 text-white my-1 min-w-[140px] z-10 rounded-xl`}
            >
              <ul className="list-none flex justify-end items-start flex-col gap-4">
                <li
                  className={`${
                    active === "Home" ? "text-white" : "text-secondary"
                  } font-poppins text-[16px] font-medium cursor-pointer`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive("Home");
                  }}
                >
                  <Link href="/">Home</Link>
                </li>
                <li
                  className={`${
                    active === "About" ? "text-white" : "text-secondary"
                  } font-poppins text-[16px] font-medium cursor-pointer`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive("About");
                  }}
                >
                  <Link href="/anatomi">Anatomi</Link>
                </li>
                <li
                  className={`${
                    active === "Team" ? "text-white" : "text-secondary"
                  } font-poppins text-[16px] font-medium cursor-pointer`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive("team");
                  }}
                >
                  <Link href="/terminologi">Terminologi</Link>
                </li>
                <li
                  className={`${
                    active === "Services" ? "text-white" : "text-secondary"
                  } font-poppins text-[16px] font-medium cursor-pointer`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive("Services");
                  }}
                >
                  <Link href="/patologi">Patologi</Link>
                </li>
                <li
                  className={`${
                    active === "Contact" ? "text-white" : "text-secondary"
                  } font-poppins text-[16px] font-medium cursor-pointer`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive("Contact");
                  }}
                >
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
