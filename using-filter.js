const filterShortStateName = (arrStr) => arrStr.filter((str) => str.length < 7);

// console.log(
//   filterShortStateName([
//     "Alaska",
//     "Hawaii",
//     "Idaho",
//     "Iowa",
//     "Kansas",
//     "Maine",
//     "Nevada",
//     "Ohio",
//     "Oregon",
//     "Texas",
//     "Utah",
//   ])
// );

const filterStartVowel = (arrStr) =>
  arrStr.filter((str) => str.match(/^[aeiou]/gi));

// console.log(
//   filterStartVowel([
//     "Alaska",
//     "Hawaii",
//     "Idaho",
//     "Iowa",
//     "Kansas",
//     "Maine",
//     "Nevada",
//     "Ohio",
//     "Oregon",
//     "Texas",
//     "Utah",
//   ])
// );

let regex = /[aeiou]/gi;
const filter5Vowels = (arrStr) =>
  arrStr.filter((str) => str.match(regex).length >= 5);

// console.log(
//   filter5Vowels([
//     "California",
//     "Louisiana",
//     "North Carolina",
//     "South Carolina",
//     "South Dakota",
//     "West Virginia",
//   ])
// );

const filter1DistinctVowel = (arrStr) =>
  arrStr
    .match(/[aeiou]/gi)
    .every(
      (str) => str.toLowerCase() === arrStr.match(/[aeiou]/gi)[0].toLowerCase()
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
//     "Washington",
//   ])
let regex2 = /[aeiou]+/i;
let regex3 = /^[^aeiou]/gi;
const multiFilter = (arrStr) =>
  arrStr.filter(
    (str) =>
      str["capital"].length >= 8 &&
      regex2.test(str["tag"]) &&
      regex3.test(str["name"]) &&
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
  ])
);
