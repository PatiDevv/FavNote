import React from "react";
import { connect } from "react-redux";
import GridTemplate from "../components/templates/GridTemplate";
import Card from "../components/molecules/Card/Card";

const Articles = ({ articles }) => (
  <GridTemplate pageContext="articles">
    {articles.map((item) => (
      <Card cardType="articles" id={item.id} title={item.title} content={item.content} articleUrl={item.articleUrl} created={item.created} key={item.id} />
    ))}
  </GridTemplate>
);

const mapStateToProps = (state) => {
  const { articles } = state;
  return { articles };
};

export default connect(mapStateToProps)(Articles);
