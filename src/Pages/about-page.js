import { getTitle } from "../Components/Title/Title";
export function getAboutPage() {
    const aboutPage = document.createElement('div')
    aboutPage.classList.add('about-page')
    const aboutTitle = getTitle('О нас')

    aboutPage.append(aboutTitle)
    return aboutPage
}