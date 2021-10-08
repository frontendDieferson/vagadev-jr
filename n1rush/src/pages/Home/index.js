import React, {useState} from "react";
import { Title, Products, App } from "./style";

import HighlightIcon from "../../assets/svgs/highlight-icon.svg";
import ProductsDesktop from "../../Components/ProductsDesktop";
import ProductsMobile from "../../Components/ProductsMobile";

import Carousel from "../../Components/Carousel";
import TopBar from "../../Components/TopBar";
import Footer from "../../Components/Footer";
import FeaturedProducts from "../../Components/FeaturedProducts";


const Home = () => {

  const [total, setTotal] = useState(0);
  
  return (
    
    <App>
      <Carousel />
      <FeaturedProducts />
       <TopBar total={total}/>
        <Products>
          <Title>
            <img src={HighlightIcon} alt="icon" />
            <h2>Produtos em destaque</h2>
          </Title>
          <ProductsDesktop setTotal={setTotal} total={total} />
          <ProductsMobile setTotal={setTotal} total={total} />
        </Products>
        <Footer />
    
    </App>
  );
};

export default Home;