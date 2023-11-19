import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { theme } from "src/theme";
import { AnnounceDetail } from "src/components/pages/AnnounceDetail";

export default function App() {
  const x = 1;
  const x = 3;
  return (
    <MantineProvider theme={theme}>
      <AnnounceDetail />
    </MantineProvider>
  );
}
