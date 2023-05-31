const dark = "#121212";
const light = "#F4F4F4";
const color1 = "#87CEFA";
const color2 = "#333333";
const color3 = "#B4DAFF";
const color4 = "#ADD8E6";

const color = {
  light: {
    primary: light,
    secondary: dark,
    contrast: color3,
    contrast2: color2,
    contrast3: color1,
    contrast4: color4,
  },

  dark: {
    primary: dark,
    secondary: light,
    contrast: color2,
    contrast2: color1,
    contrast3: color3,
    contrast4: color4,
  },
};

const theme = {
  color,
};

export default theme;
