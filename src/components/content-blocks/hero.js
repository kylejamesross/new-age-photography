import BackgroundImage from "gatsby-background-image";
import { useStaticQuery } from "gatsby";
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

const Hero = () => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(
        relativePath: { eq: "holger-link-Hc1JMS41EyY-unsplash.jpg" }
      ) {
        sharp: childImageSharp {
          fluid(quality: 90, maxWidth: 2560) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  return (
    <HeroImage Tag="section" fluid={image.sharp.fluid} fadeIn="soft">
      <TextBox>
        <h1>New Age Photography</h1>
        <h2>Seeing the World, Through the Eyes of My Lens</h2>
      </TextBox>
    </HeroImage>
  );
};

export default Hero;
