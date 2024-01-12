import { getTitle } from "../Components/Title/Title";

export function getMainPage() {
    const mainPage = document.createElement('div')
    mainPage.classList.add('main-page');
    const mainPageTitle = getTitle('Главная страница');

    mainPage.append(mainPageTitle)

    return mainPage
}