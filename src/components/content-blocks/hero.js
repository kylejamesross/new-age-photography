import BackgroundImage from "gatsby-background-image";
import styled from "@emotion/styled";
import React from "react";

const HeroImage = styled(BackgroundImage)`
  width: 100%;
  height: 90vh;
  max-height: 1000px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TextBox = styled.div`
  max-width: 600px;
  text-align: center;
  padding: 0 1rem;
  h1,
  h2 {
    color: ${({ theme }) => theme.colors.white};
    text-shadow: 0.15rem 0.2rem 0.15rem rgba(0, 0, 0, 0.3);
  }
`;

const Hero = ({ image, children }) => {
  return (
    <HeroImage Tag="section" fluid={image.sharp.fluid} fadeIn="soft">
      <TextBox>{children}</TextBox>
    </HeroImage>
  );
};

export default Hero;
