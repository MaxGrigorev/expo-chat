import { NavigationActions, StackActions } from "react-navigation";
import { DrawerActions } from "react-navigation-drawer";

let _navigator;

function setTopLevelNavigator(navigatorRef) {
  _navigator = navigatorRef;
}

function navigate(routeName, params?) {
  _navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params,
    }),
  );
}

function replaceScreen(routeName, params?) {
  _navigator.dispatch(
    StackActions.replace({
      routeName,
      params,
    }),
  );
}

function toggleDrawer() {
  setTimeout(() => {
    _navigator.dispatch(DrawerActions.toggleDrawer());
  }, 0);
}

function getScreenProps() {
  return _navigator._getScreenProps();
}

export {
  navigate,
  setTopLevelNavigator,
  getScreenProps,
  toggleDrawer,
  replaceScreen,
};
