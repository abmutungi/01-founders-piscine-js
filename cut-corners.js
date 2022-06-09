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

const round = (num) => {
  if (num == 0) {
    return 0;
  }
  if (num > 0) {
    let moduloNum = modulo(num, 1);

    if (moduloNum != 0) {
      if (moduloNum >= 0.5) {
        return num - moduloNum + 1;
      }
      return num - moduloNum;
    }
    return num;
  } else {
    let numPos = num * -1;
    let moduloNum = modulo(numPos, 1);

    if (moduloNum != 0) {
      if (moduloNum >= 0.5) {
        return -(numPos - moduloNum + 1);
      }
      return -(numPos - moduloNum);
    }
    return numPos;
  }
};

const ceil = (num) => {
  let moduloNum = modulo(num, 1);

  if (num == 0) {
    return 0;
  }
  if (num > 0) {
    return num - moduloNum + 1;
  }
  return num - moduloNum;
};

const floor = (num) => {
  let moduloNum = modulo(num, 1);

  if (num == 0) {
    return 0;
  }
  if (num > 0) {
    return num - moduloNum;
  }
  return num - moduloNum - 1;
};

const trunc = (num) => {
  let moduloNum = modulo(num, 1);

  if (num == 0) {
    return 0;
  }

  if (num > 0xfffffffff && modulo(num, 1) != 0 && num > 0) {
    let diff = num - 0xfffffffff;
    // let st = '0xfffffffff + '
    let res = diff - modulo(diff, 1);
    return 0xfffffffff + res;
  }
  if (Math.abs(num) > 0xfffffffff && modulo(Math.abs(num), 1) != 0 && num < 0) {
    numP = Math.abs(num);

    let diff = numP - 0xfffffffff;
    // let st = '0xfffffffff + '
    let res = diff - modulo(diff, 1);
    return -Math.abs(0xfffffffff + res);
  }

  if (num > 0) {
    return num - moduloNum;
  }
  return num - moduloNum;
};

//console.log(trunc(0xfffffffff + 9.8));
