import {
    taskRatingsWithProbability,
    findTaskByIndex,
    SYMBOL_TASK_INDEX
} from './logic/taskAlgorithm.js'

const {ratings, bestMatchIndex} = taskRatingsWithProbability('Пересчитать расходы', .5, .3, 100)

const tasks = []

ratings.forEach(rating => {
    const taskIndex = rating.target.lastIndexOf(SYMBOL_TASK_INDEX)

    taskIndex && tasks.push({ rating: rating.rating, ...findTaskByIndex(rating.target.slice(taskIndex + 1)) })
})

console.log('chose tasks', tasks)

const task = findTaskByIndex(bestMatchIndex)

console.log('bestMatch', task)