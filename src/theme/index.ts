// theme/index.ts

import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

// Foundations
import * as foundations from "./foundations";
import { overrides } from "./styles";

// Components
// import * as components from "./components";

// Chakra Configuration on Initial Mode
const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  ...overrides,
  ...foundations,
  // components: {
  //   ...components,
  // },
});

export default theme;
