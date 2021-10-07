import React, {useState} from "react";
import MortalKombatBanner from "../../assets/img/principal_banner_desktop.jpg";
import MortalKombatMobileBanner from "../../assets/img/principal_banner_mobile.jpg";
import Control from "../ControlCarousel";
import { Slider, Image, Details, Price, Container, Content } from "./style";

const Carousel = () => {
  const [page, setPage] = useState(1);

  const images = [
    {
      desktopPath: MortalKombatBanner,
      mobilePath: MortalKombatMobileBanner,
      title: "Mortal Kombat",
      price: "R$ 299,99",
      description:
        "Mortal Kombat X combina uma apresentação cinemática única com uma jogabilidade totalmente nova. Os jogadores podem escolher pela primeira vez diversas variantes de cada personagem, afetando tanto a estratégia como o estilo de luta.",
    },
    {
      desktopPath: MortalKombatBanner,
      mobilePath: MortalKombatMobileBanner,
      title: "Mortal Kombat",
      price: "R$ 299,99",
      description:
        "Mortal Kombat X combina uma apresentação cinemática única com uma jogabilidade totalmente nova. Os jogadores podem escolher pela primeira vez diversas variantes de cada personagem, afetando tanto a estratégia como o estilo de luta.",
    },
    {
      desktopPath: MortalKombatBanner,
      mobilePath: MortalKombatMobileBanner,
      title: "Mortal Kombat",
      price: "R$ 299,99",
      description:
        "Mortal Kombat X combina uma apresentação cinemática única com uma jogabilidade totalmente nova. Os jogadores podem escolher pela primeira vez diversas variantes de cada personagem, afetando tanto a estratégia como o estilo de luta.",
    },
  ];

  return (
    <Container>
      <Content>
        {images.map((image, index) => {
          return (
            <Slider key={index} id={`image-${index + 1}`}>
              {console.log(MortalKombatMobileBanner)}
              <Image desktopImage={MortalKombatBanner} mobileImage={MortalKombatMobileBanner} >
                <div id="gap"></div>
                <Details>
                  <h3>{image.title}</h3>
                  <Price>
                    <h1> {image.price.split(",")[0]} </h1>
                    <small> ,{image.price.split(",")[1]} </small>
                  </Price>
                  <p> {image.description} </p>
                </Details>
              </Image>
            </Slider>
          );
        })}
      </Content>
      <Control
        page={page}
        setPage={setPage}
        totalPages={images.length}
        image={images[page - 1]}
      />
    </Container>
  );
};

export default Carousel;