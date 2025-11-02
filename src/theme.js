// src/theme.js
import { createSystem, defaultConfig } from "@chakra-ui/react"

export const theme = createSystem(defaultConfig, {
  theme: {
    tokens: {
      fonts: {
        heading: { value: `"Poppins", sans-serif` },
        body: { value: `"Poppins", sans-serif` },
      },
      colors: {
        brand: {
          textColor: { value: "#0A1C36" },
          btnBgColor: { value: "#F39C12" },
          whiteColor: { value: "#ffffff" },
          lightBlueColor: { value: "#E6F7FD" },
          skyblueColor: { value: "#61C6EC" },
        },
      },
    },
  },

  // Add a "global" layer to apply fonts and colors to <body>
  globalCss: {
    body: {
      fontFamily: "body",
      color: "fg",
      bg: "bg",
      lineHeight: "base",
    },
  },
})
