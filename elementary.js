function multiply(a, b) {
  let num = 0;

  if (a && b > 0) {
    for (let i = 0; i < b; i++) {
      num += a;
    }
    return num;
  }

  if (a < 0 && b > 0) {
    for (let i = 0; i < b; i++) {
      num += Math.abs(a);
    }
    return -Math.abs(num);
  }

  if (a > 0 && b < 0) {
    for (let i = 0; i < Math.abs(b); i++) {
      num += a;
    }
    return -Math.abs(num);
  }

  if (a < 0 && b < 0) {
    for (let i = 0; i < Math.abs(b); i++) {
      num += Math.abs(a);
    }
    return num;
  } else {
    return 0;
  }
}

//console.log(multiply(12, -12));

function divide(a, b) {
  if (a < b && a > 0) {
    return 0;
  } else if (a < 0) {
    let count = 0;

    while (a > b) {
      a -= b;
      count++;
    }
    return count;
  }
}

console.log(divide(12, 2));
