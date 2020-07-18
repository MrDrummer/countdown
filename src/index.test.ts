// getInterval(getNow() + (60 * 5) + 10) // 5 mins, 10 seconds
// getInterval(getNow() + 60 + 10) // 1 minute, 10 seconds
// getInterval(getNow() + 30 + 10) // 40 seconds
// getInterval(getNow() + 20 + 5) // 25 seconds
// getInterval(getNow() + 10 + 12) // 12 seconds
import { sum, getUnix, generateIntervals, Breakpoint } from "./index"

const breakpoints: Breakpoint[] = [
  {
    lessThan: 86400, // a day
    every: 3600 // an hour
  },
  {
    lessThan: 3600, // an hour
    every: 1800 // 30 mins
  },
  {
    lessThan: 1800, // 30 mins
    every: 600 // 10 mins
  },
  {
    lessThan: 600, // 10 mins
    every: 60 // 1 minute
  },
  {
    lessThan: 60, // 1 minute
    every: 30 // 30 seconds
  },
  {
    lessThan: 30, // 30 seconds
    every: 10 // 10 seconds
  },
  {
    lessThan: 10, //10 seconds
    every: 1 // every second
  }
]

describe("getNow gets the correct time", () => {
  it("Returns the current time in seconds", () => {
    expect(getUnix()).toBeCloseTo(Date.now() / 1000) // I know this is cheating, shush. Better way?
  })
})

describe("Generates an interval array", () => {
  it("10 minutes, 20 seconds", () => {
    const expected = [60, 60, 60, 60, 60, 60, 60, 60, 60, 30, 10, 10, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    sum(expected)
    console.log(sum(expected))
    expect(generateIntervals(breakpoints, new Date((getUnix() + 600 + 20) * 1000), () => {
      console.log("10 minutes, 20 secondsMy callback")
    }))
      .toStrictEqual(expected)
  })
  // it("5 mins, 10 seconds", () => {
  //   const expected = [60, 60, 60, 60, 60, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  //   sum(expected)
  //   console.log(sum(expected))
  //   expect(generateIntervals(breakpoints, new Date((getUnix() + 600 + 20) * 1000), () => {
  //     console.log("5 mins, 10 seconds My callback")
  //   }))
  //     .toStrictEqual(expected)
  // })
})
