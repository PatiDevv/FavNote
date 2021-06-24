import React from "react";
import { connect } from "react-redux";
import GridTemplate from "../components/templates/GridTemplate";
import Card from "../components/molecules/Card/Card";

const Twitters = ({ twitters }) => (
  <GridTemplate pageContext="twitters">
    {twitters.map((item) => (
      <Card id={item.id} cardType="twitters" title={item.title} created={item.created} twitterPhoto={item.twitterPhoto} content={item.content} key={item.id} />
    ))}
  </GridTemplate>
);

const mapStateToProps = (state) => {
  const { twitters } = state;
  return { twitters };
};

// const mapStateToProps = (state) => {
//   const {twitters} = state;
//   return {twitters: twitters}; składnia ES6 jeżeli klucz i wartość są takie same, możemy skrócić zapis
// }

// const mapStateToProps = ({twitters}) => ({twitters}); skrócony zapis ES6

export default connect(mapStateToProps)(Twitters);
