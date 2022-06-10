const nasa = (num) => {
  let str = "";

  for (let i = 1; i <= num; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      str += "NASA" + " ";
    } else if (i % 3 === 0 && i % 5 != 0) {
      str += "NA" + " ";
    } else if (i % 3 != 0 && i % 5 === 0) {
      str += "SA" + " ";
    } else {
      str += i + " ";
    }
  }
  return str;
};
console.log(nasa(15));
