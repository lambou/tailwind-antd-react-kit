import React from "react";
import { BrowserRouter } from "react-router-dom";
import '../src/index.css';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
    expanded: true 
  },
}

export const decorators = [
  (Story) => (
    <BrowserRouter>
      {Story()}
    </BrowserRouter>
  ),
];