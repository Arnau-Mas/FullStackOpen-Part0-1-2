export const Total = ({parts}) => {
  let numberOfExercises = parts.map(part => part.exercises).reduce((accumulator, currentValue) => accumulator+currentValue, 0)
  return (
    <p><strong>total of {numberOfExercises} exercises</strong></p>
  )
}
