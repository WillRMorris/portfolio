import ProjectCard from "../components/projectCard";
import '../assets/css/styles.css'
import Card from "../components/card";
import home from '../home.json'
import ImageCycle from "../components/imageCycle";


export default function Home() {
  const {welcome, CSHistory, Writing, aboutMe} = home[0];
  return (
    <div className={`m-0 container-fluid`}>
      <ImageCycle/>
            <section className={`home row g-0 justify-content-around`}>
                {/* welcome */}
                <Card header = {welcome.header} body = {welcome.body}>
                  <div>
                    </div> 
                </Card>
                <Card header = {aboutMe.header} body = {aboutMe.body}/>
                <Card header = {CSHistory.header} body = {CSHistory.body}/>
                <Card header = {Writing.header} body = {Writing.body}/>

            </section>
    </div>
  );
}
