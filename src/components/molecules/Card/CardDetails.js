import React from "react";
import styled from "styled-components";
import Paragraph from "../../atoms/Paragraph/Paragraph";
import Heading from "../../atoms/Heading/Heading";
import { Redirect, useHistory, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import withContext from "../../../hoc/withContext";
import { Link } from "react-router-dom";
import Button from "../../atoms/Button/Button";
import { removeItem } from "../../../actions";
import { routes } from "../../../routes";

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

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.black};
  padding: 15px 58px;
`;

const StyledButton = styled(Button)`
  margin-right: 20px;
`;
const StyledDiv = styled.div`
  display: flex;
  margin-top: 30px;
`;

const CardDetails = () => {
  const location = useLocation();
  const history = useHistory();
  const dispatch = useDispatch();
  const [pageContext, id] = location.pathname.substr(1).split("/");
  const store = useSelector((s) => s);
  const cardItem = store[pageContext].find((item) => item.id == id);
  if (cardItem == null) {
    return <Redirect to={routes.notfound} />;
  }

  return (
    <>
      <StyledWrapper>
        <StyledHeading>{cardItem.title}</StyledHeading>
        <StyledDate>Utworzono: {cardItem.created}</StyledDate>

        {pageContext === "twitters" && <StyledAvatar src={cardItem.twitterPhoto} />}
        <StyledParagraph>{cardItem.content}</StyledParagraph>
        {pageContext === "articles" && (
          <StyledA href={cardItem.articleUrl} target="_blank">
            Przejdź do artykułu
          </StyledA>
        )}
        {pageContext === "twitters" && (
          <StyledA href={cardItem.twitterLink} target="_blank">
            Przejdź do twitta
          </StyledA>
        )}
      </StyledWrapper>
      <StyledDiv>
        <StyledButton
          onClick={() => {
            history.push("/" + pageContext);
            dispatch(removeItem(pageContext, id));
          }}
        >
          Remove notes
        </StyledButton>
        <StyledButton activeColor={pageContext}>
          <StyledLink to={`/${pageContext}`}> close/SAVE</StyledLink>
        </StyledButton>
      </StyledDiv>
    </>
  );
};
export default withContext(CardDetails);
