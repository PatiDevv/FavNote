import React from "react";
import PropTypes from "prop-types";
import Sidebar from "../organisms/Sidebar/Sidebar";

const UserPageTemplate = ({ children }) => (
  <>
    <Sidebar />
    {children}
  </>
);

UserPageTemplate.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.node]),
};

UserPageTemplate.defaultProps = {
  PageContext: "notes",
};

export default UserPageTemplate;
