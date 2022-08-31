function makeMarkUpForList(data) {
  const markUp = data
    .map(elem => {
      return `<li class="country-item">
        <img src="${elem.flags.svg}" height="25px" alt="Flag of ${elem.name.official}" />
        <p>${elem.name.official}</p>
      </li>`;
    })
    .join('');
  return markUp;
}

function makeMarkUpForInfo(data) {
  const languages = Object.values(data.languages).join(', ');

  return `<p><img src="${data.flags.svg}" height="20px" alt="Flag of ${data.name.official}"><b> ${data.name.official}</b></p>
    <p><b>Capital</b>: ${data.capital}</p>
    <p><b>Population</b>: ${data.population}</p>
    <p><b>Languages</b>: ${languages}</p>`;
}

export { makeMarkUpForList, makeMarkUpForInfo };
