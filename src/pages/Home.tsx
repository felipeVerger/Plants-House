import { Category } from "../components";
import Layout from "../components/Layout/Layout";

const Home = () => {
  return (
    <Layout showHero={true}>
      <Category />
    </Layout>
  );
};

export default Home;
