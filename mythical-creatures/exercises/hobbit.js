var createHobbit = (name = "unknown", age = 0) => {
    var isAdult = false
    var isOld = false
    var acquaintances = []
    return { name, age, isAdult, isOld, acquaintances }
}

var celebrateBirthday = (hobbit) => {
    var age = hobbit.age
    var isAdult = hobbit.isAdult
    var isOld = hobbit.isOld
    age++
    if (age > 32 && age <= 100) {
        isAdult = true
    } else if (age > 100) {
        isAdult = true
        isOld = true
    }
    return { age, isAdult, isOld }
}

var getRing = (hobbit) => {
    if (hobbit.name === "Frodo") {
        return "Here is the ring!"
    } else {
        return "You can't have it!"
    }
}

var meetPeople = (hobbit, people) => {
    var name = hobbit.name
    var acquaintances = hobbit.acquaintances
    for (i = 0; i < people.length; i++) {
        acquaintances.push(people[i])
    }
    return { name, acquaintances }
}
var findFriends = (hobbit) => {
    var friend = []
    hobbit.acquaintances.forEach((person) => {
        if (person.relationship === "friend") {
            friend.push(person.name)
        }
    })

    return friend
}

module.exports = {
    createHobbit,
    celebrateBirthday,
    getRing,
    meetPeople,
    findFriends,
}
