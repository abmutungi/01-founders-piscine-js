function isPositive(num){
    return num > 0
}

function sign(n){

    if (isPositive(n)) {
        return 1
    }
    if (n==0) {
        return 0
    }
        return -1 
}

function sameSign(x, y){

    if (sign(x)==sign(y)){
        return true
    }
    return false
}

//console.log(sameSign(1,1))