const citiesOnly = (objArr) => {
  return objArr.map((val) => val["city"]);
};

const upperCasingStates = (arrStr) => {
  return arrStr.map((arrStr) =>
    arrStr.replace(/\b\w/g, (c) => c.toUpperCase())
  );
};
//console.log(upperCasingStates(['alabama', 'new jersey']))
const fahrenheitToCelsius = (arrTemp) => {
  return arrTemp.map(
    (temp) => String(Math.floor(((parseInt(temp) - 32) * 5) / 9)) + "°C"
  );
};

const trimTemp = (arrObj) => {
  return arrObj.map((item) => {
    const regex = /\s/g;
    const newObj = Object.assign({}, item);
    newObj["temperature"] = item["temperature"].replace(regex, "");
    return newObj;
  });
};

const tempForecasts = (arrObj) => {
  return arrObj.map((item) => {
    item["temperature"] = fahrenheitToCelsius(item["temperature"]);
    item["state"] = upperCasingStates(item["state"]);
    return `${item["temperature"] + "elsius"} in ${item["city"]}, ${
      item["state"]
    }`;
  });
};

const tempForecast = {
  city: "Pasadena",
  temperature: " 101 °F",
  state: "california",
  region: "West",
};

// console.log(citiesOnly([tempForecast]));
console.log(trimTemp([tempForecast]));
// console.log(fahrenheitToCelsius([tempForecast]));
// console.log(upperCasingStates([tempForecast.state]));
