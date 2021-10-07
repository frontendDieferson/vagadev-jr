import styled from "styled-components";

export const Container = styled.div`
    display: none;
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
        display:flex;
        align-items: center;
        justify-content: center;
        margin:31px auto auto auto;       
        .arrowLeft{
            margin-right: 28px;
            height: 26px !important;
            width: 15px;
        }
       .arrowRight{
           margin-left: 28px;
           height: 26px;
           width: 15px;
       }
    }
`;