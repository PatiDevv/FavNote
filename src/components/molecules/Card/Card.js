import React, { Component } from "react";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";
import styled, { css } from "styled-components";
import Paragraph from "../../atoms/Paragraph/Paragraph";
import Heading from "../../atoms/Heading/Heading";
import Button from "../../atoms/Button/Button";
import LinkIcon from "../../../assets/link.svg";
import { connect } from "react-redux";
import { removeItem as removeItemAction } from "../../../actions/index";

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
  border: 5px solid ${({ theme }) => theme.twitters};
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

class Card extends Component {
  state = {
    redirect: false,
  };

  handleCardClik = () => this.setState({ redirect: true });

  render() {
    const { id, cardType, title, created, twitterPhoto, articleUrl, content, removeItem } = this.props;

    if (this.state.redirect) {
      return <Redirect to={`${cardType}/${id}`} />;
    }

    return (
      <StyledWrapper onClick={this.handleCardClik}>
        <InnerWrapper activeColor={cardType}>
          <StyledHeading>{title}</StyledHeading>
          <DateInfo>{created}</DateInfo>

          {cardType === "twitters" && <StyledAvatar src={twitterPhoto} />}
          {cardType === "articles" && <StyledLinkButton href={articleUrl} />}
        </InnerWrapper>

        <InnerWrapper flex>
          <Paragraph> {content} </Paragraph>
          <Button secondary onClick={() => removeItem(cardType, id)}>
            Usuń
          </Button>
        </InnerWrapper>
      </StyledWrapper>
    );
  }
}

Card.propTypes = {
  cardType: PropTypes.oneOf(["notes", "twitters", "articles"]),
  title: PropTypes.string.isRequired,
  created: PropTypes.string.isRequired,
  twitterPhoto: PropTypes.string,
  articleUrl: PropTypes.string,
  content: PropTypes.string.isRequired,
};

Card.defaultProps = {
  cardType: "notes",
  twitterPhoto: null,
  articleUrl: null,
};

const mapDispatchToProps = (dispatch) => ({
  removeItem: (itemType, id) => dispatch(removeItemAction(itemType, id)),
});

export default connect(null, mapDispatchToProps)(Card);
