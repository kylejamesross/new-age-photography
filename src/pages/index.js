import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Hero from "../components/content-blocks/hero";
import TeamDetails from "../components/content-blocks/team-details/team-details";
import ProductDetails from "../components/content-blocks/product-details/product-details";
import ParallaxImageDescription from "../components/content-blocks/parallax-image-description/parallax-image-description";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <ProductDetails />
    <ParallaxImageDescription />
    <TeamDetails />
  </Layout>
);

export default IndexPage;
