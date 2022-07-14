import { extendTheme } from "@chakra-ui/react";

const portfolioTheme = extendTheme({
  config: {
    initialColorMode: "light",
  },
  colors: {
    background: "#F5F6FA",
    brand: {
      primary: "#2973B8",
      primaryDark: "#0E2A67",
      primary10: "rgba(40, 115, 184, 0.1)",
      primary20: "rgba(40, 115, 184, 0.2)",
      primaryHover: "#335b97",
      secondary: "#288484",
      secondaryDark: "#174D4C",
      tertiary: "#EFC650",
      gray1: "#2F3341",
      gray2: "#696C78",
      gray3: "#ACAEB4",
      gray4: "#D6D8DD",
      gray5: "#F5F6FA",
      purple: "#9129B8",
      green: "#086F6E",
      greenDark: "#78AE3A",
    },
  },
  fonts: {
    heading: "inter",
    body: "inter",
  },
  fontSizes: {},
  textStyles: {
    h1: {
      fontSize: "40px",
    },
    h2: {
      fontSize: "32px",
    },
    h3: {
      fontSize: "28px",
      fontWeight: "400",
    },
    h4: {
      fontSize: "24px",
    },
    h5: {
      fontSize: "20px",
    },
    p: {
      fontSize: "16px",
    },
    small: {
      fontSize: "10px",
    },
  },
  breakpoints: {
    sm: "320px",
    md: "768px",
    lg: "960px",
    xl: "1200px",
  },
});

export default portfolioTheme;
