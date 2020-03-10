export interface Theme {
  fonts: {
    [key: string]: string;
  };
  palette: {
    [key: string]: [string];
  };
  textInputHeight: number;
  languageSizes: {
    default: {
      width: number;
      height: number;
    };
  };
}

const theme: Theme = {
  fonts: {
    robotoCondensedRegular: "RobotoCondensed-Regular",
    robotoCondensedBold: "RobotoCondensed-Bold",
    robotoRegular: "Roboto-Regular",
    robotoMedium: "Roboto-Medium",
  },
  palette: {
    black: ["#353535"],
    blackTwo: ["#030303"],
    black16: ["rgba(0, 0, 0, 0.16)"],
    black50: ["rgba(0, 0, 0, 0.5)"],
    black60: ["rgba(53, 53, 53, 0.6)"],
    black87: ["rgba(0, 0, 0, 0.87)"],
    brownishGrey: ["#676767"],
    brownishGrey26: ["rgba(103, 103, 103, 0.26)"],
    white: ["#fff"],
    whiteTwo: ["#f5f5f5"],
    white70: ["rgba(255, 255, 255, 0.7)"],
    whiteThree: ["#dfdfdf"],
    warmPink: ["#f45b69"],
    cerulean: ["#068ec7"],
    cerulean10: ["rgba(6, 142, 199, 0.1)"],
    greenBlue: ["#04af6c"],
    pinkishGrey: ["#d1d1d1"],
    warmGrey: ["#8c8c8c"],
    lightGray: ["#dfdfdf"],
    veryLightGray: ["#e5e5e5"],
    modalBackground: ["rgba(255, 255, 255, 0.9)"],
    opacity: ["rgba(0,0,0,0)"],
    strikeMaster: ["#8c5383"],
    strikeMaster10: ["rgba(140, 83, 131, 0.1)"],
    transparent: ["transparent"],
    darkGreyBlue20: ["rgba(51, 85, 98, 0.2)"],
  },
  textInputHeight: 40,
  languageSizes: {
    default: {
      width: 32,
      height: 32,
    },
  },
};

export { theme };
