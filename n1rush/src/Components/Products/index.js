import React from "react";
import { Container } from "./style";
import OutridersBanner from "../../assets/svgs/outriders.svg";
import DonkeyKongBanner from "../../assets/svgs/donkey.svg";
import CyberpunkBanner from "../../assets/svgs/cyberpunk.svg";
import Product from "../ControlProducts";

const Products = ({setTotal, total}) => {
  const products = [
    {      
      imagePath: OutridersBanner,
      title: "Outriders",
      price: "200,00",
    },
    {      
      imagePath: CyberpunkBanner,
      title: "Cyberpunk 2077",
      price: "200,00",
    },
    {      
      imagePath: DonkeyKongBanner,
      title: "Donkey Kong Country Tropical Freeze",
      price: "200,00",
    },
  ];

  return (
    <Container>
      <ul>
        {products.map((product, index) => (
          <li key={index}> 
              <Product  product={product} setTotal={setTotal} total={total} />
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default Products;