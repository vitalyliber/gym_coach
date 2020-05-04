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
  call: "Call",
  categories: "Categories",
  sets: "Sets",
  repetitions: "Repetitions",
  weight: "Weight",
  rest: "Rest",
  active: "Active"
};
I18n.translations["ru"] = {
  workout_programs: "Пакеты тренировок",
  open: "Открыть",
  next: "Перейти",
  details: "Подробнее",
  logout: "Выйти",
  Login: "Войти",
  call: "Позвонить",
  categories: "Категории",
  sets: "Подходов",
  repetitions: "Повторений",
  weight: "Вес",
  rest: "Отдых",
  active: "Выполнение"
};
const languages = ["ru", "en"];
const fallback = "en";
const i18nInit = ({ lang = fallback, force = false }) => {
  if (force) {
    I18n.locale = languages.includes(lang) ? lang : fallback;
  } else {
    if (process.browser) {
      const myLanguage = browserLang({
        languages: languages,
        fallback
      });
      I18n.locale = myLanguage || lang;
    } else {
      I18n.locale = lang;
    }
  }
  return I18n;
};

export default i18nInit;
