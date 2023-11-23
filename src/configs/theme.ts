import {
  Checkbox,
  Modal,
  TextInput,
  Textarea,
  Title,
  createTheme,
  rem,
  Button,
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
  radius: {
    xxs: rem(1),
    xs: rem(3),
    sm: rem(5),
  },
  colors: {
    "primitive-gray": [
      "#FFFFFF",
      "#F1F2F3",
      "#EEEEEE",
      "#E1E1E1",
      "#5c5c5c",
      "#9E9E9E",
      "#606060",
      "#9E9E9E",
      "#212121",
      "#272727",
    ],
    "primitive-green": [
      "#E7F6EC40",
      "#E7F6EC40",
      "#E7F6EC40",
      "#A2DAB2",
      "#A2DAB2",
      "#A2DAB2",
      "#298545",
      "#298545",
      "#298545",
      "#298545",
    ],
    "primitive-red": [
      "#FEE4E940",
      "#FEE4E940",
      "#FEE4E940",
      "#FBBAC7",
      "#FBBAC7",
      "#FBBAC7",
      "#E8214C",
      "#E8214C",
      "#E8214C",
      "#E8214C",
    ],
    "primitive-blue": [
      "#FFFFFF",
      "#C6CAEC",
      "#A5D8FF",
      "#74C0FC",
      "#4DABF7",
      "#2543CF",
      "#2543CF",
      "#1864AB",
      "#1864AB",
      "#1864AB",
    ],
  },
  components: {
    Button: Button.extend({
      classNames: {
        root: classes.button_root,
        label: classes.button_label,
      },
    }),
    Checkbox: Checkbox.extend({
      classNames: {
        input: classes.checkbox_input,
        root: classes.checkbox_root,
        label: classes.checkbox_label,
        icon: classes.checkbox_icon,
      },
    }),
    Modal: Modal.extend({
      classNames: {
        content: classes.modal_content,
        header: classes.modal_header,
        body: classes.modal_body,
      },
    }),
    Title: Title.extend({
      classNames: {
        root: classes.heading,
      },
    }),
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
  },
  other: {
    fontWeight: {},
  },
});
