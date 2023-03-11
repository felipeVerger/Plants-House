import {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import Tilt from 'react-tilt';
import { aglaonema, anthurium, aralia, bromelia, cactus, dieffenbachia, dracaena, fern, ficus, flower, foliage, grass, groundcover, hanging, palm, philodendron, plantCategory, sansevieria, schefflera, spathiphyllum, topiairy } from '../assets'
import { getAllCategories } from '../service';
import { CategoryType } from '../types/types';
import Loader from './Loader';

const Category = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getAllCategories()
      .then((data) => setCategories(data))
      .catch((error) => console.log(error));
    setLoading(false);
  }, []);


  const setPhotoForCategory = (category: string) => {
    switch (category) {
      case "Dracaena":
        return dracaena
      case "Palm":
        return palm
      case "Anthurium":
        return anthurium
      case "Other":
        return anthurium
      case "Aglaonema":
        return aglaonema
      case "Hanging":
        return hanging
      case "Bromeliad":
        return bromelia
      case "Spathiphyllum":
        return spathiphyllum
      case "Flower":
        return flower
      case "Aralia":
        return aralia
      case "Ficus":
        return ficus
      case "Sansevieria":
        return sansevieria
      case "Foliage plant":
        return foliage
      case "Dieffenbachia":
        return dieffenbachia
      case "Philodendron":
        return philodendron
      case "Cactus & Succulent":
        return cactus
      case "Schefflera":
        return schefflera
      case "Topiairy":
        return topiairy
      case "Fern":
        return fern
      case "Grass":
        return grass
      case "Ground Cover":
        return groundcover
      default:
        break;
    }
  }

  return (
    <section className='w-full mt-32 px-28'>
        <div className='w-full flex justify-between items-center gap-24'>
          <div className='flex flex-col gap-4'>
            <h2 className='text-lime-700 font-bold text-[32px]'>Explore the Diverse Categories of Plant Types</h2>
            <p className='text-[#8C8C8C] text-[16px] font-medium'>This section of the web page will provide an overview of the different categories of plant types that exist in the natural world. From flowering plants to conifers, ferns, mosses, and algae, there is a vast array of plant life that exists and thrives in different environments around the globe. Visitors to this section can learn about the defining characteristics of each plant type, their life cycles, and unique features that make them stand out. Whether you're a plant enthusiast or just curious about the variety of life on our planet, this section is sure to inspire and inform.</p>
          </div>
          <img src={plantCategory} alt="plant" className='rounded-full w-96 h-96 object-cover'/>
        </div>

        {loading ? <Loader/> : (
        <div className='mt-32 flex justify-start items-center flex-wrap gap-4'>
          {categories.map((category: CategoryType) => (
            <Tilt
              options={{
                max: 45,
                scale: 1,
                speed: 450
              }}
            >
              <Link to={`/categories/${category.Category}`}>
                <div className='w-64 h-64 relative black-gradient rounded-lg shadow-md shadow-black cursor-pointer'>
                  <img src={setPhotoForCategory(category.Category)} alt="photo" className='w-full h-full object-cover rounded-lg black-gradient opacity-50'/>
                  <span className='absolute bottom-3 left-3 text-white text-[24px] font-semibold'>{category.Category}</span>
                </div>
              </Link>
            </Tilt>
          ))}
        </div>
        )}
    </section>
  )
}

export default Category