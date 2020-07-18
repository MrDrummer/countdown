export interface Breakpoint {
  lessThan: number
  every: number
}

export const sum = (arr: number[]): number => arr.reduce((a, b) => a + b, 0)

export type CountdownCallback = () => void

export const getUnix = (): number => Date.now() / 1000

export const generateIntervals = (breakpoints: Breakpoint[], targetDate: Date, callback: CountdownCallback): number[] => {
  const secondsToTarget = Math.floor((targetDate.getTime() / 1000) - getUnix())
  // return test(breakpoints, secondsToTarget)
  // console.log("secondsToTarget :", secondsToTarget)

  const intervals: number[] = []
  let leftToFit = secondsToTarget
  for (const i in breakpoints) {
    const bp = breakpoints[i]
    const nextBp = breakpoints[parseInt(i) + 1]
    const fits = Math.floor(leftToFit / bp.every)



    console.log(`fits : ${ fits }`)

    intervals.push(...Array(fits).fill(bp.every))

    leftToFit = leftToFit - (bp.every * fits)
  }
  return intervals
}