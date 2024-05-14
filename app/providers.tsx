"use client";
import * as React from "react";

import { dackiaTheme, driverTheme } from "../theme/theme";

import { ChakraProvider, Button } from "@chakra-ui/react";

export function Providers({ children }: { children: React.ReactNode }) {
  const themes = {
    dackia: dackiaTheme,
    driver: driverTheme,
  };

  const [currentThemeName, setCurrentThemeName] = React.useState<
    "dackia" | "driver"
  >("driver");

  const toggleTheme = () => {
    setCurrentThemeName((prevThemeName) =>
      prevThemeName === "dackia" ? "driver" : "dackia"
    );
  };
  const currentTheme = themes[currentThemeName];

  return (
    <ChakraProvider theme={currentTheme}>
      <Button size="xs" onClick={toggleTheme} mb="2">
        Toggle Theme
      </Button>
      {children}
    </ChakraProvider>
  );
}
