import React from "react";
import UserPageTemplate from "./UserPageTemplate";
import styled from "styled-components";

const StyledWrapper = styled.div`
  padding: 0px 150px 25px 100px;
`;

const StyledContent = styled.div``;

const DetailsTemplate = ({ children, pageContext }) => {
  return (
    <UserPageTemplate pageContext={pageContext}>
      <StyledWrapper>
        <StyledContent>{children}</StyledContent>
      </StyledWrapper>
    </UserPageTemplate>
  );
};

export default DetailsTemplate;
