import {
    taskRatingsWithProbability,
    findTaskByIndex,
    SYMBOL_TASK_INDEX
} from './logic/taskAlgorithm.js'

const data = {
    name: 'Пересчитать расходы',
    ownerId: '855eaff9-d0aa-11ea-97bf-0242c0a87005'
}

const tasks = []
const ownerRating = .22
const { ratings, bestMatchIndex } = taskRatingsWithProbability(data.name, .5, .2, 100)


ratings.forEach(rating => {
    const taskIndex = rating.target.lastIndexOf(SYMBOL_TASK_INDEX)
    const task = findTaskByIndex(rating.target.slice(taskIndex + 1))

    task.rating = rating.rating

    // owner score
    if (task.owner_id === data.ownerId) { task.rating += ownerRating }

    taskIndex && tasks.push(task)
})

console.log('chose tasks', tasks)

const task = findTaskByIndex(bestMatchIndex)

console.log('bestMatch', task)
