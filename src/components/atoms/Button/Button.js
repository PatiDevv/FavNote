import styled, { css } from "styled-components";

const Button = styled.button`
  padding: 0;
  background-color: ${({ activeColor, theme }) => (activeColor ? theme[activeColor] : "#e6e6e6")};
  width: 220px;
  height: 47px;
  border: none;
  border-radius: 50px;
  font-family: "Montserrat";
  font-weight: 600;
  font-size: 16px;
  text-transform: uppercase;
  text-decoration: none;

  ${({ secondary }) =>
    secondary &&
    css`
      background-color: #e6e6e6;
      width: 105px;
      height: 30px;
      font-size: 10px;
    `}
`;

export default Button;
