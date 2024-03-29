import { useState, useEffect, FC, FormEvent } from "react";
import { logo } from "../../assets";
import { BsSearch } from "react-icons/bs";
import MobileSearchbar from "../Mobile/MobileSearchbar";
import { useCategories } from "../../hooks/useCategories";
import { Link, useNavigate } from "react-router-dom";

const Navbar: FC = () => {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState<string>("");
  const [navToggle, setNavToggle] = useState<boolean>(false);
  const { data } = useCategories();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setNavToggle(false);
      } else {
        setNavToggle(true);
      }
      return () => {
        window.removeEventListener("scroll", () => {});
      };
    });
  }, []);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (selectedOption !== "") {
      navigate(`/categories/${selectedOption}`);
    }
  };

  return (
    <nav
      className={`${
        navToggle ? "nav-gradient" : "bg-secondaryBg"
      } px-10 py-4 w-full sticky top-0 z-20`}
    >
      <div className="w-full flex justify-between items-center gap-4">
        {/* LOGO */}
        <Link to="/">
          <div className="w-full">
            <a href="#home" className="flex items-center gap-4">
              <img src={logo} alt="logo" className="w-12 h-12 object-contain" />
              <p className="text-textPrimary text-[18px] font-bold cursor-pointer hidden sm:block">
                Plants House
              </p>
            </a>
          </div>
        </Link>

        {/* DESKTOP SEARCHBAR */}
        <div className="max-w-lg w-full hidden sm:block relative">
          <select
            name="search"
            value={selectedOption}
            placeholder="Search for a plant"
            onChange={(e) => setSelectedOption(e.target.value)}
            className="text-textPrimary px-2 py-2 w-full border-2 border-textPrimary outline-none rounded-md appearance-none"
          >
            <option value="" disabled>
              Selecciona una categoria
            </option>
            {data?.map((option) => (
              <option key={option.Category} value={option.Category}>
                {option.Category}
              </option>
            ))}
          </select>
          <button type="submit" onClick={(e) => handleSubmit(e)}>
            <BsSearch className="text-textPrimary absolute right-4 top-[10px] text-xl" />
          </button>
        </div>

        {/* MOBILE SEARCHBAR */}
        <MobileSearchbar
          data={data}
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
          navigate={navigate}
        />
      </div>
    </nav>
  );
};

export default Navbar;
