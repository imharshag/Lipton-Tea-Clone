import styled from "styled-components";
import { Link } from "react-router-dom";
import { CartItem } from "../components/CartItem";
import { CartTitle } from "../components/CartTitle";
import { CartSummary } from "../components/CartSummary";
import { ThanksMessage } from "../components/ThanksMessage";
import { StyledButton } from "../styles/StyledButton";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const Container = styled(motion.div)`
  background-color: var(--background);
  padding: 3vw;
  max-width: 900px;
  width: 100%;
  flex-flow: column nowrap;
  gap: 4rem;
  align-items: center;
  text-align: center;
`;

const EmptyCartMessage = styled.p`
  font-size: var(--respM);
  padding: 4rem;
`;

export function Cart({ cart, setCart, items }) {
  const [showThanks, setShowThanks] = useState(false);

  const cartItems = cart.map((cartItem, index) => {
    const [targetItem] = items.filter((item) => item.id === cartItem.id);
    return (
      <CartItem
        quantity={cartItem.qty}
        targetItem={targetItem}
        key={index}
        cart={cart}
        setCart={setCart}
      />
    );
  });

  return (
    <Container>
      <CartTitle cart={cart} />
      {cart.length ? (
        <>
          <motion.div layout>{cartItems}</motion.div>
          <CartSummary
            items={items}
            cart={cart}
            showMsg={() => setShowThanks(true)}
          />
        </>
      ) : (
        <>
          <EmptyCartMessage>There are no items in your cart</EmptyCartMessage>
          <Link to="/shop">
            <StyledButton>Shop for items</StyledButton>
          </Link>
        </>
      )}
      <AnimatePresence exitBeforeEnter>
        {showThanks && <ThanksMessage hideMsg={() => setShowThanks(false)} />}
      </AnimatePresence>
    </Container>
  );
}
