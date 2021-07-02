import React from "react";
import styled from "styled-components";
import withContext from "../../../hoc/withContext";

const StyledWrapper = styled.div`
  height: 15vh;
  width: 25vw;
  top: 30px;
  right: 30px;
  position: absolute;
`;

const StyledH2 = styled.h2`
  font-weight: ${({ theme }) => theme.bold};
  font-size: ${({ theme }) => theme.fontSize.l};
  display: flex;
  justify-content: center;
`;

const UserBar = ({ pageContext, userID }) => {
  const userName = localStorage.getItem("userID", userID);
  return (
    <StyledWrapper activeColor={pageContext}>
      <StyledH2>{"Hello " + userName}</StyledH2>
    </StyledWrapper>
  );
};

export default withContext(UserBar);
