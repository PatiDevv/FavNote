import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Button from "../components/atoms/Button/Button";
import GlobalStyle from "../theme/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { theme } from "../theme/mainTheme";
import Heading from "../components/atoms/Heading/Heading";
import Paragraph from "../components/atoms/Paragraph/Paragraph";
import Input from "../components/atoms/Input/Input";
import ButtonIcon from "../components/atoms/ButtonIcon/ButtonIcon";
import Card from "../components/molecules/Card/Card";
import ImageAssets from "../constants/ImageAssets";
import MainTemplate from "../components/templates/MainTemplate";
import Articles from "./Articles";
import Notes from "./Notes";
import Twitters from "./Twitters";

const Root = () => (
  <MainTemplate>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Notes} />
        <Route path="/articles" component={Articles} />
        <Route path="/twitters" component={Twitters} />
      </Switch>
    </BrowserRouter>
  </MainTemplate>
);

export default Root;
