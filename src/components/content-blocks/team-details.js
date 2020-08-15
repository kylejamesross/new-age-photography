import React from "react";
import ContentLayout from "../content-layout";
import { useStaticQuery } from "gatsby";
import styled from "@emotion/styled";
import { graphql } from "gatsby";
import Img from "gatsby-image";

const Card = styled.div`
  margin: 0 auto;
  width: 275px;
  height: 400px;
  padding: 1rem;
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

const Grid = styled.div`
  display: grid;
  grid-gap: 1rem;
  justify-content: center;
  @media (min-width: 550px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 1100px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

const TeamDetails = props => {
  const { photographer } = useStaticQuery(graphql`
    query {
      photographer: file(
        relativePath: { eq: "kinga-cichewicz-HHw9lc0ogIs-unsplash.jpg" }
      ) {
        sharp: childImageSharp {
          fluid(quality: 90, maxWidth: 150) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  return (
    <section>
      <ContentLayout>
        <Grid>
          <Card>
            <CardImg
              fluid={photographer.sharp.fluid}
              fadeIn="soft"
              alt="photographer"
            />
            <CardHeader>Kendall Jenner</CardHeader>
            <CardSubHeader>Photographer</CardSubHeader>
            <p>
              You can write here details about one of your team members. You can
              give more details about what they do. Feel free to add some links
              for people to be able to follow them outside the site.
            </p>
          </Card>
          <Card>
            <CardImg
              fluid={photographer.sharp.fluid}
              fadeIn="soft"
              alt="photographer"
            />
            <CardHeader>Kendall Jenner</CardHeader>
            <CardSubHeader>Photographer</CardSubHeader>
            <p>
              You can write here details about one of your team members. You can
              give more details about what they do. Feel free to add some links
              for people to be able to follow them outside the site.
            </p>
          </Card>
          <Card>
            <CardImg
              fluid={photographer.sharp.fluid}
              fadeIn="soft"
              alt="photographer"
            />
            <CardHeader>Kendall Jenner</CardHeader>
            <CardSubHeader>Photographer</CardSubHeader>
            <p>
              You can write here details about one of your team members. You can
              give more details about what they do. Feel free to add some links
              for people to be able to follow them outside the site.
            </p>
          </Card>
          <Card>
            <CardImg
              fluid={photographer.sharp.fluid}
              fadeIn="soft"
              alt="photographer"
            />
            <CardHeader>Kendall Jenner</CardHeader>
            <CardSubHeader>Photographer</CardSubHeader>
            <p>
              You can write here details about one of your team members. You can
              give more details about what they do. Feel free to add some links
              for people to be able to follow them outside the site.
            </p>
          </Card>
        </Grid>
      </ContentLayout>
    </section>
  );
};

export default TeamDetails;
