import { parseArguments } from '../parseArguments';

//squat, deadlift, bench, military

it('should correctly parse one argument s', () => {
    const array = ['ignore', 'ignore', '-s', '80']
    const expected = {
        squat: 80,
    }
    expect(parseArguments(array)).toEqual(expected);
})

it('should correctly parse one argument d', () => {
    const array = ['ignore', 'ignore', '-d', '100']
    const expected = {
        deadlift: 100,
    }
    expect(parseArguments(array)).toEqual(expected);
})

it('should throw if value cannot be parsed to integer', () => {
    const array = ['ignore', 'ignore', '-s', 'asdf']
    expect(() => {
        parseArguments(array)
    }).toThrow()
})

it('should throw if argument is unknown', () => {
    const args = ['', '', 'unknown', '3']
    expect(() => {
        parseArguments(args)
    }).toThrow()
})

it('should correctly parse two arguments', () => {
    const args = ['', '', '-s', '67', '-d', '90']
    const expected = {
        deadlift: 90,
        squat: 67,
    }
    expect(parseArguments(args)).toEqual(expected)
})

it('should correctly throw with missing value for option', () => {
    const args = ['', '', '-s', '-d', '90']
    expect(() => {
        parseArguments(args)
    }).toThrow()
})

it('should correctly parse two arguments', () => {
    const args = ['', '', '-s', '67', '-b', '90']
    const expected = {
        benchpress: 90,
        squat: 67,
    }
    expect(parseArguments(args)).toEqual(expected)
})
it('should correctly parse three arguments', () => {
    const args = ['', '', '-s', '67', '-b', '90', '-d', '99']
    const expected = {
        benchpress: 90,
        squat: 67,
        deadlift: 99,
    }
    expect(parseArguments(args)).toEqual(expected)
})

it('should correctly parse four arguments', () => {
    const args = ['', '', '-s', '67', '-b', '90', '-d', '99', '-m', '40']
    const expected = {
        benchpress: 90,
        squat: 67,
        deadlift: 99,
        militarypress: 40,
    }
    expect(parseArguments(args)).toEqual(expected)
})