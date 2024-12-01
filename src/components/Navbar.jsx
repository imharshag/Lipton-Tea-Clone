import styled from "styled-components";
import { NavLink, useLocation } from "react-router-dom";
import Logo from "../assets/Logo.png";

// Just for shrinking nav bar on scroll
const FullHeightContainer = styled.div`
  position: ${(props) => (props.transparent ? "absolute" : "sticky")};
  top: ${(props) => (props.transparent ? "0" : "-4rem")};

  width: 100%;
  height: 9rem;

  display: flex;
  align-items: center;
  background-color: ${(props) =>
    props.transparent ? "transparent" : "var(--contrast)"};
  z-index: 10;
`;

const Container = styled.div`
  position: sticky;
  top: 0;

  height: 5rem;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem; /* Adjust gap for responsiveness */

  font-family: var(--mainFont);
  padding-inline: 2rem;

  box-sizing: border-box; /* Prevent overflow */

  a {
    -webkit-tap-highlight-color: transparent;
    text-decoration: none;
    color: var(--white);
  }

  a.active {
    color: var(--secondaryContrast);
  }
`;

const ShopTitle = styled.h1`
  font-family: var(--secondaryFont);
  font-size: clamp(2rem, 5vw, 4rem);
  flex: 2;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  img {
    width: 4.5rem;
    height: auto;
  }
`;

const LinksContainer = styled.div`
  margin-left: auto;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 2rem; /* Adjust gap for responsiveness */
  flex: 1;
`;

const MainLinks = styled.h2`
  font-size: clamp(0.9rem, 0.8rem + 1.5vw, 1.2rem);
  text-transform: uppercase;
  font-weight: 300;
  min-width: max-content;
  position: relative;

  &:after {
    content: "";
    position: absolute;
    top: 0.5rem;
    left: 0;
    width: 100%;
    height: 100%;
    border-bottom: 1px solid var(--secondaryContrast);
    transform: scaleX(0);
    transition: transform 200ms ease-in-out;
  }

  &:hover:after {
    transform: scaleX(1);
  }
`;

const Icon = styled.span`
  font-size: clamp(1.5rem, 1.2rem + 3vw, 2rem);
`;

const Badge = styled.div`
  position: absolute;
  right: -0.5rem;
  top: -0.5rem;

  height: var(--respS);
  width: var(--respS);

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${(props) =>
    props.green ? "var(--tertiaryContrast)" : "var(--main)"};
  border-radius: 50%;

  font-size: clamp(0.7rem, 0.5rem + 4vw, 1.5rem);
`;

export function Navbar({ cart }) {
  let location = useLocation();

  const itemCount = () => {
    let count = 0;
    cart.forEach((item) => {
      count += item.qty;
    });
    return count;
  };

  return (
    <FullHeightContainer transparent={location.pathname === "/"}>
      <Container transparent={location.pathname === "/"}>
        <ShopTitle>
          <img src={Logo} alt="Logo" />
        </ShopTitle>
        <LinksContainer>
          <NavLink to="/">
            <MainLinks>Home</MainLinks>
          </NavLink>
          <NavLink to="/shop">
            <MainLinks>Shop</MainLinks>
          </NavLink>
          <NavLink to="/cart">
            <MainLinks>
              <Icon className="material-icons">shopping_cart</Icon>
              <Badge green={location.pathname === "/"}>{itemCount()}</Badge>
            </MainLinks>
          </NavLink>
        </LinksContainer>
      </Container>
    </FullHeightContainer>
  );
}
