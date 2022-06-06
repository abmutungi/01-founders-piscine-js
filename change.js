// const sourceObject = {
//     num: 42,
//     bool: true,
//     str: 'some text',
//     log: console.log,
//   }
  
function get(n){
    return sourceObject[n]   
}

function set(a,b) {
   sourceObject[a] = b
   return sourceObject[a]
} 

// console.log(get('str'))
// console.log(set('str','new text'))
// console.log(get('str'))