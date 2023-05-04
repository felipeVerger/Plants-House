import { FC, useState, Dispatch, SetStateAction } from 'react'
import { BsSearch } from 'react-icons/bs';
import { GrFormClose } from 'react-icons/gr';
import { CategoryType } from '../../types/api';
import { NavigateFunction } from 'react-router-dom';

interface MobileSearchbarProps {
  data: CategoryType[] | undefined,
  selectedOption: string,
  setSelectedOption: Dispatch<SetStateAction<string>>,
  navigate: NavigateFunction
}

const MobileSearchbar: FC<MobileSearchbarProps> = ({ data, selectedOption, setSelectedOption, navigate }) => {
  const [active, setActive] = useState<boolean>(false);

  const toggleSearchbar = () => {
    setActive(!active);
    if (selectedOption !== "") {
      navigate(`/categories/${selectedOption}`)
    }
  }

  return (
    <div className={active ? 'active search-box' : 'search-box sm:hidden'}>
        <select 
          className={active ? "active search-input" : "search-input"} 
          name="search" 
          id="search" 
          placeholder='Search for a plant'
          value={selectedOption}
          onChange={(e) => setSelectedOption(e.target.value)}
        >
          <option value="" disabled>Selecciona una categoria</option>
          {data?.map((option) => (
            <option key={option.Category} value={option.Category}>{option.Category}</option>
          ))}
        </select>
        <button className={active ? 'active search-btn' : "search-btn"}  onClick={toggleSearchbar}>
            <BsSearch />
        </button>
    </div>
  )
}

export default MobileSearchbar