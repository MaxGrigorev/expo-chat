import React, { FC, ReactElement } from "react";
import { TextProps } from "react-native";

import { i18n } from "@i18n";

import { Text } from "../Text";

interface Props extends TextProps {
  locKey: string;
}

const Loc: FC<Props> = (props): ReactElement => (
  <Text {...props}>{i18n.t(props.locKey)}</Text>
);

export { Loc };
