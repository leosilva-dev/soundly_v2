import * as React from "react";

import { NextUIProvider } from "@nextui-org/react";
import Home from "./page";

function App() {
  return (
    <NextUIProvider>
      <Home />
    </NextUIProvider>
  );
}
