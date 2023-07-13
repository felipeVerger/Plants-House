import { Link, useParams } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import { useCategory } from "../hooks/useCategory";
import { scrollToTop, slicedName } from "../utils";
import { Loader } from "../components";
import Error from "../components/shared/Error";
import { useEffect } from "react";

const Categories = () => {
  const { category: categoryName } = useParams();

  useEffect(() => {
    scrollToTop();
  }, [])

  const { data, isLoading, error, isError } = useCategory(categoryName!);
  
  if (isError) {
    return <Error isError={isError} error={error}/>
  }
  return (
    <Layout showHero={false}>
      <section className="w-full h-full flex flex-col justify-start items-start mt-12 px-14 pb-8 lg:px-28">
        <h1 className="text-textPrimary w-full font-bold text-[32px] text-center lg:text-left">{categoryName}</h1>
        <article className="w-full flex justify-center items-center lg:justify-start lg:items-start flex-wrap gap-8 mt-8">
          {isLoading ? (
            <Loader/> 
          ) : (
            <>
            {data?.map((item, i) => (
              <div key={i} className="w-full sm:w-[250px] h-[250px] rounded-lg shadow-lg">
                <img src={item.Img} alt={item["Latin name"]} className="w-full h-[155px] object-cover rounded-t-lg"/>
                <div className="w-full flex flex-col justify-center items-center gap-2 p-2">
                  <h3 className="text-textPrimary font-semibold">{slicedName(item["Common name"])}</h3>
                  <Link to={`/categories/${categoryName}/${item.id}`} className="bg-secondaryBg text-textPrimary w-24  text-center py-1 rounded-lg">Explore</Link>
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
