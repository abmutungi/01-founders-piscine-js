const planets = {
    earth: 1, //orbital period 1.0 Earth years, 365.25 Earth days, or 31,557,600 seconds.
    mercury: 0.2408467,
    venus: 0.61519726,
    mars: 1.8808158,
    jupiter: 11.862615,
    saturn: 29.447498,
    uranus: 84.016846,
    neptune: 164.79132,
}

let year = 31557600; // or 31,557,600 seconds

function dogYears (planet, dogsAge) {

dogsAge = dogsAge / year

dogsAge = dogsAge / planets[planet] * 7

return Math.round(dogsAge * 100) / 100;

}

//console.log(dogYears('earth', 220903200))