import { Link, useParams } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import { useCategory } from "../hooks/useCategory";
import { slicedName } from "../utils";
import { Loader } from "../components";

const Categories = () => {
  const { category: categoryName } = useParams();

  const { data, isLoading, error, isError } = useCategory(categoryName!);

  return (
    <Layout showHero={false}>
      <section className="w-full h-full flex flex-col justify-start items-start mt-12 px-14 lg:px-28">
        <h1 className="text-lime-700 font-bold text-[32px] text-center lg:text-left">{categoryName}</h1>
        <article className="w-full flex flex-wrap gap-8 mt-8">
          {isLoading ? (
            <Loader/> 
          ) : (
            <>
            {data?.map((item, i) => (
              <div key={i} className="w-full sm:w-[200px] h-[230px] rounded-lg shadow-lg">
                <img src={item.Img} alt={item["Latin name"]} className="w-full h-[155px] object-cover rounded-t-lg"/>
                <div className="w-full flex flex-col justify-center items-center">
                  <h3>{slicedName(item["Common name"])}</h3>
                  <Link to={`/categories/${categoryName}/${item.id}`} className="bg-black">Explore</Link>
                </div>
              </div>
            ))}
            </>
          )}
        </article>
      </section>
    </Layout>
  )
};

export default Categories;
