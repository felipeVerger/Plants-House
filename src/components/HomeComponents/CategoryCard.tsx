import { FC } from 'react'
import Tilt from "react-tilt";
import { Link } from "react-router-dom";
import { CategoryType } from '../../types/api';

interface CategoryCardProps {
    category: CategoryType,
    setPhotoForCategory: (category: string) => string | undefined
}

const CategoryCard:FC<CategoryCardProps> = ({ category, setPhotoForCategory }) => {
  return (
    <Tilt
      options={{
        max: 45,
        scale: 1,
        speed: 450,
      }}
      key={category.Category}
    >
      <Link to={`/categories/${category.Category}`}>
        <div className="w-64 h-64 relative black-gradient rounded-lg shadow-md shadow-black cursor-pointer">
          <img
            src={setPhotoForCategory(category.Category)}
            alt="photo"
            className="w-full h-full object-cover rounded-lg black-gradient opacity-50"
          />
          <span className="absolute bottom-3 left-3 text-white text-[24px] font-semibold">
            {category.Category}
          </span>
        </div>
      </Link>
    </Tilt>
  );
}

export default CategoryCard