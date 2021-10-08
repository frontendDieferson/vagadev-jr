import styled from "styled-components";

export const Container = styled.div`
  margin-left: 10px;
  margin-right: 10px;
  background-image: ${(props) => props.image};
  background-repeat: no-repeat;
  background-size: cover;
  
  width: 100%;
  max-width: 627px;
  min-width: 335px;
  height: 368px;
  position: relative;
  display: flex;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  @media (max-width: 660px){
    margin-bottom: 10px;
  }
  @media (max-width: 740px){
    max-width: 335px;
    height: 218px;
  }
`;

export const Label = styled.div`
  width: 100%;
  max-height: 61px;
  min-height: 61.64px;
  background-color: #3ec6e0;
  color: #084154;
  font-weight: 700;
  font-size: 16px;
  display: flex;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  position: absolute;
  bottom: 0;
  right: 0;
  width: 100%;
  align-items: center;
  justify-content: flex-start;
  img {
    position: absolute;
    right: 26px;
    max-width: 248px;
    width: 100%;
  }
  @media (max-width: 1100px){
    img{
      max-width: 72px !important;
    }
  }
`;

export const LeftEdge = styled.div`
  width: 10px;
  max-height: 61px;
  min-height: 61.64px;
  background-color: #084154;
  border-bottom-left-radius: 5px;
  margin-right: 19px;
`;