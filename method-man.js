function words(text){
  // let array =  text.split(' ');
   return text.split(' ');
}


function sentence(arr){
  return arr.join(' ');
}

function yell(str){
    return str.toUpperCase()
}

function whisper(str){

    return '*' + str.toLowerCase() + '*'
}

function capitalize(str){
    // return words(str)
    //     .map((a)=> a
    //         .split('')
    //         .map((char, i) => i === 0 ? char.toUpperCase() : char)
    //         .join(""))
    //     .join(" ");

    const split = words(str[0].toUpperCase()) + str.toLowerCase().substr(1)
    // const result = split.map(x => x[0].toUpperCase()+x.substr(1))
    return split
}


console.log(capitalize('zap ZAP'))