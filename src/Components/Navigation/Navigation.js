import './Navigation.scss';
import { router}  from '../../js/navigo.js';
export function getNavigation() {
    const navigation = document.createElement('nav')
    navigation.classList.add('header__nav', 'navigation')

    const navigationList = document.createElement('ul')
    navigationList.classList.add('navigation__list', 'list-reset')

    const navigationItem1 = document.createElement('li')
    navigationItem1.classList.add('navigation__item')
    const navigationItem2 = document.createElement('li')
    navigationItem2.classList.add('navigation__item')
    const navigationItem3 = document.createElement('li')
    navigationItem3.classList.add('navigation__item')

    const navigationLink1 = document.createElement('a')
    navigationLink1.classList.add('navigation__link')
    navigationLink1.textContent = 'Корзина'
    navigationLink1.href = '/basket'

    const navigationLink2 = document.createElement('a')
    navigationLink2.classList.add('navigation__link')
    navigationLink2.textContent = 'О нас'
    navigationLink2.href = '/about'

    const navigationLink3 = document.createElement('a')
    navigationLink3.classList.add('navigation__link')
    navigationLink3.textContent = 'Каталог товаров'
    navigationLink3.href = '/catalog'

    navigationLink1.addEventListener('click', (e) => {
        e.preventDefault()
        router.navigate('/basket')
    })

    navigationLink2.addEventListener('click', (e) => {
        e.preventDefault()
        router.navigate('/about')
    })

    navigationLink3.addEventListener('click', (e) => {
        e.preventDefault()
        router.navigate('/catalog')
    })



    navigation.append(navigationList)
    navigationList.append(navigationItem1, navigationItem2, navigationItem3)
    navigationItem1.append(navigationLink1)
    navigationItem2.append(navigationLink2)
    navigationItem3.append(navigationLink3)

    return navigation
}   