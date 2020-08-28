import React from "react";
import styled from "@emotion/styled";
import Img from "gatsby-image";
import { Link } from "gatsby";

const StyledProductDetail = styled.div`
  display: grid;
  grid-gap: 1rem;
  margin: 1rem 0;

  @media (min-width: 800px) {
    grid-template-columns: 0.75fr 0.25fr;
    align-items: center;
    justify-content: center;
    justify-items: center;
    height: 250px;
  }
`;

const ProductDetailImg = styled(Img)`
  border-radius: 1rem;
`;

const ImageLink = styled(Link)`
  border-radius: 1rem;
  width: 100%;
  max-width: 250px;
  justify-self: center;
`;

const P = styled.p`
  max-width: 700px;
`;

const ProductDetail = ({ header, body, img, imgAlt, to }) => (
  <StyledProductDetail>
    <div>
      <Link to={to}>
        <h3>{header}</h3>
      </Link>
      <P>{body}</P>
    </div>
    <ImageLink to={to}>
      <ProductDetailImg fluid={img} alt={imgAlt} />
    </ImageLink>
  </StyledProductDetail>
);

export default ProductDetail;
