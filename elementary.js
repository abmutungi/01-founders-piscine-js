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
  } else if (a > b && b > 0) {
    let count = 0;

    while (a >= 0 && a >= b) {
      a -= b;
      count++;
    }
    return count;
  } else if (a < 0 && b > 0) {
    let count = 0;
    let c = -a;

    while (c >= 0 && c >= b) {
      c -= b;
      count++;
    }
    return -count;
  } else if (a > 0 && b < 0) {
    let count = 0;
    let d = -b;

    while (a >= 0 && a >= d) {
      a -= d;
      count++;
    }
    return -count;
  } else if (a < 0 && b < 0) {
    let count = 0;
    let c = -a;
    let d = -b;

    while (c >= 0 && c >= d) {
      c -= d;
      count++;
    }
    return count;
  }
}

function modulo(a, b) {
  let c = divide(a, b);
  let d = multiply(c, b);
  let e = a - d;
  return e;
}

console.log(modulo(34, 78));
