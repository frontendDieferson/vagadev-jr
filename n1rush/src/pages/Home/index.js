import Carousel from "../../components/carousel";
import MediumBanners from "../../components/mediumBanners";
import TopBar from "../../components/topBar";
import HighlightIcon from "../../assets/svgs/highlight-icon.svg";
import { Title, Products, App } from "./style";
import Footer from "../../components/footer";
import React, {useState} from "react";
import ProductListDesktop from "../../components/productList";
import ProductListMobile from "../../components/productListMobile";


const Home = () => {

  const [total, setTotal] = useState(0);
  
  return (
    
    <App>
      <Carousel />
      <TopBar total={total}/>
      <MediumBanners />
      <Products>
        <Title>
          <img src={HighlightIcon} alt="icon" />
          <h2> Produtos em destaque </h2>
        </Title>
        <ProductListDesktop setTotal={setTotal} bagTotal={bagTotal}/>
        <ProductListMobile setTotal={setTotal} bagTotal={bagTotal}/>
      </Products>     
      <Footer/> 
    </App>
  );
};

export default Home;