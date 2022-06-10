const sameAmount = (str, ex1, ex2) => {
  let reg1 = new RegExp(ex1, "g");
  let reg2 = new RegExp(ex2, "g");
  let regex1 = str.match(reg1);
  let regex2 = str.match(reg2);

  if (regex1 !== null && regex2 !== null && regex1.length === regex2.length) {
    return true;
  }
  return false;
};

 console.log(sameAmount('hello how are you', /l/, /e/))