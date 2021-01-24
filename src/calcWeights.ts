
const MULTIPLIER = .9

export const roundDownTo = (minIncrement = 0) => (value: number): number => {
    return minIncrement === 0
        ? value
        : Math.floor(value / minIncrement) * minIncrement
}

const calcWeight = (value: number) => (power: number): number => {
    return value * Math.pow(MULTIPLIER, power)
}

const calcRounded = (minIncrement: number, startWeight: number) => {
    const roundDownToMinIncrement = roundDownTo(minIncrement);
    const calcPower = calcWeight(startWeight)
    return (power: number): number => {
        return roundDownToMinIncrement(calcPower(power))
    }
}

export const calcWeights = (minIncrement = 1) => (startWeight: number): number[] => {
    const powers = [0, 1, 2]
    return powers.map(calcRounded(minIncrement, startWeight))
}