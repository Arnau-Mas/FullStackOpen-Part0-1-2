export const Total = ({parts:[part1, part2, part3]}) => {
  return (
    <p>Number of exercises {part1.exercises + part2.exercises + part3.exercises}</p>
  )
}
