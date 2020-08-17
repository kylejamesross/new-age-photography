import React from "react";
import styled from "@emotion/styled";
import Img from "gatsby-image";

const StyledCard = styled.div`
  width: 275px;
  padding: 1rem;
  justify-self: center;
  h3,
  h5 {
    text-align: center;
  }
`;

const CardImg = styled(Img)`
  width: 150px;
  border-radius: 50%;
  margin: 0 auto;
  display: block;
`;

const CardHeader = styled.h3`
  margin-bottom: 0;
`;

const CardSubHeader = styled.h5`
  margin-top: 0.5rem;
  color: ${({ theme }) => theme.colors.silver};
`;

const Card = ({ img, imgAlt, header, subHeader, body }) => (
  <StyledCard>
    <CardImg fluid={img} fadeIn="soft" alt={imgAlt} />
    <CardHeader>{header}</CardHeader>
    <CardSubHeader>{subHeader}</CardSubHeader>
    <p>{body}</p>
  </StyledCard>
);

export default Card;
