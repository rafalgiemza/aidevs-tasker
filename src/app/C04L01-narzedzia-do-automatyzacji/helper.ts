export async function getCurrencyValue(currencyCode: string) {
  const url = `http://api.nbp.pl/api/exchangerates/tables/A`;
  const data = await fetch(url)
    .then((response) => response.text())
    .then((data) => data);

  const json = JSON.parse(data);
  const { rates } = json.at(0);
  console.log("🚀 ~ getCurrencyValue ~ rates:", rates);

  interface Rate {
    currency: string;
    code: string;
    mid: number;
  }

  const singleItem = rates.find((rate: Rate) => rate.code === currencyCode);
  return singleItem.mid;
}

export async function getPopulation(country: string) {
  const apiBase = `https://restcountries.com/v3.1/name/`;
  const data = await fetch(`${apiBase}${country}`);
  const json = await data.json();
  const { population } = json.at(0);
  console.log("🚀 ~ getPopulation ~ population:", population);
  return population;
}
