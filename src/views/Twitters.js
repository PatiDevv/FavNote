import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import GridTemplate from "../components/templates/GridTemplate";
import Card from "../components/molecules/Card/Card";
import { filterCardsByTitle } from "../helpers/FilterByTitle";
import { globalSearch } from "../actions";

const Twitters = ({ twitters, search }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(globalSearch(""));
  }, []);

  return (
    <GridTemplate count={twitters.length} pageContext="twitters">
      {filterCardsByTitle(twitters, search).map((item) => (
        <Card id={item.id} cardType="twitters" title={item.title} created={item.created} twitterPhoto={item.twitterPhoto} content={item.content} key={item.id} />
      ))}
    </GridTemplate>
  );
};

const mapStateToProps = (state) => {
  const { twitters, search } = state;
  return { twitters, search };
}; // const mapStateToProps = (state) => {
//   const {twitters} = state;
//   return {twitters: twitters}; składnia ES6 jeżeli klucz i wartość są takie same, możemy skrócić zapis
// }

// const mapStateToProps = ({twitters}) => ({twitters}); skrócony zapis ES6

export default connect(mapStateToProps)(Twitters);
