import "./Button.css"

interface Button{
    text: string
}

const Button: React.FC<Button> = (props) => {

  return <button className="button-container">{props.text}</button>
  
}

export default Button