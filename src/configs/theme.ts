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
      "#FFFFFF",
      "#F1F2F3",
      "#C7C7C7",
      "#E7F6EC40",
      "#E1E1E1",
      "#5C5C5C",
      "#606060",
      "#9E9E9E",
      "#212121",
      "#9E9E9E",
    ],
    "primitive-blue": [
      "#E7F5FF",
      "#E5E6E7",
      "#A5D8FF",
      "#74C0FC",
      "#4DABF7",
      "#339AF0",
      "#2543CF",
      "#1864AB",
      "#1864AB",
      "#1864AB",
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
