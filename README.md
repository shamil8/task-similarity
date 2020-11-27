![Docker Image CI](https://github.com/shamil8/task-similarity/workflows/Docker%20Image%20CI/badge.svg)

# Similarity between two tasks

In your code:
```javascript
import { taskRatingsWithProbability, taskSimilarity } from './logic/taskAlgorithm.js'

const taskSimilarityWithoutAdapt = taskSimilarity('Пересчитать расходы', .7)

console.log('taskSimilarityWithoutAdapt', taskSimilarityWithoutAdapt)



const taskRatings = taskRatingsWithProbability('Пересчитать расходы', .5, .3) // with minPV and minCount, if we have too little tasks

console.log('taskRatings', taskRatings)

const taskRatingsOneHundred = taskRatingsWithProbability('Пересчитать расходы', .5, .2, 100) // with minPV and minCount, if we have too little tasks
console.log('taskRatingsOneHundred', taskRatingsOneHundred)
```

## API

The package contains two methods:
### taskSimilarity(text, pv)

Returns a fraction between 0 and 1, which indicates the degree of similarity between the two strings. 0 indicates completely different strings, 1 indicates identical strings. The comparison is case-sensitive.

##### Arguments
  
1. text (string): The text in task
2. pv (float <= 1): probability value

# Математическое ожидание, дисперсия и среднеквадратичесвое оклонение случайной величины для задачи
<p align="center">
    <img src="https://raw.githubusercontent.com/shamil8/task-similarity/master/VarX.jpg?sanitize=true" alt="VarX image">
</p>