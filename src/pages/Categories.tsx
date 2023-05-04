import { useParams } from "react-router-dom";
import Layout from "../components/Layout";
import { useCategory } from "../hooks/useCategory";

const Categories = () => {
  const { category: categoryName } = useParams();

  const { } = useCategory(categoryName!);

  return (
    <Layout showHero={false}>
      
    </Layout>
  )
};

export default Categories;
