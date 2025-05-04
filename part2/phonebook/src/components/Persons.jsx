import { deleteNote } from "../services/persons"

export const Persons = ({filterPersons, handleDelete}) => {
   
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
