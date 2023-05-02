import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getByCategory } from "../service";
import { ByCategory } from "../types/api";
import Layout from "../components/Layout";

const Categories = () => {
  const { category: categoryName } = useParams();
  const [category, setCategory] = useState<ByCategory[] | undefined>([]);

  useEffect(() => {
    getByCategory(categoryName as string)
      .then((data) => setCategory(data))
      .catch((err) => console.log(err));
  }, []);

  console.log(category);

  return (
    <Layout showHero={false}>
      
    </Layout>
  )
};

export default Categories;
