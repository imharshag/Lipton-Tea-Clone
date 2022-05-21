import styled from 'styled-components';

export const StyledButton = styled.button`
  font-family: ${(props) => props.theme.mainFont};
  background: ${(props) => (props.filled ? props.theme.main : 'transparent')};
  color: ${(props) => (props.filled ? props.theme.white : props.theme.main)};
  border: 1px solid ${(props) => props.theme.main};

  font-size: 1rem;
  font-weight: 300;
  text-transform: uppercase;
  padding: 0.7rem 2rem;
  /* padding: clamp(0.5rem, 0.2rem + 2vw, 0.7rem) clamp(1.5rem, 1rem + 2vw, 2rem); */

  &:hover {
    background: ${(props) =>
      props.filled ? props.theme.secondary : 'transparent'};
    color: ${(props) =>
      props.filled ? props.theme.white : props.theme.secondaryContrast};
    border: 1px solid
      ${(props) =>
        props.filled ? props.theme.secondary : props.theme.secondaryContrast};
  }

  &:active {
    filter: brightness(1.1);
  }
`;

StyledButton.defaultProps = {
  theme: {
    main: 'palevioletred',
    secondary: 'rebeccapurple',
    secondaryContrast: 'rebeccapurple',
    white: 'white',
    mainFont: 'helvetica, sans-serif',
  },
};

export const StyledAnimatedButton = styled.button`
  // Played with using trasitioned as a prop to set; it worked ok but what I really need is probably an animate in for a regular button
  font-family: ${(props) => props.theme.mainFont};
  background: ${(props) =>
    props.transitioned ? props.theme.main : 'transparent'};
  color: ${(props) =>
    props.transitioned ? props.theme.secondaryContrast : props.theme.main};
  border: 1px solid ${(props) => props.theme.main};
  position: relative;

  font-size: 1rem;
  font-weight: 300;
  text-transform: uppercase;
  padding: 0.7rem 2rem;
  z-index: 1;
  pointer-events: ${(props) => (props.transitioned ? 'none' : 'default')};

  /* padding: clamp(0.5rem, 0.2rem + 2vw, 0.7rem) clamp(1.5rem, 1rem + 2vw, 2rem); */

  &:hover {
    color: ${(props) => props.theme.secondaryContrast};
    border: 1px solid ${(props) => props.theme.secondaryContrast};
  }

  &:after {
    content: '';
    background-color: ${(props) => props.theme.main};
    /* border: 1px solid ${(props) => props.theme.main}; */
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform: scaleX(0);
    transform-origin: 0% 50%;
    z-index: -1;
    transition: transform 0ms;
  }

  &:hover:after {
    transform: scaleX(1);
    transition: transform 200ms ease-in-out;
  }

  &:active {
    filter: brightness(1.2);
  }
`;
