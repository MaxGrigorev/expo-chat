import React, { ReactElement, FC } from "react";
import { StyleProp, ViewStyle } from "react-native";
import styled, { css } from "styled-components/native";
import { ifNotProp, ifProp, palette, switchProp, theme } from "styled-tools";

import { Loc } from "../Loc";

interface Props {
  locKey?: string;
  style?: StyleProp<ViewStyle>;
  icon?: ReactElement;
  disabled?: boolean;
  onPress?: Function;
}

const Button = styled.TouchableOpacity<any>`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 40;
  border-radius: 4;
  letter-spacing: 0.3;
`;

const ButtonText = styled(Loc)`
  font-family: ${theme("fonts.robotoMedium")};
`;

const IconWrapper = styled.View`
  padding-right: 8;
`;

const CustomButton: FC<Props> = ({
  locKey,
  icon,
  disabled,
  style,
  onPress,
}): ReactElement => {
  return (
    <Button disabled={disabled} style={style} onPress={onPress}>
      {icon && <IconWrapper>{icon}</IconWrapper>}
      <ButtonText locKey={locKey} />
    </Button>
  );
};

export { CustomButton as Button };
