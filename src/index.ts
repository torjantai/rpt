import { parseArguments } from './parseArguments'
import { calcWeights } from './calcWeights'

const parsedArguments = parseArguments(process.argv)

if (parsedArguments.squat) {
    const squat = calcWeights(2.5)(parsedArguments.squat)
    console.log(squat)
}


