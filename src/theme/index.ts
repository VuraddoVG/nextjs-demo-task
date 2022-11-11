// theme/index.ts

import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

// Foundations
import * as foundations from "./foundations";
import { overrides } from "./styles";

// Chakra Configuration on Initial Mode
const config: ThemeConfig = {
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  ...overrides,
  ...foundations,
});

export default theme;
