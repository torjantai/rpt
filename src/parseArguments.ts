interface Options {
    squat: number;
    deadlift: number;
    benchpress: number;
    militarypress: number;
}

const parseNumber = (name: string) => (value: string): number => {
    const parsedValue = parseInt(value)
    if (Number.isNaN(parsedValue)) {
        throw new Error(`value for ${name} must be a number`)
    }
    return parsedValue
}

const validOptions = [
    {
        name: 'squat',
        short: '-s',
        valueOffset: 1,
        parseValue: parseNumber('squat'),
    },
    {
        name: 'deadlift',
        short: '-d',
        valueOffset: 1,
        parseValue: parseNumber('deadlift'),
    },
    {
        name: 'benchpress',
        short: '-b',
        valueOffset: 1,
        parseValue: parseNumber('benchpress'),
    },
    {
        name: 'militarypress',
        short: '-m',
        valueOffset: 1,
        parseValue: parseNumber('militarypress'),
    },
] as const

const parseOptionAndArgumentFromArray = (args: string[]) => (index: number) => {
    const current = args[index]
    const option = validOptions.find((option) => {
        return option.short === current
    })
    if (!option) {
        throw new Error(`Unknown option ${current}`)
    }
    const value = option.parseValue(args[index + option.valueOffset])
    return {
        ...option,
        value,
    }
}

export const parseArguments = (nodeArguments: string[]): Partial<Options> => {
    const parsedOptions: Partial<Options> = {};
    const args = nodeArguments.slice(2)
    const parseOptionAndArgument = parseOptionAndArgumentFromArray(args)
    for (let i = 0; i < args.length; i++) {
        const { name, value, valueOffset } = parseOptionAndArgument(i)
        parsedOptions[name] = value;
        i += valueOffset
    }
    return parsedOptions
}