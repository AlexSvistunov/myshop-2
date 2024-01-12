import {getNavigation} from '../Navigation/Navigation'
import './Header.css'
export function getHeader() {
    const header = document.createElement('header')
    header.classList.add('header')

    const navigation = getNavigation();

    header.append(navigation)

    return header
}