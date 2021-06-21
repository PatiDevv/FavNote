import React from "react";
import LogoIcon from "../../../assets/icons/logo.svg";
import ImageAssets from "../../../constants/ImageAssets";
import ButtonIcon from "../../atoms/ButtonIcon/ButtonIcon";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

const StyledWrapper = styled.nav`
  background-color: ${({ activeColor, theme }) => (activeColor ? theme[activeColor] : theme.note)};
  left: 0;
  top: 0;
  width: 150px;
  height: 100vh;
  position: fixed;
  padding: 25px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const StyledLogoLink = styled(NavLink)`
  background-image: url(${LogoIcon});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 80%;
  width: 67px;
  height: 67px;
  margin-bottom: 10vh;
  border: none;
`;

const StyledLinksList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const StyledLogoutButton = styled(ButtonIcon)`
  margin-top: auto;
`;

const Sidebar = ({ pageType }) => (
  <StyledWrapper activeColor={pageType}>
    <StyledLogoLink to="/" />
    <StyledLinksList>
      <li>
        <ButtonIcon exact as={NavLink} to="/" icon={ImageAssets.pen} activeclass="active" />
      </li>
      <li>
        <ButtonIcon as={NavLink} to="/twitters" icon={ImageAssets.twitter} activeclass="active" />
      </li>
      <li>
        <ButtonIcon as={NavLink} to="articles" icon={ImageAssets.bulb} activeclass="active" />
      </li>
    </StyledLinksList>
    <StyledLogoutButton as={NavLink} to="/login" icon={ImageAssets.logout} />
  </StyledWrapper>
);

Sidebar.propTypes = {
  pageType: PropTypes.string.isRequired,
};

export default Sidebar;
