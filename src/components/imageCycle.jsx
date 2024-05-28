import { useEffect, useState, useRef, Fragment } from "react";
import images from '../cycle.json'
import '../assets/css/cycle.css'
import Image from './img'

function ImageCycle() {
  const [img, setimage] = useState(0);

useEffect(()=>{

  setTimeout(() => {
    //updates every 8 seconds
    progress(images, img);
  }, 8000);
})
//given an array and the count/index, progresses the index by one, or restarts the loop if the last index is reached
  const progress = (array, count) => {
    let index = count;
    if (index < array.length-1) {
      index++;
    } else {
      index = 0;
    }
    setimage(index);

  }
  return (
    <div className="home-header g-0 row justify-content-around rounded">
<h1 className={`text-align-center welcome`}>Welcome!</h1>
      {images.map((image)=>(
        <Fragment key={image.id}>
        <Image url={image.url} id={image.id} img={img}> </Image>
        </Fragment>

      ))}
    </div>
  )
}

export default ImageCycle;