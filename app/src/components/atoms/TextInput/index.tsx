import styled from "styled-components/native";
import { theme, palette } from "styled-tools";

const TextInput = styled.TextInput`
  width: 100%;
  height: ${theme("textInputHeight")};
  font-family: ${theme("fonts.robotoRegular")};
  font-size: 16;
  letter-spacing: 0.3;
  padding-left: 16;
  padding-right: 16;
  color: ${palette("black")};
  background-color: ${palette("whiteTwo")};
`;

export { TextInput };
