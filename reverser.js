function reverse(str) {
  let res = [];

  for (let i = str.length; i >= 0; i--) {
    res.push(str[i]);
  }
  res.shift();
  return typeof str == "string" ? res.join("") : res;
}

console.log(reverse("salut c'est cool"));
