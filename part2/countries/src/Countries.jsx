export const Countries = ({countries}) => {
    if(countries.length === 0) return <p></p>
    if(countries.length > 1){
      return (
        <div>
        {countries.map(country => <p key={country.name.common}>{country.name.common}</p>)}
        </div>
      )
    }
    return (
    <div>
      <p>{"a"}</p>
    </div>)
}
