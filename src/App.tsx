import React from 'react';
import Routes from "./routes";

import { BrowserRouter } from "react-router-dom";

import GlobalStyle from "./assets/styles/GlobalStyles";

const App: React.FC = () =>
  <>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
    <GlobalStyle />
  </>

export default App;
