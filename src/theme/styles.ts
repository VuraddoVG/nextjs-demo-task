import { colors } from "./foundations";

export const overrides = {
  styles: {
    global: {
      body: {
        fontFamily:
          "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",
        bg: colors.BG,
        color: colors.TEXT,
        padding: 0,
        margin: 0,
      },
      "*": {
        boxSizing: "border-box",
      },
      a: {
        color: "inherit",
        "text-decoration": "none",
      },
    },
  },
};
