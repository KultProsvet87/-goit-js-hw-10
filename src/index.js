import './css/styles.css';
import debounce from 'lodash.debounce';
// import { Notify } from 'notiflix/build/notiflix-notify-aio';
import refs from './js/refs';
import { fetchCountries } from './js/fetchCountries';

const DEBOUNCE_DELAY = 300;

refs.searchBox.addEventListener(
  'input',
  debounce(onSearchBoxCheange, DEBOUNCE_DELAY)
);

function onSearchBoxCheange(e) {
  refs.countryList.innerHTML = '';
  refs.countryInfo.innerHTML = '';
  const name = e.target.value;
  if (!name) return;
  fetchCountries(name);
}
