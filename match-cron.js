const matchCron = (cron, date) => {
  let res = [];
  //   let regexp = /\d/g;
  //   if (!regexp.test(cron)) {
  //     return new Date();
  //   } else {
  if (cron[0] == date.getMinutes()) {
    res.push(1);
  } else if (cron[2] == date.getHours()) {
    res.push(1);
  } else if (cron[4] == date.getDate()) {
    res.push(1);
  } else if (cron[6] == date.getMonth()) {
    res.push(1);
  } else if (cron[8] == date.getDay()) {
    res.push(1);
  }

  if (!res.includes(1)) {
    return false;
  }
  return true;
};

console.log(matchCron('* * * * 1', new Date('2020-06-02 00:00:00')));
