import React from "react";
import H2 from "../../general/H2";
import ContentLayout from "../../content-layout";
import styled from "@emotion/styled";
import Img from "gatsby-image";

const PortfolioGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  justify-content: center;
  grid-gap: 1rem;
  padding: 1.4rem 1rem;
`;

const Image = styled(Img)`
  width: 300px;
  height: auto;
  background-color: red;
  margin: 0 auto;
`;

const Portfolio = ({ data }) => {
  const images = data.edges.map(edge => edge.node.sharp.fluid);

  return (
    <ContentLayout>
      <H2>Portfolio</H2>
      <PortfolioGrid>
        {images.map(fluid => (
          <div key={fluid.src}>
            <Image fluid={fluid} />
          </div>
        ))}
      </PortfolioGrid>
    </ContentLayout>
  );
};

export default Portfolio;
