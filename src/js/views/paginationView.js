import View from './View.js';
import icons from 'url:../../img/icons.svg';
import { RESULTS_PER_PAGE } from '../config.js';

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');

  addHandlerClick(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--inline');
      if (!btn) return;
      const goToPage = +btn.dataset.goto;
      handler(goToPage);
      handler();
    });
  }

  _generateMarkup() {
    const curPage = this._data.page;
    const numPages = Math.ceil(this._data.result.length / RESULTS_PER_PAGE);
    if (numPages > 1 && curPage === 1) {
      return `
            ${this._generateMarkupNextBtn(curPage)}
        `;
    }

    if (curPage === numPages && numPages > 1) {
      return `
            ${this._generateMarkupPrevBtn(curPage)}
        `;
    }

    if (curPage < numPages && curPage > 1) {
      console.log(curPage);
      return `
            ${this._generateMarkupPrevBtn(curPage)}
            ${this._generateMarkupNextBtn(curPage)}
        `;
    }
    return '';
  }

  _generateMarkupNextBtn(page) {
    return `
        <button data-goto="${
          page + 1
        }" class="btn--inline pagination__btn--next">
            <span>Page ${page + 1}</span>
            <svg class="search__icon">
                <use href="${icons}#icon-arrow-right"></use>
            </svg>
        </button>
      `;
  }

  _generateMarkupPrevBtn(page) {
    return `
        <button data-goto="${
          page - 1
        }" class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
                <use href="${icons}#icon-arrow-left"></use>
            </svg>
            <span>Page ${page - 1}</span>
        </button>
    `;
  }
}

export default new PaginationView();
