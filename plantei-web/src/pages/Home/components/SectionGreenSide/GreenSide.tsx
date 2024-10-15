import "./GreenSide.css";
import Text from "@Components/Text/Text";
import Button from "@Components/Button/Button";
import Img1 from "@Assets/homeGreenSide/green-img1.png";
import Img2 from "@Assets/homeGreenSide/green-img2.png";
import IconRectangle from "@Assets/homeGreenSide/icon-rectangle.svg";
import IconArrow from "@Assets/homeGreenSide/icon-arrow.svg"
 
const GreenSide = () => {
  return (
    <section id="green-side">
      <div className="greenside-wrap">
        <div className="greenside-wrap2">
          <div id="left-side">
            <div id="left-side-container">
              <div className="love-nature-text">
                <img src={IconRectangle}></img>
                <p>Love for nature</p>
              </div>
              <h1 id="title">
                Discover Your <span>Green</span> Side
              </h1>
              <Text text="We are your one-stop destination for all things green and growing. Our website offers a wide array of stunning plants, ranging from vibrant flowers  to lush indoor foliage, allowing you to create your very own green oasis. " />
              <Button text="Shop now" />
            </div>
            <img id="left-plant-img" src={Img2}></img>
            <div id="learn-gardening-text">
              <a>Learn Gardening</a>
              <img src={IconArrow}></img>
            </div>
          </div>
          <div id="right-side">
            <img id="img-background" src={Img1}></img>
          </div>
        </div>
      </div>
    </section>
  );
};
 
export default GreenSide;