import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import GridTemplate from "../components/templates/GridTemplate";
import Card from "../components/molecules/Card/Card";
import { filterCardsByTitle } from "../helpers/FilterByTitle";
import { globalSearch } from "../actions";

const Articles = ({ articles, search }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(globalSearch(""));
  }, []);

  return (
    <GridTemplate count={articles.length} pageContext="articles">
      {filterCardsByTitle(articles, search).map((item) => (
        <Card cardType="articles" id={item.id} title={item.title} content={item.content} articleUrl={item.articleUrl} created={item.created} key={item.id} />
      ))}
    </GridTemplate>
  );
};

const mapStateToProps = (state) => {
  const { articles, search } = state;
  return { articles, search };
};

export default connect(mapStateToProps)(Articles);
