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
      <div className="fixed top-6 left-0 right-0 z-50 flex justify-center w-full px-4">
      <nav
        className="w-full max-w-5xl glass-pill px-6 py-3 flex items-center justify-between"
        {...props}
      >
        <div className="flex w-full items-center justify-between relative">
        
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
              } p-6 glass-card absolute top-14 mt-2 right-0 text-white min-w-[200px] z-50 rounded-2xl flex-col shadow-2xl`}
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
      </div>
    </>
  );
};

export default Navbar;
