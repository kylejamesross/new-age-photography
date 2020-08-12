import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Hero from "../components/hero";
import { Heading } from "theme-ui";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Heading as="h1">Page header 1</Heading>
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas
      praesentium nisi incidunt nostrum placeat odit rerum ex. Ipsa excepturi
      quia delectus provident voluptates asperiores, ratione eveniet quasi non
      explicabo perspiciatis.
    </p>
    <h2>Page header 2</h2>
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia
      laudantium reiciendis, unde quisquam totam ullam suscipit quam maiores,
      odit sit consequuntur. Officiis, iste ab? Recusandae at ratione quaerat ad
      exercitationem!
    </p>
  </Layout>
);

export default IndexPage;
