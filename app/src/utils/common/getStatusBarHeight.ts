import { getStatusBarHeight as getStatusBarHeightFromLib } from "react-native-status-bar-height";

let height = 0;

export const getStatusBarHeight = (): number => {
  if (height !== 0) {
    return height;
  } else {
    height = getStatusBarHeightFromLib();
  }
  return height;
};
