import React from "react";
import { createGlobalStyle } from "styled-components";
import { Provider } from "react-redux";
import { Switch, Route, BrowserRouter } from "react-router-dom";

import store from "./store";
import ClickPage from "./components/pages/ClickPage";
import TopTenPage from "./components/pages/TopTenPage";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyle />
        <Switch>
          <Route path="/:team" component={ClickPage} />
          <Route exact path="/" component={TopTenPage} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};

const GlobalStyle = createGlobalStyle`
  html {
    scroll-behavior: smooth;
    font-size: 62.5%;
  }
  body {
    @import url('https://fonts.googleapis.com/css?family=Poppins:400,500,600,700&display=swap');
    font-family: 'Poppins', sans-serif;
    letter-spacing: .8px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
  }
  *, *::after, *::before {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }
`;

export default App;
