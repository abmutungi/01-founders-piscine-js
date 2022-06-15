const filterShortStateName = (arrStr) => arrStr.filter((str) => str.length < 7);

const filterStartVowel = (arrStr) =>
  arrStr.filter((str) => str.match(/^[aeiou]/gi));

let regex = /[aeiou]/gi;
const filter5Vowels = (arrStr) =>
  arrStr.filter((str) => str.match(regex).length >= 5);

const filter1DistinctVowel = (arrStr) =>
  arrStr.filter((str) =>
    str
      .match(/[aeiou]/gi)
      .every((v) => v.toLowerCase() === str.match(/[aeiou]/gi)[0].toLowerCase())
  );

// console.log(
//   filter1DistinctVowel([
//     "Alabama",
//     "Alaska",
//     "Arkansas",
//     "Kansas",
//     "Maryland",
//     "Mississippi",
//     "New Jersey",
//     "Tennessee",
//   ])
// );

// let regex2 = /[aeiou]+/i;
// let regex3 = /^[aeiou]/gi;
const multiFilter = (arrStr) =>
  arrStr.filter(
    (str) =>
      str["capital"].length >= 8 &&
      str['tag'].length == 2 &&
      /[aeiou]+/i.test(str["tag"]) &&
      !/^[aeiou]/gi.test(str["name"]) &&
      str["region"] !== "South"
  );

console.log(
  multiFilter([
    { tag: "CA", name: "California", capital: "Sacramento", region: "West" },
    {
      tag: "PA",
      name: "Pennsylvania",
      capital: "Harrisburg",
      region: "Northeast",
    },
    {
      tag: "MO",
      name: "Missouri",
      capital: "Jefferson City",
      region: "Midwest",
    },
    {
      tag: "RI",
      name: "Rhode Island",
      capital: "Providence",
      region: "Northeast",
    },
  ])
);
