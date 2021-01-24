import { calcWeights, roundDownTo } from '../calcWeights'

it('should correctly round down to min increment', () => {
    const roundDownToTwoAndHalf = roundDownTo(2.5)
    expect(roundDownToTwoAndHalf(99)).toBe(97.5)
})

it('should correctly round down to min increment', () => {
    const roundDownToTwoAndHalf = roundDownTo(2.5)
    expect(roundDownToTwoAndHalf(100)).toBe(100)
})
it('should correctly round down to min increment', () => {
    const roundDownToTwoAndHalf = roundDownTo(2.5)
    expect(roundDownToTwoAndHalf(0)).toBe(0)
})
it('should correctly round down to min increment', () => {
    const roundDownToTwoAndHalf = roundDownTo(2.5)
    expect(roundDownToTwoAndHalf(2)).toBe(0)
})
it('should correctly round down to min increment', () => {
    const roundDownToTwoAndHalf = roundDownTo(5)
    expect(roundDownToTwoAndHalf(99)).toBe(95)
})

it('should correctly calculate weights', () => {
    const start = 100
    const expected = [100, 90, 81]
    const calcWeightsWithZeroIncrement = calcWeights(0)
    expect(calcWeightsWithZeroIncrement(start)).toEqual(expected)
})
it('should correctly calculate weights', () => {
    const start = 100
    const expected = [100, 90, 80]
    const calcWeightsWithZeroIncrement = calcWeights(2.5)
    expect(calcWeightsWithZeroIncrement(start)).toEqual(expected)
})
it('should correctly calculate weights', () => {
    const start = 55
    const expected = [55, 47.5, 42.5]
    const calcWeightsWithZeroIncrement = calcWeights(2.5)
    expect(calcWeightsWithZeroIncrement(start)).toEqual(expected)
})
