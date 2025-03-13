import { useState } from 'react'
import { Filter } from './components/Filter'
import { PersonForm } from './components/PersonForm'
import { Persons } from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 

  // I could do only one state to setPerson
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  
  const [filter, setFilter] = useState("");

  let filterPersons = filter ? persons.filter(person => person.name.toUpperCase().startsWith(filter.toUpperCase())) : persons;

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

  function handleFilter(e){
      setFilter(e.target.value);
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} handleFilter={handleFilter} />
      <PersonForm handleSubmit={handleSubmit} newName={newName} newNumber={newNumber} handleName={handleName} handleNumber={handleNumber} />
      <h2>Numbers</h2>
      <Persons filterPersons={filterPersons} />
    </div>
  )
}

export default App