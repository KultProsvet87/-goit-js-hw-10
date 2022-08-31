import './css/styles.css';
import debounce from 'lodash.debounce';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import refs from './js/refs';
import { fetchCountries } from './API/fetchCountries';
import {
  makeMarkUpForList,
  makeMarkUpForInfo,
} from './templates/createmarkups';

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
  fetchCountries(name)
    .then(r => {
      if (r.length > 10) {
        Notify.info(
          'Too many matches found. Please enter a more specific name.'
        );
        return;
      }
      if (r.length > 1) {
        refs.countryList.innerHTML = makeMarkUpForList(r);
        refs.countryInfo.innerHTML = '';
        return;
      }
      const data = r[0];
      refs.countryInfo.innerHTML = makeMarkUpForInfo(data);
      refs.countryList.innerHTML = '';
    })
    .catch(err => {
      console.log(err);
      Notify.failure('Oops, there is no country with that name');
    });
}
