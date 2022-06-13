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
  //console.log(newDay.getDay());

  let diffDays = Math.abs((firstDay - newDay) / 86400000);

  //console.log(diffDays);
  let count = 0;
  let count2 = 0;
  let count3 = 0;

  for (let i = 0; i <= diffDays; i++) {
    if (count <= 6) {
      count3 = 0;
      count2 = count;
    } else {
      count2 = 0;
      count3 = count;
      if (count == 14) {
        count = 0;
      }
    }
    count += 1;
  }
  if (count <= 7) {
    return weekDay[count2];
  } else {
    return "second" + weekDay[count3 - 7];
  }
};

console.log(addWeek(new Date("0001-01-22")));

const timeTravel = (dateTime) => {
  let newTime = dateTime["date"];

  newTime.setHours(dateTime["hour"]);
  newTime.setMinutes(dateTime["minute"]);
  newTime.setSeconds(dateTime["second"]);

  return newTime;
};

console.log(
  timeTravel({
    date: new Date("2020-05-29 23:25:22"),
    hour: 21,
    minute: 22,
    second: 22,
  }).toString()
);
