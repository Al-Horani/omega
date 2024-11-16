


interface Choice {
    goal: string; 
}

const Card : React.FC<Choice> = ({goal}) => {
  return (
    <div className="cr">
        {goal}
    </div>
  )
}

export default Card;
