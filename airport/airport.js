var createAirport = (name, airlines, availableGates) => {
    return { name, availableGates, airlines }
}

var welcomeGuests = (airport) => {
    return `Welcome to ${airport.name}!`
}

var landPlanes = (airport, incomingFlights) => {
    if (airport.availableGates - incomingFlights <= 0) {
        var currentOverflow = incomingFlights - airport.availableGates
        airport.availableGates = 0
        return `Oh no! Not enough gates available. Current overflow is ${currentOverflow}.`
    } else {
        airport.availableGates = airport.availableGates - incomingFlights
        return `Success! Current availability is ${airport.availableGates}.`
    }
}

var checkAirlineLocations = (allAirports, airline) => {
    let locations = allAirports.filter((airport) =>
        airport.airlines.includes(airline)
    )
    return locations.flatMap(location => location.name )
}

module.exports = {
    createAirport,
    welcomeGuests,
    landPlanes,
    checkAirlineLocations,
}
