import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Hero from "../components/content-blocks/hero";
import GetInTouch from "../components/content-blocks/get-in-touch/get-in-touch";
import { useStaticQuery } from "gatsby";

const RequestAQuote = () => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(
        relativePath: { eq: "alejandro-escamilla-y83Je1OC6Wc-unsplash.jpg" }
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
      <SEO title="Request a quote" />
      <Hero image={image}>
        <>
          <h1>Request a quote</h1>
          <h2>We would love to work with you</h2>
        </>
      </Hero>
      <GetInTouch />
    </Layout>
  );
};

export default RequestAQuote;
