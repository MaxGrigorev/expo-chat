import React, { FC, ReactElement } from "react";
import { StatusBar } from "react-native";
import styled from "styled-components/native";
import moment from "moment";
import 'moment/locale/en-gb';
import 'moment/locale/ru';
import { Container, Header, Content, Button, Text } from 'native-base';

import { getStatusBarHeight } from "@utils/common";
import { languageToMomentLocale } from "@i18n/languagesInfo";
import { i18n } from "@i18n";

interface Props {
  horizontalCenter?: boolean;
  verticalCenter?: boolean;
  considerationHeightStatusBar?: boolean;
}

const BaseTemplate: FC<Props> = ({
  horizontalCenter,
  verticalCenter,
  considerationHeightStatusBar,
  children,
}): ReactElement => {
  const TemplateView = styled.View`
    flex: 1;
    ${considerationHeightStatusBar && `padding-top: ${getStatusBarHeight()}`}
    ${verticalCenter && `justify-content: center;`}
    ${horizontalCenter && `align-items: center;`}
  `;
  const appLocale = i18n.currentLocale();
  if (appLocale) {
    const momentLocale = languageToMomentLocale[appLocale];
    if (momentLocale) {
      moment.locale(momentLocale);
    }
  }
  return (
    <Container>
      <StatusBar barStyle="dark-content"></StatusBar>
      {children}
    </Container>
  );
};

BaseTemplate.defaultProps = {
  horizontalCenter: false,
  verticalCenter: false,
  considerationHeightStatusBar: false,
};

export { BaseTemplate };
