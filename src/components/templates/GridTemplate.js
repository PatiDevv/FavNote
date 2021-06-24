import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Input from "../atoms/Input/Input";
import Heading from "../atoms/Heading/Heading";
import Paragraph from "../atoms/Paragraph/Paragraph";
import UserPageTemplate from "../../components/templates/UserPageTemplate";
import withContext from "../../hoc/withContext";

const StyledWrapper = styled.div`
  padding: 25px 150px 25px 70px;
`;

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 85px;
`;

const StyledPageHeader = styled.div`
  margin: 25px 0 50px 0;
`;

const StyledHeading = styled(Heading)`
  margin: 25px 0 0 0;
`;

const StyledParagraph = styled(Paragraph)`
  margin: 0;
  font-weight: ${({ theme }) => theme.bold};
`;

const GridTemplate = ({ children, pageContext }) => (
  <UserPageTemplate>
    <StyledWrapper>
      <StyledPageHeader>
        <Input search placeholder="search"></Input>
        <StyledHeading big as="h1">
          {pageContext === "notes" && "Notatki"}
          {pageContext === "articles" && "Artykuły"}
          {pageContext === "twitters" && "Twitters"}
        </StyledHeading>
        <StyledParagraph>
          6 {pageContext === "notes" && "notatek"}
          {pageContext === "articles" && "artykułów"}
          {pageContext === "twitters" && "twittów"}
        </StyledParagraph>
      </StyledPageHeader>
      <StyledGrid>{children}</StyledGrid>
    </StyledWrapper>
  </UserPageTemplate>
);

GridTemplate.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object).isRequired,
  PageContext: PropTypes.oneOf(["notes", "twitters", "articles"]),
};

GridTemplate.defaultProps = {
  PageContext: "notes",
};

export default withContext(GridTemplate);
