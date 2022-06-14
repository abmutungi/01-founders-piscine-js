const matchCron = (cron, date) => {
  //let res = [];
  let regexp = /\d/g;
  if (!regexp.test(cron)) {
    return new Date();
  } else {
    if (cron[0] != date.getMinutes() && cron[0] != "*") {
      return false;
    } else if (cron[2] != date.getHours() && cron[2] != "*") {
      return false;
    } else if (cron[4] != date.getDate() && cron[4] != "*") {
      return false;
    } else if (cron[6] != date.getMonth() + 1 && cron[6] != "*") {
      return false;
    } else if (cron[8] != date.getDay() && cron[8] != "*") {
      return false;
    }
    // if (!res.includes(1)) {
    //   return false;
    // }
    return true;
  }
};
console.log(matchCron("3 3 * 3 3", new Date("2021-03-02 03:03:00")));
