import { taskSimilarity } from './logic/taskAlgorithm.js'

// testing functions
const timeTest0 = performance.now()
taskSimilarity('Гидравлический ведомость расхода', 0.4)

const timeTest1 = performance.now()

console.log("Call to doSomething took " + (timeTest1 - timeTest0) + " milliseconds.")