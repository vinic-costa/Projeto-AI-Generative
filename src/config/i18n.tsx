import { createI18n } from "../helpers/createI18n";
import enUS from "../locales/en-US.json";


export const i18nConfig = {
    key: "i18n",
    fallback: "en-US",
    resources: {
        "en-US": { label: "US English", translation: enUS },
    },
};

const i18n = createI18n(
    i18nConfig.fallback,
    i18nConfig.key,
    i18nConfig.resources
);

export default i18n;
