import icons from 'url:../../img/icons.svg';

export default class View {
  _data;

  render(data) {
    if (!data || (Array.isArray(data) && data.length === 0))
      return this.renderError();
    this._data = data;
    const markup = this._generateMarkup();
    this._clear();
    this._ptElement.insertAdjacentHTML('afterbegin', markup);
  }

  update(data) {
    this._data = data;
    const newMarkup = this._generateMarkup();
    const newDom = document.createRange().createContextualFragment(newMarkup);
    const newElements = Array.from(newDom.querySelectorAll('*'));
    const curElements = Array.from(this._ptElement.querySelectorAll('*'));

    newElements.forEach((newEl, i) => {
      const curEl = curElements[i];
      if (
        !newEl.isEqualNode(curEl) &&
        newEl.firstChild?.nodeValue.trim() !== ''
      )
        curEl.textContent = newEl.textContent;

      if (!newEl.isEqualNode(curEl))
        Array.from(newEl.attributes).forEach(attr =>
          curEl.setAttribute(attr.name, attr.value)
        );
    });
  }

  _clear() {
    this._ptElement.innerHTML = '';
  }

  spinner() {
    const markup = `
          <div class="spinner">
            <svg>
              <use href="${icons}#icon-loader"></use>
            </svg>
          </div> 
    `;
    this._clear();
    this._ptElement.insertAdjacentHTML('afterbegin', markup);
  }

  renderError(message = this._errorMessage) {
    const markup = `
         <div class="error">
            <div>
              <svg>
                <use href="${icons}_icon-alert-triangle"></use>
              </svg>
            </div>
            <p>${message}</p>
          </div> 
        `;
    this._clear();
    this._ptElement.insertAdjacentHTML('afterbegin', markup);
  }

  renderS_message(message = this._Message) {
    const markup = `
         <div class="message">
            <div>
              <svg>
                <use href="${icons}_icon-smile"></use>
              </svg>
            </div>
            <p>${message}</p>
          </div> 
        `;
    this._clear();
    this._ptElement.insertAdjacentHTML('afterbegin', markup);
  }
}
