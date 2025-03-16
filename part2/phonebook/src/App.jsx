import { useEffect, useState } from 'react'
import { Filter } from './components/Filter'
import { PersonForm } from './components/PersonForm'
import { Persons } from './components/Persons'
import { addNote, getNotes, modifyNote } from './services/notes'
import { Notification } from './components/Notification'

const App = () => {
  const [persons, setPersons] = useState([])
  
  useEffect(() => {
      getNotes().then(res => setPersons(res))
  }, [])
  

  // I could do only one state to setPerson
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [added, setAdded] = useState(null)
  const [filter, setFilter] = useState("");
  let filterPersons = filter ? persons.filter(person => person.name.toUpperCase().startsWith(filter.toUpperCase())) : persons;

  function handleName(e){
    setNewName(e.target.value)
  }

  function handleNumber(e){
    setNewNumber(e.target.value)
  } 

  function clearInputs(){
    setNewName("");
    setNewNumber("");
  }

  function handleSubmit(e){
    e.preventDefault();
    const newPerson = {
      name: newName,
      number:newNumber
    }

    let personExists = persons.find(person => person.name.trim().toUpperCase() === newName.trim().toUpperCase())

    if(personExists !== undefined){
      let modifiedPerson = {
        ...personExists,
        number:newNumber
      }
      /* alert(`${newName} is already added to phonebook`) */
      modifyNote(modifiedPerson)
        .then(res => {
          setPersons(prev => prev.map(person => person.id !== personExists.id ? person : res));
          setAdded(`Modified ${res.name}`);
          clearInputs();
          setTimeout(() => {
            setAdded(null)
          }, 5000)
        })
        .catch(err => console.log("err modifying", err))
    }else{
      addNote(newPerson)
        .then(res => {
          setPersons(prev => [...prev, res])
          setAdded(`Added ${res.name}`);
          clearInputs();
          setTimeout(() => {
            setAdded(null)
          }, 5000)
        }).catch(err => console.log('err adding', err))
    }
  }

  function handleFilter(e){
      setFilter(e.target.value);
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification added={added} />
      <Filter filter={filter} handleFilter={handleFilter} />
      <PersonForm handleSubmit={handleSubmit} newName={newName} newNumber={newNumber} handleName={handleName} handleNumber={handleNumber} />
      <h2>Numbers</h2>
      <Persons filterPersons={filterPersons} setPersons={setPersons} />
    </div>
  )
}

export default App