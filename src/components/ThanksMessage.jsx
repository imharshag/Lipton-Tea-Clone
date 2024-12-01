import styled from "styled-components";
import { motion } from "framer-motion";

const Backdrop = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;

  display: grid;
  place-content: center;

  background-color: hsl(0, 0%, 0%, 0.5);
  z-index: 20;
`;

const Message = styled(motion.div)`
  width: clamp(300px, 70vw, 500px);
  display: flex;

  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 2rem;

  background-color: var(--background);
  padding-block: 4rem;
  padding-inline: 2rem;
  border-radius: 3px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  font-size: 1.2rem;
  line-height: 2.2rem;

  h3 {
    font-family: var(--secondaryFont);
  }

  p {
    font-family: var(--mainFont);
  }
  a {
    color: var(--tertiaryContrast);
    text-decoration: none;
  }

  a:hover {
    color: var(--contrast);
    text-decoration: underline;
  }
`;

const Icon = styled.span`
  color: var(--tertiaryContrast);
  vertical-align: middle;
`;

export function ThanksMessage({ hideMsg }) {
  const backdropVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
    exit: {
      opacity: 0,
    },
  };

  const modalVariants = {
    hidden: {
      y: `-110vh`,
      opacity: 0,
    },
    visible: {
      y: "-10px",
      opacity: 1,
      transition: { delay: 0.1, type: "spring", stiffness: 110 },
    },
    exit: {
      opacity: 0,
    },
  };

  return (
    <Backdrop
      onClick={hideMsg}
      variants={backdropVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <Message
        variants={modalVariants}
        onClick={(event) => event.stopPropagation()}
      >
        <h3>Thanks for shopping!</h3>

        <p>
          This isn't a real store, but you can check out the I used as design
          inspiration.
        </p>

        <p>
          Visit <a href="https://www.github.com/imharshag">my github</a> to see
          more things I've made <Icon className="material-icons">favorite</Icon>
        </p>
      </Message>
    </Backdrop>
  );
}
