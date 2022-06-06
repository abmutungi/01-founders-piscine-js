// const object = {
//     f: 10,
//     m: 5,
//     Δv: 100,
//     Δt: 50,
//     t:1,
//     d: 10
// }

// function getAcceleration(object)

const getAcceleration = (object) => {

    let a = object.f/object.m
    let a2 = object.Δv/object.Δt
    let a3 = (object.d*2)/(object.t*object.t)


    if(typeof(object.f) && typeof(object.m) == 'number'){
        return a
        }
    if(typeof(object.Δv) && typeof(object.Δt) == 'number'){
        return a2
        }
    if(typeof(object.d) && typeof(object.t) == 'number'){
        return a3
        }
    return 'impossible'
}