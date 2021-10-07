import React from 'react';
import arrowLeft from "../../../assets/svgs/angle-left-solid.svg";
import arrowRight from "../../../assets/svgs/angle-right-solid.svg";
import line from "../../../assets/svgs/line2.svg";

import { Container, Controls, TopSide, BottomSide } from "./style";

const ControlCarousel = ({ page, setPage, totalPages, image }) => {

  return (
    <Container>
      <TopSide>
        <h6>{image.title}</h6>
        <img src={line} alt="line" />
      </TopSide>
      <BottomSide>
        <h6>
          {page} / {totalPages}
        </h6>
        <Controls>
          <a href={`#image-${page}`} >
            <img
              src={arrowLeft}
              alt="arrowLeft"
              onClick={() => {
                page === 1 ? setPage(totalPages) : setPage(page - 1);
              }}
            />
          </a>
          <a href={`#image-${page}`}>
          <img
            src={arrowRight}
            alt="arrowRight"
            onClick={() => {
              page === totalPages ? setPage(1) : setPage(page + 1);
            }}
          />
          </a>
        </Controls>
      </BottomSide>
    </Container>
  );
};

export default ControlCarousel;