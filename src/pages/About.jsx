import List from "../components/skillsList";
import { Fragment } from 'react';
import list from '../skills.json'

export default function About() {
  console.log(list)
  return (
    <div className="container-fluid">
      <h1 className={`projects-header p-2`}>Skills</h1>
      <div className={`row`}>
      <div className="col-2"></div>
      <div className={`col-8 skills mt-3`}>
      {list.map((skill) => (
        <Fragment key={skill.id}>
                  <List content={skill.skill} />
                </Fragment>
            ))}
      </div>
            </div>
    </div>
  );
}
