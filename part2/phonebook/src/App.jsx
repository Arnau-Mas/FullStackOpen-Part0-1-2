import { useEffect, useState } from 'react'
import { Filter } from './components/Filter'
import { PersonForm } from './components/PersonForm'
import { Persons } from './components/Persons'
import { addNote, getNotes } from './services/notes'

const App = () => {
  const [persons, setPersons] = useState([])
  console.log("re-render", persons)
  
  useEffect(() => {
      getNotes().then(res => setPersons(res))
  }, [])
  

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
      const newPerson = {
        name: newName,
        number:newNumber
      }
      addNote(newPerson)
        .then(res => setPersons(prev => [...prev, res]))
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