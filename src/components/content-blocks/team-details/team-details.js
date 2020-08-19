import React from "react";
import ContentLayout from "../../content-layout";
import { useStaticQuery } from "gatsby";
import styled from "@emotion/styled";
import { graphql } from "gatsby";
import Card from "./card";
import H2 from "../../general/H2";

const Grid = styled.div`
  display: grid;
  grid-gap: 1rem;
  justify-content: center;
  @media (min-width: 550px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

const TeamDetails = props => {
  const {
    teamMember1,
    teamMember2,
    teamMember3,
    teamMember4,
  } = useStaticQuery(graphql`
    query {
      teamMember1: file(
        relativePath: { eq: "kinga-cichewicz-HHw9lc0ogIs-unsplash.jpg" }
      ) {
        sharp: childImageSharp {
          fluid(quality: 90, maxWidth: 150) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      teamMember2: file(
        relativePath: { eq: "angello-pro-IegYaCY101s-unsplash.jpg" }
      ) {
        sharp: childImageSharp {
          fluid(quality: 90, maxWidth: 150) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      teamMember3: file(
        relativePath: { eq: "clem-onojeghuo-jUAcCtbMb0k-unsplash.jpg" }
      ) {
        sharp: childImageSharp {
          fluid(quality: 90, maxWidth: 150) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      teamMember4: file(
        relativePath: { eq: "justin-essah-ZmeC1CgML60-unsplash.jpg" }
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
        <H2>The Team</H2>
        <Grid>
          <Card
            img={teamMember1.sharp.fluid}
            imgAlt="Julia Dawe"
            header="Julia Dawe"
            subHeader="Photographer"
            body="Julia has a huge passion for inspiring design and beautiful photography. She is a fourth year Multimedia student at University of Toronto. She interned at WeddingWorks Photography Studio and just recent started working part time as a Photographer"
          />
          <Card
            img={teamMember2.sharp.fluid}
            imgAlt="Archie Ferry"
            header="Archie Ferry"
            subHeader="Lead Photographer"
            body="Archie Ferry is an accomplished explorer, photographer, and creative director. Travelling throughout the year to purse the farthest expanses of Earth. He works to capture stories that inspire humans to consider their relationships with nature, while promoting the preservation of wild places everything."
          />
          <Card
            img={teamMember3.sharp.fluid}
            imgAlt="Cobie Barton"
            header="Cobie Barton"
            subHeader="Owner and Photographer"
            body="Cobie Barton studied photography in London, England before launching a professional photography business in 2009. His original background as an electrical engineer combined with his photographic training has enabled him to bring the best of digital photographic experience."
          />
          <Card
            img={teamMember4.sharp.fluid}
            imgAlt="photographer"
            header="Graphic Designer"
            subHeader="Photographer"
            body="Lydon Bernal is our longest-running employee, have been hired in December of 2009. Lydon is responsible for all things graphical, his unique and creative approach to design has been a key in sustaining the business."
          />
        </Grid>
      </ContentLayout>
    </section>
  );
};

export default TeamDetails;
