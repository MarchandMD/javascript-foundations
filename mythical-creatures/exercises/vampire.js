var createVampire = (name, pet = "bat") => {
    var thirsty = true
    var ouncesDrank = 0
    return { name, pet, ouncesDrank, thirsty }
}

var encounterDeliciousVictim = (vampire) => {
    if (vampire.thirsty === true) {
        return "I WANT TO SUCK YOUR BLOOD!"
    } else {
        return `No thanks, I am too full.`
    }
}

var drink = (vampire) => {
    var ouncesDrank = vampire.ouncesDrank
    var thirsty = vampire.thirsty
    if (thirsty === true) {
        ouncesDrank += 10
    }
    if (ouncesDrank >= 50) {
        thirsty = false
    }
    return { ouncesDrank, thirsty }
}

var inquirePlace = (locations, location) => {
    if (locations.includes(location)) {
        return `Yes, I have spent some time in ${location}.`
    } else {
      return `No, I have never been to ${location}.`
    }
}

var findBatLovers = (vampires) => {
  var batLovers = []
  for (let index = 0; index < vampires.length; index++) {
    if (vampires[index].pet == 'bat') {
      batLovers.push(vampires[index].name)
    }
  }
  return batLovers
}


module.exports = {
    createVampire,
    drink,
    findBatLovers,
    encounterDeliciousVictim,
    inquirePlace,
}
