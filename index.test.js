const utils = require('./index')

describe('[Exercise 1] trimProperties', () => {
  // test('[1] returns an object with the properties trimmed', () => {
  test("trimProperties function takes and returns an object with whitespace trimmed", () => {
    const toBeTrimmed = { name: "  Christian   ", gender: "     male "}
    const trimmedObject = utils.trimProperties(toBeTrimmed)
    const actual = { name: "Christian", gender: "male"}
    expect(trimmedObject).toEqual(actual)
    expect(trimmedObject.name).toHaveLength(9)
  })
  test('[2] returns a copy, leaving the original object intact', () => {
    const toBeTrimmed = { name: "  Mary Anne", gender: "         female"}
    const trimmedObject = utils.trimProperties(toBeTrimmed)
    const actual = { name: "Mary Anne", gender: "female"}
    expect(trimmedObject).not.toBe(actual)
    expect(toBeTrimmed.name).toHaveLength(11)
  })
})

describe('[Exercise 2] trimPropertiesMutation', () => {
  test('[3] returns an object with the properties trimmed', () => {
    const toBeTrimmed = { name: "  Joseph      ", occupation: "     Football Coach  " }
    const trimmedObject = utils.trimPropertiesMutation(toBeTrimmed)
    const actual = { name: "Joseph", occupation: "Football Coach" }
    expect(trimmedObject).toEqual(actual)
    expect(trimmedObject.name).toEqual(expect.stringContaining("Joseph"))
  })
  test('[4] the object returned is the exact same one we passed in', () => {
    const toBeTrimmed = { name: "      Childish Gambino  ", occupation: "Janitor "}
    const trimmedObject = utils.trimPropertiesMutation(toBeTrimmed)
    expect(trimmedObject).toBe(toBeTrimmed) //They are the same object
  })
})

describe('[Exercise 3] findLargestInteger', () => {
  test('[5] returns the largest number in an array of objects { integer: 2 }', () => {
    const arrOfIntegers = [{integer: 2}, {integer: 22}, {integer: 6}, {integer: 3}]
    const largestInteger = utils.findLargestInteger(arrOfIntegers)
    expect(largestInteger).toBe(22)
  })
})

describe('[Exercise 4] Counter', () => {
  let counter
  beforeEach(() => {
    counter = new utils.Counter(3) // each test must start with a fresh couter
  })
  test('[6] the FIRST CALL of counter.countDown returns the initial count', () => {
    // const count = counter.countDown()
    expect(counter.countDown()).toEqual(3)
  })
  test('[7] the SECOND CALL of counter.countDown returns the initial count minus one', () => {
    counter.countDown()
    expect(counter.countDown()).toEqual(2)
  })
  test('[8] the count eventually reaches zero but does not go below zero', () => {
    counter.countDown()
    counter.countDown()
    counter.countDown()
    counter.countDown()
    expect(counter.countDown()).toEqual(0)
  })
})

describe('[Exercise 5] Seasons', () => {
  let seasons
  beforeEach(() => {
    seasons = new utils.Seasons() // each test must start with fresh seasons
  })
  test('[9] the FIRST call of seasons.next returns "summer"', () => {
    expect(seasons.next()).toEqual("summer")
  })
  test('[10] the SECOND call of seasons.next returns "fall"', () => {
    seasons.next()
    expect(seasons.next()).toEqual("fall")
  })
  test('[11] the THIRD call of seasons.next returns "winter"', () => {
    seasons.next()
    seasons.next()
    expect(seasons.next()).toEqual("winter")
  })
  test('[12] the FOURTH call of seasons.next returns "spring"', () => {
    seasons.next()
    seasons.next()
    seasons.next()
    expect(seasons.next()).toEqual("spring")
  })
  test('[13] the FIFTH call of seasons.next returns again "summer"', () => {
    seasons.next()
    seasons.next()
    seasons.next()
    seasons.next()
    expect(seasons.next()).toEqual("summer")
  })
  test('[14] the 40th call of seasons.next returns "spring"', () => {
    for (let i = 0; i < 38; i++) {
      seasons.next()
    }
    expect(seasons.next()).toEqual("spring")
  })
})

describe('[Exercise 6] Car', () => {
  let focus
  beforeEach(() => {
    focus = new utils.Car('focus', 20, 30) // each test must start with a fresh car
  })
  test('[15] driving the car returns the updated odometer', () => {
    expect(focus.drive(100)).toEqual(100)
  })
  test('[16] driving the car uses gas', () => {
    focus.drive(60)
    expect(focus.gasLeft).toEqual(18)
    focus.drive(120)
    expect(focus.gasLeft).toEqual(14)
  })
  test('[17] refueling allows to keep driving', () => {
    focus.drive(300)
    expect(focus.gasLeft).toEqual(10)
    expect(focus.odometer).toEqual(300)
    focus.drive(400)
    expect(focus.gasLeft).toEqual(0)
    expect(focus.odometer).toEqual(600)
    focus.refuel(20)
    expect(focus.gasLeft).toEqual(20)
    focus.drive(300)
    expect(focus.odometer).toEqual(900)
    expect(focus.gasLeft).toEqual(10)
  })
  test('[18] adding fuel to a full tank has no effect', () => {
    focus.refuel(20)
    expect(focus.gasLeft).toEqual(20)
    focus.drive(20)
    focus.refuel(10)
    expect(focus.gasLeft).toEqual(20)
  })
})

describe('[Exercise 7] isEvenNumberAsync', () => {
  test('[19] resolves true if passed an even number', async () => {
    const answer = await utils.isEvenNumberAsync(4)
    expect(answer).toBe(true)
  })
  test('[20] resolves false if passed an odd number', async () => {
    const answer = await utils.isEvenNumberAsync(55)
    expect(answer).toBe(false)
  })
})
