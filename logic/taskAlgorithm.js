import { tasks } from '../data/tasks.js'
import sSimilarity from 'string-similarity'

export const RECURSIVE_REDUCE = .1
export const DEFAULT_PV = .5
export const DEFAULT_MIN_PV = .2
export const DEFAULT_MIN_COUNT = 10
export const SYMBOL_TASK_INDEX = '|'

export const taskSimilarity = (text, PA = DEFAULT_PV) => {
    const { ratings, bestMatchIndex } = sSimilarity.findBestMatch(text, tasks.map((task, index) => task.name + ' ' + SYMBOL_TASK_INDEX + index))

    return { bestMatchIndex, ratings: ratings.filter( rating => rating.rating >= PA) }
}

/**
 * Function for probability adaptation
 * @param text      - The text in task
 * @param PV        - probability value
 * @param minPV     - min probability value
 * @param minCount  - min count tasks
 * @returns {{ratings: *, bestMatchIndex: number}}
 */
export const taskRatingsWithProbability =
    (text, PV = DEFAULT_PV, minPV = DEFAULT_MIN_PV, minCount = DEFAULT_MIN_COUNT) =>
    {
        const taskRatings = taskSimilarity(text, minPV)

        if (PV <= minPV || (taskRatings.ratings && taskRatings.ratings.length >= minCount) ) {
            return taskRatings
        }

        return taskRatingsWithProbability(text, PV - RECURSIVE_REDUCE, minPV)
    }


export const findTaskByIndex = index => tasks[index]