let arch = [];

const getArchitects = () => {
  arch = Array.from(document.getElementsByTagName("a"));
  const nonArch = Array.from(document.getElementsByTagName("span"));

  return [arch, nonArch];
};
const getClassical = () => {
  let arr = [
    arch.filter(
      (element) =>
        element.className == "classical " ||
        element.className == "classical active"
    ),
    arch.filter(
      (element) =>
        element.className !== "classical " &&
        element.className != "classical active"
    ),
  ];
  //console.log(arr);
  return arr;
};
const getActive = () => {
  let arr = [
    getClassical()[0].filter(
      (element) => element.className === "classical active"
    ),
    getClassical()[0].filter((element) => element.className === "classical "),
  ];
  //   console.log(arr);
  return arr;
};
const getBonannoPisano = () => {
  let arr = [
    getActive()[0].filter((element) => element.id === "BonannoPisano"),
    getActive()[0].filter((element) => element.id !== "BonannoPisano"),
  ];
  console.log(arr);

  return arr;
};

export {getActive, getArchitects, getClassical, getBonannoPisano };
