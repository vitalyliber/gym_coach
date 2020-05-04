import I18n from "i18n-js";
import browserLang from "browser-lang";
I18n.defaultLocale = "en";
I18n.translations["en"] = {
  workout_programs: "Workout programs",
  open: "Open",
  next: "Next",
  details: "Details",
  logout: "Logout",
  Login: "Login",
  call: "Call"
};
I18n.translations["ru"] = {
  workout_programs: "Пакеты тренировок",
  open: "Открыть",
  next: "Перейти",
  details: "Подробнее",
  logout: "Выйти",
  Login: "Войти",
  call: "Позвонить"
};
const i18nInit = ({ lang = "en", force = false }) => {
  if (force) {
    I18n.locale = lang;
  } else {
    if (process.browser) {
      const myLanguage = browserLang({
        languages: ["ru", "en"],
        fallback: "en"
      });
      I18n.locale = myLanguage || lang;
    } else {
      I18n.locale = lang;
    }
  }
  return I18n;
};

export default i18nInit;
