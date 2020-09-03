import Typography from "typography";
import wordpressKubrickTheme from "typography-theme-wordpress-kubrick";

wordpressKubrickTheme.baseFontSize = "16px";
wordpressKubrickTheme.bodyColor = "#2d3436";
wordpressKubrickTheme.overrideThemeStyles = ({ rhythm }, options) => ({
  "h1,h2,h3,h4,h5,h6": {
    marginTop: rhythm(1),
  },
  "ul li:before": {
    display: "none",
  },
  "a:visited": {
    color: "#06c",
  },
});

const typography = new Typography(wordpressKubrickTheme);

export default typography;
