import React from "react";
import { Link } from "react-router-dom";
import UserPageTemplate from "./UserPageTemplate";
import styled from "styled-components";
import Button from "../../components/atoms/Button/Button";

const StyledWrapper = styled.div`
  padding: 0px 150px 25px 100px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.black};
`;

const StyledButton = styled(Button)`
  margin-top: 50px;
  margin-right: 20px;
`;

const StyledContent = styled.div``;

const DetailsTemplate = ({ children, pageType }) => (
  <UserPageTemplate pageType={pageType}>
    <StyledWrapper>
      <StyledContent>{children}</StyledContent>
      <StyledButton>Usuń notatkę</StyledButton>
      <StyledButton activeColor={pageType}>
        <StyledLink to="/"> close/SAVE</StyledLink>
      </StyledButton>
    </StyledWrapper>
  </UserPageTemplate>
);

export default DetailsTemplate;
