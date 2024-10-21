import LabelTag from '@Components/LabelTag/LabelTag'
import './HomeCard.css'
import ImgPlant from "@Assets/home/img-plant.png"
import { Link } from "react-router-dom";
import { baseURL, directories } from '@Types/BucketS3';

interface HomeCardProps{
  id: number,
  name: string,
  price: number,
  discount: number,
  label: string,
  type: string,
  imgPlant: string
}

const HomeCard: React.FC<HomeCardProps> = (props) => {

  const handlePrice = (price: number, discount: number) => {
    return (price * (1 - (discount/100))).toFixed(2);
  }

  
  return (
    <div className='homecard-container'>
      <Link to={`/product/${props.id}`}>
      <img
        src={`${baseURL}${directories.plantPhotos}${props.imgPlant}`}
        alt=""
        id="img-homecard"
        onError={(e) => {
          e.currentTarget.onerror = null;
          e.currentTarget.src = ImgPlant; 
        }}
      />
        <div className='homecard-info'>
            <h4>{props.name}</h4>
            <div>
              {props.discount > 0 ? (
                <p>${handlePrice(props.price, props.discount)}</p>
              ) : (
                <p>${props.price.toFixed(2)}</p>
              )}

              {props.discount > 0 && <p>${props.price.toFixed(2)}</p>}
            </div>
            <div>
            <LabelTag name={props.label}/>
            {props.type && <LabelTag name={props.type}/>}
            </div>
        </div>
      </Link>
    </div>
  )
}

export default HomeCard