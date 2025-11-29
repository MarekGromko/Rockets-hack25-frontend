import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./translations/en.json";
import fr from "./translations/en.json";
const resources = {
    en,
    fr
};

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        lng: "en",
        fallbackLng: "en",
        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });

export type defaultNs           = "translation";
export type defaultRessource    = typeof en;
export default i18n;