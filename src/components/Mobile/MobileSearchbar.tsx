import { FC, useState } from 'react'
import { BsSearch } from 'react-icons/bs';
import { GrFormClose } from 'react-icons/gr';

interface MobileSearchbarProps {
  
}

const MobileSearchbar: FC<MobileSearchbarProps> = ({}) => {
  const [active, setActive] = useState<boolean>(false);

  const toggleSearchbar = () => {
    setActive(!active);
  }

  return (
    <div className={active ? 'active search-box' : 'search-box sm:hidden'}>
        <input className={active ? "active search-input" : "search-input"} type="text" name="search" id="search" placeholder='Search for a plant' />
        <div className={active ? 'active search-btn' : "search-btn"}  onClick={toggleSearchbar}>
            <BsSearch />
        </div>
    </div>
  )
}

export default MobileSearchbar