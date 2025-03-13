export const PersonForm = ({handleSubmit, newName, handleName, newNumber, handleNumber}) => {
  return (
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
  )
}
