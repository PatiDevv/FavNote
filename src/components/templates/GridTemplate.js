import React, { useState } from "react";
import styled from "styled-components";
import Input from "../atoms/Input/Input";
import Heading from "../atoms/Heading/Heading";
import Paragraph from "../atoms/Paragraph/Paragraph";
import UserPageTemplate from "../../components/templates/UserPageTemplate";
import withContext from "../../hoc/withContext";
import ButtonIcon from "../atoms/ButtonIcon/ButtonIcon";
import PlusIcon from "../../assets/icons/plus.svg";
import NewItemBar from "../../components/organisms/NewItemBar";
import UserBar from "../organisms/Sidebar/Userbar";
import { globalSearch } from "../../actions/index";
import { useDispatch } from "react-redux";

const StyledWrapper = styled.div`
  padding: 25px 150px 25px 70px;
  position: relative;
`;

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 85px;

  @media (max-width: 1500px) {
    grid-gap: 45px;
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 1100px) {
    grid-template-columns: 1fr;
  }
`;

const StyledPageHeader = styled.div`
  margin: 25px 0 50px 0;
`;

const StyledHeading = styled(Heading)`
  margin: 25px 0 0 0;
  text-transform: capitalize;
`;

const StyledParagraph = styled(Paragraph)`
  margin: 0;
  font-weight: ${({ theme }) => theme.bold};
`;

const StyledButtonIcon = styled(ButtonIcon)`
  border-radius: 100%;
  background-size: 40%;
  background-color: ${({ activeColor, theme }) => theme[activeColor]};
  position: fixed;
  right: 35px;
  bottom: 35px;
  z-index: 10000;
`;

const GridTemplate = ({ children, pageContext, count }) => {
  const [isNewItemBarVisible, setIsNewItemBarVisible] = useState(false);

  const dispatch = useDispatch();

  const toggleNewItemBar = () => setIsNewItemBarVisible(!isNewItemBarVisible);

  return (
    <UserPageTemplate>
      <StyledWrapper>
        <StyledPageHeader>
          <Input search placeholder="search" onChange={(e) => dispatch(globalSearch(e.target.value))}></Input>
          <StyledHeading big as="h1">
            {pageContext}
          </StyledHeading>
          <StyledParagraph>
            {count} {pageContext}
          </StyledParagraph>
          <UserBar></UserBar>
        </StyledPageHeader>
        <StyledGrid>{children}</StyledGrid>
        <StyledButtonIcon onClick={toggleNewItemBar} icon={PlusIcon} activeColor={pageContext}></StyledButtonIcon>
        <NewItemBar handleClose={toggleNewItemBar} isVisible={isNewItemBarVisible} />
      </StyledWrapper>
    </UserPageTemplate>
  );
};

export default withContext(GridTemplate);
