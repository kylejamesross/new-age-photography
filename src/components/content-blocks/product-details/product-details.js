import React from "react";
import styled from "@emotion/styled";
import ContentLayout from "../../content-layout";
import { useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import { graphql } from "gatsby";
import ProductDetail from "./product-detail";

const StyledProductDetails = styled.div`
  padding: 1rem;
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
      <StyledProductDetails>
        <ProductDetail
          header="Wedding Perfection!"
          body="We are a studio of talented Calgary Wedding Photographers, headed
              by Lead Photographer and Owner, Nicole. We feel honoured to meet
              and develop friendships with our clients while creating beautiful
              artwork. Your wedding is a unique reflection of you, that's why we
              love getting to know you personally which enables us to create
              authentic images that reflect the real you.
            "
          img={wedding.sharp.fluid}
          imgAlt="wedding section"
          isOdd
        />
        <ProductDetail
          header="Wedding Perfection!"
          body="We are a studio of talented Calgary Wedding Photographers, headed
              by Lead Photographer and Owner, Nicole. We feel honoured to meet
              and develop friendships with our clients while creating beautiful
              artwork. Your wedding is a unique reflection of you, that's why we
              love getting to know you personally which enables us to create
              authentic images that reflect the real you.
            "
          img={wedding.sharp.fluid}
          imgAlt="wedding section"
        />
      </StyledProductDetails>
    </ContentLayout>
  );
};

export default ProductDetails;
