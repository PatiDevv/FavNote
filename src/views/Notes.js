import React from "react";
import { connect } from "react-redux";
import GridTemplate from "../components/templates/GridTemplate";
import Card from "../components/molecules/Card/Card";

const Notes = ({ notes }) => (
  <GridTemplate pageType="notes">
    {notes.map((item) => (
      <Card id={item.id} cardType="notes" title={item.title} content={item.content} created={item.created} key={item.id} />
    ))}
  </GridTemplate>
);

const mapStateToProps = (state) => {
  const { notes } = state;
  return { notes };
};

export default connect(mapStateToProps)(Notes);
