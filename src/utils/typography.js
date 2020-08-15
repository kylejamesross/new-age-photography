import Typography from "typography";
import grandViewTheme from "typography-theme-grand-view";

grandViewTheme.baseFontSize = "16px";
grandViewTheme.bodyColor = "#2d3436";
grandViewTheme.overrideThemeStyles = ({ rhythm }, options) => ({
  "h1,h2,h3,h4,h5,h6": {
    marginTop: rhythm(1),
  },
});

const typography = new Typography(grandViewTheme);

export default typography;
