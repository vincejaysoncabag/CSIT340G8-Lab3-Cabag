const calculateExercises = (dailyHours, target) => {
  const periodLength = dailyHours.length
  const totalHours = dailyHours.reduce((sum, hours) => sum + hours, 0)
  const average = totalHours / periodLength
  const success = average >= target

  return {
    periodLength,
    trainingDays: dailyHours.filter(hours => hours > 0).length,
    success,
    rating: success ? 3 : 1,
    ratingDescription: success
      ? 'good'
      : 'not enough',
    target,
    average
  }
}

console.log(calculateExercises([3, 0, 2, 4.5, 0, 3, 1], 2))