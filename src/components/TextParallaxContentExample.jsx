import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

// Color Theme
const theme = {
  main: "#303030",
  secondary: "#404040",
  contrast: "#3b5442",
  secondaryContrast: "#ece2cc",
  tertiaryContrast: "#745d4a",
  background: "#faf4e8",
  white: "white",
};

// Main Component
export const TextParallaxContentExample = () => {
  const sections = [
    {
      imgUrl:
        "https://cdn.pixabay.com/photo/2017/05/19/07/34/teacup-2325722_1280.jpg",
      subheading: "Lipton",
      heading: "Enjoy the taste of the world's No.1 tea",
      content:
        "Discover the rich, aromatic flavors of the world’s No.1 tea, known for its unmatched quality and exquisite taste. Savor every sip of this premium blend for an exceptional tea experience.",
      learnMoreText: "Unmatched Flavor in Every Sip",
      learnMoreLink: "/shop",
      discoveryText: "Collaborate for the future",
      linkcontent: "Shop With Us",
    },
    {
      imgUrl:
        "https://cdn.pixabay.com/photo/2016/03/05/23/02/teacup-1239437_960_720.jpg",
      subheading: "Quality",
      heading: "Never compromise.",
      content:
        "Quality is at the heart of everything we do. We never compromise on excellence.",
      learnMoreText: "Learn More about Quality", // Dynamic text
      learnMoreLink: "/shop",
      discoveryText: "Our Tea Products", // Dynamic discovery text
      linkcontent: "Shop With Us",
    },
    {
      imgUrl:
        "https://cdn.pixabay.com/photo/2018/03/08/08/59/drink-3208144_1280.jpg",
      subheading: "Modern",
      heading: "Dress for the best.",
      content: "Stay ahead of trends with modern styles that make a statement.",
      learnMoreText: "Modern Styles", // Dynamic text
      learnMoreLink: "/modern",
      discoveryText: "Style meets Modernity", // Dynamic discovery text
    },
    {
      imgUrl:
        "https://images.pexels.com/photos/9795359/pexels-photo-9795359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      subheading: "Innovation",
      heading: "Leading the way.",
      content:
        "Innovation drives us forward, inspiring new solutions and opportunities.",
      learnMoreText: "Innovate with Us", // Dynamic text
      learnMoreLink: "/innovation",
      discoveryText: "Innovation in Action", // Dynamic discovery text
    },
    {
      imgUrl:
        "https://cdn.pixabay.com/photo/2015/06/08/15/26/coffee-801786_1280.jpg",
      subheading: "Inspiration",
      heading: "Fuel your creativity.",
      content:
        "Fuel your creativity with fresh ideas and endless possibilities.",
      learnMoreText: "Get Inspired", // Dynamic text
      learnMoreLink: "/inspiration",
      discoveryText: "Inspiration Unleashed", // Dynamic discovery text
      linkcontent: "Hr",
    },
  ];

  return (
    <Wrapper>
      {sections.map((section, index) => (
        <TextParallaxContent
          key={index}
          imgUrl={section.imgUrl}
          subheading={section.subheading}
          heading={section.heading}
          content={section.content}
          learnMoreText={section.learnMoreText} // Passing dynamic text
          learnMoreLink={section.learnMoreLink} // Passing link
          discoveryText={section.discoveryText} // Passing dynamic discovery text
          linkcontent={section.linkcontent}
        >
          <ExampleContent
            content={section.content}
            learnMoreLink={section.learnMoreLink}
            learnMoreText={section.learnMoreText} // Passing dynamic text for Learn More
            linkcontent={section.linkcontent}
          />
        </TextParallaxContent>
      ))}
    </Wrapper>
  );
};

// Wrapper Component
const Wrapper = styled.div`
  background-color: ${theme.background};
  min-height: 100vh;
`;

// Text Parallax Content
const TextParallaxContent = ({
  imgUrl,
  subheading,
  heading,
  content,
  learnMoreLink,
  learnMoreText,
  discoveryText,
  children,
}) => {
  return (
    <Section>
      <ContentWrapper>
        <StickyImage imgUrl={imgUrl} />
        <OverlayCopy heading={heading} subheading={subheading} />
      </ContentWrapper>
      {children}
      <DiscoveryWrapper>{discoveryText}</DiscoveryWrapper>
    </Section>
  );
};

const Section = styled.section`
  padding-left: 12px;
  padding-right: 12px;
`;

const ContentWrapper = styled.div`
  position: relative;
  height: 150vh;
`;

const StickyImage = ({ imgUrl }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <ImageWrapper
      ref={targetRef}
      style={{
        backgroundImage: `url(${imgUrl})`,
        scale,
      }}
    >
      <Overlay style={{ opacity }} />
    </ImageWrapper>
  );
};

const ImageWrapper = styled(motion.div)`
  background-size: cover;
  background-position: center;
  height: calc(100vh - 24px);
  position: sticky;
  top: 12px;
  z-index: 0;
  overflow: hidden;
  border-radius: 1.5rem;
`;

const Overlay = styled(motion.div)`
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.6);
`;

const OverlayCopy = ({ subheading, heading }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [200, -200]);
  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

  return (
    <CopyWrapper
      ref={targetRef}
      style={{
        y,
        opacity,
      }}
    >
      <Subheading>{subheading}</Subheading>
      <Heading>{heading}</Heading>
    </CopyWrapper>
  );
};

const CopyWrapper = styled(motion.div)`
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${theme.white};
`;

const Subheading = styled.p`
  margin-bottom: 1rem;
  text-align: center;
  font-size: 1.25rem;
  font-weight: 500;
  color: ${theme.secondaryContrast};

  @media (min-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
  }
`;

const Heading = styled.h1`
  text-align: center;
  font-size: 2rem;
  font-weight: 800;
  color: ${theme.white};

  @media (min-width: 768px) {
    font-size: 3rem;
  }
`;

// Example Content (Unique for each image)
const ExampleContent = ({
  content,
  learnMoreLink,
  learnMoreText,
  linkcontent,
}) => (
  <Content>
    <HeadingWrapper>{learnMoreText}</HeadingWrapper>
    <ContentText>
      <p>{content}</p>
      <ActionButton to={learnMoreLink}>
        {linkcontent} <FiArrowUpRight />
      </ActionButton>
    </ContentText>
  </Content>
);

const Content = styled.div`
  max-width: 80rem;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  padding: 2rem 1rem;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 2fr;
    padding: 3rem 2rem 6rem;
  }
`;

const HeadingWrapper = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  color: ${theme.main};

  @media (min-width: 768px) {
    font-size: 2.5rem;
  }
`;

const ContentText = styled.div`
  color: #4b5563;

  p {
    margin-bottom: 1.5rem;
    font-size: 1rem;

    @media (min-width: 768px) {
      font-size: 1.25rem;
    }
  }
`;

const ActionButton = styled(NavLink)`
  width: 100%;
  padding: 0.75rem 2rem;
  font-size: 1rem;
  color: ${theme.white};
  background-color: ${theme.main};
  border: none;
  border-radius: 0.5rem;
  transition: background-color 0.3s ease, transform 0.2s ease;
  text-decoration: none; /* Ensures no underline */

  &:hover {
    background-color: ${theme.secondary};
  }

  &:active {
    transform: scale(0.95);
  }

  svg {
    margin-left: 0.5rem;
  }
`;

const DiscoveryWrapper = styled.div`
  font-size: 1.25rem;
  font-weight: 700;
  color: ${theme.secondaryContrast};
  text-align: center;
  padding: 2rem 1rem;

  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`;
