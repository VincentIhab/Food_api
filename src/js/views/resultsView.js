import View from './View';
import icons from 'url:../../img/icons.svg';

class resultsView extends View {
  _ptElement = document.querySelector('.results');
  _errorMessage = "We couldn't find it try again";
  _Message = '';

  _generateMarkup() {
    const id = window.location.hash.slice(1, -1);
    return this._data
      .map(d => {
        return `          
          <li class="preview">
            <a class="preview__link ${
              d.id === id ? 'preview__link--active' : ''
            }" href="/#${d.id}/">
              <figure class="preview__fig">
                <img src="${d.image}" alt="${d.title}" />
              </figure>
              <div class="preview__data">
                <h4 class="preview__title">${d.title}</h4>
                <p class="preview__publisher">${d.publisher}</p>

              </div>
            </a>
          </li>`;
      })
      .join('');
  }
}

export default new resultsView();

{
  /* <div class="preview__user-generated">
<svg>
  <use href="${icons}#icon-user"></use>
</svg>
</div> */
}
