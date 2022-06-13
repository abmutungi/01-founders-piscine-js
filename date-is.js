const isValid = (date) => {};
const isAfter = (d1, d2) => {
  if (new Date(d1) > new Date(d2)) {
    return true;
  }
  return false;
};

console.log(isAfter(new Date("1992-01-01"), new Date("1992-01-02")));
