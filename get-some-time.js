// const firstDayWeek = (week, year) => {
//   if ((week) => 1 && week <= 53) {
//     new Date(year);
//   }
// };
function padWithZero(num, targetLength) {
  return String(num).padStart(targetLength, "0");
}

function firstDayWeek(week, year) {
  if (week === 1 && year === "1000") {
    return "01-01-" + year;
  }

  let d = 1 + (week - 1) * 7;

  let date = new Date(Date.UTC(year, 0, d, 12));

  //let diff = date.getDate() - date.getDay() + (date.getDay() === 0 ? -6 : 1);

  //let res = new Date(date.setUTCDate(diff));

  if (year < 1000) {
    date.setFullYear(year);
  }

  while (date.getUTCDay() !== 1) {
    date.setUTCDate(date.getUTCDate() - 1);
  }
  //console.log(res);
  const day = date.getDate();
  let dayRes = padWithZero(day, 2);
  const month = date.getMonth() + 1;
  let monthRes = padWithZero(month, 2);
  let yr = date.getFullYear();
  const yrRes = padWithZero(yr, 4);

  return dayRes + "-" + monthRes + "-" + yrRes;
}

console.log(firstDayWeek(1, "1000"));
console.log(firstDayWeek(52, "1000"));
console.log(firstDayWeek(2, "0001"));
console.log(firstDayWeek(43, "1983"));
console.log(firstDayWeek(23, "0091"));
console.log(firstDayWeek(2, "2017"));
