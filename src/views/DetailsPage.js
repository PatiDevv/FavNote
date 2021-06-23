import React, { Component } from "react";
import DetailsTemplate from "../../src/components/templates/DetailsTemplate";
import { routes } from "../../src/routes/index";
import CardDetails from "../../src/components/molecules/Card/CardDetails";

class DetailsPage extends Component {
  state = {
    pageType: "note",
  };

  componentDidMount() {
    switch (this.props.match.path) {
      case routes.twitter:
        this.setState({ pageType: "twitters" });
        break;
      case routes.note:
        this.setState({ pageType: "notes" });
        break;
      case routes.article:
        this.setState({ pageType: "articles" });
        break;
    }
  }

  render() {
    const { match } = this.state;
    return (
      <DetailsTemplate pageType={this.state.pageType}>
        <CardDetails></CardDetails>
      </DetailsTemplate>
    );
  }
}

export default DetailsPage;
