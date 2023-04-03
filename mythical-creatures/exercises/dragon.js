var createDragon = (name, rider, temperament) => {
    var timesEaten = 0
    var hungry = true
    return { name, rider, temperament, timesEaten, hungry }
}

var greetRider = (dragon) => {
    return `Hi, ${dragon.rider}!`
}

var eat = (dragon) => {
    let timesEaten = dragon.timesEaten
    timesEaten++
    if (timesEaten >= 3) {
        dragon.hungry = false
    }
    let hungry = dragon.hungry
    return { timesEaten, hungry }
}

var findFireBreathers = (array) => {
    let arrayOfFireBreathers = []
    for (i = 0; i < array.length; i++) {
        if (array[i].temperament === "aggressive") {
            arrayOfFireBreathers.push(array[i])
        }
    }
    return arrayOfFireBreathers
}

module.exports = {
    createDragon,
    greetRider,
    eat,
    findFireBreathers,
}
