const dark = "#111111";
const light = "#F4F4F4";
const color1 = "#87CEFA";
const color2 = "#333333";
const color3 = "#87CEFA";

const color = {
  light: {
    primary: light,
    secondary: dark,
    contrast: color3,
    contrast2: color2,
    contrast3: color1,
    contrast4: light,
  },

  dark: {
    primary: dark,
    secondary: light,
    contrast: color2,
    contrast2: color2,
    contrast3: color2,
    contrast4: color2,
  },
};

const theme = {
  color,
};

export default theme;
