export const Notification = ({added}) => {
    if(added===null){
        return null
    }
  return (
    <p className='addedMessage'>{added}</p>
  )
}
