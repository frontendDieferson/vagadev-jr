import React, {useState} from "react";
import { Container } from "./style";
import OutridersBanner from "../../assets/svgs/outriders.svg";
import DonkeyKongBanner from "../../assets/svgs/donkey.svg";
import CyberpunkBanner from "../../assets/svgs/cyberpunk.svg";
import arrowLeft from "../../assets/svgs/angle-left-solid-black.svg";
import arrowRight from "../../assets/svgs/angle-right-solid-black.svg";
import Product from "../productList/product"
import React from "react";

const ProductsMobile = ({ setBagTotal, bagTotal }) => {

  const [pageProduct, setPageProduct] = useState(1);

  const products = [
    {
      id:1,
      imagePath: OutridersBanner,
      title: "Outriders",
      price: "200,00",
    },
    {
      id:2,
      imagePath: CyberpunkBanner,
      title: "Cyberpunk 2077",
      price: "200,00",
    },
    {
      id:3,
      imagePath: DonkeyKongBanner,
      title: "Donkey Kong Country Tropical Freeze",
      price: "200,00",
    },
  ];

  return (
    <Container>
      <a href={`#product-${pageProduct}`} >
            <img
              src={arrowLeft}
              className='arrowLeft'
              alt="arrowLeft"
              onClick={() => {
                pageProduct === 0 ? setPageProduct(products.length - 1) : setPageProduct(pageProduct - 1);
              }}
            />
      </a>
      <Product  product={products[pageProduct]} setBagTotal={setBagTotal} bagTotal={bagTotal} pageProduct={pageProduct} />
      <a href={`#product-${pageProduct}`}>
        <img
            src={arrowRight}
            alt="arrowRight"
            className='arrowRight'
            onClick={() => {
              pageProduct === products.length - 1 ? setPageProduct(0) : setPageProduct(pageProduct + 1);
            }}
        />
      </a>
    </Container>
  )
};
export default ProductsMobile;