import { useEffect, useState } from "react";
import json from '../cycle.json'

function ImageCycle () {
    const images = json[0].images;
  const [img, setimage] = useState(0);

  const styles = {
    backgroundImage: `${images[img]}`
  }
  useEffect(() =>{
    setInterval(() => {
        progress(images, img);
        console.log('running')
    }, 5000);
  }, [])

  const cylce = () => {
    setInterval(() => {
        progress(images, img);
    }, 5000);
  }

  //given an array and the count/index, progresses the index by one, or restarts the loop if the last index is reached
  const progress = (array, count) =>{
    console.log(count)
    let index = count;
    if(index< array.length -1){
        index++;
    } else{
        index = 0;
    }
    setimage(index);
  }
    return (
        <div className="home-header row justify-content-around" style={styles}>
            <h1 className="text-align-center">Welcome</h1>
        </div>
    )
}

export default ImageCycle;