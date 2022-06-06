function isPositive(num){
    return num > 0
}

function abs (n){
    if (n == 0) {
        return 0
    }

    if (!isPositive(n)) {
        return n * -1
    }

    return n
}

//console.log(abs(-1))