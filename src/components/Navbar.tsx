import { useState, useEffect, FC } from 'react';
import { BiMenu } from 'react-icons/bi';
import { IoMdClose } from 'react-icons/io';
import { logo } from '../assets';
import { navLinks } from '../constants';

const Navbar:FC = () => {
  const [search, setSearch] = useState("");
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [navToggle, setNavToggle] = useState(false)

  useEffect(() => {
      window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
          setNavToggle(false);
        } else {
          setNavToggle(true);
        }
        return () => {
          window.removeEventListener('scroll', {});
        };
      }
      );
  }, []);


  return (
    <nav className={`${navToggle ? "nav-gradient" : "bg-black"} px-10 py-4 w-full sticky top-0 z-20`}>
      <div className="w-full flex justify-between items-center">
        <div className="w-full">
          <a href="#home" className="flex items-center gap-4">
            <img src={logo} alt="logo" className="w-12 h-12 object-contain" />
            <p className="text-white text-[18px] font-bold cursor-pointer">
              Plants House
            </p>
          </a>
        </div>
        <div className="w-full hidden sm:block">
          <input
            type="text"
            name="search"
            value={search}
            placeholder="Search for a plant"
            onChange={(e) => setSearch(e.target.value)}
            className="px-2 py-2 w-full border-none outline-none rounded-md md:w-[300px]"
          />
        </div>
        <ul className="hidden md:flex gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-white" : "text-lime-500"
              } hover:text-white text-[16px] font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>

        {/* mobile device */}
        <div className="block ml-6 md:hidden">
          {!toggle ? (
            <BiMenu
              className="text-white text-3xl"
              onClick={() => setToggle(!toggle)}
            />
          ) : (
            <IoMdClose
              className="text-white text-3xl"
              onClick={() => setToggle(!toggle)}
            />
          )}
          <div className={`${toggle ? 'block' : 'hidden'} p-6 black-gradient absolute top-15 right-10 mx-4 my-2 min-w[140px] z-10 rounded-xl rounded-tr-sm`}>
            <ul className="list-none flex justify-end items-start flex-col gap-4 ">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? "text-white" : "text-lime-500"
                  } hover:text-white text-[16px] font-medium cursor-pointer`}
                  onClick={() => setActive(link.title)}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar