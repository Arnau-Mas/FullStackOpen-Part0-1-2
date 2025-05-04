import { useEffect, useState } from 'react'
import { Filter } from './components/Filter'
import { PersonForm } from './components/PersonForm'
import { Persons } from './components/Persons'
import { addPerson, deletePerson, getPersons, modifyPerson } from './services/persons'
import { Notification } from './components/Notification'

const App = () => {
  const [persons, setPersons] = useState([])

  // I could do only one state to setPerson
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [added, setAdded] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)
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
      const response = confirm(`${newName} is already added to phonebook, replace the old number with a new one?`);
      if(response){
        modifyPerson(modifiedPerson)
        .then(res => {
          setPersons(prev => prev.map(person => person.id !== personExists.id ? person : res));
          setAdded(`Modified ${res.name}`);
          clearInputs();
          setTimeout(() => {
            setAdded(null)
          }, 5000)
        })
        .catch(err => {
          setErrorMessage(`Information of ${modifiedPerson.name} has already been removed from server`);
          clearInputs();
          setTimeout(() => {
            setErrorMessage(null)
          }, 5000)
          console.log('err', err); 
        })
      }
      
    }else{
      addPerson(newPerson)
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

  function handleDelete(id){
    let personToDelete = filterPersons.find(person => person.id === id);
    
    if(window.confirm(`Delete ${personToDelete.name}?`)){
      deletePerson(id)
        .then(() => {
          setPersons(prev => prev.filter(person => person.id!==id))
        })
        .catch(err => console.log('err', err))
        }
  }

  function handleFilter(e){
      setFilter(e.target.value);
  }

  useEffect(() => {
    getPersons().then(res => setPersons(res))
}, [])

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification added={added} errorMessage={errorMessage}/>
      <Filter filter={filter} handleFilter={handleFilter} />
      <PersonForm handleSubmit={handleSubmit} newName={newName} newNumber={newNumber} handleName={handleName} handleNumber={handleNumber} />
      <h2>Numbers</h2>
      <Persons filterPersons={filterPersons} handleDelete={handleDelete} />
    </div>
  )
}

export default App