import * as Localization from "expo-localization";
import I18n from "i18n-js";
import fr from "./fr";
import en from "./en";
export {Language} from './types'


I18n.translations = {
  fr,
  en,
};

I18n.locale = Localization.locale;
I18n.fallbacks = true

export default I18n