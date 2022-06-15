var num = -155,
  lastDigit = num % 1;

console.log(lastDigit);

// const tempForecasts = (arrObj) => {
//   return arrObj.map(item => {
//     item["temperature"] = fahrenheitToCelsius(item["temperature"]);
//     item["state"] = upperCasingStates(item["state"]);
//     return `${item["temperature"] + "elsius"} in ${item["city"]}, ${
// item["state"]
//     }`;
//   });
// };