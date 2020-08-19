import React from "react";
import styled from "@emotion/styled";
import ContentLayout from "../../content-layout";
import { useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import { graphql } from "gatsby";

const StyledProducts = styled.div`
  padding: 1rem;
`;

const StyledProduct = styled.div`
  display: grid;
  grid-gap: 1rem;
  align-items: center;
  justify-content: center;

  p {
    width: 700px;
  }

  @media (min-width: 500px) {
    grid-template-columns: 0.75fr 0.25fr;
    align-items: center;
    justify-content: center;
    height: 250px;
  }
`;

const ProductImg = styled(Img)`
  border-radius: 1rem;
  max-width: 250px;
`;

const ProductDetails = () => {
  const { wedding } = useStaticQuery(graphql`
    query {
      wedding: file(
        relativePath: { eq: "vitor-pinto-3bAJYaK37yE-unsplash.jpg" }
      ) {
        sharp: childImageSharp {
          fluid(quality: 90, maxHeight: 450) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  return (
    <ContentLayout>
      <StyledProducts>
        <StyledProduct>
          <div>
            <h3>Wedding Perfection!</h3>
            <p>
              We are a studio of talented Calgary Wedding Photographers, headed
              by Lead Photographer and Owner, Nicole. We feel honoured to meet
              and develop friendships with our clients while creating beautiful
              artwork. Your wedding is a unique reflection of you, that's why we
              love getting to know you personally which enables us to create
              authentic images that reflect the real you.
            </p>
          </div>
          <ProductImg fluid={wedding.sharp.fluid} alt="wedding section" />
        </StyledProduct>
      </StyledProducts>
    </ContentLayout>
  );
};

export default ProductDetails;
