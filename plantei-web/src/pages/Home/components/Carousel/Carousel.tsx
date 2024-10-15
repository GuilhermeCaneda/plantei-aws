import "./Carousel.css"
import HomeCard from '@Components/HomeCard/HomeCard'

// @ts-expect-error A biblioteca SplideJS apresenta erro por conta do Typescript, mas funciona normalmente
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css'; 
import { Plant } from "@Types/Plant";
interface CarouselProps{
  plants: Plant[],
  promo: boolean,
  status: string
}

const Carousel: React.FC<CarouselProps> = (props) => {
  return (
    <div className="carousel-container">
      <div className="carousel-content">

        {props.plants.length > 0 ? (
          <Splide
          options={{
            perPage: 4, 
            perMove: 1,
            pagination: false, 
            gap: '4.8rem',
            arrows: true,
            autoWidth: true,
            focus    : 0,
            omitEnd  : true,
            breakpoints: {
              1200: {
                focus: 'center'
              }
            },
          }}
        >
          {props.plants.map((item, index) => (
            <SplideSlide key={index}>
              <HomeCard 
                key={item._id}
                id={item._id}
                name={item.name} 
                price={item.price} 
                discount={item.discountPercentage}
                label={item.label} 
                type={item.type} 
              />
            </SplideSlide>
          ))}
        </Splide>
        ) : <p>{props.status}</p>}

      </div>
    </div>
  )
}

export default Carousel