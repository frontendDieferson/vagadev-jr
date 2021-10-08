import React, {useState} from "react";
import { Container, LeftSide, RightSide, Menu } from "./style";
import icon_hamburguer from "../../assets/svgs/icon_hamburguer.svg";
import logo from "../../assets/svgs/logo.svg";
import logoMobile from "../../assets/svgs/logo-mobile.svg";
import line from "../../assets/svgs/line.svg";
import closeMenu from "../../assets/svgs/close-menu.svg";
import search from "../../assets/svgs/search-solid.svg";
import shopBag from "../../assets/svgs/shopping-bag-solid.svg";
import paperPlane from "../../assets/svgs/paper-plane.svg";
import Badge from "../Badge";
import PopUpMenu from '../PopUpMenu';


const TopBar = ({ bagTotal }) => {
  const [showMenu, setShowMenu] = useState(false);  

  return (
    <Container>
      <LeftSide>
        <Menu>
          <img src={showMenu ? closeMenu : icon_hamburguer} alt="menu" onClick={ () => {showMenu ? setShowMenu(false) : setShowMenu(true)} } />
          <PopUpMenu showMenu={showMenu} />
        </Menu>
        <img className="logo-desktop" src={logo} alt="logo N1" />
        <img className="logo-mobile" src={logoMobile} alt="logo N1 Mobile" />
      </LeftSide>
      <RightSide>
        <img src={paperPlane} alt="paper-plane"  />
        <h6> CONTATO </h6>
        <img className="line" src={line} alt="line" />
        <img src={search} alt="search" />
        <h6> BUSCAR </h6>
        <img className="line" src={line} alt="line" />
        <div>
          <img src={shopBag} alt="shop" />
          <Badge quantity={bagTotal} />
        </div>
      </RightSide>
    </Container>
  );
};

export default TopBar;