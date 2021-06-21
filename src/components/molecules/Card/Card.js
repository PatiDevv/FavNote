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

const HeadingStyle = styled(Heading)`
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

const Card = ({ cardType }) => (
  <>
    <StyledWrapper>
      <InnerWrapper activeColor={cardType}>
        <HeadingStyle>Nagłówek</HeadingStyle>
        <DateInfo>6 dni temu</DateInfo>

        {cardType === "twitter" && <StyledAvatar src="https://unavatar.vercel.app/twitter/hello_roman" />}
        {cardType === "article" && <StyledLinkButton href="https://youtube.com/helloroman" />}
      </InnerWrapper>

      <InnerWrapper flex>
        <Paragraph> Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit nemo ducimus fuga repellendus illum</Paragraph>
        <Button secondary>Usuń</Button>
      </InnerWrapper>
    </StyledWrapper>
  </>
);

Card.propTypes = {
  cardType: PropTypes.oneOf(["note", "twitter", "article"]),
};

Card.defaultProps = {
  cardType: "note",
};

export default Card;
