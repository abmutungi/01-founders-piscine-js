const addWeek = (date) => {
  const firstDay = new Date("0001-01-01");
  console.log(firstDay);

  const weekDay = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const newDay = new Date(date);
  console.log(newDay.getDay());

  let diffDays = Math.abs((firstDay - newDay) / 86400000);

  console.log(diffDays);

  Date.prototype.getWeekNumber = function () {
    var d = new Date(
      Date.UTC(this.getFullYear(), this.getMonth(), this.getDate())
    );
    var dayNum = d.getUTCDay() || 7;
    d.setUTCDate(d.getUTCDate() + 4 - dayNum);
    var yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
    return Math.ceil(((d - yearStart) / 86400000 + 1) / 7);
  };

  if (date % 2 !== 0) {
    return weekDay[newDay.getDay()];
  }
  return "second" + weekDay[newDay.getDay()];
};

console.log(addWeek(new Date("0001-01-14")));
