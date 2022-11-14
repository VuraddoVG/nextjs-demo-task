// theme/index.ts
import { extendTheme, type ThemeConfig } from '@chakra-ui/react';

// Foundations
import * as foundations from './foundations';
import { overrides } from './styles';

// Components
import { alertTheme } from './components/alert';

// Chakra Configuration on Initial Mode
const config: ThemeConfig = {
  useSystemColorMode: false
};

const theme = extendTheme({
  config,
  ...overrides,
  ...foundations,
  components: {
    Alert: alertTheme
  }
});

export default theme;
