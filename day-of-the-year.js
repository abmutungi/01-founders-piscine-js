// const dayOfTheYear = (date) => {
//   console.log(firstDayOfYear);

//   const res = firstDayOfYear - date;

//   return res / (1000 * 60 * 60 * 2);
// };

const dayOfTheYear = (date) => {
  if (date.getUTCDate() === 1 && date.getUTCMonth() === 0) {
    return 1;
  } else {
    console.log(date.getMonth());
    const oneDay = 24 * 60 * 60 * 1000;

    const year = date.getUTCFullYear();
    const firstDayOfYear = new Date(year, 0, 1);
    //const firstDayOfYear = new Date(date.getUTCFullYear(), date.getUTCMonth(), 1);

    const diffDays = Math.round(Math.abs((date - firstDayOfYear) / oneDay));

    return diffDays + 1;
  }
};
console.log(dayOfTheYear(new Date("0001-01-01")));
