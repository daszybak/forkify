class SearchView {
  _parentEl = document.querySelector('.search');
  _searchEl = this._parentEl.querySelector('.search__field');

  getQuery() {
    const query = this._searchEl.value;
    this._clearInput();
    this._removeFocus();
    return query;
  }

  _removeFocus() {
    this._searchEl.blur();
  }

  _clearInput() {
    this._searchEl.value = '';
  }

  addHandlerSearch(handler) {
    this._parentEl.addEventListener('submit', function (e) {
      e.preventDefault();
      handler();
    });
  }
}

export default new SearchView();
