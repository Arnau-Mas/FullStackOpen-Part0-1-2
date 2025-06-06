export const Notification = ({added, errorMessage}) => {
    if(added===null && errorMessage===null){
        return null
    }

  return (
    <p className={added? "addedMessage" : "errorMessage"}>{added ? added : errorMessage}</p>
  )
}
