import './LabelTag.css'

interface LabelTagProps{
    name: string
}

const LabelTag: React.FC<LabelTagProps> = (props) => {
  return (
    <span className='labeltag-container'>{props.name}</span>
  )
}

export default LabelTag