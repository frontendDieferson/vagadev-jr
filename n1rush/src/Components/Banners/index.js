import React from 'react';
import Banner from "../Banners";
import ZeldaBanner from "../../assets/img/zelda_banner.jpg";
import SekiroBanner from "../../assets/img/sekiro_banner.jpg";
import {Container} from './style';

const Banners = () => {
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
      {images.map((image, index) => {
        return <Banner image={image} key={index} />;
      })}
    </Container>
  );
};

export default Banners;