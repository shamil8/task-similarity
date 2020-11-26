import { taskSimilarity } from './logic/taskAlgorithm.js'

// function for adaptation probability
const taskRatingsWithProbability = (text, PV = 0.5) => {
    let pv = PV
    // TODO:: add recursive here
    const taskRatings = taskSimilarity(text, pv)

    return taskRatings
}

const taskRatings = taskRatingsWithProbability('Пересчитать расходы')
console.log(taskRatings)