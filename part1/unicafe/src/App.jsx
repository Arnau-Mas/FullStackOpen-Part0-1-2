import { useState } from "react"

const  Statistics = ({good, neutral, bad, all}) => {
  return (
    <div>
    <h1>Statistics</h1>
      <p>good: {good}</p>
      <p>neutral: {neutral}</p>
      <p>bad: {bad}</p>
      <p>all: {all}</p>
      <p>average: {all===0 ? 0 : (good-bad)/all}</p>
      <p>positive: {all===0 ? 0 : good*100/all}%</p>
    </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const all = good+neutral+bad;
 
  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={() => setGood(prev => prev+1)}>good</button>
      <button onClick={() => setNeutral(prev => prev+1)}>neutral</button>
      <button onClick={() => setBad(prev => prev+1)}>bad</button>
      <Statistics good={good} neutral={neutral} bad={bad} all={all} />
    </div>
  )
}

export default App