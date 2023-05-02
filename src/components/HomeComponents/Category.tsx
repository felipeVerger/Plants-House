import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Tilt from "react-tilt";

import {
  aglaonema,
  anthurium,
  aralia,
  bromelia,
  cactus,
  dieffenbachia,
  dracaena,
  fern,
  ficus,
  flower,
  foliage,
  grass,
  groundcover,
  hanging,
  palm,
  philodendron,
  plantCategory,
  sansevieria,
  schefflera,
  spathiphyllum,
  topiairy,
} from "../../assets";
import { getAllCategories } from "../../service";
import { CategoryType } from "../../types/types";
import Loader from "../Loader";

const Category = () => {
  const [categories, setCategories] = useState<CategoryType[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getAllCategories()
      .then((data) => setCategories(data))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, []);

  const setPhotoForCategory = (category: string) => {
    switch (category) {
      case "Dracaena":
        return dracaena;
      case "Palm":
        return palm;
      case "Anthurium":
        return anthurium;
      case "Other":
        return anthurium;
      case "Aglaonema":
        return aglaonema;
      case "Hanging":
        return hanging;
      case "Bromeliad":
        return bromelia;
      case "Spathiphyllum":
        return spathiphyllum;
      case "Flower":
        return flower;
      case "Aralia":
        return aralia;
      case "Ficus":
        return ficus;
      case "Sansevieria":
        return sansevieria;
      case "Foliage plant":
        return foliage;
      case "Dieffenbachia":
        return dieffenbachia;
      case "Philodendron":
        return philodendron;
      case "Cactus & Succulent":
        return cactus;
      case "Schefflera":
        return schefflera;
      case "Topiairy":
        return topiairy;
      case "Fern":
        return fern;
      case "Grass":
        return grass;
      case "Ground Cover":
        return groundcover;
      default:
        break;
    }
  };

  return (
    <section className="w-full mt-32 px-28">
      <div className="w-full flex justify-between items-center gap-24">
        <div className="flex flex-col gap-4">
          <h2 className="text-lime-700 font-bold text-[32px]">
            Explore the Diverse Categories of Plant Types
          </h2>
          <p className="text-[#8C8C8C] text-[16px] font-medium">
            Welcome to our plant web page, where you can explore the diverse
            categories of plant types. Our collection features an extensive
            range of plant species from all corners of the world, each with its
            unique characteristics and properties. Whether you're a seasoned
            gardener or a budding plant enthusiast, we have something for
            everyone. From vibrant flowering plants to lush green ferns,
            succulents, and cacti, our diverse selection caters to all tastes
            and preferences. So come on in and discover the endless
            possibilities of the plant world.
          </p>
        </div>
        <img
          src={plantCategory}
          alt="plant"
          className="rounded-full w-96 h-96 object-cover"
        />
      </div>

      {loading ? (
        <Loader />
      ) : (
        <div className="mt-32 flex justify-start items-center flex-wrap gap-4">
          {categories?.map((category: CategoryType) => (
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
          ))}
        </div>
      )}
    </section>
  );
};

export default Category;
