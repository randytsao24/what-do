import * as React from "react";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import Main from "../components/main";

const pageStyles = {
  color: "#232129",
  padding: 8,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};

const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <Main />
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
