const App = () => {
  const course = 'CSIT340'

  const part1 = 'CSIT340'
  const exercises1 = 5

  const part2 = 'CSIT321'
  const exercises2 = 5

  const part3 = 'IT317'
  const exercises3 = 4

  return (
    <div>
      <h1>{course}</h1>

      <p>
        {part1} {exercises1}
      </p>

      <p>
        {part2} {exercises2}
      </p>

      <p>
        {part3} {exercises3}
      </p>

      <p>
        Number of exercises {exercises1 + exercises2 + exercises3}
      </p>
    </div>
  )
}

export default App