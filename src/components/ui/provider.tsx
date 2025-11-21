"use client";

import {
  ChakraProvider,
  createSystem,
  defaultConfig,
  defineConfig,
} from "@chakra-ui/react";
import { ColorModeProvider, type ColorModeProviderProps } from "./color-mode";

const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        brand: {
          value: "#75C5C1",
        },
        secondary: {
          value: "#41245F",
        },
      },
    },
    semanticTokens: {
      colors: {
        sidebar: {
          value: { _light: "#E9F5F7", _dark: "#75C5C1" },
        },
        "sidebar-text": {
          value: { _light: "#75C5C1", _dark: "white" },
        },
        card: {
          value: { _light: "#F7F7F7", _dark: "black" },
        },
      },
    },
  },
});

const system = createSystem(defaultConfig, config);

export function Provider(props: ColorModeProviderProps) {
  return (
    <ChakraProvider value={system}>
      <ColorModeProvider {...props} />
    </ChakraProvider>
  );
}
