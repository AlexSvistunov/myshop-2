import { getTitle } from "../Components/Title/Title";

export function getBasketPage() {
    const basketPage = document.createElement('div')
    basketPage.classList.add('page-basket')
    const basketTitle = getTitle('Корзина')
    basketPage.append(basketTitle)
    return basketPage
}