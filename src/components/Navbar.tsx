import { useState, useEffect, FC } from 'react';
import { logo } from '../assets';
import { FcSearch } from 'react-icons/fc';

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
        <div className="max-w-lg w-full hidden sm:block relative">
          <input
            type="text"
            name="search"
            value={search}
            placeholder="Search for a plant"
            onChange={(e) => setSearch(e.target.value)}
            className="px-2 py-2 w-full border-none outline-none rounded-md"
          />
          <FcSearch className='absolute right-4 top-[10px] text-xl'/>
        </div>
      </div>
    </nav>
  );
}

export default Navbar