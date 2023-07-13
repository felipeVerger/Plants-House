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
  } from "../assets";

export const setPhotoForCategory = (category: string) => {
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

// Returns the first string in the array
export const slicedName = (name: string[] | null) => {
    if (name) {
      return name.slice(0, 1)[0];
    }
    return "";
}

// Function to scroll to the top of the page
export const scrollToTop = () => {
  window.scrollTo({top : 0});
  
}