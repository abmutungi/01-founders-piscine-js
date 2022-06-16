const hasCity = (count, arrCit) => {
  return (city) => {
    return arrCit.includes(city) ? `${city} is a city from ${count}` : `${city} is not a city from ${count}`;
  };
};
