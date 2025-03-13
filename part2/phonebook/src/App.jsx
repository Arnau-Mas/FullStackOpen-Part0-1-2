import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  function handleChange(e){
    setNewName(e.target.value)
  }

  function handleSubmit(e){
    e.preventDefault();
    let personExists = persons.some(person => person.name.toUpperCase() === newName.toUpperCase())
    
    if(personExists){
      alert(`${newName} is already added to phonebook`)
    }else{
      setPersons([...persons, {name:newName}]);
      setNewName("");
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input onChange={handleChange} type='text' value={newName} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {
        persons.map(person => <p key={person.name}>{person.name}</p>)
      }
    </div>
  )
}

export default App