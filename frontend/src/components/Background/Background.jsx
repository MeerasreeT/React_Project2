import './Background.css'
import image1 from '../../assets/image1.png'
import image2 from '../../assets/image2.png'
import image3 from '../../assets/image3.png'

const Background = ({heroCount}) => {
  let image;
  switch(heroCount){
    case 0: image = image1; break;
    case 1: image = image2; break;
    case 2: image = image3; break;
    default: image = image1;
  }

  return <img src={image} className='background fade-in' alt='background'/>
}

export default Background
