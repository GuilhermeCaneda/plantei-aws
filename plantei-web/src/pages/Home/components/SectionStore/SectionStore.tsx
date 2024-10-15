import Carousel from "@Pages/Home/components/Carousel/Carousel"
import './SectionStore.css'
import { Plant } from "@Types/Plant"

interface SectionStoreProps{
  plants: Plant[],
  status: string
}

const SectionStore: React.FC<SectionStoreProps> = (props) => {
  const plantsInSale: Plant[] = props.plants.filter((item) => item.isInSale);

  return (
    <section className="section-store-container">
        <h2>This Weeks Most Popular <span>And Best Selling</span></h2>
        <Carousel promo={false} plants={props.plants} status={props.status}/>

        <h2>Plants <span>In Sale</span></h2>
        <Carousel promo={true} plants={plantsInSale} status={props.status}/>
    </section>
  )
}

export default SectionStore