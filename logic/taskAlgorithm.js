import { tasks } from '../data/tasks.js'
import sSimilarity from 'string-similarity'


export const taskSimilarity = (text, PA = 0.5) => {
    const { ratings, bestMatchIndex } = sSimilarity.findBestMatch(text, tasks.map((task, index) => task.name + ' ' + index))

    return { bestMatchIndex, ratings: ratings.filter( rating => rating.rating >= PA) }
}