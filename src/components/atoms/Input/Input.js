import styled from "styled-components";
import { theme } from "../../../theme/mainTheme";

const Input = styled.input`
  padding: 15px 30px;
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: ${({ theme }) => theme.regular};
  background-color: ${({ theme }) => theme.grey100};
  border: none;
  border-radius: 50px;

  ::placeholder {
    text-transform: uppercase;
    letter-spacing: 2px;
    color: ${({ theme }) => theme.grey300};
  }
`;
export default Input;
