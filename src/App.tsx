import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { theme } from "src/configs/theme";
import { Announcements } from "src/components/pages/Announcements";

export default function App() {
  return (
    <MantineProvider theme={theme}>
      <Announcements />
    </MantineProvider>
  );
}
