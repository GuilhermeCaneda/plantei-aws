import "./Text.css"

interface Text{
    text: string
}

const Text: React.FC<Text> = (props) => {
    return <p className="text-container">{props.text}</p>
}

export default Text