
const LANG = {
    de: {
        title: "Willkommen bei PotsdamNavi",
        search: "Suche",
        route: "Route planen",
        favorites: "Favoriten",
        reviews: "Bewertungen"
    },

    en: {
        title: "Welcome to PotsdamNavi",
        search: "Search",
        route: "Plan Route",
        favorites: "Favorites",
        reviews: "Reviews"
    },

    ru: {
        title: "Добро пожаловать в PotsdamNavi",
        search: "Поиск",
        route: "Построить маршрут",
        favorites: "Избранное",
        reviews: "Отзывы"
    },

    uk: {
        title: "Ласкаво просимо до PotsdamNavi",
        search: "Пошук",
        route: "Побудувати маршрут",
        favorites: "Обране",
        reviews: "Відгуки"
    },

    tr: {
        title: "PotsdamNavi'ye Hoş Geldiniz",
        search: "Ara",
        route: "Rota Oluştur",
        favorites: "Favoriler",
        reviews: "Yorumlar"
    }
};

function getUserLanguage() {
    let lang = navigator.language.substring(0,2);

    if(LANG[lang])
        return lang;

    return "en";
}

const CURRENT_LANG = getUserLanguage();
