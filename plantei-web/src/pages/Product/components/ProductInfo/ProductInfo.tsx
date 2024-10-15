import { Plant } from '@Types/Plant'
import './ProductInfo.css'
import LabelTag from '@Components/LabelTag/LabelTag'

interface ProductInfoProps{
  plant: Plant | null
}

const ProductInfo: React.FC<ProductInfoProps> = (props) => {

  const formatFeaturesToList = (text: string | undefined): string[] => {
    if (!text) {
      return [];
    }
    const lines = text.split('.');

    const formattedLines = lines
      .filter(line => line.trim() !== '') 
      .map(line => line.trim() + '.');

    return formattedLines;
  }

  const productFeatures = formatFeaturesToList(props.plant?.features)


  const handlePrice = (price: number, discount: number) => {
    return (price * (1 - (discount/100))).toFixed(2);
  }

  return (
    <div className='product-info'>
        <h2>{props.plant?.name}</h2>
        <h3>{props.plant?.subtitle}</h3>
        <div className='product-tags'>
          {props.plant && <LabelTag name={props.plant.label}/>}
          {props.plant && <LabelTag name={props.plant.type}/>}
        </div>
        <div className='product-price'>
          {props.plant?.discountPercentage && props.plant?.discountPercentage > 0 ? (
            <h4>${handlePrice(props.plant.price, props.plant.discountPercentage)}</h4>
          ) : (
            <h4>${props.plant?.price.toFixed(2)}</h4>
          )}
          
          {props.plant?.discountPercentage && props.plant?.discountPercentage > 0 && <h4>${props.plant?.price.toFixed(2)}</h4>}
        </div>
        <button>Check out</button>
        <h5>Features</h5>
        <ul>
          {productFeatures.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <h5>Description</h5>
        <p>{props.plant?.description}</p>
    </div>
  )
}

export default ProductInfo