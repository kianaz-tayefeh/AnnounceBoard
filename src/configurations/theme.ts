import { createTheme, rem } from "@mantine/core";
// import classes from "src/assets/css/Demo.module.css";

export const theme = createTheme({
  fontFamily: "Inter",
  fontSizes: {
    md: rem(15),
    sm: rem(13),
    xs: rem(10),
  },
  colors: {
    "premitive-gray": [
      "#606060",
      "#606060",
      "#606060",
      "#606060",
      "#606060",
      "#606060",
      "#606060",
      "#606060",
      "#606060",
      "#606060",
    ],
    "primitive-blue": [
      "#2543CF",
      "#2543CF",
      "#2543CF",
      "#2543CF",
      "#2543CF",
      "#2543CF",
      "#2543CF",
      "#2543CF",
      "#2543CF",
      "#2543CF",
    ],
    "primitive-green": [
      "#298545",
      "#298545",
      "#298545",
      "#298545",
      "#298545",
      "#298545",
      "#298545",
      "#298545",
      "#298545",
      "#298545",
    ],
    "primitive-red": [
      "#E8214C",
      "#E8214C",
      "#E8214C",
      "#E8214C",
      "#E8214C",
      "#E8214C",
      "#E8214C",
      "#E8214C",
      "#E8214C",
      "#E8214C",
    ],
  },
  // components: {
  //   TextInput: TextInput.extend({
  //     classNames: {
  //       label: classes.label,
  //     },
  //   }),
  // },
  headings: {
    sizes: {
      h5: {
        fontWeight: "600",
        lineHeight: "1.5",
      },
    },
  },
});
