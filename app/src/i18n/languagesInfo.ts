interface LanguageTitles {
  [language: string]: string;
}

interface LanguageCodes {
  [code: string]: string;
}

interface LanguageToMomentLocale {
  [language: string]: string;
}

const languageCodes: LanguageCodes = {
  ge: "ge",
  ru: "ru",
  en: "en",
  chn: "chn",
};

const languageTitles: LanguageTitles = {
  ge: "ქართული",
  en: "English",
  ru: "Русский",
  chn: "中国",
};

export const languageToMomentLocale: LanguageToMomentLocale = {
  ge: "ka",
  ru: "ru",
  en: "en-gb",
  chn: "zh",
};

export { languageTitles, languageCodes };
