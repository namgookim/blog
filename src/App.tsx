import React from "react";

// GlobalStyle
import GlobalStyle from "./GlobalStyle";

// router
import { RouterProvider } from "react-router-dom";
import router from "./router";

function App() {
  return (
    <div>
      <GlobalStyle></GlobalStyle>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
