export const Countries = ({countries}) => {
    if(countries.length === 0) return <p></p>
  return (
    countries.length > 1 ? 
    <div>
        {countries.map(country => <p key={country.name.common}>{country.name.common}</p>)}
    </div>
    :
    <div>
        <p>{"a"}</p>
    </div>
  )
}
