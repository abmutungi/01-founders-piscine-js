// const every = (arr, func) =>
//   arr.map((element) => (func(element))) ? true : false;
const every = (arr, f) => {
  for (let i = 0; i < arr.length; i++) {
    if (f(arr[i]) === false) {
      return false;
    }
  }
  return true;
};

const some = (arr, f) => {
  for (let i = 0; i < arr.length; i++) {
    if (f(arr[i]) === true) {
      return true;
    }
  }
  return false;
};

const none = (arr, f) => {
  for (let i = 0; i < arr.length; i++) {
    if (f(arr[i]) === true) {
      return false;
    }
  }
  return true;
};
