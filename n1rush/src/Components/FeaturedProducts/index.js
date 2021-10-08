import React from 'react';
import {Container} from './style';
import ZeldaBanner from "../../assets/img/zelda_banner.jpg";
import SekiroBanner from "../../assets/img/sekiro_banner.jpg";

import ControlBanners from '../ControlBanners';

const FeaturedProducts = () => {
  const images = [
    {
      imagePath: ZeldaBanner,
      label: "The Legend of Zelda - Breath of the wild",
    },
    {
      imagePath: SekiroBanner,
      label: "SEKIRO - Shadows die twice",
    },
  ];

  return (
    <Container>
      
      {images.map((images, index) => (
        
          <ControlBanners image={images} key={index} />
       
      ))}
     
       
    </Container>
  );
};

export default FeaturedProducts;