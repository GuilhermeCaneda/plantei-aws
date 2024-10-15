import "./HomeStepsCard.css"
import Text from "@Components/Text/Text"

interface HomeStepsCard{
  title: string,
  description: string
  icon: string
}

const HomeStepsCard: React.FC<HomeStepsCard> = (props) => {
  return(
    <div className="home-steps-card">
      <div className="home-steps-img-container">
        <img src={props.icon} alt=""/>
      </div>
      <h4>{props.title}</h4>
      <Text text={props.description}/>
    </div>
  )

}

export default HomeStepsCard