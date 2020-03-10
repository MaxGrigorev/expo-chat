import { useEffect, useState } from "react";
import { Alert } from "react-native";
import * as Font from "expo-font";


const useFontsLoader = () => {
  let [fontsLoaded, setFontsLoaded] = useState(<boolean>false);

  useEffect(() => {
    let loadableFonts: Promise<any>[] = [];
    loadableFonts = [
      Font.loadAsync({
        "Roboto-Medium": require("@assets/fonts/Roboto-Medium.ttf"),
        "Roboto-Regular": require("@assets/fonts/Roboto-Regular.ttf"),
        "RobotoCondensed-Regular": require("@assets/fonts/RobotoCondensed-Regular.ttf"),
        "RobotoCondensed-Bold": require("@assets/fonts/RobotoCondensed-Bold.ttf"),
      }),
    ];
    Promise.all(loadableFonts).then(() => {
      setFontsLoaded(true);
    });
  }, []);

  return { fontsLoaded };
};

export { useFontsLoader };
