import { alertAnatomy } from '@chakra-ui/anatomy';
import {
  createMultiStyleConfigHelpers,
  defineStyle
} from '@chakra-ui/styled-system';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(alertAnatomy.keys);
const FW = ['8px', '12px', '16px'];
const LH = [0.9, 1.2, 1.5];

const baseStyle = definePartsStyle({
  container: {
    color: 'DASHBOARD_BG',
    bg: 'LIGHT_BLUE',
    _dark: {
      borderTopColor: 'DARK_BLUE'
    },
    borderRadius: '10px',
    justifyContent: 'space-between'
  },
  icon: {
    color: 'DARK_BLUE',
    alignSelf: 'start'
  },
  title: {
    fontWeight: 'bold',
    fontSize: [...FW, '20px'],
    lineHeight: LH
  },
  description: {
    fontWeight: 'medium',
    fontSize: FW,
    lineHeight: LH
  }
});

const size = {
  md: defineStyle({
    w: 5,
    h: 5
  })
};

const sizes = {
  md: definePartsStyle({
    icon: size.md
  })
};

export const alertTheme = defineMultiStyleConfig({
  baseStyle,
  sizes
});
