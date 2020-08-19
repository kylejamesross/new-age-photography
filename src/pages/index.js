import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Hero from "../components/content-blocks/hero";
import TeamDetails from "../components/content-blocks/team-details/team-details";
import ProductDetails from "../components/content-blocks/product-details/product-details";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <TeamDetails />
    <ProductDetails />
  </Layout>
);

export default IndexPage;
