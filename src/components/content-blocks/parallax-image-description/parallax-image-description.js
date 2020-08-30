import React from "react";
import BackgroundImage from "gatsby-background-image";
import styled from "@emotion/styled";
import { useStaticQuery } from "gatsby";

const ParallaxImage = styled(BackgroundImage)`
  width: 100%;
  height: 300px;
  background-attachment: fixed;
`;

const TextBox = styled.div`
  max-width: 600px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  text-align: center;
`;

const H3 = styled.h3`
  color: ${({ theme }) => theme.colors.white};
  text-shadow: 0.15rem 0.2rem 0.15rem rgba(0, 0, 0, 0.3);
  margin-bottom: 0.5rem;
`;

const P = styled.p`
  color: ${({ theme }) => theme.colors.white};
  text-shadow: 0.15rem 0.2rem 0.15rem rgba(0, 0, 0, 0.3);
`;

const ParallaxImageDescription = () => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(
        relativePath: { eq: "allef-vinicius-DmUbkltYsKI-unsplash.jpg" }
      ) {
        sharp: childImageSharp {
          fluid(quality: 100, maxWidth: 2560) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  return (
    <ParallaxImage
      Tag="section"
      fluid={[
        "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4))",
        image.sharp.fluid,
      ]}
      fadeIn="soft"
    >
      <TextBox>
        <H3>
          With work featured in top publications, New Age Photography has been
          rated one of countries top wedding photographers.
        </H3>
        <P>-Top Photography Reviewers</P>
      </TextBox>
    </ParallaxImage>
  );
};

export default ParallaxImageDescription;
