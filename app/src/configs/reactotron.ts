import { NativeModules } from "react-native";
import Reactotron from "reactotron-react-native";
import { reactotronRedux } from "reactotron-redux";

import appMetaInfo from "app.json";

if (__DEV__) {
  const scriptURL = NativeModules.SourceCode.scriptURL;
  let scriptHostname = scriptURL.split("://")[1].split(":")[0];

  Reactotron.configure({
    name: appMetaInfo.expo.name,
    host: scriptHostname,
  })
    .useReactNative({
      editor: false, // there are more options to editor
      errors: { veto: (stackFrame) => false }, // or turn it off with false
      overlay: false, // just turning off overlay
    })
    .use(reactotronRedux())
    .connect();
}

export { Reactotron };
