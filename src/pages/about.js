import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Hero from "../components/content-blocks/hero";
import { useStaticQuery } from "gatsby";
import TeamDetails from "../components/content-blocks/team-details/team-details";
import TextBlock from "../components/content-blocks/text-block/text-block";
import GetInTouch from "../components/content-blocks/get-in-touch/get-in-touch";

const About = () => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "kaleidico-wnf_LJiJG0E-unsplash.jpg" }) {
        sharp: childImageSharp {
          fluid(quality: 90, maxWidth: 2560) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <SEO title="About" />
      <Hero image={image}>
        <>
          <h1>About us</h1>
          <h2>Let us introduce ourselves</h2>
        </>
      </Hero>
      <TextBlock>
        <h3>New Age Photography is an award winning photography studio.</h3>
        <p>
          We work together to create and produce work that we are proud of for
          folks that we believe in. We are available for hire in a wide range of
          creative disciplines for a variety of jobs, projects and gigs.
        </p>
        <p>
          Using both digital and film photography, We strive to capture the
          emotions and rawness of your day and combine that with desire to
          create aesthetically beautiful imagery. We don't only offer couples
          beautiful photographs, we give them a wonderful experience. This
          covers everything from helping create a perfect schedule, finding the
          best photo locations and suggesting vendors to the actual wedding day
          and where we are fixing your wedding gown, keeping you warm, wow-ing
          your family and bridal party with our efficiency, and getting you 75+
          sneak peek images within a week of the wedding. We go above and beyond
          for couples.
        </p>
      </TextBlock>
      <TeamDetails />
      <GetInTouch />
    </Layout>
  );
};

export default About;
