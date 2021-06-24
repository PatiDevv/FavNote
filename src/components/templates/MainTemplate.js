import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router";
import GlobalStyle from "../../theme/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { theme } from "../../theme/mainTheme";
import PageContext from "../../context/index";

class MainTemplate extends Component {
  state = { pageContext: "notes" };

  componentDidMount() {
    this.setCurrentPage();
  }

  componentDidUpdate(prevProps, prevState) {
    this.setCurrentPage(prevState);
  }

  setCurrentPage = (prevState = " ") => {
    const pageContexts = ["twitters", "articles", "notes"];
    const {
      location: { pathname },
    } = this.props;

    const [currentPage] = pageContexts.filter((page) => pathname.includes(page));

    if (prevState.pageContext !== currentPage) {
      this.setState({ pageContext: currentPage });
      console.log(this.state);
    }
  };

  render() {
    const { children } = this.props;
    const { pageContext } = this.state;

    return (
      <>
        <PageContext.Provider value={pageContext}>
          <GlobalStyle />
          <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </PageContext.Provider>
      </>
    );
  }
}

MainTemplate.propTypes = {
  children: PropTypes.element.isRequired,
};

export default withRouter(MainTemplate);
