import "./HomeSteps.css"

import Text from "@Components/Text/Text"
import Button from "@Components/Button/Button"
import HomeStepsCard from "@Pages/Home/components/HomeStepsCard/HomeStepsCard"
import IconWater from "@Assets/homeSteps/icon-water.svg"
import IconSun from "@Assets/homeSteps/icon-sun.svg"
import IconBag from "@Assets/homeSteps/icon-bag.svg"
import Img1 from "@Assets/homeSteps/steps-img1.png"
import Img2 from "@Assets/homeSteps/steps-img2.png"
import Img3 from "@Assets/homeSteps/steps-img3.png"


function HomeSteps() {
  return (
    <section id="steps-to-take-care">
      <div className="section-steps-title">
        <h2>Steps To Take Care Of Your <span>Plants</span></h2>
        <Text text="By following these three steps - proper watering, appropriate sunlight, and providing essential nutrients - you'll be well on your way to maintaining healthy and thriving plants."/>
      </div>
      <ul className="steps-card-container">
        <li>
          <HomeStepsCard title="Watering" description="water your plants when the top inch of soil feels dry to the touch. Avoid overwatering, as it can lead to root  dehydration." icon={IconWater}/>
        </li>
        <li>
          <HomeStepsCard title="Sunlight" description="Most plants need adequate sunlight to thrive. Place your plants in areas that receive the appropriate amount of light for their specific needs" icon={IconSun}/>
        </li>
        <li>
          <HomeStepsCard title="Nutrients and Fertilizing" description="Choose a suitable fertilizer based on the specific needs of your plants, whether it's a balanced or specialized formula." icon={IconBag}/>
        </li>            
      </ul>

      <ul className="steps-photos-container">
        <li>
          <img src={Img1} alt=""></img>
        </li>
        <li>
          <img src={Img2} alt=""></img>
        </li>
        <li id="steps-photo-with-text">
          <div id="steps-photo-container">
            <img src={Img3} alt=""></img>
          </div>
          <Text text="Our website offers a wide array of stunning plants, ranging from vibrant flowers to lush indoor foliage, allowing you to create your very own green oasis. In addition to our extensive plant selection, we also provide gardening kits and fertilizers to equip you with everything you need to nurture your plants and achieve gardening success. But we don't stop there! We believe that knowledge is the key to a thriving garden, so we offer a wealth of information and resources on gardening techniques, plant care tips, and landscaping ideas. Whether you're a seasoned gardener or just starting your green journey, our goal is to inspire and support you every step of the way. Get ready to explore our virtual garden and discover the joys of gardening with us!"/>
          <Button text="See more photos"/>
        </li>
      </ul>

    </section>
  )
}

export default HomeSteps