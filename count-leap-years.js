const countLeapYears = (date) => {
  const firstDay = new Date("0001-01-01");
  const year0 = firstDay.getUTCFullYear();
  console.log(year0);
  const yearX = date.getUTCFullYear();
  console.log(yearX);
  const diff = yearX - year0;
  console.log(diff);
  let count = 0;
  for (let i = 0; i <= diff; i++) {
    if ((i % 4 == 0 && i % 100 != 0) || i % 400 === 0) {
      count += 1;
    }
  }
  return count - 1;
};

console.log(countLeapYears(new Date("2020-01-01")));
