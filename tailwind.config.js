/*global require, module*/
/*eslint no-undef: "error"*/
const withMT = require("@material-tailwind/react/utils/withMT");
 module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        russoOne:["Russo One"],
        inter:["Inter"],
        petitFormal:["Petit Formal Script"]
      }
    },
  },
  plugins: [],
});