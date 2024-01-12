import { getTitle } from "../Components/Title/Title";

export function getCatalogPage() {
    const catalogPage = document.createElement('div')
    catalogPage.classList.add('catalog-page')
    const catalogTitle = getTitle('Каталог товаров')
    catalogPage.append(catalogTitle)
    return catalogPage
}