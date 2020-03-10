import * as Localization from 'expo-localization';
import i18n from "i18n-js";
import translations from "./translations";
import moment from "moment";

i18n.fallbacks = true;
i18n.translations = translations;

moment.updateLocale('en', {
  calendar: {
    lastDay : '[Yesterday,] LL[,] LT',
    sameDay : '[Today,] LL[,] LT',
    lastWeek : 'LL[,] HH:mm',
    sameElse : 'LL[,] HH:mm',
  },
});

moment.updateLocale('ru', {
  calendar: {
    sameDay : '[Сегодня,] LL[,] HH:mm',
    lastDay : '[Вчера,] LL[,] HH:mm',
    lastWeek : 'LL[,] HH:mm',
    sameElse : 'LL[,] HH:mm',
  },
});

export { i18n };
