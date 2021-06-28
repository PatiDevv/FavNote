import React from "react";
import Input from "../atoms/Input/Input";
import Button from "../atoms/Button/Button";
import Heading from "../atoms/Heading/Heading";
import styled from "styled-components";
import withContext from "../../hoc/withContext";

const StyledWrapper = styled.div`
  border-left: 10px solid ${({ activeColor, theme }) => theme[activeColor]};
  box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);

  background-color: white;
  height: 100vh;
  width: 34%;
  position: fixed;
  z-index: 9999;
  right: 0;
  top: 0;
  padding: 90px 50px;

  display: flex;
  flex-direction: column;

  transform: translate(${({ isVisible }) => (isVisible ? "0" : "100%")});
  transition: transform 0.8s ease-in-out;
`;

const SyledTextArea = styled(Input)`
  margin: 30px 0 100px;
  height: 30vw;
  border-radius: 5%;
`;

const StyledInput = styled(Input)`
  margin-top: 30px;
`;

const NewItemBar = ({ pageContext, isVisible }) => (
  <StyledWrapper isVisible={isVisible} activeColor={pageContext}>
    <Heading big>
      Utwórz
      {pageContext === "notes" && " nową notatkę"}
      {pageContext === "articles" && " nowy artykuł"}
      {pageContext === "twitters" && " nowego twitta"}
    </Heading>

    <StyledInput placeholder={pageContext === "twitters" ? "Nazwa konta np. hello_roman" : "Tytuł"}></StyledInput>
    {pageContext === "articles" && <StyledInput placeholder="Link"></StyledInput>}
    <SyledTextArea as="textarea" placeholder="Treść"></SyledTextArea>
    <Button activeColor={pageContext}>Dodaj</Button>
  </StyledWrapper>
);

export default withContext(NewItemBar);
