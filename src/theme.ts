import { TextInput, createTheme } from "@mantine/core";
import classes from "src/assets/css/Demo.module.css";

export const theme = createTheme({
  fontFamily: "Inter",
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
  },
  components: {
    TextInput: TextInput.extend({
      classNames: {
        label: classes.label,
      },
    }),
  },
  headings: {
    sizes: {
      h4: {
        fontWeight: "600",
        lineHeight: "1.5",
      },
      h5: {
        fontWeight: "600",
        lineHeight: "1.5",
      },
    },
  },
});
