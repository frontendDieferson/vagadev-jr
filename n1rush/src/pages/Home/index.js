import Carousel from "../../components/carousel";
import MediumBanners from "../../components/mediumBanners";
import TopBar from "../../components/topBar";
import HighlightIcon from "../../assets/svgs/highlight-icon.svg";
import { Title, Products, App } from "./style";
import Footer from "../../components/footer";
import React from "react";
import ProductListDesktop from "../../components/productList";
import ProductListMobile from "../../components/productListMobile";


const Home = () => {

  const [bagTotal, setBagTotal] = React.useState(0);
  
  return (
    
    <App>
      <Carousel />
      <TopBar bagTotal={bagTotal}/>
      <MediumBanners />
      <Products>
        <Title>
          <img src={HighlightIcon} alt="icon" />
          <h2> Produtos em destaque </h2>
        </Title>
        <ProductListDesktop setBagTotal={setBagTotal} bagTotal={bagTotal}/>
        <ProductListMobile setBagTotal={setBagTotal} bagTotal={bagTotal}/>
      </Products>     
      <Footer/> 
    </App>
  );
};

export default Home;