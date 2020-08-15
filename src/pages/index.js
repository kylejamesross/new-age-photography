import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Hero from "../components/content-blocks/hero";
import TeamDetails from "../components/content-blocks/team-details";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <TeamDetails />
  </Layout>
);

export default IndexPage;
