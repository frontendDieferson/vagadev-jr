import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 368px;
  position: absolute;
  top: 691px;
  @media (max-width: 660px){
    top: 0;
    position: relative;
    flex-direction: column;
    height: 456px;
  }
`;