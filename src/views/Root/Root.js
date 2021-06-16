import React from "react";
import Button from "../../components/Button/Button";
import GlobalStyle from "../../theme/GlobalStyle";

const Root = () => (
  <div>
    <GlobalStyle />
    <h1>Heloo Roman</h1>
    <Button width="500px">close/save</Button>
    <Button secondary>Remove</Button>
  </div>
);

export default Root;
