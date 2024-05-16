import ProjectCard from "../components/projectCard";
import '../assets/css/styles.css'
import Card from "../components/card";
import home from '../home.json'
import ImageCycle from "../components/imageCycle";


export default function Home() {
  const {welcome, motives, future} = home[0];
  return (
    <div className={`m-0`}>
      <ImageCycle/>
            <section className={`home row g-0`}>
                {/* welcome */}
                <Card header = {welcome.header} body = {welcome.body}/>
                <Card header = {welcome.header} body = {welcome.body}/>
                <Card header = {welcome.header} body = {welcome.body}/>
                <Card header = {welcome.header} body = {welcome.body}/>
            </section>
    </div>
  );
}
