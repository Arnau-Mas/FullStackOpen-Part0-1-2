import { Content } from "../../../part1/courseinfo/src/Content";
import { Header } from "../../../part1/courseinfo/src/Header";
import { Total } from "../../../part1/courseinfo/src/Total";

export default function Course({course}) {
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}
