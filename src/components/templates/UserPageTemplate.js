import React from "react";
import PropTypes from "prop-types";
import Sidebar from "../organisms/Sidebar/Sidebar";
import styled from "styled-components";

const StyledWrapper = styled.div`
  padding-left: 150px;
`;

const UserPageTemplate = ({ children }) => (
  <StyledWrapper>
    <Sidebar />
    {children}
  </StyledWrapper>
);

UserPageTemplate.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.node]),
};

UserPageTemplate.defaultProps = {
  PageContext: "notes",
};

export default UserPageTemplate;
