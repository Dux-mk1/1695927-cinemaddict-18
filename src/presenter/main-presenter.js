import {render, RenderPosition} from '../render.js';
import UserRankView from '../view/user-rank-view.js';
import MainNavigationView from '../view/main-navigation-view.js';
import FiltersView from '../view/filters-view.js';
import CardsFilmView from '../view/cards-film-view.js';
import FooterStatisticView from '../view/footer-statisctic-view.js';

const siteMainElement = document.querySelector('.main');
const headerLogo = document.querySelector('.header__logo');
const footerLogo = document.querySelector('.footer__logo');
export default class MainPresenter {
  init = () => {
    render(new UserRankView(), headerLogo, RenderPosition.AFTEREND);
    render(new MainNavigationView(), siteMainElement);
    render(new FiltersView(), siteMainElement);
    render(new CardsFilmView(),siteMainElement);
    render(new FooterStatisticView(),footerLogo, RenderPosition.AFTEREND);
  };
}
