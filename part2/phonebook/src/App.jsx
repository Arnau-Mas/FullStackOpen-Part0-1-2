import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 

  // I could do only one state to setPerson
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  function handleName(e){
    setNewName(e.target.value)
  }

  function handleNumber(e){
    setNewNumber(e.target.value)
  }

  function handleSubmit(e){
    e.preventDefault();
    let personExists = persons.some(person => person.name.toUpperCase() === newName.toUpperCase())

    if(personExists){
      alert(`${newName} is already added to phonebook`)
    }else{
      setPersons([...persons, {name:newName, number:newNumber}]);
      setNewName("");
      setNewNumber("");
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input onChange={handleName} type='text' value={newName} />
        </div>
        <div>
          number: <input onChange={handleNumber} type='text' value={newNumber} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {
        persons.map(person => <p key={person.name}>{person.name} {person.number}</p>)
      }
    </div>
  )
}

export default App