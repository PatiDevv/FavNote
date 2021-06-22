import styled, { css } from "styled-components";
import React from "react";
import Heading from "../../atoms/Heading/Heading";
import Paragraph from "../../atoms/Paragraph/Paragraph";
import Button from "../../atoms/Button/Button";
import PropTypes from "prop-types";
import LinkIcon from "../../../assets/link.svg";

const StyledWrapper = styled.div`
  min-height: 380px;
  background-color: transparent;
  box-shadow: 0 10px 30px -10px #000;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  display: grid;
  grid-template-rows: 0.25fr 1fr;
`;

const InnerWrapper = styled.div`
  padding: 17px 30px;
  background-color: ${({ activeColor, theme }) => (activeColor ? theme[activeColor] : "white")};
  position: relative;

  :first-of-type {
    z-index: 9999;
  }

  ${({ flex }) =>
    flex &&
    css`
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    `}
`;

const DateInfo = styled(Paragraph)`
  margin: 0 0 5px;
  font-size: ${({ theme }) => theme.fontSize.xs};
  font-weight: ${({ theme }) => theme.bold};
`;

const StyledHeading = styled(Heading)`
  margin: 0 0 5px;
`;

const StyledAvatar = styled.img`
  width: 86px;
  height: 86px;
  border: 5px solid ${({ theme }) => theme.twitter};
  position: absolute;
  top: 25px;
  right: 25px;
  border-radius: 50px;
`;

const StyledLinkButton = styled.a`
  display: block;
  width: 47px;
  height: 47px;
  border-radius: 50px;
  background: white url(${LinkIcon}) no-repeat;
  background-size: 60%;
  background-position: 50%;
  position: absolute;
  top: 25px;
  right: 25px;
  transform: translateY(-10%);
`;

const Card = ({ cardType, title, created, twitterName, articleUrl, content }) => (
  <>
    <StyledWrapper>
      <InnerWrapper activeColor={cardType}>
        <StyledHeading>{title}</StyledHeading>
        <DateInfo>{created}</DateInfo>

        {cardType === "twitter" && <StyledAvatar src={twitterName} />}
        {cardType === "article" && <StyledLinkButton href={articleUrl} />}
      </InnerWrapper>

      <InnerWrapper flex>
        <Paragraph> {content} </Paragraph>
        <Button secondary>Usuń</Button>
      </InnerWrapper>
    </StyledWrapper>
  </>
);

Card.propTypes = {
  cardType: PropTypes.oneOf(["note", "twitter", "article"]),
  title: PropTypes.string.isRequired,
  created: PropTypes.string.isRequired,
  twitterName: PropTypes.string,
  articleUrl: PropTypes.string,
  content: PropTypes.string.isRequired,
};

Card.defaultProps = {
  cardType: "note",
  twitterName: null,
  articleUrl: null,
};

export default Card;