import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Hero from "../components/content-blocks/hero";
import TeamDetails from "../components/content-blocks/team-details/team-details";
import ProductDetails from "../components/content-blocks/product-details/product-details";
import ParallaxImageDescription from "../components/content-blocks/parallax-image-description/parallax-image-description";
import GetInTouch from "../components/content-blocks/get-in-touch/get-in-touch";
import { useStaticQuery } from "gatsby";

const IndexPage = () => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(
        relativePath: { eq: "briana-autran-bptystWzHho-unsplash.jpg" }
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
      <SEO title="Home" />
      <Hero image={image}>
        <>
          <h1>New Age Photography</h1>
          <h2>Seeing the World, Through the Eyes of Our Lens</h2>
        </>
      </Hero>
      <ProductDetails />
      <ParallaxImageDescription />
      <TeamDetails />
      <GetInTouch />
    </Layout>
  );
};

export default IndexPage;
