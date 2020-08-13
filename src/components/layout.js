import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import Header from "./header";
import StylesProvider from "./styles-provider";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <StylesProvider>
      <Header />
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Kyle Ross All right reserved{" "}
      </footer>
    </StylesProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
