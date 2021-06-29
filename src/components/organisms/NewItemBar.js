import React from "react";
import Input from "../atoms/Input/Input";
import Button from "../../components/atoms/Button/Button";
import Heading from "../atoms/Heading/Heading";
import styled from "styled-components";
import withContext from "../../hoc/withContext";
import { connect } from "react-redux";
import { addItem as addItemAction } from "../../actions/index";
import { Formik, Form, Field } from "formik";
import TextArea from "../atoms/Textarea/Textareaa";

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

const SyledTextArea = styled(TextArea)`
  margin: 20px 0 50px;
  height: 20vw;
  border-radius: 5%;
`;

const StyledInput = styled(Input)`
  margin: 10px 0 10px;
`;

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
`;

const NewItemBar = ({ pageContext, isVisible, addItem, handleClose }) => {
  return (
    <StyledWrapper isVisible={isVisible} activeColor={pageContext}>
      <Heading big>
        Utwórz
        {pageContext === "notes" && " nową notatkę"}
        {pageContext === "articles" && " nowy artykuł"}
        {pageContext === "twitters" && " nowego twitta"}
      </Heading>
      <Formik
        initialValues={{ title: "", content: "", twitterLink: "", created: "", twitterPhoto: "", articleUrl: "" }}
        onSubmit={(values) => {
          addItem(pageContext, values);
          handleClose();
        }}
      >
        {() => (
          <StyledForm>
            <Field as={StyledInput} type="title" name="title" placeholder="Tytuł" />
            {pageContext === "articles" && <Field as={StyledInput} type="articleUrl" name="articleUrl" placeholder="Link" />}
            {pageContext === "twitters" && <Field as={StyledInput} type="twitterLink" name="twitterLink" placeholder="Link do twitta" />}
            {pageContext === "twitters" && <Field as={StyledInput} type="twitterPhoto" name="twitterPhoto" placeholder="Link do zdjęcia twitta" />}
            <Field as={SyledTextArea} type="content" name="content" placeholder="Treść" />

            <Button type="submit" activeColor={pageContext}>
              Dodaj
            </Button>
          </StyledForm>
        )}
      </Formik>
    </StyledWrapper>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (itemType, itemContent) => dispatch(addItemAction(itemType, itemContent)),
});

export default connect(null, mapDispatchToProps)(withContext(NewItemBar));
