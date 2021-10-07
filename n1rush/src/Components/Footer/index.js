import React from 'react';
import {Container, Left, Right} from './style';
import  Icon  from "../../assets/svgs/logo-footer.svg" 

const Footer = () => {
    return(
        <Container>
            <Left>
                <img src={Icon} alt="icon" />
            </Left>
            <Right>
                <p> Agência N1 - Todos os direitos reservados </p>
            </Right>
        </Container>

    )

}

export default Footer;