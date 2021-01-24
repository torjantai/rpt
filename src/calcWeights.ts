
const MULTIPLIER = .9

type Result = [number, number, number]

export const roundDownTo = (minIncrement = 0) => (value: number): number => {
    return minIncrement === 0
        ? value
        : Math.floor(value / minIncrement) * minIncrement
}

export const calcWeights = (minIncrement = 1) => (startWeight: number): Result => {
    const roundDownToMinIncrement = roundDownTo(minIncrement);
    return [
        roundDownToMinIncrement(startWeight * Math.pow(MULTIPLIER, 0)),
        roundDownToMinIncrement(startWeight * Math.pow(MULTIPLIER, 1)),
        roundDownToMinIncrement(startWeight * Math.pow(MULTIPLIER, 2)),
    ]
}