import styled from "styled-components/native";
import { theme, palette } from "styled-tools";

const Text = styled.Text`
  font-family: ${theme("fonts.robotoCondensedRegular")};
  font-size: 16;
  color: ${palette("black")};
`;

export { Text };
