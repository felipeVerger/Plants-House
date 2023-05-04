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
import { useCategories } from "../../hooks/useCategories";
import { CategoryType } from "../../types/api";
import Loader from "../Loader";
import CategoryCard from "./CategoryCard";

const Categories = () => {
  const { data, isLoading } = useCategories();

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
    <section className="w-full mt-32 px-14 lg:px-28">
      <div className="w-full flex justify-between items-center gap-24">
        <div className="flex flex-col gap-4">
          <h2 className="text-lime-700 font-bold text-[32px] text-center lg:text-left">
            Explore the Diverse Categories of Plant Types
          </h2>
          <p className="text-[#8C8C8C] text-[16px] font-medium text-center lg:text-left">
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
          className="hidden lg:block rounded-full w-96 h-96 object-cover"
        />
      </div>

      {isLoading ? (
        <Loader />
      ) : (
        <div className="mt-32 flex justify-center lg:justify-start items-center flex-wrap gap-4">
          {data?.map((category: CategoryType) => (
            <CategoryCard key={category.Category} category={category} setPhotoForCategory={setPhotoForCategory}/>
          ))}
        </div>
      )}
    </section>
  );
};

export default Categories;
