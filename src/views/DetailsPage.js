import React, { Component } from "react";
import DetailsTemplate from "../../src/components/templates/DetailsTemplate";
import { routes } from "../../src/routes/index";
import CardDetails from "../../src/components/molecules/Card/CardDetails";

class DetailsPage extends Component {
  state = {
    pageContext: "note",
  };

  componentDidMount() {
    switch (this.props.match.path) {
      case routes.twitter:
        this.setState({ pageContext: "twitters" });
        break;
      case routes.note:
        this.setState({ pageContext: "notes" });
        break;
      case routes.article:
        this.setState({ pageContext: "articles" });
        break;
      default:
        console.log("Something went wrong with matching paths");
    }
  }

  render() {
    const { pageContext } = this.state;
    return (
      <DetailsTemplate pageContext={pageContext}>
        <CardDetails></CardDetails>
      </DetailsTemplate>
    );
  }
}

export default DetailsPage;
