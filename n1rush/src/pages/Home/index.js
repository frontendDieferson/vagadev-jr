import React, {useState} from "react";
import { Title, Products, App } from "./style";

import HighlightIcon from "../../assets/svgs/highlight-icon.svg";
import ProductsDesktop from "../../Components/ProductsDesktop";
import ProductsMobile from "../../Components/ProductsMobile";

import Carousel from "../../Components/Carousel";
import Banners from "../../Components/Banners";
import TopBar from "../../Components/TopBar";
import Footer from "../../Components/Footer";


const Home = () => {

  const [total, setTotal] = useState(0);
  
  return (
    
    <App>
      <Carousel />
      <TopBar total={total}/>
      <Banners />
      <Products>
        <Title>
          <img src={HighlightIcon} alt="icon" />
          <h2> Produtos em destaque </h2>
        </Title>
        <ProductsDesktop setTotal={setTotal} total={total}/>
        <ProductsMobile setTotal={setTotal} total={total}/>
      </Products>     
      <Footer/> 
    </App>
  );
};

export default Home;