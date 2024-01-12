import {getHeader} from '../Components/Header/Header.js'
import { getNavigation } from '../Components/Navigation/Navigation.js';
import { getMain } from '../Components/Main/Main.js';
import { getFooter } from '../Components/Footer/Footer.js';
import { getMainPage } from '../Pages/main-page.js';
import { getAboutPage } from '../Pages/about-page.js';
import { getCatalogPage } from '../Pages/catalog-page.js';
import { getBasketPage } from '../Pages/basket-page.js';
import { router } from '../js/navigo.js'



const app = document.querySelector('.app')
const appContainer = document.createElement('div')
appContainer.classList.add('app__container')

const header = getHeader()
const main = getMain()
const footer = getFooter()


const mainPage = getMainPage()
const aboutPage = getAboutPage()
const catalogPage = getCatalogPage()
const basketPage = getBasketPage()

router.on('/', async () => {
    main.innerHTML = ''
    main.append(mainPage)
})

router.on('/basket', async () => {
    main.innerHTML = ''
    main.append(basketPage)
})

router.on('/about', async () => {
    main.innerHTML = ''
    main.append(aboutPage)
})

router.on('/catalog', async () => {
    main.innerHTML = ''
    main.append(catalogPage)
})

router.resolve()



app.append(appContainer)
appContainer.append(header, main, footer)



