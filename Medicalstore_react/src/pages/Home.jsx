import { Fragment } from "react";
import Wrapper from "../components/wrapper/Wrapper";
import Section from "../components/Section";
import { products, discoutProducts } from "../utils/products";
import SliderHome from "../components/Slider";
import useWindowScrollToTop from "../hooks/useWindowScrollToTop";

const Home = () => {
  const newArrivalData = products.filter(
    (item) => item.category === "medicine" || item.category === "healthcare"
  );
  const bestSales = products.filter((item) => item.category === "medicine");
  useWindowScrollToTop();
  return (
    <Fragment>
      <SliderHome />
      <Wrapper />
      <Section
        title="Products"
        bgColor="#f6f9fc"
        productItems={discoutProducts}
      />
      
    </Fragment>
  );
};

export default Home;
