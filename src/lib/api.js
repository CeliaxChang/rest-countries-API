const BASE_URL = "https://restcountries.com/v3.1";

export const getData = async (url) => {
  const response = await fetch(`${BASE_URL}${url}`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error("Data request failed!");
  }

  const transformedData = data.map((item) => {
    return {
      id: item.cca3,
      name: item.name.common,
      flags: item.flags.svg,
      nativeName: item.name.nativeName,
      population: item.population.toLocaleString(),
      region: item.region,
      subregion: item.subregion,
      capital: item.capital,
      tld: item.tld,
      currencies: item.currencies,
      languages: item.languages,
      borders: item.borders,
    };
  });

  return transformedData;
};
