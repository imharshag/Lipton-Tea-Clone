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
        "https://cdn.pixabay.com/photo/2018/03/01/09/51/tea-3190241_1280.jpg",
      subheading: "Lipton Tea",
      heading: "Enjoy the taste of the world's No.1 tea",
      content:
        "Discover the rich, aromatic flavors of the world’s No.1 tea, known for its unmatched quality and exquisite taste. Savor every sip of this premium blend for an exceptional tea experience.",
      learnMoreText: "Unmatched Flavor in Every Sip",
      learnMoreLink: "https://en.wikipedia.org/wiki/Lipton",
      linkcontent: "Learn More",
    },
    {
      imgUrl:
        "https://cdn.pixabay.com/photo/2016/03/05/23/02/teacup-1239437_960_720.jpg",
      subheading: "Tea Store",
      heading: "Don't knock it 'til you've tried it!",
      content:
        "Shop with us for the finest teas, sourced with care and crafted for quality. Enjoy a seamless shopping experience and bring home the perfect brew.",
      learnMoreText: "Explore our exclusive collection",
      learnMoreLink: "/shop",
      linkcontent: "Shop With Us",
    },
    {
      imgUrl:
        "https://images.pexels.com/photos/8329266/pexels-photo-8329266.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      subheading: "Flavora",
      heading: "Dress for the best.",
      content:
        "Delight in Lipton's exquisite range of flavors, expertly crafted to provide a refreshing and satisfying taste in every sip, bringing you the perfect tea experience.",
      learnMoreText: "Modern flavors, timeless refreshment",
      learnMoreLink: "/shop",
      linkcontent: "Discover",
    },
    {
      imgUrl:
        "https://images.pexels.com/photos/1298613/pexels-photo-1298613.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      subheading: "Let's Go!",
      heading: "Your Perfect Brew, Just a Click Away!.",
      content:
        "You're almost done! Review your cart, finalize your selections, and secure your order for a seamless shopping experience",
      learnMoreText: "Cart’s waiting, grab it Now!",
      learnMoreLink: "/cart",
      linkcontent: "Check Out!",
    },
    {
      imgUrl:
        "https://images.pexels.com/photos/9795359/pexels-photo-9795359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      subheading: "Innovation",
      heading: "Creating Value for All.",
      content:
        "Our purpose, as the world’s largest tea company, is to create value for tea-loving consumers to workers in the fields and everyone in between. We are committed to delivering positive social and environmental impact throughout our supply chain and beyond.",
      learnMoreText: "Unlocking tea's true value",
      learnMoreLink: "https://github.com/imharshag",
      linkcontent: "Github",
    },
    {
      imgUrl:
        "https://cdn.pixabay.com/photo/2017/02/24/07/54/moc-chau-tea-hills-2094184_1280.jpg",
      subheading: "Inspiration",
      heading: "Fuel your creativity.",
      content:
        "For more details, insights, and to explore my projects, check out my portfolio and see how I bring ideas to life through innovative solutions.",
      learnMoreText: "Check out My Portfolio",
      learnMoreLink: "https://harshag.vercel.app/",
      linkcontent: "My Porfolio",
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
  children,
}) => {
  return (
    <Section>
      <ContentWrapper>
        <StickyImage imgUrl={imgUrl} />
        <OverlayCopy heading={heading} subheading={subheading} />
      </ContentWrapper>
      {children}
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

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
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
  background-color: rgba(0, 0, 0, 0.3);
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
  color: --contrast;
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
  width: fit-content;
  padding: 0.75rem 2rem;
  font-size: 1rem;
  color: ${theme.white};
  background: linear-gradient(120deg, ${theme.main}, ${theme.secondary});
  border: none;
  border-radius: 0.5rem;
  text-decoration: none;
  transition: all 0.4s ease;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }

  &:active {
    transform: scale(0.95);
  }

  svg {
    transition: transform 0.3s ease;
  }

  &:hover svg {
    transform: translateX(3px);
  }
`;
