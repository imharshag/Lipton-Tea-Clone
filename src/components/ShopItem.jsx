import { useState } from "react";
import styled from "styled-components";
import { StyledAnimatedButton } from "../styles/StyledButton";
import { StyledDivider } from "../styles/Table/StyledDivider";
import { StyledStack } from "../styles/Layout/StyledStack";

const Container = styled.div`
  text-align: center;
  font-family: var(--secondaryFont);
  padding: clamp(0.5rem, 4vw, 2.5rem);
  transition: all 100ms;

  h2 {
    font-weight: 400;
  }

  h3 {
    font-weight: 300;
    margin-top: -0.5rem;
  }

  p {
    font-family: var(--mainFont);
  }
`;

const StyledImage = styled.img`
  height: 150px;
  width: 150px;
  object-fit: cover;
  border-radius: 3px;

  @media (min-width: ${(props) => props.theme.breakpointM || "850px"}) {
    width: 250px;
    height: 250px;
  }
`;

export function ShopItem({ item, handleClick, cart }) {
  const [imgAlt, setImgAlt] = useState(true);

  return (
    <Container>
      <StyledStack
        gap="0.7rem"
        center
        onMouseEnter={() => setImgAlt(false)}
        onMouseLeave={() => setImgAlt(true)}
      >
        <StyledImage src={imgAlt ? item.imageAlt : item.image} />
        <h2>{item.name}</h2>
        <h3>{item.description}</h3>
        <StyledDivider width="2rem" margin=".5rem" />
        <p>₹{item.price} INR</p>
        <StyledAnimatedButton onClick={handleClick}>
          Add to Cart
        </StyledAnimatedButton>
      </StyledStack>
    </Container>
  );
}
