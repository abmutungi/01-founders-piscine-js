function arrToSet(arr) {
    return new Set(arr)
}

function arrToStr(arr){
    return arr.join('')
}

function setToArr(set){
    return Array.from(set)
}

function setToStr(set){
    return setToArr(set).join('')
}

function strToArr(str){
    return Array.from(str)
}

function strToSet(str){
    return new Set(str)
}

function mapToObj(obj){
    return Object.fromEntries(obj)
}

function objToArr(arr){
   let val = Object.values(arr)
    
    return val
}

function objToMap(obj){

    let map = new Map

    for (let key in obj){
        map.set(key, obj[key])
    }
    return map
}

function arrToObj(arr) {
    return Object.assign({}, arr)
}

const strToObj = (str) => {
    let obj = {}
    for(let i = 0; i < str.length; i++) {
        obj[i] = str[i]
    }
    return obj
}
const superTypeOf = (e) => {
    if (e=== null) return 'null'

  let instances = { Set, Map, Array, Function }

  for (let key in instances) {
    // console.log(key, instances[key])
    if (e instanceof instances[key]) return key
  }

  let types = { Number: 'number', String: 'string', Object: 'object' }
  for (let key in types) {
    if (typeof e=== types[key]) return key
  }

  return typeof e
}
