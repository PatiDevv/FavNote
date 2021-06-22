import React from "react";
import GlobalStyle from "../../theme/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { theme } from "../../theme/mainTheme";
import PropTypes from "prop-types";
import Sidebar from "../../components/organisms/Sidebar/Sidebar";

const MainTemplate = ({ children }) => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  </>
);

MainTemplate.propTypes = {
  children: PropTypes.element.isRequired,
};

export default MainTemplate;