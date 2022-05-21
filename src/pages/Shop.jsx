import styled from 'styled-components';
import { ShopItem } from '../components/ShopItem';

const Container = styled.div`
  background-color: ${(props) => props.theme.background};
  width: 100vw;
  text-align: center;
  display: grid;
  place-items: center;
`;

const Content = styled.div`
  max-width: 1650px;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  column-gap: clamp(0.5rem, 4vw, 4rem);
  row-gap: clamp(1.7rem, 1.5rem + 4vw, 5rem);
`;

const Title = styled.h1`
  font-family: ${(props) => props.theme.secondaryFont};
  font-size: clamp(2rem, 1.5rem + 4v, 3rem);
  margin-block: 2rem;
`;

export function Shop({ cart, setCart, items }) {
  const handleAddToCart = (id) => {
    const matchingItem = cart.some((item) => item.id === id);
    if (!matchingItem) {
      setCart([...cart, { id: id, qty: 1 }]);
      return;
    }

    const updatedCart = cart.map((item) => {
      if (item.id === id) {
        item.qty += 1;
        // Although I'm thinking of disabling the add button in favour of an "in cart" button
      }
      return item;
    });
    setCart(updatedCart);
  };

  const renderedItems = items.map((item, index) => (
    <ShopItem
      item={item}
      key={index}
      handleClick={() => handleAddToCart(item.id)}
      cart={cart}
    />
  ));

  return (
    <Container>
      <Title>Our Teas</Title>
      <Content>{renderedItems}</Content>
    </Container>
  );
}
