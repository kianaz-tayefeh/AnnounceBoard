import { TextInput, Textarea, createTheme, rem } from "@mantine/core";
import classes from "src/assets/css/Mantine.module.css";

export const theme = createTheme({
  fontFamily: "Inter",
  fontSizes: {
    md: rem(15),
    sm: rem(13),
    xs: rem(10),
  },
  spacing: {
    lg: rem(51),
    xl: rem(68),
  },
  colors: {
    "primitive-gray": [
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
      "#C6CAEC",
      "#C6CAEC",
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
      "#A2DAB2",
      "#E7F6EC40",
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
      "#FBBAC7",
      "#FEE4E940",
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
  components: {
    TextInput: TextInput.extend({
      classNames: {
        label: classes.label,
      },
    }),
    Textarea: Textarea.extend({
      classNames: {
        label: classes.label,
      },
    }),
  },
  headings: {
    sizes: {
      h4: {
        fontSize: rem(20),
        fontWeight: "600",
        lineHeight: "1.5",
      },
    },
  },
});
