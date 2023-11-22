import {
  Checkbox,
  Modal,
  TextInput,
  Textarea,
  Title,
  createTheme,
  rem,
} from "@mantine/core";
import classes from "src/assets/css/Mantine.module.css";

export const theme = createTheme({
  fontFamily: "Inter",
  fontSizes: {
    xxs: rem(10),
    xs: rem(13),
    sm: rem(15),
    md: rem(16),
    lg: rem(18),
    xl: rem(20),
    xxl: rem(22),
  },
  spacing: {
    lg: rem(51),
    xl: rem(68),
  },
  radius: {
    xxs: rem(1),
    xs: rem(3),
    sm: rem(5),
  },
  shadows: {},
  colors: {
    "primitive-gray": [
      "#FFFFFF",
      "#F1F2F3",
      "#EEEEEE",
      "#E1E1E1",
      "#E1E1E1",
      "#9E9E9E",
      "#606060",
      "#9E9E9E",
      "#212121",
      "#272727",
    ],
    "primitive-blue": [
      "#E7F5FF",
      "#E5E6E7",
      "#A5D8FF",
      "#74C0FC",
      "#4DABF7",
      "#2543CF",
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
        input: classes.input,
        label: classes.label,
      },
    }),
    Textarea: Textarea.extend({
      classNames: {
        input: classes.input,
        label: classes.label,
      },
    }),
    Checkbox: Checkbox.extend({
      classNames: {
        root: classes.root,
        label: classes.checkbox_label,
        icon: classes.checkbox_icon,
      },
    }),
    Modal: Modal.extend({
      classNames: {
        root: classes.root,
        title: classes.modaltitle,
        content: classes.modalcontent,
        body: classes.modalbody,
      },
    }),
    Title: Title.extend({
      classNames: {
        root: classes.heading,
      },
    }),
  },
  other: {
    fontWeight: {},
  },
});
