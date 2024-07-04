class SearchView {
  _ptElement = document.querySelector('.search');

  getQuery() {
    const query = this._ptElement.querySelector('.search__field').value;
    this._clearInput();
    return query;
  }

  _clearInput() {
    this._ptElement.querySelector('.search__field').value = '';
  }

  addHandlerSearch(handler) {
    this._ptElement.addEventListener('submit', function (e) {
      e.preventDefault();
      handler();
    });
  }
}

export default new SearchView();
