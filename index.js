// import { MathArray } from './logic/math.js'
import { findTaskByIndex, SYMBOL_TASK_INDEX, taskRatingsWithProbability } from './logic/taskAlgorithm.js'

const data = {
    name: 'Пересчитать расходы',
    ownerId: '855eaff9-d0aa-11ea-97bf-0242c0a87005'
}

const tasks = []
const ownerRating = .22
const { ratings, bestMatchIndex } = taskRatingsWithProbability(data.name, .5, .3, 100)


ratings.forEach(rating => {
    const taskIndex = rating.target.lastIndexOf(SYMBOL_TASK_INDEX)
    const task = findTaskByIndex(rating.target.slice(taskIndex + 1))
    const diffTime = Math.abs(new Date(task.end_at) - new Date(task.start_at))

    task.days =  Math.ceil(diffTime / (1000 * 60 * 60 * 24)) // TODO:: check accuracy without ceil
    task.rating = rating.rating

    // owner score
    if (task.owner_id === data.ownerId) { task.rating += ownerRating }

    // after, these properties don't need!
    delete task.owner_id
    delete task.start_at
    delete task.end_at

    tasks.push(task)
})

console.log('chose tasks', tasks)

const task = findTaskByIndex(bestMatchIndex)

console.log('bestMatch', task)


// Statistics computing
Array.prototype.sum = function (prop) {
    let total = 0
    this.forEach((item, i, items) => total += items[i][prop])

    return total
}

const pvSum = tasks.sum('rating')

console.log('PVsum', pvSum)

// Нормализация данных для мат. ожидания
const statTasks = tasks.map(task => ({ x: task.days, p: task.rating / pvSum }))

console.log('statTasks', statTasks)

// Математическое ожидание случайной величины
const Mx = statTasks.map(task => task.x * task.p).reduce((a, b) => a + b, 0)

console.log('Mx', Mx)

// Дисперсия случайной величины
const Dx = statTasks.map(task => task.x ** 2 * task.p).reduce((a, b) => a + b, 0) - Mx ** 2

console.log('Dx', Dx)

// Среднеквадратичесвое оклонение случайной величины для задачи

const Gx = Math.sqrt(Dx)
console.log('Gx', Gx)