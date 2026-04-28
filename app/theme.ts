import {
  createSystem,
  defaultConfig,
  defineConfig,
  mergeConfigs,
} from "@chakra-ui/react";

const delaTheme = defineConfig({
  globalCss: {
    body: {
      margin: 0,
      overflowX: "hidden",
      cursor: "none",
      bg: "#0a0a0a",
      color: "#f5f0eb",
      fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
      fontWeight: "300",
    },
  },
  theme: {
    tokens: {
      colors: {
        dela: {
          black: { value: "#0a0a0a" },
          white: { value: "#f5f0eb" },
          red: { value: "#E9E2D8" },
          redDim: { value: "#cfc8bf" },
          cream: { value: "#ede8e1" },
          gray: { value: "#6b6560" },
          lightGray: { value: "#c8c2bb" },
        },
      },
      fonts: {
        body: { value: "var(--font-dm-sans), system-ui, sans-serif" },
        heading: { value: "var(--font-bebas), system-ui, sans-serif" },
        accent: { value: "var(--font-playfair), Georgia, serif" },
      },
    },
  },
});

export const system = createSystem(mergeConfigs(defaultConfig, delaTheme));
