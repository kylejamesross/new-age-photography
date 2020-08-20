import React from "react";
import styled from "@emotion/styled";
import Img from "gatsby-image";

const StyledProductDetail = styled.div`
  display: grid;
  grid-gap: 1rem;
  margin: 1rem 0;
  > div:nth-child(2) {
    grid-row: 1 / 2;
  }
  > div:nth-child(1) {
    grid-row: 2 / 3;
  }

  @media (min-width: 800px) {
    grid-template-columns: 0.75fr 0.25fr;
    align-items: center;
    justify-content: center;
    justify-items: center;
    height: 250px;
    > div:nth-child(1),
    > div:nth-child(2) {
      grid-row: 1 / 2;
    }
  }
`;

const ProductDetailImg = styled(Img)`
  border-radius: 1rem;
  width: 100%;
  max-width: 250px;
  justify-self: center;
`;

const P = styled.p`
  max-width: 700px;
`;

const ProductDetail = ({ header, body, img, imgAlt }) => (
  <StyledProductDetail>
    <div>
      <h3>{header}</h3>
      <P>{body}</P>
    </div>
    <ProductDetailImg fluid={img} alt={imgAlt} />
  </StyledProductDetail>
);

export default ProductDetail;
