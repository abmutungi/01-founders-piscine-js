const isValid = (date) => {
  if (typeof date !== "string") {
    date = new Date(date);
  }
  if (
    date instanceof Date &&
    !isNaN(date) &&
    date.toString() !== "Invalid Date"
  ) {
    return true;
  }
  return false;
};
const isAfter = (d1, d2) => {
  if (new Date(d1) > new Date(d2)) {
    return true;
  }
  return false;
};
const isBefore = (d1, d2) => {
  if (isValid(d1) && isValid(d2) && !isAfter(d1, d2)) {
    return true;
  }
};

const isFuture = (date) => {
  if (isValid(date) && isAfter(date, Date.now())) {
    return true;
  }
  return false;
};

const isPast = (date) => {
  if (isValid(date) && !isFuture(date)) {
    return true;
  }
  return false;
};
console.log(isBefore(new Date("1992-01-01"), new Date("1992-01-02")));
