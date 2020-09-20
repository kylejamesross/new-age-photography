import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { useStaticQuery } from "gatsby";
import Hero from "../components/content-blocks/hero";
import Portfolio from "../components/content-blocks/portfolio/portfolio";
import GetInTouch from "../components/content-blocks/get-in-touch/get-in-touch";

const Weddings = () => {
  const imageData = useStaticQuery(graphql`
    query {
      images: allFile(filter: { relativeDirectory: { eq: "weddings" } }) {
        edges {
          node {
            sharp: childImageSharp {
              fluid(quality: 90, maxWidth: 300) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
      image: file(
        relativePath: { eq: "anna-utochkina-QUi84upBhoc-unsplash.jpg" }
      ) {
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
      <SEO title="Weddings" />
      <Hero image={imageData.image}>
        <>
          <h1>Weddings</h1>
          <h2>Embrace your perfect day</h2>
        </>
      </Hero>
      <Portfolio data={imageData.images} />
      <GetInTouch />
    </Layout>
  );
};

export default Weddings;
