import React from "react";
import GridTemplate from "../components/templates/GridTemplate";
import Card from "../components/molecules/Card/Card";
import { useSelector } from "react-redux";
import { filterCardsByTitle } from "../helpers/FilterByTitle";

const Notes = () => {
  const notes = useSelector((s) => s.notes);
  const search = useSelector((s) => s.search);

  return (
    <GridTemplate count={notes.length} pageContext="notes">
      {filterCardsByTitle(notes, search).map((item) => (
        <Card id={item.id} cardType="notes" title={item.title} content={item.content} created={item.created} key={item.id} />
      ))}
    </GridTemplate>
  );
};

export default Notes;
