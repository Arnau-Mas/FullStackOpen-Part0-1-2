import { deleteNote } from "../services/notes"

export const Persons = ({filterPersons, setPersons}) => {

  function handleDelete(id){
    let personToDelete = filterPersons.find(person => person.id === id);
    if(window.confirm(`Delete ${personToDelete.name}?`)){
      deleteNote(id)
      .then(res => {
        setPersons(prev => prev.filter(person => person.id!==res.id))
      })
      .catch(err => console.log('err', err))
      }
    }
   
  return (
    <>
        {
            filterPersons.map(person => {
              return (<div key={person.id}>
                <p style={{display:"inline", paddingRight:"5px"}}>{person.name} {person.number}</p>
                <button onClick={() => handleDelete(person.id)}>delete</button>
              </div>)
            })
        }
        
    </>
  )
}
