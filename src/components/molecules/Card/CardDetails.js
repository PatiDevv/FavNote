import React from "react";
import styled from "styled-components";
import Paragraph from "../../atoms/Paragraph/Paragraph";
import Heading from "../../atoms/Heading/Heading";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import withContext from "../../../hoc/withContext";

const StyledWrapper = styled.div`
  width: 30vw;
  position: relative;
  margin: 100px 0 0 0;
`;

const StyledHeading = styled(Heading)`
  margin: 50px 0 0 0;
  font-size: ${({ theme }) => theme.fontSize.xl};
`;

const StyledDate = styled(Paragraph)`
  margin: 0 0 0px 5px;
  font-size: ${({ theme }) => theme.fontSize.xs};
  font-weight: ${({ theme }) => theme.light};
  text-transform: uppercase;
  font-weight: ${({ theme }) => theme.bold};
`;

const StyledAvatar = styled.img`
  width: 120px;
  height: 120px;
  position: absolute;
  top: -40px;
  right: 20px;
  border-radius: 100%;
`;

const StyledA = styled.a`
  text-decoration: none;
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: ${({ theme }) => theme.bold};
  color: ${({ theme }) => theme.black};
  text-decoration: underline;
`;

const StyledParagraph = styled(Paragraph)`
  margin: 25px 0;
`;

const CardDetails = () => {
  const location = useLocation();

  const [pageContext, id] = location.pathname.substr(1).split("/");

  const store = useSelector((s) => s);

  const cardItem = store[pageContext].find((item) => item.id == id); // albo parseInt()
  //console.log("carditem: ", cardItem, " cardItem2: ", cardItem2);
  //console.log("id carditem2-u: ", cardItem2.id, " id z location: ", id);
  //console.log("id == cardItem2.id : ", id == cardItem2.id);
  //console.log("id === cardItem2.id : ", id === cardItem2.id);

  console.log(cardItem);
  const { title, created, twitterPhoto, articleUrl, content, twitterLink } = cardItem;

  return (
    <StyledWrapper>
      <StyledHeading>{title}</StyledHeading>
      <StyledDate>Utworzono: {created}</StyledDate>

      {pageContext === "twitters" && <StyledAvatar src={twitterPhoto} />}
      <StyledParagraph>{content}</StyledParagraph>
      {pageContext === "articles" && (
        <StyledA href={articleUrl} target="_blank">
          Przejdź do artykułu
        </StyledA>
      )}
      {pageContext === "twitters" && (
        <StyledA href={twitterLink} target="_blank">
          Przejdź do twitta
        </StyledA>
      )}
    </StyledWrapper>
  );
};
export default withContext(CardDetails);
