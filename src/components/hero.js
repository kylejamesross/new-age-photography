/** @jsx jsx */
import { jsx } from "theme-ui";
import BackgroundImage from "gatsby-background-image";
import { useStaticQuery } from "gatsby";
import styled from "@emotion/styled";
import { Heading } from "theme-ui";

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
`;

const Hero = () => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "owen-wen-yZQlkA7JNug-unsplash.jpg" }) {
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
        <Heading
          sx={{
            textShadow: "2px 4px 3px rgba(0,0,0,0.3)",
          }}
          variant="styles.h1.light"
          as="h1"
        >
          New Age Photography
        </Heading>
        <Heading
          sx={{ textShadow: "2px 4px 3px rgba(0,0,0,0.3)" }}
          variant="styles.h2.light"
          as="h2"
        >
          Seeing the World, Through the Eyes of My Lens
        </Heading>
      </TextBox>
    </HeroImage>
  );
};

export default Hero;
