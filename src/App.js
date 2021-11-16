import React, { Fragment } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import GlobalStyle from "./themes/GlobalStyles";

const App = () => {
  return (
    <Fragment>
      <GlobalStyle />
      <Header />
      <Main />
      <Footer />
    </Fragment>
  );
};

export default App;
