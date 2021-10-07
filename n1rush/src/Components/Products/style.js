import styled from "styled-components";

export const Container = styled.div`
display: block;
    width: 100%;
    margin-top: 80px;
    ul{
        list-style: none;
        display: flex;
        align-items: center;
        justify-content: center;
        li{
            margin-right: 10px;
            margin-left: 10px;
        }
    }
    @media (max-width: 660px){
        display: none;
    }
`;