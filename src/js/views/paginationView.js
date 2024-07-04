import View from './View';
import icons from 'url:../../img/icons.svg';

class PaginationView extends View {
  _ptElement = document.querySelector('.pagination');

  addHandlerClick(Handler) {
    this._ptElement.addEventListener('click', e => {
      const btn = e.target.closest('.btn--inline');
      if (!btn) return;
      const goToPage = +btn.dataset.goto;
      Handler(goToPage);
    });
  }

  _markupButton(type, curPage) {
    const rightBtn = `<button data-goto=${
      curPage + 1
    } class="btn--inline pagination__btn--next">
            <span>Page ${curPage + 1}</span>
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-right"></use>
            </svg>
        </button>`;
    const leftBtn = `<button data-goto=${
      curPage - 1
    } class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-left"></use>
            </svg>
            <span>Page ${curPage - 1}</span>
        </button>`;
    switch (type) {
      case 'rightBtn':
        return rightBtn;
      case 'leftBtn':
        return leftBtn;
      case 'Both':
        return rightBtn + leftBtn;
      default:
        return '';
    }
  }
  _generateMarkup() {
    const curPage = this._data.page;
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );
    console.log(numPages);
    // 1) IN PAGE 1 AND THERE IS MORE PAGE
    if (curPage === 1 && numPages > 1) {
      return this._markupButton('rightBtn', curPage);
    }

    // 2) IN PAGE 1 AND THERE IS NO MORE PAGES

    // 3) LAST PAGE
    if (curPage === numPages && numPages > 1) {
      return this._markupButton('leftBtn', curPage);
    }

    // 5) OTHER PAGES
    if (curPage < numPages) {
      return this._markupButton('Both', curPage);
    }

    return 'only 1';
  }
}

export default new PaginationView();
