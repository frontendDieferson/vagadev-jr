import { Arrow, Container, Content } from "./style";

const PopUpMenu = ({ showMenu }) => {
  return (
    <Container id="menu" show={showMenu ? "block" : "none"}>
      <Arrow />
      <Content>
        <ul>
          <li>Luta</li>
          <li>Mortal Kombat</li>
          <li>Smash Bros</li>
          <li>Killer Instict</li>
          <li>DBZ Kakarot</li>
          <div></div>
        </ul>
        <ul>
          <li>Ação / Aventura</li>
          <li>GTA V</li>
          <li>Tomb Raider</li>
          <li>HALO</li>
          <li>Call of Duty</li>
          <div></div>
        </ul>
        <ul>
          <li>Corrida</li>
          <li>NEED For SPEED</li>
          <li>Forza Horizon</li>
        </ul>
      </Content>
    </Container>
  );
};

export default PopUpMenu;
