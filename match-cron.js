const matchCron = (cron, date) => {
  let res = [];
  let regexp = /\d/g;
  if (!regexp.test(cron)) {
    return new Date();
  } else {
    if (cron[0] == date.getMinutes()) {
      res.push(1);
    } else if (cron[2] == date.getHours()) {
      res.push(1);
    } else if (cron[4] == date.getDate()) {
      res.push(1);
    } else if (cron[6] == date.getMonth() + 1) {
      res.push(1);
    } else if (cron[8] == date.getDay()) {
      res.push(1);
    }
    if (!res.includes(1)) {
      return false;
    }
    return true;
  }
};
console.log(matchCron("3 3 * 3 3", new Date("2021-03-02 03:03:00")));
