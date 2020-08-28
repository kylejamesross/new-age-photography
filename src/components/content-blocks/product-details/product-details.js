import React from "react";
import styled from "@emotion/styled";
import ContentLayout from "../../content-layout";
import { useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import { graphql } from "gatsby";
import ProductDetail from "./product-detail";

const StyledProductDetails = styled.div`
  padding: 1rem;
  > div:nth-child(even) {
    @media (min-width: 800px) {
      grid-template-columns: 0.25fr 0.75fr;
      > div:nth-of-type(1) {
        order: 1;
      }
    }
  }
`;

const ProductDetails = () => {
  const { wedding, engagement } = useStaticQuery(graphql`
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
      engagement: file(
        relativePath: { eq: "nathan-dumlao-wok8ytqf-qM-unsplash.jpg" }
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
          to="/weddings/"
          isOdd
        />
        <ProductDetail
          header="Lets experience the moment"
          body="We want to create that date that you will never forget. We specialize in photographing couple and portraying the reason why the couple is together. Its recommend that you dress up to make the experience even more special.
            "
          img={engagement.sharp.fluid}
          imgAlt="engagement section"
          to="/engagements/"
        />
      </StyledProductDetails>
    </ContentLayout>
  );
};

export default ProductDetails;
