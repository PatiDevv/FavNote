import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Input from "../atoms/Input/Input";
import Heading from "../atoms/Heading/Heading";
import Paragraph from "../atoms/Paragraph/Paragraph";
import UserPageTemplate from "../../components/templates/UserPageTemplate";

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

const GridTemplate = ({ children, pageType }) => (
  <UserPageTemplate pageType={pageType}>
    <StyledWrapper>
      <StyledPageHeader>
        <Input search placeholder="search"></Input>
        <StyledHeading big as="h1">
          {pageType === "notes" && "Notatki"}
          {pageType === "articles" && "Artykuły"}
          {pageType === "twitters" && "Twitters"}
        </StyledHeading>
        <StyledParagraph>
          6 {pageType === "notes" && "notatek"}
          {pageType === "articles" && "artykułów"}
          {pageType === "twitters" && "twittów"}
        </StyledParagraph>
      </StyledPageHeader>
      <StyledGrid>{children}</StyledGrid>
    </StyledWrapper>
  </UserPageTemplate>
);

GridTemplate.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object).isRequired,
  pageType: PropTypes.oneOf(["notes", "twitters", "articles"]),
};

GridTemplate.defaultProps = {
  pageType: "notes",
};

export default GridTemplate;
