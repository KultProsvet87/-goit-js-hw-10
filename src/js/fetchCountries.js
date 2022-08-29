import { Notify } from 'notiflix/build/notiflix-notify-aio';
import refs from './refs';
import { makeMarkUpForList, makeMarkUpForInfo } from './createmarkups';

function fetchCountries(name) {
  const options = '?fields=name,capital,flags,population,languages';
  const defaultURL = 'https://restcountries.com/v3.1/name/';
  fetch(defaultURL + name + options)
    .then(r => {
      if (!r.ok) throw new Error();
      return r.json();
    })
    .then(r => {
      if (r.length >= 10) {
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
      refs.countryInfo.innerHTML = makeMarkUpForInfo(r[0]);
      refs.countryList.innerHTML = '';
    })
    .catch(err => {
      console.log(err);
      Notify.failure('Oops, there is no country with that name');
    });
}

export { fetchCountries };
