import { useState } from "react"

const Button = ({handleClick, text}) => <button onClick={handleClick}>{text}</button>;
const StatisticLine = ({text, value}) => <p>{text}: {value}</p>

const  Statistics = ({good, neutral, bad, all}) => {
  const average = all===0 ? 0 : (good-bad)/all;
  const positive = all===0 ? 0 : good*100/all;
  
  if(all===0){
    return (
      <div>
    <h1>Statistics</h1>
      <p>Not feedback given</p>
    </div>
    )
  }
  return (
    <div>
    <h1>Statistics</h1>
      <StatisticLine text="good" value={good} />
      <StatisticLine text="neutral" value={neutral} />
      <StatisticLine text="bad" value={bad} />
      <StatisticLine text="all" value={all} />
      <StatisticLine text="average" value={average} />
      <StatisticLine text="positive" value={positive} />
    </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const all = good+neutral+bad;

  const incrementGood = () => setGood(prev => prev+1);
  const incrementNeutral = () => setNeutral(prev => prev+1);
  const incrementBad = () => setBad(prev => prev+1);
 
  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={incrementGood} text={"good"} /> 
      <Button handleClick={incrementNeutral} text={"neutral"} /> 
      <Button handleClick={incrementBad} text={"bad"} /> 
      <Statistics good={good} neutral={neutral} bad={bad} all={all} />
    </div>
  )
}

export default App