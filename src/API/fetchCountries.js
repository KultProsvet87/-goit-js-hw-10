function fetchCountries(name) {
  const options = '?fields=name,capital,flags,population,languages';
  const defaultURL = 'https://restcountries.com/v3.1/name/';
  return fetch(defaultURL + name + options).then(r => {
    if (!r.ok) throw new Error();
    return r.json();
  });
}

export { fetchCountries };
