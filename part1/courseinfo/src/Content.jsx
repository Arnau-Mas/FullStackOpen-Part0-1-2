import { Part } from "./Part"

export const Content = ({parts, exercises}) => {
  return (
    <>
        <Part part={parts[0]} exercise={exercises[0]}/>
        <Part part={parts[1]} exercise={exercises[1]}/>
        <Part part={parts[2]} exercise={exercises[2]}/>
    </>
  )
}
